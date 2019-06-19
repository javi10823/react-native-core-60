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

class BackButton extends React.Component<Props, State> {
  render(): React.Node {
    // ─────default props────────────────────────────────────────────────────────────
    const { text, style, iconStyle, textStyle, textSize, size, iconColor, onPress }: Props = {
      text: '',
      style: {},
      iconStyle: {},
      textStyle: {},
      textSize: 18,
      size: normalize(25),
      iconColor: 'black',
      onPress: () => {},
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
