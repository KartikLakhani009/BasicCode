import React, {useState, useEffect} from 'react';

import {createStackNavigator} from '@react-navigation/stack';

//Screens
import HomeScreen from '../screen/HomeScreen';
import PasswordScreen from '../screen/PasswordScreen';
import LoginScreen from '../screen/LoginScreen';
import AuthScreen from '../screen/AuthScrren';
import WelcomeScreen from '../screen/WelcomeScreen';

const Stack = createStackNavigator();

const user = {uid: 100, email: 'abc@z.in', validToken: true};

const AuthRoute = (props) => {
  // const {
  //   route: {params: user},
  // } = props;       // here user fetch parameter problem fix as use

  console.log('User :', user);
  console.log(
    'Contion check : ',
    user != null
      ? user.validToken == true
        ? 'Home'
        : 'PasswordScreen'
      : 'Login',
  );
  return (
    <Stack.Navigator
      headerMode={'none'}

      // initialRouteName={'DrawerContent'}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="PasswordScreen"
        component={PasswordScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      {/* <Stack.Screen name="LoginPractice" component={LoginPractice} /> */}
      {/* <Stack.Screen name="AuthScreen" userData={user} component={AuthScreen} /> */}
    </Stack.Navigator>
  );
};

export default AuthRoute;
