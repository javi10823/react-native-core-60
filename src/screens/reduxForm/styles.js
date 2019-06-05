import { View, Text as text } from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  ...props => props.style,
});

export const Text = styled(text)({
  fontSize: 40,
  color: 'black',
  ...props => props.style,
});
