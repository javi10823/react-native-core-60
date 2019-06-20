// @flow

import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Typography from '../typography';
import { normalize, responsiveSize } from '../../utils/dimensions';

type State = {||};

type Props = $ReadOnly<{|
  text?: string,
  style?: Object,
  iconStyle?: Object,
  textStyle?: Object,
  textSize?: number,
  size?: number,
  iconColor?: string,
  onPress?: Function,
|}>;

const _default = {
  text: '',
  style: {},
  iconStyle: {},
  textStyle: {},
  textSize: 18,
  size: normalize(25),
  iconColor: 'black',
  onPress: () => {},
};

class BackButton extends React.Component<Props, State> {
  render(): React.Node {
    // ─────default props────────────────────────────────────────────────────────────
    const isNotUndefined = (prop: *): boolean => !(prop === undefined);
    const {
      text: _text,
      style: _style,
      iconStyle: _iconStyle,
      textStyle: _textStyle,
      textSize: _textSize,
      size: _size,
      iconColor: _iconColor,
      onPress: _onPress,
    } = this.props;
    const { text, style, iconStyle, textStyle, textSize, size, iconColor, onPress }: Props = {
      text: isNotUndefined(_text) ? _text : _default.text,
      style: isNotUndefined(_style) ? _style : _default.style,
      iconStyle: isNotUndefined(_iconStyle) ? _iconStyle : _default.iconStyle,
      textStyle: isNotUndefined(_textStyle) ? _textStyle : _default.iconStyle,
      textSize: isNotUndefined(_textSize) ? _textSize : _default.textSize,
      size: isNotUndefined(_size) ? _size : _default.size,
      iconColor: isNotUndefined(_iconColor) ? _iconColor : _default.iconColor,
      onPress: isNotUndefined(_onPress) ? _onPress : _default.onPress,
    };
    // ─────default props────────────────────────────────────────────────────────────

    return (
      <TouchableOpacity
        style={[{ flexDirection: 'row', alignItems: 'center' }, style]}
        onPress={onPress}
      >
        <View
          style={{
            alignItems: 'center',
            padding: responsiveSize(5),
          }}
        >
          <Icon name="chevron-left" size={size} style={[{ color: iconColor }, iconStyle]} />
        </View>
        {!!text && (
          <Typography
            style={[{ flex: 1, marginRight: responsiveSize(35) }, textStyle]}
            size={textSize}
            color="white"
          >
            {text}
          </Typography>
        )}
      </TouchableOpacity>
    );
  }
}

export default BackButton;
