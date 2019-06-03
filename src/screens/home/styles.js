import { StyleSheet } from 'react-native';
import { responsiveSize } from '../../utils/dimensions';
import Colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.global.principal,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    paddingHorizontal: responsiveSize(50),
    marginBottom: responsiveSize(80),
  },
  button: {
    width: '85%',
  },
});

export default styles;
