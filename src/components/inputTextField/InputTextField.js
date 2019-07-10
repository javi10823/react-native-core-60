// @flow

import * as React from 'react';
import { Image } from 'react-native';
import { TextField } from 'react-native-material-textfield';

import seeIcon from './see.png';
import dontSeeIcon from './dontSee.png';

import { normalize, responsiveSize } from '../../utils/dimensions';
import colors from '../../utils/colors';

import {
  InputContainer,
  IconContainer,
  PassAccesoryContainer,
  RenderIconImage,
  TextField_labelTextStyle,
  TextField_inputContainerStyle,
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
  theme?: string,
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
      <IconContainer textFieldWidth={textFieldWidth}>
        <RenderIconImage source={renderIcon} />
      </IconContainer>
    );
  };

  renderPasswordAccessory = (): * => {
    const { passwordVisible } = this.state;
    return (
      <PassAccesoryContainer onPress={this.togglePasswordVisibility}>
        <Image source={passwordVisible ? dontSeeIcon : seeIcon} />
      </PassAccesoryContainer>
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
    const { placeholder, label, theme } = this.props;
    const doNotShowLabelInFocus = placeholder && !label;

    return (
      <InputContainer style={inputContainerStyle}>
        <TextField
          onChangeText={input && input.onChange}
          value={input && input.value}
          labelTextStyle={TextField_labelTextStyle(renderIcon)}
          inputContainerStyle={TextField_inputContainerStyle(renderIcon)}
          tintColor={colors.primaryText(theme)}
          errorColor={colors.error(theme)}
          baseColor={colors.primary(theme)}
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
          placeholderTextColor={colors.inactive(theme)}
          lineWidth={1.3}
        />
      </InputContainer>
    );
  }
}

export default InputTextField;
