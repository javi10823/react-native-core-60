import { YellowBox } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './src/screens';

YellowBox.ignoreWarnings(['Require cycle:', 'Node of type rule not supported as an inline style']);

registerScreens();
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'initializing',
      },
    },
  });
});
