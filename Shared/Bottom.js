import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'

const width = Dimensions.get('window').width
const newWidth = (width * 0.5) - 5
const fontSize = (width < 412)? 15 : 19

export default function Bottom({title, onPress}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style = {styles.box} onPress={onPress}>
        <Text style={styles.text}> {title} </Text>
      </TouchableOpacity>  
    </View>
  ) 
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  box: {
    backgroundColor: 'tomato',
    height: 60,
    padding: 15,
    borderRadius: 7,
    width: newWidth,
    marginRight: 10
  },
  text: {
    color: 'white',
    fontSize: fontSize,
    fontFamily: 'Comic Sans MS',
    alignSelf:'center'
  }
})