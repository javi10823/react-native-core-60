/* eslint-disable react/prop-types */
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import colors from '../../utils/colors';

import Image from '../../components/image-on-loading';
import ImagePlaceholder from '../../components/image-placeholder';

import Typography from '../../components/typography';
import Button from '../../components/button';
import Spacing from '../../components/spacing';
import SpacingVariants from '../../components/spacing/styles';
import styles from '.';
import TypographyVariants from '../../components/typography/styles';

import { goBack } from '..';

import NextDotsLogo from '../../assets/images/common/nextDotsLogo.png';

class Welcome extends React.Component {
  static options = () => ({ topBar: { visible: false, height: 0 } });

  render() {
    const { componentId } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.componentsContainer}>
          <Typography variant={TypographyVariants.bodyTitle}>Typography example</Typography>
          <Spacing variant={SpacingVariants.xLarge} />
          <Button text="SIGN IN" style={styles.buttonSignIn} />
          <Spacing variant={SpacingVariants.smallPlus} />
          <Button
            text="SIGN UP FOR FREE"
            style={styles.buttonSignUp}
            textColor={colors.principal}
          />
          <Spacing variant={SpacingVariants.smallPlus} />
          <View style={styles.logoContainer}>
            <Image source={NextDotsLogo} resizeMode="contain" style={styles.logo} />
          </View>
          <View style={styles.imageContainer}>
            <ImagePlaceholder
              source={{
                uri: 'https://www.dropbox.com/s/0gfn7kvtwkfd9t0/AWS%20Pop-up%20Loft.jpg?dl=1',
              }}
              style={styles.imageStyle}
            />
          </View>
        </View>
        <Button text="Go back" onPress={() => goBack(componentId)} />
      </SafeAreaView>
    );
  }
}

export default Welcome;
