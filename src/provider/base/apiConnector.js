// @flow

import Logger from './logger';

const logger = new Logger('api-connector');
const Methods = {
  HEAD: 'HEAD',
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
};
let _defaultHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

const Errors = {
  NO_CONNECTION: '000',
  NO_CONNECTION_MSG: 'Network request failed',

  TIMEOUT: '001',
  TIMEOUT_MSG: 'Request Timeout',

  SERVER_ERROR: '503',
  SERVER_ERROR_MSG: 'Internal Server Error',

  REQUEST_ENTITY_TOO_LARGE: 413,
  REQUEST_ENTITY_TOO_LARGE_MSG: 'Request entity too large',

  UNAUTHORIZED_ERROR: '401',
  UNAUTHORIZED_ERROR_MSG: 'Unauthorized',

  ID_DUPLICATED: 400,
  ID_DUPLICATED_MSG: 'Duplicate Name',
};

function _Error({ code, message }: { code: number | string, message: string }) {
  this.code = code;
  this.message = message || 'Default Message';
}
_Error.prototype = Object.create(Error.prototype);
_Error.prototype.constructor = _Error;

export default class APIConnector {
  _fetch: Function;

  _defaultHeaders: Object;

  _timeout: number;

  _requestUpload: Function;

  constructor(options: Object = {}) {
    const { timeout = 0 } = options;

    this._fetch = fetch;

    this._defaultHeaders = APIConnector.defaultHeaders;
    if (timeout) this._timeout = timeout;
  }

  static get defaultHeaders(): Object {
    return _defaultHeaders;
  }

  static set defaultHeaders(value: Object) {
    _defaultHeaders = value;
  }

  static get Methods(): Object {
    return Methods;
  }

  static get Errors(): Object {
    return Errors;
  }

  head(uri: string, args: Object = {}): Function {
    return this._request(uri, { ...args, method: Methods.HEAD });
  }

  get(uri: string, args: Object = {}): Function {
    return this._request(uri, { ...args, method: Methods.GET });
  }

  post(uri: string, args: Object = {}): Function {
    return this._request(uri, { ...args, method: Methods.POST });
  }

  put(uri: string, args: Object = {}): Function {
    return this._request(uri, { ...args, method: Methods.PUT });
  }

  patch(uri: string, args: Object = {}): Function {
    return this._request(uri, { ...args, method: Methods.PATCH });
  }

  delete(uri: string, args: Object = {}): Function {
    return this._request(uri, { ...args, method: Methods.DELETE });
  }

  _request(uri: string, args: Object = {}): Function {
    const { method, headers = {}, body, emptyResponse, uploadFormData } = args;
    let { checkResponseCode } = args;

    if (!uri || uri instanceof String)
      return logger.error(`No valid uri given for method ${method}`) && this;

    const options = {};
    options.method = method;
    options.headers = { ...this._defaultHeaders, ...headers };
    if (body) options.body = body;

    const time = +new Date();
    const bodyLog = options.body ? ` & body: ${JSON.stringify(options.body).substr(0, 80)}...` : '';
    logger.info(
      `request ${options.method}: ${uri} sent, headers: ${JSON.stringify(
        options.headers,
      )}${bodyLog}`,
    );

    if (uploadFormData) {
      return this._requestUpload(uri, options, uploadFormData);
    }
    return new Promise((resolve: Function, reject: Function) => {
      const request = fetch(uri, options);
      let timeoutReached = false;
      let requestDone = false;

      if (this._timeout) {
        setTimeout(() => {
          if (requestDone) return;
          timeoutReached = true;
          const err: Object = new TypeError(Errors.TIMEOUT_MSG);
          err.code = Errors.TIMEOUT;
          logger.info(`request ${method}: ${uri} timeout after ${+new Date() - time}ms`);
          reject(err);
        }, this._timeout);
      }

      request.then((response: Function) => {
        requestDone = true;
        if (timeoutReached) return;
        logger.info(`request ${method}: ${uri} completed, took: ${+new Date() - time}ms`);

        if (!response.ok && response.status === 503) {
          reject(new _Error({ code: 503, message: Errors.SERVER_ERROR_MSG }));
        }

        if (response && (response.status === 500 || response.status === 404)) {
          checkResponseCode = true;
          if (
            checkResponseCode &&
            response._bodyInit &&
            response._bodyInit.indexOf('"code":') !== -1
          ) {
            reject(response.json());
          } else {
            reject(new _Error({ code: 500, message: Errors.SERVER_ERROR_MSG }));
          }
        }

        if (response.status === 413) {
          reject(
            new _Error({
              code: Errors.REQUEST_ENTITY_TOO_LARGE,
              message: Errors.REQUEST_ENTITY_TOO_LARGE_MSG,
            }),
          );
        }

        if (emptyResponse && response.status === 200) {
          resolve({});
        }

        if (response.status === 400) {
          reject(
            new _Error({
              code: Errors.ID_DUPLICATED,
              message: Errors.ID_DUPLICATED_MSG,
            }),
          );
        }

        if (response.status === 401) {
          reject(
            new _Error({
              code: Errors.UNAUTHORIZED_ERROR,
              message: Errors.UNAUTHORIZED_ERROR_MSG,
            }),
          );
        }
        if (response.status === 204) {
          resolve({});
        } else {
          resolve(response.json());
        }
      });

      request.catch((err: Object) => {
        requestDone = true;
        if (timeoutReached) return;
        logger.error(
          `request ${method}: ${uri} raised error: ${err}, took ${+new Date() - time}ms`,
        );
        if (err.message === Errors.NO_CONNECTION_MSG) {
          err.code = Errors.NO_CONNECTION;
        }
        reject(err);
      });
    });
  }

  static _requestUpload(uri: string, options: Object, uploadFormData: FormData): * {
    const formData = uploadFormData;
    const time = +new Date();

    return new Promise((resolve: Function, reject: Function) => {
      const xhr = new XMLHttpRequest();
      xhr.open(options.method, uri);

      if (options.headers['X-Session'])
        xhr.setRequestHeader('X-Session', options.headers['X-Session']);
      xhr.setRequestHeader('X-ApiKey', options.headers['X-ApiKey']);
      xhr.setRequestHeader('X-RequestId', options.headers['X-RequestId']);
      xhr.setRequestHeader('X-TrackingId', options.headers['X-TrackingId']);
      xhr.onload = () => {
        logger.info(`request ${options.method}: ${uri} completed, took: ${+new Date() - time}ms`);
        if (xhr.status !== 200) {
          reject(new _Error({ code: xhr.status, message: xhr.responseText }));
        }
        if (!xhr.responseText) {
          console.log('Upload failed No response payload.'); // eslint-disable-line no-console
          reject(new _Error({ code: 500, message: xhr.responseText }));
        }
        const index = xhr.responseText.indexOf('arcor.com');
        if (index !== -1) {
          reject(new _Error({ code: 500, message: xhr.responseText }));
        }
        resolve(xhr.responseText);
      };
      xhr.send(formData);
    });
  }
}
