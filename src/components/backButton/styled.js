// @flow

import styled from 'styled-components';
import icon from 'react-native-vector-icons/MaterialIcons';
import { responsiveSize, normalize } from '../../utils/dimensions';
import colors from '../../utils/colors';
import { Typography as typography } from '../../components/typography/Typography';

export const Container = styled.View(
  (props: Object): Object => ({
    flexDirection: 'row',
    alignItems: 'center',
    ...props.style,
  }),
);

export const IconContainer = styled.View(
  (props: Object): Object => ({
    alignItems: 'center',
    padding: responsiveSize(5),
    ...props.style,
  }),
);

export const Icon = styled(icon)(
  (props: Object): Object => ({
    color: props.color || colors.primaryText(),
    fontSize: props.size || normalize(25),
    ...props.style,
  }),
);

export const Typography = styled(typography)(
  (props: Object): Object => ({
    flex: 1,
    marginRight: responsiveSize(35),
    fontSize: props.size || normalize(18),
    ...props.style,
  }),
);
