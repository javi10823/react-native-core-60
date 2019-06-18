import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import store from '../store';
import Welcome from './welcome';
import ComponentsExample from './componentsExample';
import Home from './home';
import Initializing from './initializing';
import Loading from './loading';
import ReduxForm from './reduxForm';
import DeviceInfoExample from './deviceInfoExample';

export function initApp(screen = 'welcome') {
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

export const goToPage = (componentId, page, props) => {
  Navigation.push(componentId, {
    component: {
      name: page,
      passProps: props,
    },
  });
};

export const goBack = componentId => Navigation.pop(componentId);

export const showModal = (page, props) => {
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

export const hideAllModals = () => {
  return new Promise(resolve => {
    Navigation.dismissAllModals().catch(() => {});
    setTimeout(() => resolve(), 500);
  });
};

export const hideModal = async componentId => Navigation.dismissModal(componentId).catch(() => {});

// register all screens of the app (including internal ones)
// prettier-ignore
export function registerScreens() {
  Navigation.registerComponentWithRedux( 'initializing', () => Initializing, Provider, store );
  Navigation.registerComponentWithRedux( 'loading', () => Loading, Provider, store );
  Navigation.registerComponentWithRedux( 'welcome', () => Welcome, Provider, store );
  Navigation.registerComponentWithRedux( 'home', () => Home, Provider, store );
  Navigation.registerComponentWithRedux( 'componentsExample', () => ComponentsExample, Provider, store );
  Navigation.registerComponentWithRedux( 'reduxForm', () => ReduxForm, Provider, store );
  Navigation.registerComponentWithRedux( 'deviceInfoExample', () => DeviceInfoExample, Provider, store );
}
