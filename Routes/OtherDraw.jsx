import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer'
import { SafeAreaView } from 'react-native-safe-area-context'
import Account from '../Screen2/Account'
import Auth from '../Screen2/Auth'
import Feedback from '../Screen2/Feedback'
import Fund from '../Screen2/Fund'
import Logout from '../Screen2/Logout'
import Privacy from '../Screen2/Privacy'
import Rate from '../Screen2/Rate'
import Setting from '../Screen2/Setting'
import Switch from '../Screen2/Switch'
import MainPage from '../Pages/MainPage'

const Drawer = createDrawerNavigator();

export default function OtherDraw() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return (
          <SafeAreaView style={{backgroundColor:'tomato', height: '100%'}}> 
          <View style={styles.drawer}>
            <Text style={styles.drawerText}> Hi Ayomide </Text> 
            <Text style={styles.drawerText1}> Last login: </Text>
            <Text style={styles.drawerText2}> 21 Sep 2023 4:13:56 PM </Text>
            <Text style={styles.drawerText3}> BVN: 12345678910 </Text>
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
      <Drawer.Screen name='Pay with QR' component={MainPage} />
      <Drawer.Screen name='Authentication Settings' component={Auth} />
      <Drawer.Screen name='Settings' component={Setting} />
      <Drawer.Screen name='Customer Feedback' component={Feedback} />
      <Drawer.Screen name='Fund Account with USSD' component={Fund} />
      <Drawer.Screen name='Account Switch Off/On' component={Switch} />
      <Drawer.Screen name='Rate our Services' component={Rate} />
      <Drawer.Screen name='Privacy Policy' component={Privacy} />
      <Drawer.Screen name='Account Upgrade' component={Account} />
      <Drawer.Screen name='Logout' component={Logout} />
    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: 'tomato',
    paddingTop: 20,
    height:'auto',
    justifyContent:'flex-start',
    alignItems:'flex-start'
  }, 
  drawerText: {
    fontSize: 24,
    padding: 10,
    color:'white'
  },
  drawerText1: {
    fontSize: 18,
    marginTop: 10,
    marginLeft: 10,
    color:'white'
  },
  drawerText2: {
    fontSize: 18,
    marginLeft: 10,
    color:'white'
  },
  drawerText3: {
    fontSize: 18,
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 20,
    color:'white'
  },
})