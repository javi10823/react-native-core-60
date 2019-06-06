import React, { Component } from 'react';
import { Alert } from 'react-native';

import { bindActionCreators } from 'redux';
import { Field, reduxForm, change } from 'redux-form';
import { connect } from 'react-redux';

import { Container, Content } from './styles';
import InputTextField from '../../components/inputTextField/InputTextField';
import { required } from '../../utils/validations_es';
import Spacing from '../../components/spacing/Spacing';
import Button from '../../components/button';
import BackButton from '../../components/backButton/BackButton';
import { goBack } from '..';

class ReduxForm extends Component {
  setDefaultData = () => {
    const { changeFieldValue } = this.props; // eslint-disable-line react/prop-types
    changeFieldValue('firstName', 'Nicolas');
    changeFieldValue('lastName', 'Sturm');
  };

  doSomething = ({ firstName, lastName }) => {
    Alert.alert(`Hello ${firstName} ${lastName}`);
  };

  render() {
    const { componentId, handleSubmit, valid: fieldsValid } = this.props; // eslint-disable-line react/prop-types
    return (
      <Container>
        <BackButton onPress={() => goBack(componentId)} text="redux-form example" />
        <Content>
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
          <Button text="Setear data" buttonColor="#00000080" onPress={this.setDefaultData} />
          <Spacing />
          <Button
            text="Hacer algo"
            buttonColor="#00000080"
            onPress={handleSubmit(this.doSomething)}
            disabled={!fieldsValid}
          />
        </Content>
      </Container>
    );
  }
}

// eslint-disable-next-line no-unused-vars
const mapStateToProps = store => ({
  // spaces: store.spaces.spaces,
  form_name_example: store.form.form_name_example,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      // getAllSpacesConnected: getAllSpaces,
      changeFieldValue(field, value) {
        return _dispatch => {
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
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ReduxForm),
);
