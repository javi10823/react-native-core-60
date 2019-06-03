import AsyncStorage from '@react-native-community/async-storage';
import { USER_TOKEN } from '../../config';
import { LOGIN_WITH_ERROR, LOGOUT_WITH_ERROR } from './types';
import { waitOneSecond } from '../utils/seconds';

export function logIn() {
  return async dispatch => {
    try {
      await waitOneSecond(); // only for demo
      await AsyncStorage.setItem(USER_TOKEN, 'Logged user!');
    } catch (err) {
      dispatch({ type: LOGIN_WITH_ERROR, error: err });
    }
  };
}

export function logOut() {
  return async dispatch => {
    try {
      await waitOneSecond(); // only for demo
      await AsyncStorage.removeItem(USER_TOKEN);
    } catch (err) {
      dispatch({ type: LOGOUT_WITH_ERROR, error: err });
    }
  };
}
