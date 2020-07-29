import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import DrawerContent from '../component/DrawerItems';
import Screens from './MainRoute';
import WelcomeScreen from '../screen/WelcomeScreen';

import AppStyle from '../config/AppStyle';

const Drawer = createDrawerNavigator();

const drawerStyles = {
  flex: 1,
  width: '70%',
  backgroundColor: AppStyle.COLOR.GREY_DARK,
};

const DrawerNav = (props) => {
  return (
    <Drawer.Navigator
      // hideStatusBar
      drawerType="front"
      overlayColor="transparent"
      drawerStyle={drawerStyles}
      contentContainerStyle={{flex: 1}}
      drawerContentOptions={{
        activeBackgroundColor: 'transparent',
        activeTintColor: 'white',
        inactiveTintColor: 'white',
      }}
      sceneContainerStyle={{backgroundColor: 'transparent'}}
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Screens">
        {(props) => <Screens {...props} />}
      </Drawer.Screen>
      {/* <Drawer.Screen name="Welcome" component={WelcomeScreen} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNav;
