// @flow

import styled from 'styled-components';
import { responsiveSize } from '../../utils/dimensions';

export const _Container = styled.SafeAreaView({
  flex: 1,
  backgroundColor: '#04404480',
});

export const _Content = styled.View({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: responsiveSize(20),
});
