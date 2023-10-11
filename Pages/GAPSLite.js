import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Formik } from 'formik';
import * as yup from 'yup'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const iconWidth = width - (width*0.98)
const iconHeight = height - (height*0.98)
const headHeight = height - (height*0.85)


const FormSchema = yup.object({
  email: yup.string()
          .label('email')
          .email('Enter a valid email address')
          .required('Enter a registered email address'),
  confirmEmail:  yup.string()
                  .label('email')
                  .email('Enter a valid email address')
                  .required('Enter a registered email address'),
  password: yup.string()
            .required('Enter your password'),
})

export default function GAPSLite({navigation}) {
  return (
    <View style={styles.container} >
      <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('Homepage')}> 
        <Ionicons name='close' size={40} color='white' />
      </TouchableOpacity>
      <View style={{position:'absolute', top:headHeight}}>
        <Text style={styles.header}>GAPS-Lite</Text>
      </View>
      <View>
        <Formik
          initialValues={{email:'', confirmEmail:'', password:''}}
          validationSchema={FormSchema}
          onSubmit={(values) => {

          }}
        >
          {(props) => (
            <View>
              <View style={styles.input}>
                <TextInput 
                  style={{width: 300}}
                  placeholder='Enter your email...'
                  onChangeText={props.handleChange('email')}
                  value={props.values.email}
                  onBlur={props.handleBlur('email')}
                />
                <Ionicons name='person' size={28} color='white' style={{marginBottom: 8}} />
              </View>
              <Text style={styles.errorText}> {props.touched.email && props.errors.email} </Text>
              <View style={styles.input}>
                <TextInput 
                  style={{width: 300}}
                  placeholder='Confirm your email...'
                  onChangeText={props.handleChange('email')}
                  value={props.values.email}
                  onBlur={props.handleBlur('confirmEmail')}
                />
                <Ionicons name='person' size={28} color='white' style={{marginBottom: 8}} />
              </View>
              <Text style={styles.errorText}> {props.touched.confirmEmail && props.errors.confirmEmail} </Text>
              <View style={styles.input}>
                <TextInput 
                  style={{width: 300}}
                  placeholder='Enter your password...'
                  onChangeText={props.handleChange('email')}
                  value={props.values.email}
                  onBlur={props.handleBlur('password')}
                />
                <Ionicons name='lock-closed' size={28} color='white' style={{marginBottom: 8}} />
              </View>
              <Text style={styles.errorText}> {props.touched.password && props.errors.password} </Text>
              <TouchableOpacity style={styles.button} onPress={props.handleSubmit} >
                <Text style={styles.buttonText}> Login </Text>
              </TouchableOpacity>
            </View>
        )}
        </Formik>
      </View>
      <View style={styles.row}>
      <TouchableOpacity>
          <Text style={styles.text1}> Forgot <br /> Password? </Text>
      </TouchableOpacity>
      <TouchableOpacity>
          <Text style={styles.text2}> Privacy and Terms </Text>
      </TouchableOpacity>
      <TouchableOpacity>
          <Text style={styles.text3}> FAQs </Text>
      </TouchableOpacity>
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
  icon: {
    position:'absolute', 
    top: iconHeight, 
    right: iconWidth
  },
  header: {
    fontFamily: 'Segoe Print',
    fontSize: 30,
    fontWeight:'bold'
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  button: {
    marginTop: 10,
    backgroundColor:'tomato',
    height: 60
  },
  buttonText: {
    fontFamily: 'Comic Sans MS',
    fontSize: 25,
    padding: 10,
    color: 'white',
    alignSelf: 'center'
  },
  row:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  text1: {
    color: 'white',
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 18,
    position: 'relative',
    right: 30
  },
  text2: {
    color: 'white',
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 18,
  },
  text3: {
    color: 'white',
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 18,
    position: 'relative',
    left: 25
  },
  errorText: {
    color:'red',
    alignSelf:'center',
    fontStyle: 'italic',
    fontSize: 18,
  }
})