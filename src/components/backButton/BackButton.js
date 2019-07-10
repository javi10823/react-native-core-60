// @flow

import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { normalize } from '../../utils/dimensions';
import { Icon, Typography, Container, IconContainer } from './styled';
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
  theme: string,
|}>;

class BackButton extends React.Component<Props, State> {
  static defaultProps = {
    text: '',
    style: {},
    iconStyle: {},
    textStyle: {},
    textSize: 18,
    size: normalize(25),
    iconColor: null,
    onPress: () => {},
  };

  render(): React.Node {
    const {
      text,
      style,
      iconStyle,
      textStyle,
      textSize,
      size,
      iconColor,
      onPress,
      theme,
    } = this.props;

    return (
      <TouchableOpacity onPress={onPress}>
        <Container style={style}>
          <IconContainer>
            <Icon
              name="arrow-back"
              size={size}
              color={iconColor || colors.primaryText(theme)}
              style={iconStyle}
            />
          </IconContainer>
          {!!text && (
            <Typography style={textStyle} size={textSize} color={colors.primaryText(theme)}>
              {text}
            </Typography>
          )}
        </Container>
      </TouchableOpacity>
    );
  }
}

export default BackButton;
