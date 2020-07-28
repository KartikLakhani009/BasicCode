import * as React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function WelcomeScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Welcome Screen</Text>
        <Icon name="rocket" size={30} color="#900" />
      </View>
    );
}
  

export default WelcomeScreen;