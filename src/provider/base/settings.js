// @flow

import { URL_API } from '../../../config';

const _env = 'LC';
class Settings {
  static get apiRestEndpoint(): string {
    switch (_env) {
      case 'PROD':
        return '';
      case 'ST':
        return '';
      case 'DV':
        return '';
      case 'LC':
        return URL_API;
      default:
        return URL_API;
    }
  }

  static get environment(): string {
    return _env;
  }
}

module.exports = Settings;
