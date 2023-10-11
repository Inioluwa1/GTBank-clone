import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function Search() {
  return (
  <View style={styles.search}>
    <TextInput
      placeholder='I want to pay...'
      style={styles.searchContent}
    />
    <Ionicons name='search' size={35} color='grey' style={styles.icon2}/>
  </View>
  )
}

const styles = StyleSheet.create({
  search: {
    flexDirection: 'row',
    borderWidth: 1,
    paddingTop: 10,
    paddingLeft: 10,
    height: 60,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 10,
    shadowOffset: {width:5, height:7},
    shadowColor: 'grey',
    shadowOpacity: 0.3,
  },
  searchContent:{
    width: '100%',
    placeholderTextColor: 'grey',
    fontSize: 20
  },
  icon2: {
    paddingRight: 10
  }
})