import React, {useState, useEffectf, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/FontAwesome';

//Screens
import HomeScreen from '../screen/HomeScreen';
import SplashScreen from '../screen/SplashScreen';

const Stack = createStackNavigator();

function AppNavigator() {
  const [isLoading, setLoading] = useState(true);


  useEffect(() => {
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
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
