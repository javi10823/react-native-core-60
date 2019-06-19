// @flow

import ServiceConfig from './ExampleConfig';

export default class AppService {
  static getExample(): Function {
    return new Promise(async (resolve: Function, reject: Function) => {
      try {
        const endpoint = ServiceConfig.getExample;
        const response = await ServiceConfig.APIConnector.get(endpoint, {});

        if (response.code) {
          reject(response);
        } else {
          resolve(response);
        }
      } catch (error) {
        reject(error);
      }
    });
  }
}
