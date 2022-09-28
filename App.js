import React from 'react';
import { Text, View, Button, TextInput ,Image,SafeAreaView,StyleSheet} from 'react-native';

import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

const MyTheme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    primary:'rgb(255,45,85)'
  }
};

function CustomDrawerContent(props) {
  return (
    <SafeAreaView>
      <Image
      source={require("./assets/react_logo.png")}
      style = {styles.sideMenuProfileIcon}/>
      
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label='Close Drawer' onPress={() => props.navigation.closeDrawer()} />
    </DrawerContentScrollView>
    </SafeAreaView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      // screenOptions ={{
      //   drawerStyle:{
      //     backgroundColor:'pink',
      //     width:240
      //   }
      // }}
    >
      <Drawer.Screen name='Home' component={HomeScreen} />
      <Drawer.Screen name='ProductScreen' component={ProductScreen} />
    </Drawer.Navigator>
  );
}
const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },})

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
       <MyDrawer/>
    </NavigationContainer>
  );
}

export default App