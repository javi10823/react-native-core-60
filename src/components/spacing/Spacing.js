// @flow

import * as React from 'react';
import { View } from 'react-native';
import { responsiveSize } from '../../utils/dimensions';

type State = {||};

type Props = $ReadOnly<{|
  size?: number,
  horizontal?: boolean,
|}>;

class Spacing extends React.Component<Props, State> {
  static defaultProps = {
    size: 12,
    horizontal: false,
  };

  render(): React.Node {
    const { size, horizontal } = this.props;

    if (horizontal) {
      return <View style={{ height: '100%', width: responsiveSize(size) }} />;
    }
    return <View style={{ height: responsiveSize(size), width: '100%' }} />;
  }
}

export default Spacing;
