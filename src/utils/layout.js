import { Dimensions, Platform, StatusBar } from 'react-native';

import { responsiveSize } from './dimensions';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const isIPhoneX = [
  Platform.OS === 'ios',
  !Platform.isPad,
  !Platform.isTVOS,
  (width === 375 && height === 812) || (width === 414 && height === 896),
].every(Boolean);

export function getStatusBarHeight() {
  return Platform.select({
    ios: isIPhoneX ? 44 : 20,
    android: StatusBar.currentHeight,
    default: 0,
  });
}

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
  spacing: {
    xThin: responsiveSize(2),
    thin: responsiveSize(4),
    semiThin: responsiveSize(8),
    default: responsiveSize(16),
    thick: responsiveSize(24),
    extraThick: responsiveSize(32),
    large: responsiveSize(64),
    extraLarge: responsiveSize(128),
  },
};
