// @flow

import styled from 'styled-components';
import { responsiveSize } from '../../../utils/dimensions';

export const Container = styled.View({
  flexDirection: 'row',
  height: responsiveSize(75),
  width: '100%',
  justifyContent: 'flex-start',
  alignItems: 'flex-end',
});
