// @flow

import * as React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { ActivityIndicator } from 'react-native';

import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { initApp } from '../index';
import { USER_TOKEN } from '../../../config';

import { initData } from './initData';

import { Container } from './styled';
import { waitOneSecond } from '../../utils/seconds';

type State = {|
  loading: boolean,
|};

// comingFromOutside
type InternalProps = {||};

// comingFromConnect
type Props = {|
  ...InternalProps,
  initDataConnected: Function,
|};

class Initializing extends React.Component<Props, State> {
  async componentDidMount() {
    const { initDataConnected } = this.props;
    try {
      await waitOneSecond(); // only for demo
      const userLogged = await AsyncStorage.getItem(USER_TOKEN);
      console.log('userLogged', userLogged);
      if (userLogged) {
        await initDataConnected(userLogged);
        initApp('home');
      } else initApp();
    } catch (err) {
      initApp();
    }
  }

  render(): React.Node {
    return (
      <Container>
        <ActivityIndicator size="large" />
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch: *): * =>
  bindActionCreators(
    {
      initDataConnected: initData,
    },
    dispatch,
  );

export default compose(
  connect<Props, InternalProps, *, *, *, *>(
    null,
    mapDispatchToProps,
  )(Initializing),
);
