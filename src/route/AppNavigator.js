import React, {useState,  useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-community/async-storage';
import { StyleSheet,View,Text} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//Screens
import HomeScreen from '../screen/HomeScreen';
import SplashScreen from '../screen/SplashScreen';
import PasswordScreen from '../screen/PasswordScreen';
import LoginScreen from '../screen/LoginScreen';
import AuthScreen from '../screen/AuthScrren';
import WelcomeScreen from '../screen/WelcomeScreen';

//Practices 
import LoginPractice from '../Practice/LoginScreen'
import DrawerContent from '../component/DrawerItems'

//other files
import { USER } from '../config/GlobalStatics'
import AppStyle from '../config/AppStyle';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const headerTitle = (Title)=>(<View>
  <Text style={{color:AppStyle.COLOR.WHITE_OFF, fontSize:AppStyle.fontSizeH3, 
  textAlign:'center',fontWeight:'bold'}}>
  {Title}</Text>
  <Text style={{color:AppStyle.COLOR.WHITE_OFF, fontSize:AppStyle.fontSizeH4_5}}>
  BasisCode Complinace</Text>
</View>
);

const Screens = ({ navigation }) => {
  return (
      <Stack.Navigator
      
        screenOptions={{
          // headerBackground:
          headerStyle:{backgroundColor:AppStyle.COLOR.Sacramento_Green},
          headerTitleStyle: { color:AppStyle.COLOR.WHITE_OFF },
          headerTitleAlign:'center',
          headerRight: () => (
            <Icon.Button
                name="menu"
                size={25} color={AppStyle.COLOR.WHITE_OFF}
                backgroundColor="transparent"
                onPress={() => navigation.openDrawer()}
              />
          )
        }}>
        <Stack.Screen name="Home" options={{title:headerTitle("Home")}}>{props => <HomeScreen {...props} />}</Stack.Screen>
        <Stack.Screen name="Welcome" options={{title:headerTitle("Welcome")}} >{props => <WelcomeScreen {...props} />}</Stack.Screen>
      </Stack.Navigator>
  );
};

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

  // setTimeout(() => {
  //   if (isLoading == true) {
  //     setLoading(false);
  //   }
  // }, 3000);
    
  console.log("Loading value :  ", isLoading);

  },[isLoading]);

  // if(isLoading ==true)
  // {
  //   return <SplashScreen/>
  // }
  
  // return (
  //   <NavigationContainer>    
  //     <Stack.Navigator headerMode={'none'} 
  //     // initialRouteName ={isUser!=null?
  //     // (isUser.validToken != null?("Home"):("PasswordScreen"))
  //     // :("Login")}
  //     initialRouteName={"DrawerContent"}
  //     >     
  //     <Stack.Screen name="Home" component={HomeScreen} /> 
  //     <Stack.Screen name="PasswordScreen" component={PasswordScreen} />
  //     <Stack.Screen name="Login" component={LoginScreen} />
  //     {/* <Stack.Screen name="LoginPractice" component={LoginPractice} /> */}
  //     {/* <Stack.Screen name="AuthScreen" userData={isUser} component={AuthScreen} /> */}
  //     <Stack.Screen name="DrawerContent" component={DrawerContent} />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // );

  return(
    <NavigationContainer>     
      <Drawer.Navigator
          // hideStatusBar
          initialRouteName="Welcome"
          drawerType="front"
          overlayColor="transparent"
          drawerStyle={styles.drawerStyles}
          contentContainerStyle={{ flex: 1 }}
          drawerContentOptions={{
            activeBackgroundColor: 'transparent',
            activeTintColor: 'white',
            inactiveTintColor: 'white',
          }}
          sceneContainerStyle={{ backgroundColor: 'transparent' }}
          drawerContent={props => 
            <DrawerContent {...props} />}
          
          >         
          <Drawer.Screen name="Screens">
            {props => <Screens {...props}/>}
          </Drawer.Screen>
          {/* <Drawer.Screen name="Welcome" component={WelcomeScreen} /> */}
        </Drawer.Navigator>
      </NavigationContainer>
  );
}

export default AppNavigator;

const styles = StyleSheet.create({
  stack: {
    flex: 1,
    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
    // overflow: 'scroll',
    // borderWidth: 1,
  },
  drawerStyles :
  { 
    flex: 1, 
    width: '70%', 
    backgroundColor: AppStyle.COLOR.GREY_DARK ,
  },
});