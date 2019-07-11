// @flow

import styled from 'styled-components';
import colors from '../../utils/colors';

export const Container = styled.SafeAreaView(
  (props: Object): Object => ({
    backgroundColor: colors.opacity(),
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    ...props.style,
  }),
);
