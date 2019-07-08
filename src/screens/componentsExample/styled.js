// @flow

import styled from 'styled-components';
import { responsiveSize } from '../../utils/dimensions';
import colors from '../../utils/colors';
// ──────────────────────────────────────────
import Button from '../../components/button';
import ImagePlaceholder from '../../components/image-placeholder';

export const Container = styled.SafeAreaView({
  flex: 1,
  backgroundColor: colors.global.principal,
  justifyContent: 'center',
  alignItems: 'center',
});

export const ComponentsContainer = styled.View({
  paddingHorizontal: responsiveSize(50),
  marginBottom: responsiveSize(10),
});

export const ButtonSignIn = styled(Button)({
  borderColor: colors.global.white,
  borderWidth: 2,
  backgroundColor: 'transparent',
  borderRadius: 5,
  width: '100%',
});

export const ButtonSignUp = styled(Button)(
  (props: Object): Object => {
    console.log(`\n\n`, 'componentsExample - ButtonSignUp - props', props, `\n\n\n`);
    return {
      borderColor: colors.global.white,
      backgroundColor: colors.global.white,
      width: '100%',
      borderRadius: 5,
      ...props.style,
    };
  },
);

export const ImageContainer = styled.View({
  padding: responsiveSize(20),
  justifyContent: 'center',
  alignItems: 'center',
});

export const ImageStyle = styled(ImagePlaceholder)({
  width: responsiveSize(220),
  height: responsiveSize(155),
  borderRadius: 13,
});
