import { View, Text,Button,SafeAreaView,StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';

function SettingScreen({navigation}){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Settings!</Text>
      <Button
      title='go to home'
      onPress={() => navigation.navigate('Home')}/>
    </View>
  )
}

const Tab = createBottomTabNavigator();

function MyTabs(){
  return(
    <Tab.Navigator
      screenOptions={({route})=>({
        tabBarIcon:({focused, color, size })=>{
          let iconName;
          if(route.name=== 'Home'){
            iconName = focused
            ?'ios-information-circle'
            :'ios-information-circle-outline'
          } else if(route.name=== 'Setting'){
            iconName = focused
            ?'ios-list-box'
            :'ios-list'
          }
          //you can return any component that you like here
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor:'tomato',
        tabBarInactiveTintColor:'gray',
        headerRight:()=>(<Ionicons name="person-add-outline" size={20} color={'red'}/>)
      })}
    >
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Setting' component={SettingScreen} />
    </Tab.Navigator>
  );
}


function CustomDrawerContent(props) {
  return (
    <SafeAreaView>
      
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      
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
    >
      <Drawer.Screen name='Home' component={MyTabs} />
      <Drawer.Screen name='Setting' component={SettingScreen} />
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
      {/* <MyTabs/> */}
    
   </NavigationContainer>
  )
}

export default App