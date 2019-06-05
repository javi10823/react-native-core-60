import { View, TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components';
import { responsiveSize } from '../../utils/dimensions';

export const Button = styled(TouchableOpacity)(props => ({
  flexDirection: 'row',
  justifyContent: 'center',
  paddingTop: 5,
  paddingBottom: 5,
  borderRadius: 8,
  height: 55,
  alignItems: 'center',
  position: 'relative',
  ...props.style,
}));

export const ButtonContent = styled(View)(props => ({
  flexDirection: 'row',
  justifyContent: 'center',
  paddingTop: responsiveSize(5),
  paddingBottom: responsiveSize(5),
  borderRadius: responsiveSize(8),
  height: responsiveSize(55),
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  ...props.style,
}));

export const Label = styled(Text)(props => ({
  textAlign: 'center',
  fontSize: 15,
  fontWeight: '400',
  ...props.style,
}));

export const Icon = styled(View)(props => ({
  paddingTop: responsiveSize(10),
  paddingBottom: responsiveSize(10),
  marginRight: responsiveSize(20),
  ...props.style,
}));

export const TextContainer = styled(View)(props => ({
  paddingHorizontal: responsiveSize(40),
  ...props.style,
}));

export const SpinnerContainer = styled(View)(props => ({
  height: responsiveSize(55),
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  ...props.style,
}));

export const IconRight = styled(View)(props => ({
  paddingTop: responsiveSize(10),
  paddingBottom: responsiveSize(10),
  marginLeft: responsiveSize(32),
  ...props.style,
}));
