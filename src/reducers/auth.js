import { LOGIN_WITH_ERROR, LOGOUT_WITH_ERROR, ERASE_ALL_DATA_IN_STORE } from '../actions/types';

const initialState = {
  loginError: null,
  logoutError: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_WITH_ERROR:
      return Object.assign({}, state, { loginError: action.error });
    case LOGOUT_WITH_ERROR:
      return Object.assign({}, state, { logoutError: action.error });

    case ERASE_ALL_DATA_IN_STORE:
      return initialState;
    default:
      return state;
  }
};
