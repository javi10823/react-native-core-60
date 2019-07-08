// @flow

import styled from 'styled-components';
import { responsiveSize } from '../../utils/dimensions';
import colors from '../../utils/colors';
// ──────────────────────────────────────────

export const Container = styled.SafeAreaView({
  flex: 1,
  backgroundColor: colors.global.principal,
});

export const Content = styled.View({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: responsiveSize(20),
});
