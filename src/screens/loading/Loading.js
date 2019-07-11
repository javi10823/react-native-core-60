// @flow

import * as React from 'react';
import { ActivityIndicator } from 'react-native';
import { Container } from './styled';

type State = {|
  loading: boolean,
|};

// comingFromOutside
type InternalProps = {|
  setModalComponentId: Function,
|};

// comingFromConnect
type Props = {|
  ...InternalProps,
  componentId: string,
|};

class Loading extends React.Component<Props, State> {
  componentDidMount() {
    const { setModalComponentId, componentId } = this.props;
    if (setModalComponentId) setModalComponentId(componentId);
  }

  render(): React.Node {
    return (
      <Container>
        <ActivityIndicator size="large" />
      </Container>
    );
  }
}

export default Loading;
