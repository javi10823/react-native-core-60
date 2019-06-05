import { View, SafeAreaView } from 'react-native';
import styled from 'styled-components';
import { responsiveSize } from '../../utils/dimensions';
import colors from '../../utils/colors';
// ──────────────────────────────────────────
import Button from '../../components/button';
import ImagePlaceholder from '../../components/image-placeholder';

export const Container = styled(SafeAreaView)(props => ({
  flex: 1,
  backgroundColor: colors.global.principal,
  justifyContent: 'center',
  alignItems: 'center',
  ...props.style,
}));

export const ComponentsContainer = styled(View)(props => ({
  paddingHorizontal: responsiveSize(50),
  marginBottom: responsiveSize(10),
  ...props.style,
}));

export const ButtonSignIn = styled(Button)(props => ({
  borderColor: colors.global.white,
  borderWidth: 2,
  backgroundColor: 'transparent',
  borderRadius: 5,
  width: '100%',
  ...props.style,
}));

export const ButtonSignUp = styled(Button)(props => ({
  borderColor: colors.global.white,
  backgroundColor: colors.global.white,
  width: '100%',
  borderRadius: 5,
  ...props.style,
}));

export const LogoContainer = styled(View)(props => ({
  padding: responsiveSize(20),
  justifyContent: 'center',
  alignItems: 'center',
  ...props.style,
}));

export const Logo = styled(View)(props => ({
  width: '100%',
  ...props.style,
}));

export const ImageContainer = styled(View)(props => ({
  padding: responsiveSize(20),
  justifyContent: 'center',
  alignItems: 'center',
  ...props.style,
}));

export const ImageStyle = styled(ImagePlaceholder)(props => ({
  width: responsiveSize(220),
  height: responsiveSize(155),
  borderRadius: 13,
  ...props.style,
}));
