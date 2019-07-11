// @flow

import * as React from 'react';
import { ActivityIndicator } from 'react-native';
import {
  Button,
  ButtonContent,
  Label,
  Icon,
  TextContainer,
  SpinnerContainer,
  IconRight,
} from './styled';
import fonts from '../../utils/fonts';
import Image from '../image-on-loading';
import colors from '../../utils/colors';
import store from '../../store';

type State = {|
  loading: boolean,
|};

type Props = $ReadOnly<{|
  text?: string,
  textColor?: ?string,
  buttonColor?: string,
  onPress?: Function,
  style?: Object,
  iconStyle?: Object,
  textContainerStyle?: Object,
  icon?: number,
  iconRight?: number,
  disabled?: boolean,
  disabledMoreVisible?: boolean,
  frozen?: boolean,
  loading?: boolean,
  theme?: string,
|}>;

class _Button extends React.Component<Props, State> {
  static defaultProps = {
    text: 'Button Text',
    textColor: null,
    buttonColor: null,
    style: { width: '80%' },
    iconStyle: {},
    textContainerStyle: {},
    icon: 0,
    iconRight: 0,
    disabled: false,
    disabledMoreVisible: false,
    frozen: false,
  };

  state = {
    loading: false,
  };

  onPressDefaultAction = (): * =>
    this.setState(
      { loading: true },
      (): * => setTimeout((): * => this.setState({ loading: false }), 1000),
    );

  render(): React.Node {
    const { loading: stateLoading } = this.state;
    const {
      text,
      textColor = colors.primaryText(store.getState().theme.themeSelected),
      buttonColor = colors.primary(store.getState().theme.themeSelected),
      onPress,
      style,
      iconStyle,
      textContainerStyle,
      icon,
      iconRight,
      disabled,
      disabledMoreVisible,
      frozen,
      loading = stateLoading,
    } = this.props;

    return (
      <Button
        onPress={onPress}
        style={[
          {
            backgroundColor: buttonColor,
            opacity: !(disabled || frozen || loading) ? 1 : disabledMoreVisible ? 0.6 : 0.3,
          },
          style && style.length === 1 ? style[0] : style,
        ]}
        disabled={disabled || frozen || loading}
      >
        <ButtonContent style={[{ display: loading ? 'none' : 'flex' }]}>
          {icon ? (
            <Icon style={iconStyle}>
              <Image source={icon} />
            </Icon>
          ) : null}
          <TextContainer style={[textContainerStyle]}>
            <Label style={[{ color: textColor, fontFamily: fonts.regular }]}>{text}</Label>
          </TextContainer>
          {iconRight ? (
            <IconRight style={iconStyle}>
              <Image source={iconRight} />
            </IconRight>
          ) : null}
        </ButtonContent>
        <SpinnerContainer style={[{ display: loading ? 'flex' : 'none' }]}>
          <ActivityIndicator color={textColor} />
        </SpinnerContainer>
      </Button>
    );
  }
}

export default _Button;
