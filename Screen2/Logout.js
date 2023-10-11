import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'


export default function Logout({navigation}) {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Ionicons name='menu' size={40} color='black' />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Homepage')} style={styles.button}>
        <Text style={styles.buttonText}> Logout </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto'
  },
  buttonText: {
    padding: 30,
    fontSize: 40,
    fontFamily: 'Comic Sans MS'
  }
})