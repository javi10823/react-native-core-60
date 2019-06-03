import React, { Component } from 'react';
import { TextField } from 'react-native-material-textfield';
import Colors from '../../utils/colors';

export default class InputTextField extends Component {
  state = {};

  render() {
    const { input, meta, color, ...props } = this.props; // eslint-disable-line

    return (
      <TextField
        tintColor={Colors.global.black}
        errorColor={Colors.global.error}
        error={meta.touched && !meta.valid ? meta.error : ''}
        onChangeText={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={input.value}
        baseColor={color}
        {...props}
      />
    );
  }
}
