// @flow

import * as React from 'react';
import { Alert } from 'react-native';

import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { _Container, _TextContainer, _Button } from './styled';
import { Spacing, Typography } from '../../components';

import { goToPage, showModal, hideModal, hideAllModals } from '..';
import Colors from '../../utils/colors';
import { logOut } from '../../actions/auth';

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
    const { componentId } = this.props;
    return (
      <_Container>
        <_TextContainer>
          <Typography color={Colors.text.white} size={18}>
            HOME
          </Typography>
        </_TextContainer>
        <_Button
          buttonColor={Colors.global.white}
          textColor={Colors.global.principal}
          text="Component Examples"
          onPress={(): * => goToPage(componentId, 'componentsExample')}
        />
        <Spacing />
        <_Button
          buttonColor={Colors.global.white}
          textColor={Colors.global.principal}
          text="redux-form example"
          onPress={(): * => goToPage(componentId, 'reduxForm')}
        />
        <Spacing />
        <_Button
          buttonColor={Colors.global.white}
          textColor={Colors.global.black}
          text="show modal way 1"
          onPress={this.showModalWay1}
        />
        <Spacing />
        <_Button
          buttonColor={Colors.global.white}
          textColor={Colors.global.errorBackground}
          text="show modal way 2"
          onPress={this.showModalWay2}
        />
        <Spacing />
        <_Button
          buttonColor={Colors.global.white}
          textColor={Colors.global.principal}
          text="DeviceInfo Example"
          onPress={(): * => goToPage(componentId, 'deviceInfoExample')}
        />
        <Spacing />
        <_Button
          buttonColor={`${Colors.global.black}80`}
          textColor={Colors.global.white}
          text="Logout"
          onPress={this.logOut}
          loading={loading}
        />
      </_Container>
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
