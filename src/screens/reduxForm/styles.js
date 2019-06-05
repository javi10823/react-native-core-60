import { View, Text as text } from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)(props => ({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  ...props.style,
}));

export const Text = styled(text)(props => ({
  fontSize: 40,
  color: 'black',
  ...props.style,
}));
