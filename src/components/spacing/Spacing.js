// @flow

import * as React from 'react';
import { View } from 'react-native';
import { responsiveSize } from '../../utils/dimensions';

type State = {||};

type Props = $ReadOnly<{|
  size?: number,
  horizontal?: boolean,
|}>;

const _default = {
  size: 12,
  horizontal: false,
};

class Spacing extends React.Component<Props, State> {
  render(): React.Node {
    // ─────default props────────────────────────────────────────────────────────────
    const isNotUndefined = (prop: *): boolean => !(prop === undefined);
    const { size: _size, horizontal: _horizontal } = this.props;
    const { size, horizontal }: Props = {
      size: isNotUndefined(_size) ? _size : _default.size,
      horizontal: isNotUndefined(_horizontal) ? _horizontal : _default.horizontal,
    };
    // ─────default props────────────────────────────────────────────────────────────

    if (horizontal) {
      return <View style={{ height: '100%', width: responsiveSize(size) }} />;
    }
    return <View style={{ height: responsiveSize(size), width: '100%' }} />;
  }
}

export default Spacing;
