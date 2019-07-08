// @flow

import {
  LOGIN_WITH_ERROR,
  LOGOUT_WITH_ERROR,
  ERASE_ALL_DATA_IN_STORE,
  CREATE_NEW_USER_ERROR,
} from '../actions/types';

const initialState = {
  loginError: null,
  logoutError: null,
  createNewUserError: null,
};

export default (state: Object = initialState, action: Object): Object => {
  switch (action.type) {
    case LOGIN_WITH_ERROR:
      return Object.assign({}, state, { loginError: action.error });
    case LOGOUT_WITH_ERROR:
      return Object.assign({}, state, { logoutError: action.error });
    case CREATE_NEW_USER_ERROR:
      return Object.assign({}, state, { createNewUserError: action.error });

    case ERASE_ALL_DATA_IN_STORE:
      return initialState;
    default:
      return state;
  }
};
