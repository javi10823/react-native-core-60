// @flow

import * as React from 'react';
import { Animated, View } from 'react-native';
import IconImage from '../../assets/images/common/placeholder.png';
import { Placeholder, Image } from './styled';

type State = {|
  opacity: Animated.Value,
  loaded: boolean,
|};

type Props = $ReadOnly<{|
  withPlaceholder?: boolean,
  style?: Object,
|}>;

const AnimatedImage = ({
  opacity,
  style,
  onLoad,
  onLoadEnd,
  extraProps,
}: {
  opacity: Animated.Value,
  style: Object,
  onLoad: Function,
  onLoadEnd: Function,
  extraProps: *,
}): * => (
  <Animated.Image
    {...extraProps}
    onLoad={onLoad}
    onLoadEnd={onLoadEnd}
    style={[
      {
        opacity,
        transform: [
          {
            scale: opacity.interpolate({
              inputRange: [0, 1],
              outputRange: [0.85, 1],
            }),
          },
        ],
      },
      style,
    ]}
  />
);

class DefaultProfileImageOnLoading extends React.Component<Props, State> {
  static defaultProps = {
    withPlaceholder: false,
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
    const { withPlaceholder, style } = this.props;

    if (withPlaceholder) {
      return (
        <View>
          <Placeholder style={style} loaded={loaded}>
            <Image source={IconImage} />
          </Placeholder>
          <AnimatedImage
            opacity={opacity}
            style={style}
            onLoad={this.onLoad}
            onLoadEnd={(): * => this.setState({ loaded: true })}
            extraProps={this.props}
          />
        </View>
      );
    }

    return (
      <AnimatedImage
        opacity={opacity}
        style={style}
        onLoad={this.onLoad}
        onLoadEnd={(): * => this.setState({ loaded: true })}
        extraProps={this.props}
      />
    );
  }
}

export default DefaultProfileImageOnLoading;
