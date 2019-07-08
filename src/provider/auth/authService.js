// @flow

import AuthConfig from './authConfig';

export default class AuthenticationService {
  static sigUpUser({
    email,
    contrasena,
  }: {
    email: string,
    contrasena: string,
  }): Promise<Object | string> {
    return new Promise(async (resolve: Function, reject: Function) => {
      try {
        const body = {
          email,
          contrasena,
        };
        if (email === 'UNDEFINED') delete body.email;
        if (contrasena === 'UNDEFINED') delete body.contrasena;

        const endpoint = AuthConfig.sigUpUser;
        const response = await AuthConfig.APIConnector.post(endpoint, {
          body: JSON.stringify(body),
        });

        if (response.error) reject(response.error);
        else resolve(response);
      } catch (error) {
        console.log(`\n\n`, 'sigUpUser - error', error, `\n\n\n`);
        reject(error);
      }
    });
  }
}
