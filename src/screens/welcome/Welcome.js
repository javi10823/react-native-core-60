// @flow

import * as React from 'react';
import { Alert, Image, Linking } from 'react-native';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Typography from '../../components/typography';
import Spacing from '../../components/spacing';
import { _Container, _TextContainer, _Button, _LogoContainer } from './styled';

import { goToPage } from '..';
import Colors from '../../utils/colors';
import { logIn } from '../../actions/auth';

import NextDotsLogo from '../../assets/images/common/nextDotsLogo.png';

type State = {|
  loading: boolean,
|};

// comingFromOutside
type InternalProps = $ReadOnly<{||}>;

// comingFromConnect
type Props = $ReadOnly<{|
  ...InternalProps,
  componentId: string,
  logInConnected: Function,
  loginError: Object,
|}>;

class Welcome extends React.Component<Props, State> {
  state = { loading: false };

  logIn = () => {
    this.setState({ loading: true }, async () => {
      const { logInConnected, componentId } = this.props;
      await logInConnected();
      this.setState({ loading: false }, () => {
        const { loginError } = this.props;
        if (loginError) Alert.alert('ERROR ON LOGIN');
        else goToPage(componentId, 'home');
      });
    });
  };

  render(): React.Node {
    const { loading } = this.state;
    return (
      <_Container>
        <_LogoContainer onPress={(): * => Linking.openURL('http://nextdots.com/')}>
          <Image source={NextDotsLogo} style={{ width: '100%' }} resizeMode="contain" />
        </_LogoContainer>
        <_TextContainer>
          <Typography color={Colors.text.white} size={18}>
            {`React Native BoilerPlate\nJunio 2019 0.59`}
          </Typography>
          <Spacing />
          <Typography color={Colors.text.white}>nextdots.com</Typography>
        </_TextContainer>
        <_Button
          buttonColor={Colors.global.white}
          textColor={Colors.text.primary}
          text="Ingresar"
          onPress={this.logIn}
          loading={loading}
        />
      </_Container>
    );
  }
}

const mapStateToProps = (state: *): * => ({
  loginError: state.auth.loginError,
});

const mapDispatchToProps = (dispatch: *): * =>
  bindActionCreators(
    {
      logInConnected: logIn,
    },
    dispatch,
  );

export default compose(
  connect<Props, InternalProps, *, *, *, *>(
    mapStateToProps,
    mapDispatchToProps,
  )(Welcome),
);
