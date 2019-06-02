import { responsiveSize } from '../../utils/dimensions';

export default {
  button: {
    paddingTop: responsiveSize(5),
    paddingBottom: responsiveSize(5),
    borderRadius: responsiveSize(8),
    height: responsiveSize(55),
    justifyContent: 'center',
  },
  label: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '400',
  },
};
