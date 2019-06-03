import { responsiveSize } from '../../utils/dimensions';

export default {
  xThin: { name: 'xThin', value: responsiveSize(0.5) },
  thin: { name: 'thin', value: responsiveSize(4) },
  semiThin: { name: 'semiThin', value: responsiveSize(8) },
  default: { name: 'default', value: responsiveSize(12) },
  thick: { name: 'thick', value: responsiveSize(16) },
  extraThick: { name: 'extraThick', value: responsiveSize(24) },
  large: { name: 'large', value: responsiveSize(32) },
  extraLarge: { name: 'extraLarge', value: responsiveSize(40) },
};
