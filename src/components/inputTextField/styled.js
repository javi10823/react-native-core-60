// @flow

import { StyleSheet } from 'react-native';
import styled from 'styled-components';
import { responsiveSize } from '../../utils/dimensions';

export const _InputContainer = styled.View(
  (props: Object): Object => ({
    position: 'relative',
    width: '100%',
    ...props.style,
  }),
);

export const _IconContainer = styled.View(
  (props: Object): Object => ({
    height: responsiveSize(30),
    width: responsiveSize(30),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: responsiveSize(-props.textFieldWidth - 35),
    top: -5,
    ...props.style,
  }),
);

export const _PassAccesoryContainer = styled.TouchableOpacity(
  (props: Object): Object => ({
    height: responsiveSize(50),
    width: responsiveSize(50),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: responsiveSize(45),
    ...props.style,
  }),
);

export const _RenderIconImage = styled.Image(
  (props: Object): Object => ({
    width: responsiveSize(25),
    height: responsiveSize(25),
    ...props.style,
  }),
);

export const _TextField_labelTextStyle = (
  renderIcon: boolean | number | typeof undefined,
): Object =>
  StyleSheet.create({
    marginLeft: responsiveSize(renderIcon ? 35 : 0),
  });

export const _TextField_inputContainerStyle = (
  renderIcon: boolean | number | typeof undefined,
): Object =>
  StyleSheet.create({
    paddingLeft: responsiveSize(renderIcon ? 35 : 0),
  });
