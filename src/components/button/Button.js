/* eslint-disable camelcase */
/* eslint-disable react/require-default-props */
import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import {
  Button,
  ButtonContent,
  Label,
  Icon,
  TextContainer,
  SpinnerContainer,
  IconRight,
} from './styles';
import fonts from '../../utils/fonts';
import Image from '../image-on-loading';

class _Button extends React.Component {
  state = {
    loading: false,
  };

  onPressDefaultAction = () =>
    this.setState({ loading: true }, () =>
      setTimeout(() => this.setState({ loading: false }), 1000),
    );

  render() {
    /* eslint-disable react/prop-types */
    const {
      text: text_props,
      textColor: textColor_props,
      buttonColor: buttonColor_props,
      onPress: onPress_props,
      style: style_props,
      iconStyle: iconStyle_props,
      textContainerStyle: textContainerStyle_props,
      icon: icon_props,
      iconRight: iconRight_props,
      disabled: disabled_props,
      disabledMoreVisible: disabledMoreVisible_props,
      frozen: frozen_props,
      loading: loading_props,
    } = this.props;
    /* eslint-enable react/prop-types */
    const { loading: stateLoading } = this.state;

    // ─────default props────────────────────────────────────────────────────────────
    const checkIfUndefined = (valueFromProps, defaultValue) =>
      valueFromProps === undefined ? defaultValue : valueFromProps;

    const text = checkIfUndefined(text_props, 'Button Text');
    const textColor = checkIfUndefined(textColor_props, 'white');
    const buttonColor = checkIfUndefined(buttonColor_props, '#00000020');
    const onPress = checkIfUndefined(onPress_props, this.onPressDefaultAction);
    const style = checkIfUndefined(style_props, { width: '80%' });
    const iconStyle = checkIfUndefined(iconStyle_props, {});
    const textContainerStyle = checkIfUndefined(textContainerStyle_props, {});
    const icon = checkIfUndefined(icon_props, 0);
    const iconRight = checkIfUndefined(iconRight_props, 0);
    const disabled = checkIfUndefined(disabled_props, false);
    const disabledMoreVisible = checkIfUndefined(disabledMoreVisible_props, false);
    const frozen = checkIfUndefined(frozen_props, false);
    const loading = checkIfUndefined(loading_props, stateLoading);
    // ─────default props────────────────────────────────────────────────────────────

    return (
      <Button
        onPress={onPress}
        style={{
          backgroundColor: buttonColor,
          opacity: !(disabled || frozen || loading) ? 1 : disabledMoreVisible ? 0.6 : 0.3,
          ...style[0], // for styled components use
        }}
        disabled={disabled || frozen || loading}
      >
        <ButtonContent style={[{ display: loading ? 'none' : 'flex' }]}>
          {icon ? (
            <Icon style={[iconStyle]}>
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

Button.propTypes = {
  textColor: PropTypes.string,
  buttonColor: PropTypes.string,
  onPress: PropTypes.func,
  text: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  iconStyle: PropTypes.any,
  textContainerStyle: PropTypes.any,
  icon: PropTypes.number,
  iconRight: PropTypes.number,
  disabled: PropTypes.bool,
  disabledMoreVisible: PropTypes.bool,
  loading: PropTypes.bool,
  frozen: PropTypes.bool,
};

// Button.defaultProps = {
//   onPress: null,
//   style: { width: '80%' },
//   textColor: colors.global.white,
//   buttonColor: '#00000020',
//   iconStyle: {},
//   textContainerStyle: {},
//   text: 'Button Text',
//   icon: 0,
//   iconRight: 0,
//   disabled: false,
//   disabledMoreVisible: false,
//   loading: null,
//   frozen: false,
// };

export default _Button;
