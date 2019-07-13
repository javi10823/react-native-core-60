// @flow

import * as React from 'react';
import { Alert, Image, Linking } from 'react-native';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Typography from '../../components/typography';
import Spacing from '../../components/spacing';
import { Container, TextContainer, Button, LogoContainer } from './styled';

import { goToPage } from '..';
import colors from '../../utils/colors';
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
  theme: string,
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
    const { theme } = this.props;
    return (
      <Container>
        <LogoContainer onPress={(): * => Linking.openURL('http://nextdots.com/')}>
          <Image source={NextDotsLogo} style={{ width: '100%' }} resizeMode="contain" />
        </LogoContainer>
        <TextContainer>
          <Typography color={colors.primaryText(theme)} size={18}>
            {`React Native BoilerPlate\nJunio 2019 0.59`}
          </Typography>
          <Spacing />
          <Typography color={colors.primaryText(theme)}>nextdots.com</Typography>
        </TextContainer>
        <Button
          buttonColor={colors.primary(theme)}
          textColor={colors.primaryText(theme)}
          text="Login"
          onPress={this.logIn}
          loading={loading}
        />
      </Container>
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
