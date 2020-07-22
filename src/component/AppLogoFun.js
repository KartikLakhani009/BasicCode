import * as React from 'react';
import { View, Image,StyleSheet } from 'react-native';

import {AppImages} from '../images/index'
import AppStyle from '../config/AppStyle' 


function Logo(props) {
    return (
        <View style={props.logoStyle}>
                <Image source={
                    AppImages.AppLogo
                } style={{width:150,height:80}} />
            </View>
    );
}
  

export default Logo;


const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
    logoView:{   
        flex:1,     
        // alignItems: 'center',
        // justifyContent: 'center',        
    }
});