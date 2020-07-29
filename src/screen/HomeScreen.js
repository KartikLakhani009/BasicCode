import * as React from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import {LinearTextGradient} from 'react-native-text-gradient';
import AppStyle from '../config/AppStyle';

import {HomeButtons} from '../data/HomeScreenData';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View style={{marginTop: AppStyle.countPixelRatio(20)}}>
        <Text
          style={{
            fontSize: AppStyle.fontSizeH3_4,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          Andre Sanders
        </Text>
        <Text
          style={{
            fontSize: AppStyle.fontSizeH4,
            color: AppStyle.COLOR.slateGrey,
          }}>
          ABC Asset Management
        </Text>
      </View>

      <FlatList
        data={HomeButtons}
        keyExtractor={(item) => item.id.toString()}
        style={{marginTop: '15%'}}
        renderItem={({item}) => (
          <TouchableOpacity
            style={[
              styles.boxBtn,

              {backgroundColor: item.bgColor, shadowColor: item.bgColor},
            ]}
            // onPress={() => {
            //   props.navigation.navigate(item.navigate);
            // }}
          >
            <Icon
              style={{
                marginLeft: 20,
                height: AppStyle.countPixelRatio(30),
                width: AppStyle.countPixelRatio(30),
                // borderWidth: 2,
                alignItems: 'center',
                paddingTop: AppStyle.countPixelRatio(7),
              }}
              color={AppStyle.COLOR.WHITE_OFF}
              name={item.iconName}
              size={20}
            />
            <View>
              <Text
                style={{
                  color: AppStyle.COLOR.BLACK,
                  marginLeft: 10,
                }}>
                {item.title}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  boxBtn: {
    flexDirection: 'row',
    margin: 8,
    minWidth: AppStyle.countPixelRatio(200),
    height: AppStyle.countPixelRatio(35),
    alignItems: 'center',
    // justifyContent: 'center',
    display: 'flex',
    borderRadius: AppStyle.countPixelRatio(5),
    shadowOpacity: 0.4,
    shadowRadius: 20,
    shadowOffset: {height: 10, width: 5},
  },
  separateBlack: {
    height: AppStyle.countPixelRatio(40),
  },
});
