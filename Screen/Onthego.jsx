import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'


export default function Onthego({navigation}) {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Ionicons name='menu' size={40} color='black' />
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.header}>Just Starting</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center'
  },
  header: {
    fontFamily: 'Comic Sans MS',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign:'center'
  }
})