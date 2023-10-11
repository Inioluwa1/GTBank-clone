import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function FAQs({navigation}) {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Ionicons name='menu' size={40} color='black' />
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.header}>Frequently Asked Questions</Text>
        <Text style={styles.text}>  Question 1 </Text>
        <Text style={styles.text}>  Question 2 </Text>
        <Text style={styles.text}>  Question 3 </Text>
        <Text style={styles.text}>  Question 4 </Text>
        <Text style={styles.text}>  Question 5 </Text>
        <Text style={styles.text}>  Question 6 </Text>
        <Text style={styles.text}>  Question 7 </Text>
        <Text style={styles.text}>  Question 8 </Text>
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
    textAlign:'center',
    padding: 5
  },
  text: {
    padding: 10,
    paddingTop: 15,
    paddingBottom: 20,
  }
})