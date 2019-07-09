// @flow

import styled from 'styled-components';
import { responsiveSize, normalize } from '../../utils/dimensions';

export const Button = styled.TouchableOpacity({
  flexDirection: 'row',
  justifyContent: 'center',
  paddingTop: responsiveSize(5),
  paddingBottom: responsiveSize(5),
  borderRadius: 8,
  height: 55,
  alignItems: 'center',
  position: 'relative',
});

export const ButtonContent = styled.View({
  flexDirection: 'row',
  justifyContent: 'center',
  paddingTop: responsiveSize(5),
  paddingBottom: responsiveSize(5),
  borderRadius: responsiveSize(8),
  height: responsiveSize(55),
  alignItems: 'center',
  position: 'relative',
  width: '100%',
});

export const Label = styled.Text({
  textAlign: 'center',
  fontSize: normalize(15),
  fontWeight: '400',
});

export const Icon = styled.View({
  paddingTop: responsiveSize(10),
  paddingBottom: responsiveSize(10),
  marginRight: responsiveSize(20),
});

export const TextContainer = styled.View({
  paddingHorizontal: responsiveSize(40),
});

export const SpinnerContainer = styled.View({
  height: responsiveSize(55),
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
});

export const IconRight = styled.View({
  paddingTop: responsiveSize(10),
  paddingBottom: responsiveSize(10),
  marginLeft: responsiveSize(32),
});
