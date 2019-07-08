// @flow

import { Dimensions, Platform, PixelRatio } from 'react-native';
import { REF_RATIO } from './responsive';

const { height, width } = Dimensions.get('window');

export const SCREEN_HEIGHT = height;
export const SCREEN_WIDTH = width;

// based on iphone 5s's scale
const scale = width / 320;

export function normalize(size: number | typeof undefined): number {
  // eslint-disable-next-line no-param-reassign
  if (!size) size = 11;
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }

  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
}

export const iPhoneSE = (): boolean => height < 570;

export function responsiveSize(value: number | typeof undefined): number {
  return value ? Math.round(value * REF_RATIO) : 0;
}

export function responsiveSizePlatForm(iphoneSize: number, androidSize: number): number {
  return Platform.OS === 'ios' ? responsiveSize(iphoneSize) : responsiveSize(androidSize);
}
