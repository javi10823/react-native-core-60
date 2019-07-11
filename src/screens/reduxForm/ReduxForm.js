// @flow

import * as React from 'react';
import { Alert } from 'react-native';

import { bindActionCreators, compose } from 'redux';
import { Field, reduxForm, change } from 'redux-form';
import { connect } from 'react-redux';

import { Container, Content } from './styled';
import { required } from '../../utils/validations_es';
import { goBack } from '..';
import colors from '../../utils/colors';
import { BackButton, InputTextField, Spacing, Button } from '../../components';

type State = {|
  loading: boolean,
|};

// comingFromConnect
type Props = {|
  componentId: string,
  changeFieldValue: Function,
  handleSubmit: Function,
  valid: boolean,
  themeSelected: string,
|};

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
    const { componentId, handleSubmit, valid: fieldsValid, themeSelected } = this.props;

    console.log(`\n\n`, 'themeSelected', themeSelected, `\n\n\n`);

    return (
      <Container>
        <BackButton onPress={(): * => goBack(componentId)} text="redux-form example" />
        <Content>
          <Field
            name="firstName"
            label="Firstname"
            type="input"
            validate={[required]}
            component={InputTextField}
            baseColor={colors.primary()}
            tintColor={colors.primaryText()}
            placeholder="John"
            labelPadding={16}
            inputContainerPadding={2}
            disabledLineWidth={0}
          />
          <Spacing />
          <Field
            name="lastName"
            label="Lastname"
            type="input"
            validate={[required]}
            component={InputTextField}
            baseColor={colors.primary()}
            tintColor={colors.primaryText()}
            placeholder="Doe"
            labelPadding={16}
            inputContainerPadding={2}
            disabledLineWidth={0}
            secureTextEntry
          />
          <Spacing />
          <Button
            text="Set data in fields"
            buttonColor={colors.opacity()}
            onPress={this.setDefaultData}
          />
          <Spacing />
          <Button
            text="Do something"
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
  themeSelected: state.theme.themeSelected,
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

export default compose(
  reduxForm({
    form: 'form_name_example',
    destroyOnUnmount: true,
  })(
    connect<Props, *, *, *, *>(
      mapStateToProps,
      mapDispatchToProps,
    )(ReduxForm),
  ),
);
