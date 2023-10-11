import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function Account({navigation}) {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Ionicons name='menu' size={40} color='black' />
      </TouchableOpacity>
      <Text>Account</Text>
    </View>
  )
}

const styles = StyleSheet.create({})