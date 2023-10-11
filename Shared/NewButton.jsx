import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native'
import React from 'react'
import {MaterialIcons, MaterialCommunityIcons, SimpleLineIcons, Ionicons} from '@expo/vector-icons'


export default function NewButton({title1, title2, name}) {
  return (
    <TouchableOpacity style={styles.button} >
    <Ionicons  style={styles.icon} name= {name} size={28} color='tomato' />
      <Text style={styles.text} > {title1} </Text>
      <Text style={styles.text} > {title2} </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    marginRight: 20
  },
  icon :{
    padding: 10,
    borderWidth: 1,
    alignSelf: 'center',
    backgroundColor:'white',
    borderRadius: '50%' 
  },
  text: {
    alignSelf:'center',
    fontFamily: 'Comic Sans MS',
    fontSize: 15,
    marginTop: 2,
    whiteSpace: 'pre-wrap',
    color: 'white'
   }
})