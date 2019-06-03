import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { View, ActivityIndicator } from 'react-native';
import { PropTypes } from 'prop-types';

import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import colors from '../../utils/colors';
import { initApp } from '../index';
import { USER_TOKEN } from '../../../config';

import { initData } from './initData';

import styles from './styles';
import { waitOneSecond } from '../../utils/seconds';

class Initializing extends React.Component {
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

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.principal} />
      </View>
    );
  }
}

Initializing.propTypes = {
  initDataConnected: PropTypes.any.isRequired,
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ initDataConnected: initData }, dispatch);

export default compose(
  connect(
    null,
    mapDispatchToProps,
  )(Initializing),
);
