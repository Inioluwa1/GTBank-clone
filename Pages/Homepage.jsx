import { StyleSheet, Text, View, Dimensions, ImageBackground,  TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import NewButton from '../Shared/NewButton'
import Row from '../Shared/Row'
import Logo from '../Shared/Logo'
import Bottom from '../Shared/Bottom'

const height = Dimensions.get('window').height
const newHeight = height - (height * 0.5)
const bottomHeight = height - (height * 0.4)
const width = Dimensions.get('window').width
const newWidth = (width/ 30)
const logoTop = height - (height * 0.93) 
const logoLeft = width - (width * 0.95)



export default function Homepage({navigation}) {
  return (
    <ImageBackground source={require('../assets/GTBankbg.jpg')} style={styles.image}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Ionicons name='menu' size={40} color='white' />
      </TouchableOpacity>
      <View style={styles.logo}> 
        <Logo />
      </View>
      <View style={styles.button}> 
        <Row> 
          <NewButton title1="Quick" title2="Balance" name="wallet"/>
          <NewButton title1="Quick" title2="Transfer"  name ="move" />
          <NewButton title1="Quick" title2="Airtime" name="phone-portrait"/>
        </Row>
        <Row> 
          <NewButton title1="Soft" title2="Token" name="terminal" />
          <NewButton title1="Account" title2="Manager" name="person" />
          <NewButton title1="Open" title2="Account" name="open" />
        </Row>
      </View>
      <View style={styles.bottom}>
        <Bottom title='Sign in GTWorld' onPress={() => navigation.navigate('SignIn')} />
        <Bottom title = 'Sign in GAPSLite' onPress={() => navigation.navigate('GAPSLite')}  />
      </View>
    </ImageBackground>
  )
} 

const styles = StyleSheet.create({
  image :{
    flex: 1,
  },
  logo :{
    position:'absolute', 
    top: logoTop, 
    left: logoLeft
  },
  button :{
    position:'relative', 
    top: newHeight,
    left: newWidth
  },
  bottom :{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    position:'absolute',
    bottom: 0
  },

})