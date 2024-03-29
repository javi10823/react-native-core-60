// @flow

import styled from 'styled-components';
import colors from '../../utils/colors';

export const Container = styled.View(
  (props: Object): Object => ({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundPrincipal(),
    ...props.style,
  }),
);
