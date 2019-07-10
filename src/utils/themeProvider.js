// @flow

import * as React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import store from '../store';
import { MODE } from './constants';
import { SELECT_THEME } from '../actions/types';

export default (name: string, Screen: *): * => {
  Navigation.registerComponent(
    name,
    (): * => (props: *): * => {
      const [themeSelected, setTheme] = React.useState(store.getState().theme.themeSelected);
      const _setTheme = async (_themeSelected: string): Function => {
        await store.dispatch({ type: SELECT_THEME, payload: _themeSelected });
        setTheme(store.getState().theme.themeSelected);
      };

      return (
        <Provider store={store}>
          <ThemeProvider theme={{ [MODE]: themeSelected }}>
            <Screen setTheme={_setTheme} theme={{ theme: { [MODE]: themeSelected } }} {...props} />
          </ThemeProvider>
        </Provider>
      );
    },
    (): * => Screen,
  );
};
