// @flow

import * as React from 'react';
import { Text } from 'react-native';

import fonts from '../../utils/fonts';
import { normalize } from '../../utils/dimensions';
import colors from '../../utils/colors';

type State = {||};

type Props = $ReadOnly<{|
  color?: string,
  children?: string,
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify',
  style?: Object,
  size?: number,
  font?: string,
  bold?: boolean,
  onPress?: Function,
  noUnderline?: boolean,
|}>;

class Typography extends React.Component<Props, State> {
  static defaultProps = {
    color: colors.global.white,
    children: 'TEXT',
    textAlign: 'center',
    style: {},
    size: 11,
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
            color,
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

export default Typography;
