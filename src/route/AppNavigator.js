import React, {useState, useEffectf, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';

import Icon from 'react-native-vector-icons/FontAwesome';

//Screens
import HomeScreen from '../screen/HomeScreen';
import SplashScreen from '../screen/SplashScreen';

//other files
import { USER_TOKEN } from '../config/GlobalStatics'

const Stack = createStackNavigator();

function AppNavigator() {
  const [isLoading, setLoading] = useState(true);
  const [isUser,getUser] = useState(null);

  useEffect(() => {

  
     getUser(await AsyncStorage.getItem(USER_TOKEN)
     .catch(e=>console.log("Async Storage Error occur : ",e)));
    
  setTimeout(() => {
    if (isLoading == true) {
      setLoading(false);
    }
  }, 3000);
    
  });

  if(isLoading ==true)
  {
    return <SplashScreen/>
  }
  
  return (
    <NavigationContainer>
    
      <Stack.Navigator>
      {isUser!=null?(isUser.validToken != null?
      ( <Stack.Screen name="Home" component={HomeScreen} />)
      :(<Stack.Screen name="PasswordScreen" component={PasswordScreen} />))
      :(<Stack.Screen name="Login" component={LoginScreen} />)}
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
