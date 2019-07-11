// @flow

import styled from 'styled-components';
import { responsiveSize } from '../../utils/dimensions';
import colors from '../../utils/colors';
// ────────────────────────────────────
import { Button as button } from '../../components';

export const Container = styled.SafeAreaView(
  (props: Object): Object => ({
    flex: 1,
    backgroundColor: colors.backgroundPrincipal(),
    justifyContent: 'center',
    alignItems: 'center',
    ...props.style,
  }),
);

export const TextContainer = styled.View(
  (props: Object): Object => ({
    paddingHorizontal: responsiveSize(50),
    marginBottom: responsiveSize(80),
    ...props.style,
  }),
);

export const Button: typeof button = styled(button)(
  (props: Object): Object => ({
    width: '80%',
    ...props.style,
  }),
);

export const LogoContainer = styled.TouchableOpacity(
  (props: Object): Object => ({
    width: '100%',
    paddingHorizontal: responsiveSize(70),
    paddingBottom: responsiveSize(30),
    justifyContent: 'center',
    alignItems: 'center',
    ...props.style,
  }),
);
