// @flow

import styled from 'styled-components';
import { responsiveSize } from '../../utils/dimensions';
import colors from '../../utils/colors';
// ──────────────────────────────────────────
import Button from '../../components/button';
import ImagePlaceholder from '../../components/image-placeholder';

type Props = {|
  style: Object,
|};

export const _Container = styled.SafeAreaView(
  (props: Props): Object => ({
    flex: 1,
    backgroundColor: colors.global.principal,
    justifyContent: 'center',
    alignItems: 'center',
    ...props.style,
  }),
);

export const _ComponentsContainer = styled.View(
  (props: Props): Object => ({
    paddingHorizontal: responsiveSize(50),
    marginBottom: responsiveSize(10),
    ...props.style,
  }),
);

export const _ButtonSignIn = styled.Button(
  (props: Props): Object => ({
    borderColor: colors.global.white,
    borderWidth: 2,
    backgroundColor: 'transparent',
    borderRadius: 5,
    width: '100%',
    ...props.style,
  }),
);

export const _ButtonSignUp = styled(Button)(
  (props: Props): Object => ({
    borderColor: colors.global.white,
    backgroundColor: colors.global.white,
    width: '100%',
    borderRadius: 5,
    ...props.style,
  }),
);

// export const _LogoContainer = styled(View)({
//   padding: responsiveSize(20),
//   justifyContent: 'center',
//   alignItems: 'center',
//   ...props => props.style,
// });

// export const _Logo = styled(View)({
//   width: '100%',
//   ...props => props.style,
// });

export const _ImageContainer = styled.View(
  (props: Props): Object => ({
    padding: responsiveSize(20),
    justifyContent: 'center',
    alignItems: 'center',
    ...props.style,
  }),
);

export const _ImageStyle = styled(ImagePlaceholder)(
  (props: Props): Object => ({
    width: responsiveSize(220),
    height: responsiveSize(155),
    borderRadius: 13,
    ...props.style,
  }),
);
