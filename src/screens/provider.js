// @flow

import * as React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import store from '../store';
import { SELECT_THEME } from '../actions/types';

export default (name: string, Screen: *): * => {
  Navigation.registerComponent(
    name,
    (): * => (props: *): * => {
      const _setTheme = (_themeSelected: string): Function =>
        store.dispatch({ type: SELECT_THEME, payload: _themeSelected });
      return (
        <Provider store={store}>
          <Screen setTheme={_setTheme} {...props} />
        </Provider>
      );
    },
    (): * => Screen,
  );
};
