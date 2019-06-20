// @flow

import styled from 'styled-components';
import { responsiveSize } from '../../utils/dimensions';
import colors from '../../utils/colors';
// ──────────────────────────────────────────
import Button from '../../components/button';
import ImagePlaceholder from '../../components/image-placeholder';

export const _Container = styled.SafeAreaView({
  flex: 1,
  backgroundColor: colors.global.principal,
  justifyContent: 'center',
  alignItems: 'center',
});

export const _ComponentsContainer = styled.View({
  paddingHorizontal: responsiveSize(50),
  marginBottom: responsiveSize(10),
});

export const _ButtonSignIn = styled(Button)({
  borderColor: colors.global.white,
  borderWidth: 2,
  backgroundColor: 'transparent',
  borderRadius: 5,
  width: '100%',
});

export const _ButtonSignUp = styled(Button)({
  borderColor: colors.global.white,
  backgroundColor: colors.global.white,
  width: '100%',
  borderRadius: 5,
});

export const _ImageContainer = styled.View({
  padding: responsiveSize(20),
  justifyContent: 'center',
  alignItems: 'center',
});

export const _ImageStyle = styled(ImagePlaceholder)({
  width: responsiveSize(220),
  height: responsiveSize(155),
  borderRadius: 13,
});
