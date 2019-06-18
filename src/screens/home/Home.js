/* eslint-disable react/prop-types */
import React from 'react';
import { Alert } from 'react-native';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Typography from '../../components/typography';
import { Container, TextContainer, Button } from './styles';

import { goToPage, showModal, hideModal, hideAllModals } from '..';
import Colors from '../../utils/colors';
import { logOut } from '../../actions/auth';
import Spacing from '../../components/spacing';

class Welcome extends React.Component {
  state = { loading: false };

  logOut = () => {
    this.setState({ loading: true }, async () => {
      const { logOutConnect, componentId } = this.props;
      await logOutConnect();
      const { logoutError } = this.props; // eslint-disable-line react/prop-types
      if (logoutError) {
        Alert.alert('ERROR ON LOGOUT');
        this.setState({ loading: false });
      } else goToPage(componentId, 'welcome');
    });
  };

  showModalWay1 = async () => {
    await showModal('loading', {
      setModalComponentId: modalComponentId => (this.modalLoadingComponentId = modalComponentId),
    });
    setTimeout(async () => hideModal(this.modalLoadingComponentId), 1000);
  };

  showModalWay2 = async () => {
    await showModal('loading');
    setTimeout(() => hideAllModals(), 1000);
  };

  render() {
    const { loading } = this.state;
    const { componentId } = this.props; // eslint-disable-line react/prop-types
    return (
      <Container>
        <TextContainer>
          <Typography color={Colors.text.white} size={18}>
            HOME
          </Typography>
        </TextContainer>
        <Button
          buttonColor={Colors.global.white}
          textColor={Colors.global.principal}
          text="Logout"
          onPress={this.logOut}
          loading={loading}
        />
        <Spacing />
        <Button
          buttonColor={Colors.global.white}
          textColor={Colors.global.principal}
          text="Component Examples"
          onPress={() => goToPage(componentId, 'componentsExample')}
        />
        <Spacing />
        <Button
          buttonColor={Colors.global.white}
          textColor={Colors.global.principal}
          text="redux-form example"
          onPress={() => goToPage(componentId, 'reduxForm')}
        />
        <Spacing />
        <Button
          buttonColor={Colors.global.white}
          textColor={Colors.global.black}
          text="show modal way 1"
          onPress={this.showModalWay1}
        />
        <Spacing />
        <Button
          buttonColor={Colors.global.white}
          textColor={Colors.global.errorBackground}
          text="show modal way 2"
          onPress={this.showModalWay2}
        />
        <Spacing />
        <Button
          buttonColor={Colors.global.white}
          textColor={Colors.global.principal}
          text="DeviceInfo Example"
          onPress={() => goToPage(componentId, 'deviceInfoExample')}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  logoutError: state.auth.logoutError,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      logOutConnect: logOut,
    },
    dispatch,
  );

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Welcome),
);
