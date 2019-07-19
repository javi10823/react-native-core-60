// @flow

import { Navigation } from 'react-native-navigation';
import registerScreen from './provider';
import Welcome from './welcome';
import ComponentsExample from './componentsExample';
import Home from './home';
import Initializing from './initializing';
import Loading from './loading';
import ReduxForm from './reduxForm';
import DeviceInfoExample from './deviceInfoExample';

export function initApp(screen: string = 'welcome') {
  Navigation.setRoot({
    root: {
      stack: {
        id: screen,
        children: [
          {
            component: {
              name: screen,
            },
          },
        ],
        options: {
          topBar: {
            visible: false,
            drawBehind: true,
          },
        },
      },
    },
  });
}

export const goToPage = (componentId: string, page: string, props: Object) => {
  Navigation.push(componentId, {
    component: {
      name: page,
      passProps: props,
    },
  });
};

export const goBack = (componentId: string): * => Navigation.pop(componentId);

export const showModal = (page: string, props: Object) => {
  Navigation.showModal({
    component: {
      name: page,
      passProps: props,
      options: {
        layout: { backgroundColor: 'transparent' },
        screenBackgroundColor: 'transparent',
        modalPresentationStyle: 'overCurrentContext',
        topBar: {
          visible: false,
          drawBehind: true,
        },
      },
    },
  });
};

export const hideAllModals = (): * => {
  return new Promise((resolve: *) => {
    Navigation.dismissAllModals().catch(() => {});
    setTimeout((): * => resolve(), 500);
  });
};

export const hideModal = async (componentId: string): * =>
  Navigation.dismissModal(componentId).catch(() => {});

// register all screens of the app (including internal ones)
export function registerScreens() {
  registerScreen('initializing', Initializing);
  registerScreen('loading', Loading);
  registerScreen('welcome', Welcome);
  registerScreen('home', Home);
  registerScreen('componentsExample', ComponentsExample);
  registerScreen('reduxForm', ReduxForm);
  registerScreen('deviceInfoExample', DeviceInfoExample);
}
