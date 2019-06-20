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

const _default = {
  text: 'Button Text',
  textColor: 'white',
  buttonColor: '#00000020',
  style: { width: '80%' },
  iconStyle: {},
  textContainerStyle: {},
  icon: 0,
  iconRight: 0,
  disabled: false,
  disabledMoreVisible: false,
  frozen: false,
};

class __Button extends React.Component<Props, State> {
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
    // ─────default props────────────────────────────────────────────────────────────
    const isNotUndefined = (prop: *): boolean => !(prop === undefined);
    const {
      text: _text,
      textColor: _textColor,
      buttonColor: _buttonColor,
      onPress: _onPress,
      style: _style,
      iconStyle: _iconStyle,
      textContainerStyle: _textContainerStyle,
      icon: _icon,
      iconRight: _iconRight,
      disabled: _disabled,
      disabledMoreVisible: _disabledMoreVisible,
      frozen: _frozen,
      loading: _loading,
    } = this.props;
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
      loading,
    }: Props = {
      text: isNotUndefined(_text) ? _text : _default.text,
      textColor: isNotUndefined(_textColor) ? _textColor : _default.textColor,
      buttonColor: isNotUndefined(_buttonColor) ? _buttonColor : _default.buttonColor,
      onPress: isNotUndefined(_onPress) ? _onPress : this.onPressDefaultAction,
      style: isNotUndefined(_style) ? _style : _default.style,
      iconStyle: isNotUndefined(_iconStyle) ? _iconStyle : _default.iconStyle,
      textContainerStyle: isNotUndefined(_textContainerStyle)
        ? _textContainerStyle
        : _default.textContainerStyle,
      icon: isNotUndefined(_icon) ? _icon : _default.icon,
      iconRight: isNotUndefined(_iconRight) ? _iconRight : _default.iconRight,
      disabled: isNotUndefined(_disabled) ? _disabled : _default.disabled,
      disabledMoreVisible: isNotUndefined(_disabledMoreVisible)
        ? _disabledMoreVisible
        : _default.disabledMoreVisible,
      frozen: isNotUndefined(_frozen) ? _frozen : _default.frozen,
      loading: isNotUndefined(_loading) ? _loading : stateLoading,
    };
    // ─────default props────────────────────────────────────────────────────────────

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
