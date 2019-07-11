// @flow

import styled from 'styled-components';
import colors from '../../../utils/colors';
// ────────────────────────────────────

export const Container = styled.View({
  flex: 1,
  backgroundColor: colors.primary(),
});

export const SubContainer = styled.SafeAreaView({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});
