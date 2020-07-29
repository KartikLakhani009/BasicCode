import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';

import {DrawerContentScrollView} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/FontAwesome';

import SimpleLineIconsIcon from 'react-native-vector-icons/SimpleLineIcons';

import {personalItem, userSettings} from '../data/menuItem';

import AppStyle from '../config/AppStyle';
import {LinearTextGradient} from 'react-native-text-gradient';

const renderMenu = (item, props, IconComp) => (
  <TouchableOpacity
    style={{
      flexDirection: 'row',
      borderBottomColor: AppStyle.COLOR.coolGrey,
      borderBottomWidth: 1,
      height: AppStyle.countPixelRatio(45),
      alignItems: 'center',
    }}
    onPress={() => {
      props.navigation.navigate(item.navigate);
    }}>
    <IconComp
      name={item.iconName}
      color={AppStyle.COLOR.WHITE_OFF}
      size={18}
      style={{
        height: AppStyle.countPixelRatio(30),
        width: AppStyle.countPixelRatio(30),
        // borderWidth: 2,
        alignItems: 'center',
        paddingTop: AppStyle.countPixelRatio(7),
        marginLeft: 20,
      }}
    />
    <Text
      style={{
        textAlign: 'justify',
        color: AppStyle.COLOR.WHITE_OFF,
        alignSelf: 'center',
        marginLeft: 10,
      }}>
      {item.title}
    </Text>
    <Icon
      name="chevron-right"
      size={12}
      color={AppStyle.COLOR.WHITE_OFF}
      style={{
        // alignSelf: 'center',
        position: 'absolute',
        right: 20,
        top: '50%',
      }}
    />
  </TouchableOpacity>
);

const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled={false}
      contentContainerStyle={{flex: 1}}>
      <View style={styles.drawerSection}>
        <View style={{marginLeft: 10}}>
          <LinearTextGradient
            style={{fontWeight: 'bold', fontSize: AppStyle.fontSizeH2_31}}
            locations={[0, 1]}
            colors={['#add8e0', '#aedb8b']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <Text>BasisCode</Text>
          </LinearTextGradient>
          <Text
            style={{
              color: AppStyle.COLOR.WHITE_OFF,
              fontSize: AppStyle.fontSizeH4,
            }}>
            {'C O M P L I A N C E'}
          </Text>
          {/* <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#dbeffb', fontSize: 35}}>Basis</Text>
            <Text style={{color: '#aedb8b', fontSize: 35}}>Code</Text>
          </View> */}
        </View>
        <Text
          style={{
            textAlign: 'right',
            color: AppStyle.COLOR.WHITE_OFF,
            fontSize: AppStyle.fontSizeH4_5,
            marginBottom: 5,
          }}>
          {'Andre Sanders    '}
        </Text>
      </View>

      <View style={styles.separateBlack} />

      <FlatList
        data={personalItem}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        renderItem={({item}) => (
          <TouchableOpacity
            style={[styles.boxBtn]}
            onPress={() => {
              props.navigation.navigate(item.navigate);
            }}>
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
              size={18}
            />
            <Text
              style={{
                textAlign: 'auto',
                color: AppStyle.COLOR.WHITE_OFF,
                alignSelf: 'center',
                marginLeft: 10,
              }}>
              {item.title}
            </Text>
            <Icon
              name="chevron-right"
              size={12}
              color={AppStyle.COLOR.WHITE_OFF}
              style={{
                // alignSelf: 'center',
                position: 'absolute',
                right: 20,
                top: '50%',
              }}
            />
          </TouchableOpacity>
        )}
      />

      <View style={[styles.separateBlack]} />

      {renderMenu(userSettings[0], props, SimpleLineIconsIcon)}
      {renderMenu(userSettings[1], props, Icon)}
      {renderMenu(userSettings[2], props, Icon)}
    </DrawerContentScrollView>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  separateBlack: {
    height: AppStyle.countPixelRatio(43),
    backgroundColor: AppStyle.COLOR.BLACK,
  },
  drawerSection: {
    marginTop: 2,
  },
  bottomDrawerSection: {
    marginBottom: 10,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  boxBtn: {
    flexDirection: 'row',
    // margin: 10,
    borderBottomColor: AppStyle.COLOR.coolGrey,
    borderBottomWidth: 1,
    height: AppStyle.countPixelRatio(45),
    alignItems: 'center',
  },
});
