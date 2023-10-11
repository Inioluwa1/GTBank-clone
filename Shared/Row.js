import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Row({children}) {
  return (
    <View style={styles.row}>
       {children}
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection:'row',
    justifyContent:'space-evenly',
  }
})