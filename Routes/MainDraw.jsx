import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer'
import Account from '../Screen/Account'
import FAQs from '../Screen/FAQs'
import Help from '../Screen/Help'
import Onthego from '../Screen/Onthego'
import Privacy from '../Screen/Privacy'
import Terms from '../Screen/Terms'
import Homepage from '../Pages/Homepage'

import { SafeAreaView } from 'react-native-safe-area-context'

const Drawer = createDrawerNavigator();

export default function MainDraw() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return (
          <SafeAreaView style={{backgroundColor:'tomato', height: '100%'}}> 
          <View style={styles.drawer}>
            <Text style={styles.drawerText}> Hi </Text>  
          </View>
            <DrawerItemList {...props}  />
          </SafeAreaView>  
        )
      }}
      screenOptions={{
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor:'white', 
        headerShown: false
      }}
    >
      <Drawer.Screen name='Sign-Up/Log-in' component={Homepage} />
      <Drawer.Screen name='Help' component={Help} />
      <Drawer.Screen name='Privacy and Terms' component={Terms} />
      <Drawer.Screen name='Privacy Policy' component={Privacy} />
      <Drawer.Screen name='Account Upgrade' component={Account} />
      <Drawer.Screen name='Help and FAQs' component={FAQs} />
      <Drawer.Screen name='On the Go' component={Onthego} />
    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: 'tomato',
    padding: 20,
    height:'auto',
    justifyContent:'flex-start',
    alignItems:'flex-start'
  }, 
  drawerText: {
    fontSize: 24,
    padding: 10,
    color:'white'
  }
})