import React, {useState, useEffect} from 'react';

import {createStackNavigator} from '@react-navigation/stack';

//Screens
import HomeScreen from '../screen/HomeScreen';
import PasswordScreen from '../screen/PasswordScreen';
import LoginScreen from '../screen/LoginScreen';
import AuthScreen from '../screen/AuthScrren';
import WelcomeScreen from '../screen/WelcomeScreen';

const AuthRoute = (props) => {
  const {isUser} = props;
  return (
    <Stack.Navigator
      headerMode={'none'}
      // initialRouteName ={isUser!=null?
      // (isUser.validToken != null?("Home"):("PasswordScreen"))
      // :("Login")}
      initialRouteName={'DrawerContent'}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="PasswordScreen" component={PasswordScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      {/* <Stack.Screen name="LoginPractice" component={LoginPractice} /> */}
      {/* <Stack.Screen name="AuthScreen" userData={isUser} component={AuthScreen} /> */}
      <Stack.Screen name="DrawerContent" component={DrawerContent} />
    </Stack.Navigator>
  );
};

export default AuthRoute;
