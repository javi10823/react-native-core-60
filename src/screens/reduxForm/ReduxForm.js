// @flow

import * as React from 'react';
import { Alert } from 'react-native';

import { bindActionCreators } from 'redux';
import { Field, reduxForm, change } from 'redux-form';
import { connect } from 'react-redux';

import { _Container, _Content } from './styled';
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
    const { componentId, handleSubmit, valid: fieldsValid } = this.props;
    return (
      <_Container>
        <BackButton onPress={(): * => goBack(componentId)} text="redux-form example" />
        <_Content>
          <Field
            name="firstName"
            label="Nombre"
            type="input"
            validate={[required]}
            component={InputTextField}
            baseColor="white"
            tintColor="white"
            placeholder="John"
            labelPadding={16}
            inputContainerPadding={2}
            disabledLineWidth={0}
          />
          <Spacing />
          <Field
            name="lastName"
            label="Apellido"
            type="input"
            validate={[required]}
            component={InputTextField}
            baseColor="white"
            tintColor="white"
            placeholder="Doe"
            labelPadding={16}
            inputContainerPadding={2}
            disabledLineWidth={0}
            secureTextEntry
          />
          <Spacing />
          <Button
            text="Setear data"
            buttonColor={colors.global.black + 80}
            onPress={this.setDefaultData}
          />
          <Spacing />
          <Button
            text="Hacer algo"
            buttonColor={colors.global.black + 80}
            onPress={handleSubmit(this.doSomething)}
            disabled={!fieldsValid}
          />
        </_Content>
      </_Container>
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
  connect<Props, InternalProps, *, *, *, *>(
    mapStateToProps,
    mapDispatchToProps,
  )(ReduxForm),
);
