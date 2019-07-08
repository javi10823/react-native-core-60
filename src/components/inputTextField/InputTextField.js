// @flow

import * as React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { TextField } from 'react-native-material-textfield';

import seeIcon from './see.png';
import dontSeeIcon from './dontSee.png';

import { normalize, responsiveSize } from '../../utils/dimensions';
import colors from '../../utils/colors';

import {
  _InputContainer,
  _IconContainer,
  _PassAccesoryContainer,
  _RenderIconImage,
  _TextField_labelTextStyle,
  _TextField_inputContainerStyle,
} from './styled';

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
      <_IconContainer textFieldWidth={textFieldWidth}>
        <_RenderIconImage source={renderIcon} />
      </_IconContainer>
    );
  };

  renderPasswordAccessory = (): * => {
    const { passwordVisible } = this.state;
    return (
      <_PassAccesoryContainer onPress={this.togglePasswordVisibility}>
        <Image source={passwordVisible ? dontSeeIcon : seeIcon} />
      </_PassAccesoryContainer>
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
      <_InputContainer style={inputContainerStyle}>
        <TextField
          onChangeText={input && input.onChange}
          value={input && input.value}
          labelTextStyle={_TextField_labelTextStyle(renderIcon)}
          inputContainerStyle={_TextField_inputContainerStyle(renderIcon)}
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
          inputContainerPadding={responsiveSize(12)}
          labelHeight={responsiveSize(doNotShowLabelInFocus ? 0 : 32)}
          placeholderTextColor={colors.global.inactive}
          lineWidth={1.3}
        />
      </_InputContainer>
    );
  }
}

export default InputTextField;
