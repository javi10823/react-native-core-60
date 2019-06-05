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
import colors from '../../utils/colors';

class _Button extends React.Component {
  state = {
    loading: false,
  };

  onPressDefaultAction = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  };

  render() {
    /* eslint-disable react/prop-types */
    const {
      text,
      textColor,
      buttonColor,
      onPress: onPressProps,
      style,
      iconStyle,
      textContainerStyle,
      icon,
      iconRight,
      disabled,
      disabledMoreVisible,
      frozen,
      loading: propsLoading,
    } = this.props;
    /* eslint-enable react/prop-types */
    const { loading: stateLoading } = this.state;
    const loading = propsLoading === null ? stateLoading : propsLoading;
    const onPress = onPressProps || this.onPressDefaultAction;

    return (
      <Button
        style={{
          backgroundColor: buttonColor,
          opacity: !(disabled || frozen || loading) ? 1 : disabledMoreVisible ? 0.6 : 0.3,
          ...style[0], // for styled components use
        }}
        onPress={onPress}
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

Button.defaultProps = {
  onPress: null,
  style: {
    width: '80%',
  },
  textColor: colors.global.white,
  buttonColor: '#00000020',
  iconStyle: {},
  textContainerStyle: {},
  text: 'Button Text',
  icon: 0,
  iconRight: 0,
  disabled: false,
  disabledMoreVisible: false,
  loading: null,
  frozen: false,
};

export default _Button;
