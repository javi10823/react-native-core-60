import { View, SafeAreaView } from 'react-native';
import styled from 'styled-components';
import { responsiveSize } from '../../utils/dimensions';

export const Container = styled(SafeAreaView)({
  flex: 1,
  backgroundColor: '#04404480',
  ...props => props.style,
});

export const Content = styled(View)({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: responsiveSize(20),
  ...props => props.style,
});
