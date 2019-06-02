import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { styleType } from '../../utils/propTypes';

const Button = ({ text, textColor, buttonColor, onPress, style, bold }) => (
  <TouchableOpacity
    style={[styles.button, { backgroundColor: buttonColor }, style]}
    activeOpacity={0.9}
    onPress={onPress}
  >
    <Text
      style={[
        styles.label,
        { color: textColor, fontFamily: bold ? 'nunito-bold' : 'nunito-regular' },
      ]}
    >
      {text}
    </Text>
  </TouchableOpacity>
);

Button.propTypes = {
  textColor: PropTypes.string.isRequired,
  bold: PropTypes.bool,
  buttonColor: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  text: PropTypes.string.isRequired,
  style: styleType,
};

Button.defaultProps = {
  onPress: () => {},
  style: {},
  bold: false,
};

export default Button;
