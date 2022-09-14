import React from 'react';
import { Text, View, Button, TextInput ,Image,SafeAreaView,StyleSheet} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';

function FeedScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Feed Screen</Text>
    </View>
  );
}

function ArticleScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Article Screen</Text>
    </View>
  );
}

function NotificationsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Notifications Screen</Text>
    </View>
  );
}


function CustomDrawerContent(props) {
  return (
    <SafeAreaView>
      <Image
      source={require("./assets/react_logo.png")}
      style = {styles.sideMenuProfileIcon}/>
      
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label='close Drawer' onPress={() => props.navigation.closeDrawer()} />
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
      <Drawer.Screen name='Notifications' component={NotificationsScreen} />
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
    <NavigationContainer>
       <MyDrawer/>
    </NavigationContainer>
  );
}

export default App