// @flow

import * as React from 'react';
import { ActivityIndicator } from 'react-native';
import colors from '../../utils/colors';
import { Container } from './styled';

type State = {|
  loading: boolean,
|};

// comingFromOutside
type InternalProps = $ReadOnly<{|
  setModalComponentId: Function,
|}>;

// comingFromConnect
type Props = $ReadOnly<{|
  ...InternalProps,
  componentId: string,
  theme: string,
|}>;

class Loading extends React.Component<Props, State> {
  componentDidMount() {
    const { setModalComponentId, componentId } = this.props;
    if (setModalComponentId) setModalComponentId(componentId);
  }

  render(): React.Node {
    const { theme } = this.props;
    return (
      <Container>
        <ActivityIndicator size="large" color={colors.primaryText(theme)} />
      </Container>
    );
  }
}

export default Loading;
