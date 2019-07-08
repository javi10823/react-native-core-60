// @flow

import { Settings, APIConnector } from '../base';

const apiConnector = new APIConnector({ timeout: 50000 });

export default class AuthConfig {
  static get endpoint(): string {
    return `${Settings.apiRestEndpoint}`;
  }

  static get sigUpUser(): string {
    return `${AuthConfig.endpoint}/registrarse.php`;
  }

  static get APIConnector(): APIConnector {
    return apiConnector;
  }
}
