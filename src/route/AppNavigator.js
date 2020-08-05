import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';

//Navigator
import DrawerNav from './DrawerNavigator';
import AuthRoute from './AuthRoute';

import SplashScreen from '../screen/SplashScreen';

const Stack = createStackNavigator();

//other files
import {USER} from '../config/GlobalStatics';

function AppNavigator() {
  const [isLoading, setLoading] = useState(true);
  const [isUser, setUser] = useState(null);

  useEffect(() => {
    const check = async () => {
      const value = {uid: 100, email: 'abc@z.in', validToken: true};

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
    };
    // check();

    // const value = {uid: 100, email: 'abc@z.in', validToken: true};
    // setUser(value);

    // setTimeout(() => {
    //   if (isLoading == true) {
    //     setLoading(false);
    //   }
    // }, 3000);

    console.log('Loading value :  ', isLoading);
  }, [isLoading]);

  // if (isLoading == true) {
  //   return <SplashScreen />;
  // }

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        {isUser && isUser.validToken == true ? (
          <Stack.Screen name="Drawer" component={DrawerNav} />
        ) : (
          <Stack.Screen name="Auth" initialParams={{user: isUser}}>
            {/* here is user parameter passing problem  */}
            {(props) => <AuthRoute {...props} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
      {/* <DrawerNav /> */}
    </NavigationContainer>
  );
}

export default AppNavigator;
