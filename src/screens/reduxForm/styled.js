// @flow

import styled from 'styled-components';
import { responsiveSize } from '../../utils/dimensions';

type Props = {|
  style: Object,
|};

export const _Container = styled.SafeAreaView(
  (props: Props): Object => ({
    flex: 1,
    backgroundColor: '#04404480',
    ...props.style,
  }),
);

export const _Content = styled.View(
  (props: Props): Object => ({
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: responsiveSize(20),
    ...props.style,
  }),
);
