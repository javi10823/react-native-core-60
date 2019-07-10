// @flow

import styled from 'styled-components';
import { responsiveSize } from '../../utils/dimensions';
import colors from '../../utils/colors';

export const Placeholder = styled.View(
  (props: Object): Object => ({
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.backgroundPrincipal(props),
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 10,
    zIndex: props.loaded ? -1 : 1,
    ...props.style,
  }),
);

export const Image = styled.Image(
  (props: Object): Object => ({
    width: responsiveSize(100),
    height: responsiveSize(100),
    ...props.style,
  }),
);
