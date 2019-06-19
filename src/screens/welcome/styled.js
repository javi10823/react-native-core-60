// @flow

import styled from 'styled-components';
import { responsiveSize } from '../../utils/dimensions';
import Colors from '../../utils/colors';
// ────────────────────────────────────
import button from '../../components/button';

type Props = {|
  style: Object,
|};

export const _Container = styled.SafeAreaView(
  (props: Props): Object => ({
    flex: 1,
    backgroundColor: Colors.global.principal,
    justifyContent: 'center',
    alignItems: 'center',
    ...props.style,
  }),
);

export const _TextContainer = styled.View(
  (props: Props): Object => ({
    paddingHorizontal: responsiveSize(50),
    marginBottom: responsiveSize(80),
    ...props.style,
  }),
);

export const _Button = styled(button)(
  (props: Props): Object => ({
    width: '85%',
    ...props.style,
  }),
);

export const _LogoContainer = styled.TouchableOpacity(
  (props: Props): Object => ({
    width: '100%',
    paddingHorizontal: responsiveSize(70),
    paddingBottom: responsiveSize(30),
    justifyContent: 'center',
    alignItems: 'center',
    ...props.style,
  }),
);
