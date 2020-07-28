import * as React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient'

function WelcomeScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Welcome Screen</Text>
        <Icon name="rocket" size={30} color="#900" />
        <LinearGradient colors={['#00451A', '#3b5998', '#192f6a']} style={{
                        paddingLeft: 15,
                        paddingRight: 15,
                        borderRadius: 5,}}
                        start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                        >
          <Text style={{  fontSize: 18,
                          fontFamily: 'Gill Sans',
                          textAlign: 'center',
                          margin: 10,
                          color: '#ffffff',
                          backgroundColor: 'transparent',}}>
            Sign in with Facebook
          </Text>
        </LinearGradient>
      </View>
    );
}
  

export default WelcomeScreen;