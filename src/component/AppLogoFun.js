import * as React from 'react';
import { View, Image,StyleSheet } from 'react-native';

function Logo() {
    return (
        <View style={styles.logoView}>
                <Image source={
                    AppImages.AppLogo
                }  />
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