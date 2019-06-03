import React from 'react';
import { Animated, View, Image } from 'react-native';
import IconImage from '../../assets/images/common/placeholder.png';
import styles from './styles';

class ImagePlaceholder extends React.Component {
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

  render() {
    const { opacity, loaded } = this.state;
    const { props } = this;

    return (
      <View>
        <View style={[styles.placeholder, props.style, { zIndex: loaded ? -1 : 1 }]}>
          <Image source={IconImage} style={{ width: 100, height: 100 }} />
        </View>
        <Animated.Image
          {...props}
          onLoad={this.onLoad}
          onLoadEnd={() => this.setState({ loaded: true })}
          style={[{ opacity }, props.style]}
        />
      </View>
    );
  }
}

export default ImagePlaceholder;
