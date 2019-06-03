/* eslint-disable react/prop-types */
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import colors from '../../utils/colors';

import ImagePlaceholder from '../../components/image-placeholder';

import Typography from '../../components/typography';
import Button from '../../components/button';
import Spacing from '../../components/spacing';
import SpacingVariants from '../../components/spacing/styles';
import styles from './styles';

import { goBack } from '..';

class Welcome extends React.Component {
  static options = () => ({ topBar: { visible: false, height: 0 } });

  render() {
    const { componentId } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.componentsContainer}>
          <Spacing spacing={SpacingVariants.large.name} />
          <Button
            text="Go back"
            style={styles.buttonSignUp}
            textColor={colors.global.principal}
            onPress={() => goBack(componentId)}
          />
          <Spacing spacing={SpacingVariants.default.name} />
          <Typography color={colors.global.white} size={18}>
            Typography example
          </Typography>
          <Spacing spacing={SpacingVariants.default.name} />
          <Button text="BUTTON EXAMPLE 1" style={styles.buttonSignIn} />
          <Spacing spacing={SpacingVariants.default.name} />
          <Button
            text="BUTTON EXAMPLE 2"
            style={styles.buttonSignUp}
            textColor={colors.global.principal}
          />
          <Spacing spacing={SpacingVariants.default.name} />
          <View style={styles.imageContainer}>
            <ImagePlaceholder
              source={{
                uri: 'https://www.dropbox.com/s/0gfn7kvtwkfd9t0/AWS%20Pop-up%20Loft.jpg?dl=1',
              }}
              style={styles.imageStyle}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Welcome;
