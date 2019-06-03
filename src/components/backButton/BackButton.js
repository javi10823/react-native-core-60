import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Typography from '../typography';
import { normalize, responsiveSize } from '../../utils/dimensions';
import { styleType } from '../../utils/propTypes';

const BackButton = ({
  text,
  style,
  iconStyle,
  textStyle,
  textVariant,
  size,
  iconColor,
  onPress,
}) => (
  <TouchableOpacity
    style={[{ flexDirection: 'row', alignItems: 'center' }, style]}
    onPress={() => onPress()}
  >
    <View
      style={{
        alignItems: 'center',
        paddingLeft: responsiveSize(10),
      }}
    >
      <Icon name="keyboard_arrow_left" size={size} style={[{ color: iconColor }, iconStyle]} />
    </View>
    {!!text && (
      <Typography variant={textVariant} color="white" style={textStyle}>
        {text}
      </Typography>
    )}
  </TouchableOpacity>
);

BackButton.propTypes = {
  text: PropTypes.string,
  size: PropTypes.number,
  style: styleType,
  iconStyle: styleType,
  textStyle: styleType,
  textVariant: PropTypes.string,
  iconColor: PropTypes.string,
  onPress: PropTypes.func.isRequired,
};

BackButton.defaultProps = {
  text: '',
  style: {},
  iconStyle: {},
  textStyle: {},
  textVariant: 'xSmallTitle',
  size: normalize(25),
  iconColor: '',
};

export default BackButton;