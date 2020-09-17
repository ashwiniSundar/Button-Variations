import React from 'react';
import {store, persistor} from './redux/store';
import {Provider} from 'react-redux';
import {AppContainer} from './AppNavigator';
import {PersistGate} from 'redux-persist/integration/react';

import Navigation from './NavigationService';
import SplashScreen from 'react-native-splash-screen';

export default class App extends React.Component {
  componentDidMount() {
    setTimeout(() => SplashScreen.hide(), 0);
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppContainer
            ref={navigatorRef => {
              Navigation.setTopLevelNavigator(navigatorRef);
            }}
          />
        </PersistGate>
      </Provider>
    );
  }
}
