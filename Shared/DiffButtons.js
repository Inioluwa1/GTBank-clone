import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function DiffButtons({source, text, text1, onPress}) {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Image source={source} style={styles.image} />
        <View style={{justifyContent:'center'}}>
          <Text style={styles.text} > {text} </Text>
          <Text style={styles.text} > {text1} </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: '50%',
    borderWidth: 1
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: '50%',
    resizeMode: 'center',
  },
  text: {
    alignSelf:'center'
  }
}) 