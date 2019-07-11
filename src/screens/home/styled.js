// @flow

import styled from 'styled-components';
import { responsiveSize } from '../../utils/dimensions';
import { Button as button } from '../../components';
import colors from '../../utils/colors';

export const Container = styled.View(
  (props: Object): Object => ({
    flex: 1,
    backgroundColor: colors.backgroundPrincipal(),
    justifyContent: 'center',
    alignItems: 'center',
    ...props.style,
  }),
);

export const TextContainer = styled.View(
  (props: Object): Object => ({
    paddingHorizontal: responsiveSize(50),
    marginBottom: responsiveSize(20),
    marginTop: responsiveSize(20),
    ...props.style,
  }),
);

export const Button = styled(button)(
  (props: Object): Object => ({
    width: '85%',
    ...props.style,
  }),
);
