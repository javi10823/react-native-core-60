// @flow

import styled from 'styled-components';
import { responsiveSize } from '../../utils/dimensions';
import colors from '../../utils/colors';
// ──────────────────────────────────────────

export const Container = styled.SafeAreaView(
  (props: Object): Object => ({
    flex: 1,
    backgroundColor: colors.backgroundPrincipal(),
    ...props.style,
  }),
);

export const Content = styled.View(
  (props: Object): Object => ({
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: responsiveSize(20),
    ...props.style,
  }),
);
