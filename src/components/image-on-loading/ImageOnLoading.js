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
  withPlaceholder?: boolean,
  style?: Object,
|}>;

const _default = {
  withPlaceholder: false,
  style: {},
};

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
    const { withPlaceholder: _withPlaceholder, style: _style } = this.props;
    const { withPlaceholder, style }: Props = {
      withPlaceholder: isNotUndefined(_withPlaceholder)
        ? _withPlaceholder
        : _default.withPlaceholder,
      style: isNotUndefined(_style) ? _style : _default.style,
    };
    // ─────default props────────────────────────────────────────────────────────────

    if (withPlaceholder) {
      return (
        <View>
          <_Placeholder style={[style, { zIndex: loaded ? -1 : 1 }]}>
            <Image source={IconImage} style={{ width: 100, height: 100 }} />
          </_Placeholder>
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
