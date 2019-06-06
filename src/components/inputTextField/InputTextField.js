import React, { Component } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import PropTypes from 'prop-types';

import seeIcon from './see.png';
import dontSeeIcon from './dontSee.png';

import { normalize, responsiveSize } from '../../utils/dimensions';
import colors from '../../utils/colors';

const styles = {
  inputContainer: {
    position: 'relative',
    width: '100%',
  },
  eyeIcon: {
    position: 'absolute',
    top: '50%',
    right: 10,
  },
};

class InputTextField extends Component {
  state = { passwordVisible: false };

  togglePasswordVisibility = () => {
    this.setState(prevState => ({
      passwordVisible: !prevState.passwordVisible,
    }));
  };

  renderPasswordAccessory = () => {
    const { passwordVisible } = this.state;
    return (
      <TouchableOpacity
        onPress={this.togglePasswordVisibility}
        style={{
          height: responsiveSize(50),
          width: responsiveSize(50),
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: responsiveSize(45),
        }}
      >
        <Image source={passwordVisible ? dontSeeIcon : seeIcon} />
      </TouchableOpacity>
    );
  };

  render() {
    const { input, meta, secureTextEntry, inputContainerStyle, ...props } = this.props; // eslint-disable-line
    const { passwordVisible } = this.state;

    return (
      <View style={[styles.inputContainer, inputContainerStyle]}>
        <TextField
          onChangeText={input && input.onChange}
          value={input && input.value}
          tintColor={colors.text.primary}
          errorColor={colors.global.errorBackground}
          baseColor={colors.text.primary}
          {...props}
          error={meta && meta.touched && !meta.valid ? meta.error : ''}
          onBlur={input && input.onBlur}
          onFocus={input && input.onFocus}
          labelFontSize={normalize(13)}
          renderAccessory={secureTextEntry ? this.renderPasswordAccessory : null}
          secureTextEntry={secureTextEntry && !passwordVisible}
        />
      </View>
    );
  }
}

InputTextField.propTypes = {
  secureTextEntry: PropTypes.bool,
  toggleVisibility: PropTypes.bool,
};

InputTextField.defaultProps = {
  secureTextEntry: false,
  toggleVisibility: false,
};

export default InputTextField;
