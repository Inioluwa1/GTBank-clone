import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const iconWidth = width - (width*0.98)
const iconHeight = height - (height*0.98)

export default function MakeMoney({navigation}) {
  return (
    <View>
     <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('LoggedIn')}> 
      <Ionicons name='close' size={40} color='black' />
    </TouchableOpacity>
      <Text>MakeMoney</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  icon: {
    position:'absolute', 
    top: iconHeight, 
    right: iconWidth,
	}

})