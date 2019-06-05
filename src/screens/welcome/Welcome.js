/* eslint-disable react/prop-types */
import React from 'react';
import { Alert, Image, Linking } from 'react-native';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Typography from '../../components/typography';
import Spacing from '../../components/spacing';
import { Container, TextContainer, Button, LogoContainer } from './styles';

import { goToPage } from '..';
import Colors from '../../utils/colors';
import { logIn } from '../../actions/auth';

import NextDotsLogo from '../../assets/images/common/nextDotsLogo.png';

class Welcome extends React.Component {
  state = { loading: false };

  logIn = () => {
    this.setState({ loading: true }, async () => {
      const { logInConnect, componentId } = this.props;
      await logInConnect();
      const { loginError } = this.props; // eslint-disable-line react/prop-types
      if (loginError) {
        Alert.alert('ERROR ON LOGIN');
        this.setState({ loading: false });
      } else goToPage(componentId, 'home');
    });
  };

  render() {
    const { loading } = this.state;
    return (
      <Container>
        <LogoContainer onPress={() => Linking.openURL('http://nextdots.com/')}>
          <Image source={NextDotsLogo} style={{ width: '100%' }} resizeMode="contain" />
        </LogoContainer>
        <TextContainer>
          <Typography color={Colors.text.white} size={18}>
            {`React Native BoilerPlate\nJunio 2019 0.59`}
          </Typography>
          <Spacing />
          <Typography color={Colors.text.white}>nextdots.com</Typography>
        </TextContainer>
        <Button
          buttonColor={Colors.global.white}
          textColor={Colors.text.primary}
          text="Ingresar"
          onPress={this.logIn}
          loading={loading}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  loginError: state.auth.loginError,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      logInConnect: logIn,
    },
    dispatch,
  );

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Welcome),
);
