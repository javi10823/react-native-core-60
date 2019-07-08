// @flow

import styled from 'styled-components';
import Colors from '../../utils/colors';
import { responsiveSize } from '../../utils/dimensions';
import button from '../../components/button';

export const Container = styled.SafeAreaView({
  flex: 1,
  backgroundColor: Colors.global.principal,
  justifyContent: 'center',
  alignItems: 'center',
});

export const TextContainer = styled.View({
  paddingHorizontal: responsiveSize(50),
  marginBottom: responsiveSize(80),
});

export const Button = styled(button)({
  width: '85%',
});
