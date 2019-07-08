// @flow

import * as React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { TextField } from 'react-native-material-textfield';

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

type State = {|
  passwordVisible: boolean,
  textFieldWidth: number,
|};

type Props = $ReadOnly<{|
  input?: Object,
  meta?: *,
  secureTextEntry?: boolean,
  inputContainerStyle?: Object,
  renderIcon?: number,
  hidePasswordIcon?: boolean,
  // ────────────────
  label?: string,
  placeholder?: string,
|}>;

class InputTextField extends React.Component<Props, State> {
  static defaultProps = {
    input: {},
    inputContainerStyle: {},
    label: '',
  };

  state = { passwordVisible: false, textFieldWidth: 100 };

  togglePasswordVisibility = (): * => {
    this.setState(
      (prevState: Object): * => ({
        passwordVisible: !prevState.passwordVisible,
      }),
    );
  };

  renderIcon = (): * => {
    const { textFieldWidth } = this.state;
    const { renderIcon } = this.props;

    return (
      <View
        style={{
          height: responsiveSize(30),
          width: responsiveSize(30),
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          left: -textFieldWidth - 35,
          top: -5,
        }}
      >
        <Image
          source={renderIcon}
          style={{ width: responsiveSize(25), height: responsiveSize(25) }}
        />
      </View>
    );
  };

  renderPasswordAccessory = (): * => {
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

  render(): React.Node {
    const { passwordVisible } = this.state;
    const {
      input,
      inputContainerStyle,
      renderIcon,
      meta,
      secureTextEntry,
      hidePasswordIcon,
      ...props
    } = this.props;
    const { placeholder, label } = this.props;
    const doNotShowLabelInFocus = placeholder && !label;

    return (
      <View style={[styles.inputContainer, inputContainerStyle]}>
        <TextField
          onChangeText={input && input.onChange}
          value={input && input.value}
          labelTextStyle={{ marginLeft: responsiveSize(renderIcon ? 35 : 0) }}
          inputContainerStyle={{ paddingLeft: responsiveSize(renderIcon ? 35 : 0) }}
          tintColor={colors.text.primary}
          errorColor={colors.global.errorBackground}
          baseColor={colors.text.primary}
          onLayout={(event: *): * =>
            this.setState({ textFieldWidth: event.nativeEvent.layout.width })
          }
          {...props}
          error={meta && meta.touched && !meta.valid ? meta.error : ''}
          onBlur={input && input.onBlur}
          onFocus={input && input.onFocus}
          labelFontSize={normalize(13)}
          renderAccessory={
            renderIcon
              ? this.renderIcon
              : secureTextEntry && !hidePasswordIcon
              ? this.renderPasswordAccessory
              : null
          }
          secureTextEntry={secureTextEntry && !passwordVisible}
          inputContainerPadding={12}
          labelHeight={doNotShowLabelInFocus ? 0 : 32}
          placeholderTextColor={colors.global.inactive}
          lineWidth={1.3}
        />
      </View>
    );
  }
}

export default InputTextField;
