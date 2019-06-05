import { View } from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)(props => ({
  backgroundColor: '#00000080',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  ...props.style,
}));
