/* eslint-disable react/prop-types */
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Typography from '../../components/typography';
import Button from '../../components/button';
import Spacing from '../../components/spacing';
import SpacingVariants from '../../components/spacing/styles';
import styles from './styles';

import { goToPage } from '..';
import Colors from '../../utils/colors';

class Welcome extends React.Component {
  static options = () => ({ topBar: { visible: false, height: 0 } });

  render() {
    const { componentId } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.textContainer}>
          <Typography color={Colors.text.white} size={18}>
            React Native BoilerPlate Junio 2019 0.59
          </Typography>
          <Spacing size={SpacingVariants.default.name} />
          <Typography color={Colors.text.white}>nextdots.com</Typography>
        </View>
        <Button
          buttonColor={Colors.global.white}
          textColor={Colors.text.primary}
          text="Show components"
          onPress={() => goToPage(componentId, 'componentsExample')}
          style={styles.button}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.example.isFetching,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      // actionConnect: action,
    },
    dispatch,
  );

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Welcome),
);
