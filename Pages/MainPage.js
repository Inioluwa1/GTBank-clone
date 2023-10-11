import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import Logo from '../Shared/Logo'
import Search from '../Shared/Search'
import MainBottom from '../Shared/MainBottom.js'
import DiffButtons from '../Shared/DiffButtons'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const logoWidth = width - (width * 0.98)
const logoHeight = height - (height * 0.99)
const iconWidth = width - (width * 0.91)
const textWidth = width - (width * 0.96)
const iconHeight = (height * 0.5)
const iconsWidth = width - (width * 0.15)

export default function MainPage({navigation}) {
  const [check, setCheck] = useState(false)
  const name = check? 'eye' : 'eye-off'
  const text = check? 'show balance' : 'hide balance'
  const money = check? ' NXXXXXXX.XX' : 'N30,000.00' 

  return (
    <View style={{flex: 1}}>
        <View style={styles.container1}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name='menu' size={40} color='white' />
          </TouchableOpacity>
          <View style={styles.head}>
            <TouchableOpacity> 
              <Ionicons  name='chevron-back' size={30} color='grey' />
            </TouchableOpacity>
            <View style={styles.textContainer}><Text style={styles.text}> Acc. 1 of 1 </Text></View>
            <TouchableOpacity>
              <Ionicons name='chevron-forward' size={30} color='grey'/>
            </TouchableOpacity>
          </View>
          <View style={styles.logo}>
            <Logo />
          </View>
          <View style={{flexDirection: 'row'}}> 
            <View style={styles.content}>
              <Text style={styles.text}> GT CREA8-E-SAVERS </Text>
              <Text style={styles.text}> 1234567890</Text>
              <Text style={styles.text1}> {money} </Text>
              <Text style={styles.text}> Book Balance: {money} </Text>
            </View>
            <TouchableOpacity style={styles.icon} onPress={() => {
              if (check === true) {
                setCheck(false)
              } else {
                setCheck(true)
              }
            }}>
                <Ionicons name={name} size={30} color='black' />
              </TouchableOpacity>
              <Text style={styles.text2}> {text} </Text>
          </View>
        </View>
        <View style={styles.container2}>
          <Search />
          <View> 
          <View style={styles.container3}>
            <DiffButtons source={require('../assets/Pagepic/Transfer.jpg')} text='Transfer' onPress={() => navigation.navigate('Transfer')} />
            <DiffButtons source={require('../assets/Pagepic/Payment.png')} text='Payment' onPress={() => navigation.navigate('Payment')}/> 
            <DiffButtons source={require('../assets/Pagepic/Airtime.jpg')} text='Buy Airtime &' text1='Data' onPress={() => navigation.navigate('Airtime')} />    
          </View>
          <View style={styles.container3}>
            <DiffButtons source={require('../assets/Pagepic/Transaction.png')} text='Transaction' text1='Details' onPress={() => navigation.navigate('Transaction')}/>
            <DiffButtons source={require('../assets/Pagepic/Cashout.jpg')} text='CashOut' onPress={() => navigation.navigate('Cashout')}/>
            <DiffButtons source={require('../assets/Pagepic/AccountManager.png')} text='My Account' text1='Manager' onPress={() => navigation.navigate('AccManager')}/>    
          </View>
          <View style={styles.container3}>
            <DiffButtons source={require('../assets/Pagepic/MakeMoney.jpg')} text='Make Money' onPress={() => navigation.navigate('MakeMoney')} />
            <DiffButtons source={require('../assets/Pagepic/ApplyLoans.jpg')} text='Apply for Loans' onPress={() => navigation.navigate('ApplyLoan')} />
            <DiffButtons source={require('../assets/Pagepic/Enaira.png')} text='eNaira' onPress={() => navigation.navigate('eNaira')}/>
            </View>
            <TouchableOpacity style={styles.icon1}>
              <Ionicons name="caret-forward" size={44} color='tomato'/>
            </TouchableOpacity>
          </View>
          </View>

        <View style={styles.row}>
          <MainBottom title='Banking'/>
          <MainBottom title='GTLocate'/>
          <MainBottom title='IReport'/>
        </View>
    </View>
  )
}
 
const styles = StyleSheet.create({
  container1: {
    height: 200,
    backgroundColor:'tomato',
  },
  head: {
    flexDirection:'row',
    position:'relative',
    top: 20,
    marginLeft: 10,
    marginBottom: 5,
  },
  textContainer: {
    alignSelf:'center', 
    borderWidth: 0.1, 
    borderRadius: 8,
    borderColor:'grey'
  },
  text: {
    color: 'white',
    padding: 2, 
  },
  logo: {
    position:'absolute',
    top: logoHeight,
    right: logoWidth
  },
  content: {
    marginLeft: 10,
    position:'relative',
    top: 10,
  },
  text1 :{
    color: 'white',
    padding: 2, 
    fontSize: 24
  },
  icon: {
    position: 'absolute',
    right: iconWidth,
    bottom: 10,
    alignSelf: 'center',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 6,
    backgroundColor: 'grey' 
  },
  text2: {
    position:'absolute',
    right: textWidth,
    bottom: 0,
    color: 'white',
  },
  container2: {
    flex: 1, 
    backgroundColor: 'white',
    margin: 20,
    marginTop: 10
},
  row: {
    flexDirection: 'row'
  },
  container3: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  icon1: {
    position:'absolute',
    right: -30,
    top:  130
  }
  })