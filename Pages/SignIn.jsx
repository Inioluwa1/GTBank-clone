import { StyleSheet, TextInput, View, TouchableOpacity, Text, Dimensions, Button  } from 'react-native'
import { Formik } from 'formik';
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import * as yup from 'yup'
import Logo from '../Shared/Logo'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const logoWidth = width - (width * 0.98)
const logHeight = height - (height * 0.98)
const imgHeight = height - (height * 0.85)
const formHeight  = height - (height * 0.7) 

const FormSchema = yup.object({
  email: yup.string()
          .label('email')
          .email('Enter a valid email')
          .required('Please enter a registered mail'),
  password: yup.string()
          .required('Please enter your password')
})


export default function SignIn({navigation}) {

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.icon1} onPress={() => navigation.navigate('Homepage')}>
        <Ionicons name= 'close' size={40} color='white' /> 
      </TouchableOpacity>
      <View style={styles.image}>
        <Logo />
      </View> 
      <View style = {{position: 'absolute', top: formHeight, width: 300}}>
        <Formik
          initialValues={{ email:'', password:'' }}
          validationSchema={FormSchema}
          onSubmit={(values, actions) => {
            console.log(values)
            actions.resetForm()
            navigation.navigate('MainPage')
          }}
        >
          {(props) => (
            <View>
              <View  style={styles.input} >
                <Ionicons style={styles.icon} name= 'person' size={28} color='white' /> 
                <TextInput
                  style={{width:300}}
                  placeholder='Enter your mail....'
                  onChangeText={props.handleChange('email')}
                  value={props.values.email}
                  onBlur={props.handleBlur('email')}
                />
              </View>
              
              <Text style={styles.errorText} > {props.touched.email && props.errors.email}</Text>
              <View  style={styles.input} >
                <Ionicons style={styles.icon} name= 'lock-closed' size={28} color='white' /> 
                <TextInput
                  style={{width:220}}
                  placeholder='Enter your password...'
                  onChangeText={props.handleChange('password')}
                  value={props.values.password}
                  onBlur={props.handleBlur('password')}
                />
                <TouchableOpacity style={styles.icon2}> 
                  <Ionicons  name= 'finger-print' size={28} color='white' />
                </TouchableOpacity>
              </View>
              <Text style={styles.errorText} > {props.touched.password && props.errors.password}</Text>
              <TouchableOpacity style={styles.button} onPress={props.handleSubmit} >
                <Text style={styles.buttonText}> Login </Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik> 
        <View style={styles.row}>
          <TouchableOpacity>
            <Text style={styles.text}> Forgot Password? </Text>
          </TouchableOpacity> 
          <TouchableOpacity>
            <Text style={styles.text}> Sign Up </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey'
  },
  image: {
    position:'absolute',
    top: imgHeight
  },
  input: {
    paddingTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    flexDirection: 'row'
  },
  icon1: {
    position: 'absolute',
    top: logHeight,
    right: logoWidth
  },
  icon :{
    marginRight: 5,
    marginBottom: 5,
  },
  icon2 :{
    marginRight: 5,
    marginBottom: 5,
    position:'absolute',
    right: 5
  },
  row: {
    flexDirection:'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  text: {
    color: 'white',
    fontStyle: 'Comic Sans MS',
    fontWeight: 'bold',
    fontSize: 17
  },
  button: {
    marginTop: 10,
    backgroundColor:'tomato'
  },
  buttonText: {
    fontFamily: 'Comic Sans MS',
    fontSize: 18,
    padding: 15,
    color: 'white',
    alignSelf: 'center'
  },
  errorText: {
    color:'red',
    alignSelf:'center',
    fontStyle: 'italic'
  }
})