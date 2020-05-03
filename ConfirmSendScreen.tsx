import React, { Component } from 'react';
import { Container, Button, Text, View } from 'native-base';
//import { Col, Row, Grid } from "react-native-easy-grid";
import { StyleSheet,TextInput,TouchableOpacity,SafeAreaView,ActivityIndicator,Switch,PermissionsAndroid, Platform, Alert } from 'react-native';
import { Formik } from "formik";
import * as yup from "yup";
//import Contacts from 'react-native-contacts';
//import ContactsPicker from 'react-native-contacts-chooser';
import Contacts from 'react-native-unified-contacts';



class Inputs extends Component {
    state = {
       email: '',
       password: '',
       phone: ''
    }
    handleEmail = (text) => {
       this.setState({ email: text })
    }
    handlePassword = (text) => {
       this.setState({ password: text })
    }
    login = (email, pass) => {
       alert('email: ' + email + ' password: ' + pass)
    }
    handlePhone = (text) => {
        this.setState({ phone: text })
     }
    readContact=()=>{
        Contacts.selectContact( (error, contact) =>  {
            if (error) {
              console.error(error);
            }
            else {
                this.handlePhone(contact['phoneNumbers'][0]['stringValue']);
              //console.log(contact['phoneNumbers'][0]['stringValue']);
            }
          });
    }
    render() {
       return (

               
          <View style = {styles.container}>
                 <View  >
                             <Text style={styles.appTitleLarge}>POSAH |Remittance</Text>
                             
                </View>
                <View  >
                <Text style={styles.appTitleLarge}></Text>
                             
                </View>
                <View  >
                             <Text style={styles.appTitleSmall}>Confirm your transaction</Text>
                             
                </View>

                <View  >
                <Text style={styles.appTitleLarge}></Text>
                             
                </View>
             <Text style = {styles.appTitleSmall}>Sending</Text>
             <Text style = {styles.appTitleSmaller}>$100</Text>
             <Text style = {styles.appTitleSmall}>to</Text>
             <Text style = {styles.appTitleSmaller}>Salif:690051058</Text>
                
            
             
             
             <TouchableOpacity
                style = {styles.submitButton}
                onPress = {
                   () => this.readContact()
                }>
                <Text style = {styles.submitButtonText}> Done </Text>
             </TouchableOpacity>
            
          </View>
       )
    }
 }
 export default Inputs
 
 const styles = StyleSheet.create({
    container: {
       paddingTop: 23
    },
    input: {
       margin: 15,
       height: 40,
       borderColor: '#0000FF',
       borderWidth: 1
    },
    submitButton: {
       backgroundColor: '#0000FF',
       padding: 10,
       margin: 15,
       height: 40,
    },
    submitButtonText:{
       color: 'white'
    },
    appTitleLarge: {
                fontSize: 30,
                fontFamily: 'Legal Std Bold',
                fontWeight: 'bold',
                color: '#0000FF'
            },
            appTitleSmall: {
                fontSize: 30,
                fontFamily: 'Legal Std Bold',
                marginLeft: 10,
                color: '#0000FF'
            },
            appTitleSmaller: {
                fontSize: 20,
                fontFamily: 'Legal Std Italic',
                marginLeft: 10,
                color: '#0000FF'
            },
            appTitleView: {
                        flexDirection: 'row'
                    }
 })


