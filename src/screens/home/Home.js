// @flow

import * as React from 'react';
import { Alert } from 'react-native';

import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Container, TextContainer, Button } from './styled';
import { Spacing, Typography } from '../../components';

import { goToPage, showModal, hideModal, hideAllModals } from '..';
import { logOut } from '../../actions/auth';
import colors from '../../utils/colors';
import { DARK, LIGHT } from '../../utils/constants';

type State = {|
  loading: boolean,
|};

// comingFromOutside
type InternalProps = $ReadOnly<{||}>;

// comingFromConnect
type Props = $ReadOnly<{|
  ...InternalProps,
  componentId: string,
  logOutConnected: Function,
  logoutError: Object,
  setTheme: Function,
  theme: string,
|}>;

class Home extends React.Component<Props, State> {
  modalLoadingComponentId: string;

  state = { loading: false };

  logOut = () => {
    this.setState({ loading: true }, async () => {
      const { logOutConnected, componentId } = this.props;
      await logOutConnected();
      const { logoutError } = this.props;
      if (logoutError) {
        Alert.alert('ERROR ON LOGOUT');
        this.setState({ loading: false });
      } else goToPage(componentId, 'welcome');
    });
  };

  showModalWay1 = async () => {
    await showModal('loading', {
      setModalComponentId: (modalComponentId: string) => {
        this.modalLoadingComponentId = modalComponentId;
      },
    });
    setTimeout(async () => {
      hideModal(this.modalLoadingComponentId);
    }, 1000);
  };

  showModalWay2 = async () => {
    await showModal('loading');
    setTimeout(() => {
      hideAllModals();
    }, 1000);
  };

  render(): React.Node {
    const { loading } = this.state;
    const { componentId, setTheme, theme } = this.props;

    return (
      <Container>
        <TextContainer>
          <Typography color={colors.primaryText(theme)} size={18}>
            HOME
          </Typography>
        </TextContainer>
        <Button
          buttonColor={colors.primary(theme)}
          textColor={colors.primaryText(theme)}
          text="Component Examples"
          onPress={(): * => goToPage(componentId, 'componentsExample')}
        />
        <Spacing />
        <Button
          buttonColor={colors.primary(theme)}
          textColor={colors.primaryText(theme)}
          text="redux-form example"
          onPress={(): * => goToPage(componentId, 'reduxForm')}
        />
        <Spacing />
        <Button
          buttonColor={colors.primary(theme)}
          textColor={colors.primaryText(theme)}
          text="show modal (code way 1)"
          onPress={this.showModalWay1}
        />
        <Spacing />
        <Button
          buttonColor={colors.primary(theme)}
          textColor={colors.errorText(theme)}
          text="show modal (code way 2)"
          onPress={this.showModalWay2}
        />
        <Spacing />
        <Button
          buttonColor={colors.primary(theme)}
          textColor={colors.primaryText(theme)}
          text="DeviceInfo Example"
          onPress={(): * => goToPage(componentId, 'deviceInfoExample')}
        />
        <Spacing />
        <Button
          buttonColor={colors.primary(theme)}
          textColor={colors.primaryText(theme)}
          text="Set dark theme"
          onPress={(): * => setTheme(DARK)}
        />
        <Spacing />
        <Button
          buttonColor={colors.primary(theme)}
          textColor={colors.primaryText(theme)}
          text="Set light theme"
          onPress={(): * => setTheme(LIGHT)}
        />
        <Spacing />
        <Button
          buttonColor={colors.opacity(theme)}
          textColor={colors.primaryText(theme)}
          text="Logout"
          onPress={this.logOut}
          loading={loading}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state: *): * => ({
  logoutError: state.auth.logoutError,
});

const mapDispatchToProps = (dispatch: *): * =>
  bindActionCreators(
    {
      logOutConnected: logOut,
    },
    dispatch,
  );

export default compose(
  connect<Props, InternalProps, *, *, *, *>(
    mapStateToProps,
    mapDispatchToProps,
  )(Home),
);
