import React from 'react';
import { Text, View, Button, TextInput ,Image,SafeAreaView,StyleSheet} from 'react-native';

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import DetailScreen from './screens/DetailScreen';

const MyTheme = {
  ...DefaultTheme,colors: {
  ...DefaultTheme.colors,primary: "rgb(255,45,85)"
  },
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

const Stack = createNativeStackNavigator();
function ProductStack(){
  return(
    <Stack.Navigator
      screenOptions={{
        headerStyle:{
          backgroundColor:'#0096DA'
        },
        headerTintColor: '#ffffff',
        headerTitleStyle:{
          fontWeight:'bold'
        }
      }}
    >
      <Stack.Screen name="Product" component={ProductScreen}/>
      <Stack.Screen name="Detail" component={DetailScreen}/>

    </Stack.Navigator>
  )
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name='Home' component={HomeScreen} />
      <Drawer.Screen name='Product' component={ProductStack} />
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