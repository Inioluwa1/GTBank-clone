import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function Help({navigation}) {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Ionicons name='menu' size={40} color='black' />
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.header}>Need Help??</Text>
        <Text style={styles.text}> 
        GTBank Self Service Portal provides you with a platform to access and execute the following services (from any location):

        Account Reactivation
        Status Of Bill Payment
        NRN Card & Token request
        Account Block & Unblock
        Account Opening
        Referee Confirmation
        Account Upgrade
        Customer Information Update
        Card Delivery(Nigeria)
        Dispense Error
        Status of NIP Transactions</Text>
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
  },
    text: {
    padding: 10,
    paddingTop: 15,
    paddingBottom: 20,
  }
})