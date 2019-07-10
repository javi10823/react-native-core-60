import { YellowBox } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Sentry, SentryLog } from 'react-native-sentry';
import DeviceInfo from 'react-native-device-info';
import { registerScreens } from './src/screens';

YellowBox.ignoreWarnings(['Require cycle:', 'Node of type rule not supported as an inline style']);

Sentry.config('https://6521f9e40ae94bce8a75118eaccdb4e9@sentry.io/1501130', {
  deactivateStacktraceMerging: false,
  logLevel: SentryLog.Debug,
  disableNativeIntegration: false,
  handlePromiseRejection: true,
}).install();

const isStaging = DeviceInfo.getApplicationName()
  .toLowerCase()
  .includes('staging');

let sentryEnvironment = '';
if (isStaging && !__DEV__) sentryEnvironment = 'staging';
if (!isStaging && !__DEV__) sentryEnvironment = 'production';
if (__DEV__) sentryEnvironment = 'development';

// set the tag context
Sentry.setTagsContext({
  environment: sentryEnvironment,
  react: true,
});

Sentry.setExtraContext({
  version: DeviceInfo.getVersion,
  environmentAPI: isStaging ? 'staging' : 'production',
});

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
