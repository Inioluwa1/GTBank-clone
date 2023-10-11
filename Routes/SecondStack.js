import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OtherDraw from '../Routes/OtherDraw'
import Transfer from '../Screen3/Transfer'
import AccManager from '../Screen3/AccManager'
import Airtime from '../Screen3/Airtime'
import ApplyLoan from '../Screen3/ApplyLoan'
import Cashout from '../Screen3/Cashout'
import eNaira from '../Screen3/eNaira'
import MakeMoney from '../Screen3/MakeMoney'
import Payment from '../Screen3/Payment'
import Transaction from '../Screen3/Transaction'

const Stack = createNativeStackNavigator();

export default function SecondStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='LoggedIn' component={OtherDraw}/>
      <Stack.Screen name='Transfer' component={Transfer} />
      <Stack.Screen name='AccManager' component={AccManager} />
      <Stack.Screen name='ApplyLoan' component={ApplyLoan} />
      <Stack.Screen name='Cashout' component={Cashout} />
      <Stack.Screen name='eNaira' component={eNaira} />
      <Stack.Screen name='MakeMoney' component={MakeMoney} />
      <Stack.Screen name='Payment' component={Payment} />
      <Stack.Screen name='Transaction' component={Transaction} />
      <Stack.Screen name='Airtime' component={Airtime} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})