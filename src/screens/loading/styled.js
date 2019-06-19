// @flow

import styled from 'styled-components';

type Props = {|
  style: Object,
|};

export const _Container = styled.SafeAreaView(
  (props: Props): Object => ({
    backgroundColor: '#00000080',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    ...props.style,
  }),
);
