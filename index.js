import { YellowBox } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './src/screens';

YellowBox.ignoreWarnings(['Require cycle:']);

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
