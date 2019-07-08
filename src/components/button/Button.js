// @flow

import * as React from 'react';
import { ActivityIndicator } from 'react-native';
import {
  _Button,
  _ButtonContent,
  _Label,
  _Icon,
  _TextContainer,
  _SpinnerContainer,
  _IconRight,
} from './styled';
import fonts from '../../utils/fonts';
import Image from '../image-on-loading';

type State = {|
  loading: boolean,
|};

type Props = $ReadOnly<{|
  text?: string,
  textColor?: string,
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
|}>;

class __Button extends React.Component<Props, State> {
  static defaultProps = {
    text: 'Button Text',
    textColor: 'white',
    buttonColor: '#000000',
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
      textColor,
      buttonColor,
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
      <_Button
        onPress={onPress}
        style={[
          {
            backgroundColor: buttonColor,
            opacity: !(disabled || frozen || loading) ? 1 : disabledMoreVisible ? 0.6 : 0.3,
          },
          style,
        ]}
        disabled={disabled || frozen || loading}
      >
        <_ButtonContent style={[{ display: loading ? 'none' : 'flex' }]}>
          {icon ? (
            <_Icon style={[iconStyle]}>
              <Image source={icon} />
            </_Icon>
          ) : null}
          <_TextContainer style={[textContainerStyle]}>
            <_Label style={[{ color: textColor, fontFamily: fonts.regular }]}>{text}</_Label>
          </_TextContainer>
          {iconRight ? (
            <_IconRight style={iconStyle}>
              <Image source={iconRight} />
            </_IconRight>
          ) : null}
        </_ButtonContent>
        <_SpinnerContainer style={[{ display: loading ? 'flex' : 'none' }]}>
          <ActivityIndicator color={textColor} />
        </_SpinnerContainer>
      </_Button>
    );
  }
}

export default __Button;
