/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AppNavigator from './src/route/AppNavigator'
// import WelcomeScreen from './src/screen/WelcomeScreen'

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './src/reducer/index';
import thunk from 'redux-thunk'

const store = createStore(reducer, applyMiddleware(thunk));

const Appcontainer = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Appcontainer);