// @flow

import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { normalize } from '../../utils/dimensions';
import { _Icon, _Typography, _Container, _IconContainer } from './styled';
import colors from '../../utils/colors';

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
  static defaultProps = {
    text: '',
    style: {},
    iconStyle: {},
    textStyle: {},
    textSize: 18,
    size: normalize(25),
    iconColor: colors.global.black,
    onPress: () => {},
  };

  render(): React.Node {
    const { text, style, iconStyle, textStyle, textSize, size, iconColor, onPress } = this.props;

    return (
      <TouchableOpacity onPress={onPress}>
        <_Container style={style}>
          <_IconContainer>
            <_Icon name="arrow-back" size={size} color={iconColor} style={iconStyle} />
          </_IconContainer>
          {!!text && (
            <_Typography style={textStyle} size={textSize} color="white">
              {text}
            </_Typography>
          )}
        </_Container>
      </TouchableOpacity>
    );
  }
}

export default BackButton;
