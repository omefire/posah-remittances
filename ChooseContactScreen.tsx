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
       phone: '',
       name: ''
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
     handleName = (text) => {
      this.setState({ name: text })
   }
    readContact=()=>{
        Contacts.selectContact( (error, contact) =>  {
            if (error) {
              console.error(error);
            }
            else {
               
                this.handlePhone(contact['phoneNumbers'][0]['stringValue']);
                this.handleName(contact['displayName']);
                //console.log(contact['displayName']);
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
                             <Text style={styles.appTitleSmall}>Choose contact</Text>
                             
                </View>

                <TextInput style = {styles.input}
                
                underlineColorAndroid = "transparent"
                placeholder = "Name"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                value={this.state.name}
                />

                <TextInput style = {styles.input}
                
                underlineColorAndroid = "transparent"
                placeholder = "Phone number"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                value={this.state.phone}
                />
            
             
             <TextInput style = {styles.input}
                
                underlineColorAndroid = "transparent"
                placeholder = "Amount in FCFA"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
               
                />
             
             
             <TouchableOpacity
                style = {styles.submitButton}
                onPress = {
                   () => this.readContact()
                }>
                <Text style = {styles.submitButtonText}> Add Contact </Text>
             </TouchableOpacity>
             <TouchableOpacity
                style = {styles.submitButton}
                >
                <Text style = {styles.submitButtonText}> Send </Text>
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
            appTitleView: {
                        flexDirection: 'row'
                    }
 })


// interface Props {

// }

// export default (props: Props) => {
//     return (
//         <View style={styles.all}>
//             <View style={styles.container}>
//                 <View style={styles.emptyHeader}>
//                 </View>
//                 <View style={styles.body}>
//                     <View>
//                         <View style={styles.appTitleView}>
//                             <Text style={styles.appTitleLarge}>POSAH |</Text>
//                             <Text style={styles.appTitleSmall}>Remittance</Text>
//                         </View>
//                     </View>
//                     <View>
//                         <TextInput placeholder = "Username" style={{height: 40, borderColor: 'gray', borderWidth: 1}}/>                        
//                     </View>
//                     <View>
//                         <TextInput placeholder = "Password" style={{height: 40, borderColor: 'gray', borderWidth: 1}}/>                        
//                     </View>
//                 </View>
//                 <View style={styles.footer}>
//                     <View style={{marginLeft: 150}}></View>
//                     <Button transparent>
//                         <Text style={{fontWeight: 'bold', color: 'white'}}>Get started</Text>
//                     </Button>
//                     <Button primary rounded style={{backgroundColor: 'white'}}>
//                         <Text style={{fontWeight: 'bold', color: 'blue'}}>Sign in</Text>
//                     </Button>
//                 </View>
//             </View>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     all: {
//         flex: 1,
//         backgroundColor: 'rgb(22, 82, 240)'
//     },
//     container: {
//         flex: 1, 
//         flexDirection: 'column', 
//         marginLeft: 30,
//     },
//     emptyHeader: {
//         flex: 1
//     },
//     body: {
//         flex: 1
//     },
//     footer: {
//         flex: 1,
//         flexDirection: 'row',
//         alignItems: 'flex-end',
//         marginBottom: 80
//     },
//     appTitleLarge: {
//         fontSize: 30,
//         fontFamily: 'Legal Std Bold',
//         fontWeight: 'bold',
//         color: 'white'
//     },
//     appTitleSmall: {
//         fontSize: 30,
//         fontFamily: 'Legal Std Bold',
//         marginLeft: 10,
//         color: 'white'
//     },
//     appDetail: {
//         fontSize: 23,
//         fontFamily: 'Legal Std Bold',
//         marginTop: 30,
//         color: 'white'
//     },
//     appDetail2: {
//         fontSize: 23,
//         fontFamily: 'Legal Std Bold',
//         marginTop: 10,
//         color: 'white'
//     },
//     appTitleView: {
//         flexDirection: 'row'
//     }
// });