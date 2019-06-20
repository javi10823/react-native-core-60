// @flow

import styled from 'styled-components';
import Colors from '../../utils/colors';
import { responsiveSize } from '../../utils/dimensions';
import button from '../../components/button';

export const _Container = styled.SafeAreaView({
  flex: 1,
  backgroundColor: Colors.global.principal,
  justifyContent: 'center',
  alignItems: 'center',
});

export const _TextContainer = styled.View({
  paddingHorizontal: responsiveSize(50),
  marginBottom: responsiveSize(80),
});

export const _Button = styled(button)({
  width: '85%',
});
