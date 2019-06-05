import { View, SafeAreaView } from 'react-native';
import styled from 'styled-components';
import Colors from '../../utils/colors';
import { responsiveSize } from '../../utils/dimensions';

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

export const Button = styled(View)(props => ({
  width: '85%',
  ...props.style,
}));
