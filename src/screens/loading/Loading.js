import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import colors from '../../utils/colors';
import styles from './styles';

class Loading extends React.Component {
  componentDidMount() {
    const { setModalComponentId, componentId } = this.props; // eslint-disable-line react/prop-types
    if (setModalComponentId) setModalComponentId(componentId);
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.global.white} />
      </View>
    );
  }
}

export default Loading;
