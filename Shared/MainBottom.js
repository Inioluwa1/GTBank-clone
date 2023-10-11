import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const width = Dimensions.get('window').width
const boxWidth = width * 0.333


export default function MainBottom({title}) {

  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title} >{title} </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container : {
    backgroundColor: 'tomato',
    width: boxWidth,
    borderLeftWidth: 1,
    borderColor: 'white',
    height: 40
  }, 
  title: {
    padding: 10,
    color: 'white',
    fontSize: 16,
    alignSelf: 'center'
  }
})