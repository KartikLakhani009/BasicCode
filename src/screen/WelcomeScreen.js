import React, {useCallback, useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

import {AuthContext} from '../route/context';
import AppStyle from '../config/AppStyle';

function WelcomeScreen(props) {
  const authC = useContext(AuthContext);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Welcome Screen</Text>
      <Icon name="rocket" size={30} color="#900" />
      <LinearGradient
        colors={['#00451A', '#3b5998', '#192f6a']}
        style={{
          paddingLeft: 15,
          paddingRight: 15,
          borderRadius: 5,
        }}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'Gill Sans',
            textAlign: 'center',
            margin: 10,
            color: '#ffffff',
            backgroundColor: 'transparent',
          }}>
          Sign in with Facebook
        </Text>

        <TouchableOpacity style={styles.nextBtn} onPress={authC.signIn}>
          <Text style={styles.nextText}>Press to check context</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  nextBtn: {
    marginTop: '5%',
    backgroundColor: AppStyle.COLOR.windowsBlue,
    width: 70,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextText: {
    flex: 1,
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
    fontSize: AppStyle.fontSizeH3_4,
  },
});
