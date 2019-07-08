// @flow

import * as React from 'react';
import { Animated, View, Image } from 'react-native';
import IconImage from '../../assets/images/common/placeholder.png';
import { Placeholder } from './styled';

type State = {|
  opacity: Animated.Value,
  loaded: boolean,
|};

type Props = $ReadOnly<{|
  style?: Object,
|}>;

class ImagePlaceholder extends React.Component<Props, State> {
  static defaultProps = {
    style: {},
  };

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
    const { style } = this.props;

    return (
      <View>
        <Placeholder style={[style || {}, { zIndex: loaded ? -1 : 1 }]}>
          <Image source={IconImage} style={{ width: 100, height: 100 }} />
        </Placeholder>
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
