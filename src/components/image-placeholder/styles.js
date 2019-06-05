import { View } from 'react-native';
import styled from 'styled-components';

export const Placeholder = styled(View)(props => ({
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#EFEFF4',
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  borderRadius: 10,
  ...props.style,
}));
