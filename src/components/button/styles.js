import { View, TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components';
import { responsiveSize } from '../../utils/dimensions';

export const Button = styled(TouchableOpacity)({
  flexDirection: 'row',
  justifyContent: 'center',
  paddingTop: 5,
  paddingBottom: 5,
  borderRadius: 8,
  height: 55,
  alignItems: 'center',
  position: 'relative',
  ...props => props.style,
});

export const ButtonContent = styled(View)({
  flexDirection: 'row',
  justifyContent: 'center',
  paddingTop: responsiveSize(5),
  paddingBottom: responsiveSize(5),
  borderRadius: responsiveSize(8),
  height: responsiveSize(55),
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  ...props => props.style,
});

export const Label = styled(Text)({
  textAlign: 'center',
  fontSize: 15,
  fontWeight: '400',
  ...props => props.style,
});

export const Icon = styled(View)({
  paddingTop: responsiveSize(10),
  paddingBottom: responsiveSize(10),
  marginRight: responsiveSize(20),
  ...props => props.style,
});

export const TextContainer = styled(View)({
  paddingHorizontal: responsiveSize(40),
  ...props => props.style,
});

export const SpinnerContainer = styled(View)({
  height: responsiveSize(55),
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  ...props => props.style,
});

export const IconRight = styled(View)({
  paddingTop: responsiveSize(10),
  paddingBottom: responsiveSize(10),
  marginLeft: responsiveSize(32),
  ...props => props.style,
});
