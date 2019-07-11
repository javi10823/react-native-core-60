// @flow

import * as React from 'react';
import { Text } from 'react-native';

import fonts from '../../utils/fonts';
import { normalize } from '../../utils/dimensions';
import colors from '../../utils/colors';

type State = {||};

type Props = {|
  color?: string,
  children?: string,
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify',
  style?: Object,
  size?: number,
  font?: string,
  bold?: boolean,
  onPress?: Function,
  noUnderline?: boolean,
|};

class _Typography extends React.Component<Props, State> {
  static defaultProps = {
    children: 'TEXT',
    textAlign: 'center',
    style: {},
    size: 11,
    color: undefined,
    font: undefined,
    bold: undefined,
    onPress: undefined,
    noUnderline: undefined,
  };

  render(): React.Node {
    const {
      color,
      children,
      textAlign,
      style,
      size,
      font,
      bold,
      onPress,
      noUnderline,
      ...props
    } = this.props;

    return (
      <Text
        {...props}
        style={[
          {
            color: color || colors.primaryText(),
            fontSize: normalize(size),
            textAlign,
            fontFamily: font || fonts.regular,
            textDecorationLine: onPress && !noUnderline ? 'underline' : 'none',
          },
          bold ? { fontFamily: fonts.bold } : null,
          style,
        ]}
        lineHeight={1}
        onPress={onPress}
      >
        {children}
      </Text>
    );
  }
}

export const Typography: typeof _Typography = _Typography;
