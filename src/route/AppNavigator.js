import React, {useState,  useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';

import Icon from 'react-native-vector-icons/FontAwesome';

//Screens
import HomeScreen from '../screen/HomeScreen';
import SplashScreen from '../screen/SplashScreen';
import PasswordScreen from '../screen/PasswordScreen';
import LoginScreen from '../screen/LoginScreen';
import AuthScreen from '../screen/AuthScrren';

//Practices 
import LoginPractice from '../Practice/LoginScreen'

//other files
import { USER } from '../config/GlobalStatics'

const Stack = createStackNavigator();

function AppNavigator() {
  const [isLoading, setLoading] = useState(true);
  const [isUser,setUser] = useState(null);

  useEffect(() => {

  
    const check =  async () => {
      // const value = { uid: 100, email: 'abc@z.in', validToken: false };

      // console.log('user :', value);
      // await AsyncStorage.setItem(USER, JSON.stringify(value)).catch((e) =>
      //   console.log('Storage add error : ', e)
      // );

      await AsyncStorage.getItem(USER)
        .then((json) => {
          if (json != null) setUser(JSON.parse(json));
          else setUser(null);
        })
        .catch((e) => {
          console.log('Async Storage Error occur : ', e);
          setUser(null);
        });
      }
    check();

  setTimeout(() => {
    if (isLoading == true) {
      setLoading(false);
    }
  }, 3000);
    
  console.log("Loading value :  ", isLoading);

  },[isLoading]);

  if(isLoading ==true)
  {
    return <SplashScreen/>
  }
  
  return (
    <NavigationContainer>    
      <Stack.Navigator headerMode={'none'} 
      initialRouteName ={isUser!=null?
      (isUser.validToken != null?("Home"):("PasswordScreen"))
      :("LoginPractice")}
      // initialRouteName={"PasswordScreen"}
      >
      {/* {isUser!=null?(isUser.validToken != null?
      (<Stack.Screen name="Home" component={HomeScreen} />)
      :(<Stack.Screen name="PasswordScreen" component={PasswordScreen} />))
      :(<Stack.Screen name="Login" component={LoginScreen} />)}       */}
      <Stack.Screen name="Home" component={HomeScreen} /> 
      <Stack.Screen name="PasswordScreen" component={PasswordScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="LoginPractice" component={LoginPractice} />
      <Stack.Screen name="AuthScreen" userData={isUser} component={AuthScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
