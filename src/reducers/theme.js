// @flow

import { SELECT_THEME, ERASE_ALL_DATA_IN_STORE } from '../actions/types';
import { DEFAULT_THEME_COLOR } from '../../config';

const initialState = {
  themeSelected: DEFAULT_THEME_COLOR,
};

export default (state: Object = initialState, action: Object): Object => {
  switch (action.type) {
    case SELECT_THEME: {
      console.log(`\n\n`, 'themeSelected - action.payload', action.payload, `\n\n\n`);
      return Object.assign({}, state, { themeSelected: action.payload });
    }

    case ERASE_ALL_DATA_IN_STORE:
      return initialState;
    default:
      return state;
  }
};
