// @flow

import styled from 'styled-components';
import colors from '../../utils/colors';

type Props = {|
  style: Object,
|};

export const _Container = styled.View(
  (props: Props): Object => ({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    ...props.style,
  }),
);
