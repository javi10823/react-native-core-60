// @flow
import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Container } from './styled';
import colors from '../../../utils/colors';

type State = {||};

type Props = $ReadOnly<{|
  componentColor?: string,
  onPress?: Function,
|}>;

class _ComponentScheme extends React.Component<Props, State> {
  static defaultProps = {
    componentColor: colors.primary(),
    onPress: (): * => {},
  };

  render(): React.Node {
    const { componentColor, onPress } = this.props;

    return (
      <Container backgroundColor={componentColor}>
        <TouchableOpacity onPress={onPress}>
          <View />
        </TouchableOpacity>
      </Container>
    );
  }
}

export const ComponentScheme: typeof _ComponentScheme = _ComponentScheme;
