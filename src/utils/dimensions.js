// @flow

import { Dimensions, Platform, PixelRatio } from 'react-native';
import { REF_RATIO } from './responsive';

const { height, width } = Dimensions.get('window');

export const H = height;
export const W = width;

// based on iphone 5s's scale
const scale = width / 320;

export function normalize(size: number): number {
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
