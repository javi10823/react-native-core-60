import { View, SafeAreaView } from 'react-native';
import styled from 'styled-components';
import Colors from '../../utils/colors';
import { responsiveSize } from '../../utils/dimensions';
import button from '../../components/button';

export const Container = styled(SafeAreaView)({
  flex: 1,
  backgroundColor: Colors.global.principal,
  justifyContent: 'center',
  alignItems: 'center',
  ...props => props.style,
});

export const TextContainer = styled(View)({
  paddingHorizontal: responsiveSize(50),
  marginBottom: responsiveSize(80),
  ...props => props.style,
});

export const Button = styled(button)({
  width: '85%',
  ...props => props.style,
});
