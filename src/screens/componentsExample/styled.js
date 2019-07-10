// @flow

import styled from 'styled-components';
import { responsiveSize } from '../../utils/dimensions';
import colors from '../../utils/colors';
// ──────────────────────────────────────────
import Button from '../../components/button';
import ImagePlaceholder from '../../components/image-placeholder';

export const Container = styled.SafeAreaView(
  (props: Object): Object => ({
    flex: 1,
    backgroundColor: colors.backgroundPrincipal(props),
    justifyContent: 'center',
    alignItems: 'center',
    ...props.style,
  }),
);

export const ComponentsContainer = styled.View(
  (props: Object): Object => ({
    paddingHorizontal: responsiveSize(50),
    marginBottom: responsiveSize(10),
    ...props.style,
  }),
);

export const ButtonSignIn = styled(Button)(
  (props: Object): Object => ({
    borderColor: colors.secondary(props),
    borderWidth: 2,
    backgroundColor: colors.transparent,
    borderRadius: responsiveSize(5),
    width: '100%',
    ...props.style,
  }),
);

export const ButtonSignUp = styled(Button)(
  (props: Object): Object => {
    console.log(`\n\n`, 'componentsExample - ButtonSignUp - props', props, `\n\n\n`);
    return {
      borderColor: colors.secondary(props),
      backgroundColor: colors.primary(props),
      width: '100%',
      borderRadius: responsiveSize(5),
      ...props.style,
    };
  },
);

export const ImageContainer = styled.View(
  (props: Object): Object => ({
    padding: responsiveSize(20),
    justifyContent: 'center',
    alignItems: 'center',
    ...props.style,
  }),
);

export const ImageStyle = styled(ImagePlaceholder)(
  (props: Object): Object => ({
    width: responsiveSize(220),
    height: responsiveSize(155),
    borderRadius: responsiveSize(13),
    ...props.style,
  }),
);
