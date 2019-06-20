// @flow

import * as React from 'react';
import { Animated, View, Image } from 'react-native';
import IconImage from '../../assets/images/common/placeholder.png';
import { _Placeholder } from './styled';

type State = {|
  opacity: Animated.Value,
  loaded: boolean,
|};

type Props = $ReadOnly<{|
  style?: Object,
|}>;

const _default = {
  withPlaceholder: false,
  style: {},
};

class ImagePlaceholder extends React.Component<Props, State> {
  state = {
    opacity: new Animated.Value(0),
    loaded: false,
  };

  onLoad = () => {
    const { opacity } = this.state;
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  render(): React.Node {
    const { opacity, loaded } = this.state;
    // ─────default props────────────────────────────────────────────────────────────
    const isNotUndefined = (prop: *): boolean => !(prop === undefined);
    const { style: _style } = this.props;
    const { style }: Props = {
      style: isNotUndefined(_style) ? _style : _default.style,
    };
    // ─────default props────────────────────────────────────────────────────────────

    return (
      <View>
        <_Placeholder style={[style || {}, { zIndex: loaded ? -1 : 1 }]}>
          <Image source={IconImage} style={{ width: 100, height: 100 }} />
        </_Placeholder>
        <Animated.Image
          {...this.props}
          onLoad={this.onLoad}
          onLoadEnd={(): * => this.setState({ loaded: true })}
          style={[{ opacity }, style || {}]}
        />
      </View>
    );
  }
}

export default ImagePlaceholder;
