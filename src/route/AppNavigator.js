import React, {useState, useEffect, useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';

//Navigator
import DrawerNav from './DrawerNavigator';
import AuthRoute from './AuthRoute';
import {AuthContext} from './context';

import SplashScreen from '../screen/SplashScreen';

const Stack = createStackNavigator();

//other files
import {USER} from '../config/GlobalStatics';

function AppNavigator() {
  const [isLoading, setLoading] = useState(true);
  const [isUser, setUser] = useState(null);

  const authContext = useMemo(() => {
    return {
      signIn: (value) => {
        // const value = {uid: 100, email: 'abc@z.in', validToken: true};
        setUser(value);
        setLoading(false);
        console.log('Hello new values : ', value);
      },
      signOut: () => {
        //   await AsyncStorage.setItem(USER,null).catch((e) =>{
        //   console.log('Storage add error : ', e);
        //   }
        // );
        console.log('Sign Out called');
        setLoading(false);
        setUser(null);
      },
    };
  }, []);

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

    setTimeout(() => {
      if (isLoading == true) {
        setLoading(false);
      }
    }, 2000);

    console.log('Loading value :  ', isLoading);
  }, [isLoading]);

  if (isLoading == true) {
    return <SplashScreen />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator headerMode={'none'}>
          {isUser && isUser.isLoggedIn == true ? (
            <Stack.Screen name="Drawer" component={DrawerNav} />
          ) : (
            <Stack.Screen name="Auth" initialParams={{user: isUser}}>
              {/*  here is user parameter passing problem   */}
              {(props) => <AuthRoute {...props} />}
            </Stack.Screen>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default AppNavigator;
