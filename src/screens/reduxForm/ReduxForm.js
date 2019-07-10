// @flow

import * as React from 'react';
import { Alert } from 'react-native';

import { bindActionCreators, compose } from 'redux';
import { Field, reduxForm, change } from 'redux-form';
import { connect } from 'react-redux';

import { Container, Content } from './styled';
import InputTextField from '../../components/inputTextField/InputTextField';
import { required } from '../../utils/validations_es';
import Spacing from '../../components/spacing/Spacing';
import Button from '../../components/button';
import BackButton from '../../components/backButton/BackButton';
import { goBack } from '..';
import colors from '../../utils/colors';

type State = {|
  loading: boolean,
|};

// comingFromOutside
type InternalProps = $ReadOnly<{||}>;

// comingFromConnect
type Props = $ReadOnly<{|
  ...InternalProps,
  componentId: string,
  form_name_example: string,
  changeFieldValue: Function,
  handleSubmit: Function,
  valid: boolean,
  theme: string,
|}>;

class ReduxForm extends React.Component<Props, State> {
  setDefaultData = () => {
    const { changeFieldValue } = this.props;
    changeFieldValue('firstName', 'Nicolas');
    changeFieldValue('lastName', 'Sturm');
  };

  doSomething = ({ firstName, lastName }: { firstName: string, lastName: string }) => {
    Alert.alert(`Hello ${firstName} ${lastName}`);
  };

  render(): React.Node {
    const { componentId, handleSubmit, valid: fieldsValid, theme } = this.props;
    return (
      <Container>
        <BackButton
          onPress={(): * => goBack(componentId)}
          text="redux-form example"
          theme={theme}
          iconColor={colors.primaryText(theme)}
        />
        <Content>
          <Field
            name="firstName"
            label="Nombre"
            type="input"
            validate={[required]}
            component={InputTextField}
            baseColor={colors.primary(theme)}
            tintColor={colors.primaryText(theme)}
            placeholder="John"
            labelPadding={16}
            inputContainerPadding={2}
            disabledLineWidth={0}
            theme={theme}
          />
          <Spacing />
          <Field
            name="lastName"
            label="Apellido"
            type="input"
            validate={[required]}
            component={InputTextField}
            baseColor={colors.primary(theme)}
            tintColor={colors.primaryText(theme)}
            placeholder="Doe"
            labelPadding={16}
            inputContainerPadding={2}
            disabledLineWidth={0}
            secureTextEntry
            theme={theme}
          />
          <Spacing />
          <Button
            text="Setear data"
            buttonColor={colors.opacity(theme)}
            onPress={this.setDefaultData}
          />
          <Spacing />
          <Button
            text="Hacer algo"
            buttonColor={colors.opacity(theme)}
            onPress={handleSubmit(this.doSomething)}
            disabled={!fieldsValid}
          />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state: *): * => ({
  form_name_example: state.form.form_name_example,
});

const mapDispatchToProps = (dispatch: *): * =>
  bindActionCreators(
    {
      // getAllSpacesConnected: getAllSpaces,
      changeFieldValue(field: string, value: string): * {
        return (_dispatch: *) => {
          _dispatch(change('form_name_example', field, value));
        };
      },
    },
    dispatch,
  );

export default reduxForm({
  form: 'form_name_example',
  destroyOnUnmount: true,
})(
  compose(
    connect<Props, InternalProps, *, *, *, *>(
      mapStateToProps,
      mapDispatchToProps,
    )(ReduxForm),
  ),
);
