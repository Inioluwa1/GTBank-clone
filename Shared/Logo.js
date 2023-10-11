import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Logo() {
  return (
    <View>
      <Image source={require("../assets/GTBank1.jpg")} style={styles.image}/>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100
  }
})