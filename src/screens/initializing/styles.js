import { View } from 'react-native';
import styled from 'styled-components';
import colors from '../../utils/colors';

export const Container = styled(View)({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: colors.white,
  ...props => props.style,
});
