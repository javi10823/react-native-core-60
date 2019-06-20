// @flow
import { Settings, APIConnector } from '../base';

const apiConnector = new APIConnector({ timeout: 50000 });

export default class ServiceConfig {
  static get endpoint(): string {
    return `${Settings.apiRestEndpoint}`;
  }

  static get getExample(): string {
    return `${ServiceConfig.endpoint}/endpointExample`;
  }

  static get APIConnector(): * {
    return apiConnector;
  }
}
