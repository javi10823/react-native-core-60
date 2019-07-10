// @flow

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth';
import theme from './theme';

const rootReducer = combineReducers({
  auth,
  theme,
  form: formReducer,
});

export default rootReducer;
