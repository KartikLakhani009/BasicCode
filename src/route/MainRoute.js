import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//Screens
import HomeScreen from '../screen/HomeScreen';
import SplashScreen from '../screen/SplashScreen';
import PasswordScreen from '../screen/PasswordScreen';
import LoginScreen from '../screen/LoginScreen';
import AuthScreen from '../screen/AuthScrren';
import WelcomeScreen from '../screen/WelcomeScreen';

import AppStyle from '../config/AppStyle';

const Stack = createStackNavigator();

const headerTitle = (Title) => (
  <View>
    <Text
      style={{
        color: AppStyle.COLOR.WHITE_OFF,
        fontSize: AppStyle.fontSizeH3,
        textAlign: 'center',
        fontWeight: 'bold',
      }}>
      {Title}
    </Text>
    <Text
      style={{
        color: AppStyle.COLOR.WHITE_OFF,
        fontSize: AppStyle.fontSizeH4_5,
      }}>
      BasisCode Complinace
    </Text>
  </View>
);

const Screens = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerBackground:
        headerStyle: {backgroundColor: AppStyle.COLOR.Sacramento_Green},
        headerTitleStyle: {color: AppStyle.COLOR.WHITE_OFF},
        headerTitleAlign: 'center',
        headerRight: () => (
          <Icon.Button
            name="menu"
            size={25}
            color={AppStyle.COLOR.WHITE_OFF}
            backgroundColor="transparent"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}>
      <Stack.Screen name="Home" options={{title: headerTitle('Home')}}>
        {(props) => <HomeScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen name="Welcome" options={{title: headerTitle('Welcome')}}>
        {(props) => <WelcomeScreen {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default Screens;
