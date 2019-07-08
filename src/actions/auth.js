// @flow

import AsyncStorage from '@react-native-community/async-storage';
import { USER_TOKEN } from '../../config';
import {
  LOGIN_WITH_ERROR,
  LOGOUT_WITH_ERROR,
  ERASE_ALL_DATA_IN_STORE,
  CREATE_NEW_USER_ERROR,
} from './types';
import { waitOneSecond } from '../utils/seconds';
import AuthenticationService from '../provider/auth/authService';

export function logIn(): Function {
  return async (dispatch: *): * => {
    try {
      await waitOneSecond(); // only for demo
      await AsyncStorage.setItem(USER_TOKEN, 'Logged user!');
    } catch (err) {
      dispatch({ type: LOGIN_WITH_ERROR, error: err });
    }
  };
}

export function logOut(): Function {
  return async (dispatch: *): * => {
    try {
      await waitOneSecond(); // only for demo
      await AsyncStorage.removeItem(USER_TOKEN);
      dispatch({ type: ERASE_ALL_DATA_IN_STORE });
    } catch (err) {
      dispatch({ type: LOGOUT_WITH_ERROR, error: err });
    }
  };
}

export function sigUpUser({
  email = 'UNDEFINED',
  contrasena = 'UNDEFINED',
}: {
  email: string,
  contrasena: string,
}): Function {
  return async (dispatch: Function): * => {
    try {
      const response = await AuthenticationService.sigUpUser({
        email,
        contrasena,
      });

      if (response.error) dispatch({ type: CREATE_NEW_USER_ERROR, error: response.error });
      else dispatch({ type: CREATE_NEW_USER_ERROR, error: null });
    } catch (err) {
      dispatch({ type: CREATE_NEW_USER_ERROR, error: err });
    }
  };
}
