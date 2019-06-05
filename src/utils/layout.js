import { Dimensions, Platform, StatusBar } from 'react-native';

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
};
