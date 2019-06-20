// @flow

import * as React from 'react';
import { Text } from 'react-native';

import fonts from '../../utils/fonts';
import { normalize } from '../../utils/dimensions';

type State = {||};

type Props = $ReadOnly<{|
  color?: string,
  children?: string,
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify',
  style?: Object,
  size?: number,
  font?: string | typeof undefined,
  bold?: boolean,
|}>;

const _default = {
  color: 'white',
  children: 'TEXT',
  textAlign: 'center',
  style: {},
  size: normalize(11),
  font: undefined,
  bold: false,
};

class Typography extends React.Component<Props, State> {
  render(): React.Node {
    // ─────default props────────────────────────────────────────────────────────────
    const isNotUndefined = (prop: *): boolean => !(prop === undefined);
    const {
      color: _color,
      children: _children,
      textAlign: _textAlign,
      style: _style,
      size: _size,
      font: _font,
      bold: _bold,
      ...props
    } = this.props;
    const { color, children, textAlign, style, size, font, bold }: Props = {
      color: isNotUndefined(_color) ? _color : _default.color,
      children: isNotUndefined(_children) ? _children : _default.children,
      textAlign: isNotUndefined(_textAlign) ? _textAlign : _default.textAlign,
      style: isNotUndefined(_style) ? _style : _default.style,
      size: isNotUndefined(_size) ? _size : _default.size,
      font: isNotUndefined(_font) ? _font : _default.font,
      bold: isNotUndefined(_bold) ? _bold : _default.bold,
    };
    // ─────default props────────────────────────────────────────────────────────────

    return (
      <Text
        {...props}
        style={[
          {
            color,
            fontSize: size,
            textAlign,
            fontFamily: font || fonts.regular,
          },
          bold
            ? {
                fontFamily: fonts.bold,
              }
            : null,
          style,
        ]}
      >
        {children}
      </Text>
    );
  }
}

export default Typography;
