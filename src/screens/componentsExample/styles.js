import { StyleSheet } from 'react-native';
import { responsiveSize } from '../../utils/dimensions';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.principal,
    justifyContent: 'center',
    alignItems: 'center',
  },
  componentsContainer: {
    paddingHorizontal: responsiveSize(50),
    marginBottom: responsiveSize(10),
  },
  buttonSignIn: {
    borderColor: colors.white,
    borderWidth: 2,
    backgroundColor: 'transparent',
    borderRadius: 5,
    width: '100%',
  },
  buttonSignUp: {
    backgroundColor: colors.white,
    width: '100%',
    borderRadius: 5,
  },
  logoContainer: {
    padding: responsiveSize(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
  },
  imageContainer: {
    padding: responsiveSize(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: responsiveSize(220),
    height: responsiveSize(155),
    borderRadius: 13,
  },
});

export default styles;
