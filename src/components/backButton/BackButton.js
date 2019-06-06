/* eslint-disable camelcase */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Typography from '../typography';
import { normalize, responsiveSize } from '../../utils/dimensions';
import { styleType } from '../../utils/propTypes';

class BackButton extends React.Component {
  render() {
    const {
      text: text_props,
      style: style_props,
      iconStyle: iconStyle_props,
      textStyle: textStyle_props,
      textSize: textSize_props,
      size: size_props,
      iconColor: iconColor_props,
      onPress: onPress_props,
    } = this.props;

    // ─────default props────────────────────────────────────────────────────────────
    const checkIfUndefined = (valueFromProps, defaultValue) =>
      valueFromProps === undefined ? defaultValue : valueFromProps;

    const text = checkIfUndefined(text_props, '');
    const style = checkIfUndefined(style_props, {});
    const iconStyle = checkIfUndefined(iconStyle_props, {});
    const textStyle = checkIfUndefined(textStyle_props, {});
    const textSize = checkIfUndefined(textSize_props, 18);
    const size = checkIfUndefined(size_props, normalize(25));
    const iconColor = checkIfUndefined(iconColor_props, 'black');
    const onPress = checkIfUndefined(onPress_props, () => {});

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

BackButton.propTypes = {
  text: PropTypes.string,
  size: PropTypes.number,
  style: styleType,
  iconStyle: styleType,
  textStyle: styleType,
  textSize: PropTypes.number,
  iconColor: PropTypes.string,
  onPress: PropTypes.func.isRequired,
};

// BackButton.defaultProps = {
//   text: '',
//   style: {},
//   iconStyle: {},
//   textStyle: {},
//   textSize: 18,
//   size: normalize(25),
//   iconColor: '',
// };

export default BackButton;
