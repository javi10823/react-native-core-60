// @flow

import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { responsiveSize, normalize } from '../../utils/dimensions';
import Typography from '../typography';
import Colors from '../../utils/colors';

export const _Container = styled.View(
  (props: Object): Object => ({
    flexDirection: 'row',
    alignItems: 'center',
    ...props.style,
  }),
);

export const _IconContainer = styled.View({
  alignItems: 'center',
  padding: responsiveSize(5),
});

export const _Icon = styled(Icon)(
  (props: Object): Object => ({
    color: props.color || Colors.global.black,
    fontSize: props.size || normalize(25),
    ...props.style,
  }),
);

export const _Typography = styled(Typography)(
  (props: Object): Object => ({
    flex: 1,
    marginRight: responsiveSize(35),
    fontSize: props.size || 18,
    ...props.style,
  }),
);
