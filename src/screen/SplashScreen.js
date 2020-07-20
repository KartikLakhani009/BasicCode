import * as React from 'react';
import { View, Text,Image,StyleSheet } from 'react-native';

import {AppImages} from '../images/index'
import AppStyle from '../config/AppStyle' 

import Logo from '../component/AppLogoFun'

function SplashScreen(){
    return(
        <View style={styles.container}>
           <Logo/>
        </View>
    )
}

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
    logoView:{   
        flex:1,     
        alignItems: 'center',
        justifyContent: 'center',        
    }
  });