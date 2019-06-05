import React from 'react';
import { ActivityIndicator } from 'react-native';
import colors from '../../utils/colors';
import { Container } from './styles';

class Loading extends React.Component {
  componentDidMount() {
    const { setModalComponentId, componentId } = this.props; // eslint-disable-line react/prop-types
    if (setModalComponentId) setModalComponentId(componentId);
  }

  render() {
    return (
      <Container>
        <ActivityIndicator size="large" color={colors.global.white} />
      </Container>
    );
  }
}

export default Loading;
