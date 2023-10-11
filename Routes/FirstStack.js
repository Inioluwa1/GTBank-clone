import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Homepage from '../Pages/Homepage'
import SignIn from '../Pages/SignIn'
import GAPSLite from '../Pages/GAPSLite'
import MainDraw from './MainDraw'
import SecondStack from '../Routes/SecondStack'

const Stack = createNativeStackNavigator()

export default function FirstStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='Homepage' component={MainDraw}/>
      <Stack.Screen name='SignIn' component={SignIn}/>
      <Stack.Screen name='GAPSLite' component={GAPSLite}/>
      <Stack.Screen name='MainPage' component={SecondStack}/>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})