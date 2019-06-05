import { View, SafeAreaView, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { responsiveSize } from '../../utils/dimensions';
import Colors from '../../utils/colors';
// ────────────────────────────────────
import button from '../../components/button';

export const Container = styled(SafeAreaView)(props => ({
  flex: 1,
  backgroundColor: Colors.global.principal,
  justifyContent: 'center',
  alignItems: 'center',
  ...props.style,
}));

export const TextContainer = styled(View)(props => ({
  paddingHorizontal: responsiveSize(50),
  marginBottom: responsiveSize(80),
  ...props.style,
}));

export const Button = styled(button)(props => ({
  width: '85%',
  ...props.style,
}));

export const LogoContainer = styled(TouchableOpacity)(props => ({
  width: '100%',
  paddingHorizontal: responsiveSize(70),
  paddingBottom: responsiveSize(30),
  justifyContent: 'center',
  alignItems: 'center',
  ...props.style,
}));
