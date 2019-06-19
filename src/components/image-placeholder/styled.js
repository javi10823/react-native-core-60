// @flow

import styled from 'styled-components';

type Props = {|
  style: Object,
|};

export const _Placeholder = styled.View(
  (props: Props): Object => ({
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EFEFF4',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 10,
    ...props.style,
  }),
);
