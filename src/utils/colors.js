// @flow

import theme from 'styled-theming';
import { MODE, LIGHT, DARK } from './constants';

const getThemeColor = (lightColor: string, darkColor: string, props: *): * => {
  // eslint-disable-next-line no-param-reassign
  if (props === DARK || props === LIGHT) props = { theme: { [MODE]: props } };
  return theme(MODE, { [LIGHT]: lightColor, [DARK]: darkColor })(props);
};

// ────────── ↓↓↓↓ only colors in hex and get the name from "chir.ag/projects/name-that-color"  ↓↓↓↓ ──────────
// prettier-ignore
export default {                                      // LIGHT      DARK
  backgroundPrincipal:  (props: *): * => getThemeColor('#E0E0E0', '#424242', props),
  primary:              (props: *): * => getThemeColor('#4DD0E1', '#00796B', props),
  secondary:            (props: *): * => getThemeColor('#212121', '#FAFAFA', props),
  // ─────────────────────────────────────────────────────────────────────────────────────────────────
  primaryText:          (props: *): * => getThemeColor('#424242', '#eeeeee', props),
  errorText:            (props: *): * => getThemeColor('#DD2C00', '#DD2C00', props),
  warningText:          (props: *): * => getThemeColor('#FFCA28', '#FFCA28', props),
  // ─────────────────────────────────────────────────────────────────────────────────────────────────
  error:                (props: *): * => getThemeColor('#DD2C00', '#DD2C00', props),
  warning:              (props: *): * => getThemeColor('#FFCA28', '#FFCA28', props),
  // ─────────────────────────────────────────────────────────────────────────────────────────────────
  inactive:             (props: *): * => getThemeColor('#ffffff20', '#00000020', props),
  opacity:              (props: *): * => getThemeColor('#ffffff80', '#00000080', props),
  //
  transparent: 'transparent', // exception
};
