import React, { Component } from 'react';
import { Container, Button, Text, View } from 'native-base';
//import { Col, Row, Grid } from "react-native-easy-grid";
import { StyleSheet,TextInput,TouchableOpacity,SafeAreaView,ActivityIndicator,Switch } from 'react-native';
import { Formik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
    email: yup.string().email().required(),
      password: yup
      .string()
      .label("Password")
      .required()
      .min(2, "Seems a bit short...")
      .max(15, " try a shorter password..."),
  
    // createdOn: yup.date().default(function() {
    //   return new Date();
    // }),
  });
  const StyledSwitch = ({ formikKey, formikProps, label, ...rest }) => (
    <View style={{ marginHorizontal: 20 }}>
      <Text style={{ marginBottom: 3 }}>{label}</Text>
      <Switch
        style={{ marginRight: 330 }}
        value={formikProps.values[formikKey]}
        onValueChange={(value) => {
          formikProps.setFieldValue(formikKey, value);
        }}
        {...rest}
      />
      <Text style={{ color: "red" }}>
        {formikProps.touched[formikKey] && formikProps.errors[formikKey]}
      </Text>
    </View>
  );
  



class Inputs extends Component {
    state = {
       email: '',
       password: ''
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
    render() {
       return (

               
          <SafeAreaView style = {styles.container}>
                 <View  >
                             <Text style={styles.appTitleLarge}>POSAH |Remittance</Text>
                             
                </View>
                <View  >
                <Text style={styles.appTitleLarge}></Text>
                             
                </View>
                <View>
                             <Text style={styles.appTitleSmall}>Login</Text>
                             
                </View>             
             
             <Formik
      initialValues={{
        email: "",
        password: ""
      }}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values));

        actions.resetForm();
        setTimeout(() => {
          actions.setSubmitting(false);
        }, 1000);
      }}
      validationSchema={validationSchema}
    >
      {(formikProps) => (
        <React.Fragment>
          

          
          <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Email"
                placeholderTextColor = "#0000FF"
                autoCapitalize = "none"                
                onChangeText={formikProps.handleChange("email")}
                onBlur={formikProps.handleBlur("email")}
                                
                />
             <Text style={{ color: "red", paddingLeft: 15 }}>
              {formikProps.touched.email && formikProps.errors.email}
            </Text>
          

         
          <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Password"
                placeholderTextColor="#0000FF"
                autoCapitalize="none"
                onChangeText={formikProps.handleChange("password")}
              onBlur={formikProps.handleBlur("password")}
              secureTextEntry/>
            <Text style={{ color: "red", paddingLeft: 15 }}>
              {formikProps.touched.password && formikProps.errors.password}
            </Text>
                  
          
          {formikProps.isSubmitting ? (
            <ActivityIndicator />
          ) : (

            
            <View >
                <TouchableOpacity
                style = {styles.submitButton}
                onPress = {
                    formikProps.handleSubmit
                }>
                <Text style = {styles.submitButtonText}> Submit </Text>
             </TouchableOpacity>              
            </View>
          )}
        </React.Fragment>
      )}
    </Formik>
          </SafeAreaView>
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
        position: 'absolute',
       color: 'white',
       left: 155,
       top: 15
       
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
