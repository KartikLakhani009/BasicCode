import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import {DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/FontAwesome';

import {personalItem, userSettings} from '../data/menuItem';

import AppStyle from '../config/AppStyle';
import {LinearTextGradient} from 'react-native-text-gradient';

const renderMenu = (data, props) => (
  <View>
    {data.map((item) => (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          borderBottomColor: AppStyle.COLOR.coolGrey,
          borderBottomWidth: 1,
          margin: -5,
          // marginLeft: 1,
          // paddingBottom: -15,
          // marginBottom: -15,
          marginTop: 1,
        }}
        onPress={() => {
          props.navigation.navigate(item.navigate);
        }}>
        <DrawerItem
          icon={() => (
            <Icon
              name={item.iconName}
              color={AppStyle.COLOR.WHITE_OFF}
              size={14}
            />
          )}
          label={item.title}
          labelStyle={{
            color: AppStyle.COLOR.WHITE_OFF,
            fontSize: AppStyle.fontSizeH4_51,
          }}
          style={{
            alignSelf: 'center',
            alignItems: 'center',
            // margin: -10,
            marginBottom: -2.5,
          }}
          // onPress={() => {
          //   props.navigation.navigate(item.navigate);
          // }}
        />
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
    ))}
  </View>
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
            style={{fontWeight: 'bold', fontSize: AppStyle.fontSizeH2_3}}
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
      <View style={{marginTop: -10}}>{renderMenu(personalItem, props)}</View>
      <View style={[styles.separateBlack]} />
      <View style={{marginTop: -10}}>{renderMenu(userSettings, props)}</View>
    </DrawerContentScrollView>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  separateBlack: {
    height: AppStyle.countPixelRatio(40),
    backgroundColor: AppStyle.COLOR.BLACK,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 2,
  },
  bottomDrawerSection: {
    marginBottom: 10,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
