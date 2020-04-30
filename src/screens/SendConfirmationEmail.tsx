import React from "react";
import {
  SafeAreaView,
  TextInput,
  Button,
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
  Switch,
} from "react-native";
//sd
import { Formik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  email: yup.string().email().required(),
});

export default () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.appTitleLarge}>POSAH | Remittance</Text>
    </View>

    <View>
      <Text style={styles.appTitleSmall}>Forgot your password ?</Text>
    </View>

    <View>
      <Text
        style={{
          marginLeft: 35,
          paddingBottom: 1,
          marginBottom: 10,
          //marginTop: 100,
        }}
      >
        Please enter your email to receive a password reset link:
      </Text>
    </View>
    <Formik
      initialValues={{
        email: "",
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
          <View style={{ marginHorizontal: 20 }}>
            <TextInput
              underlineColorAndroid="transparent"
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
              placeholder="posah@example.com"
              style={styles.input}
              onChangeText={formikProps.handleChange("email")}
              onBlur={formikProps.handleBlur("email")}
              autoFocus
            />
            <Text style={{ color: "red", paddingLeft: 15 }}>
              {formikProps.touched.email && formikProps.errors.email}
            </Text>
          </View>

          {formikProps.isSubmitting ? (
            <ActivityIndicator />
          ) : (
            <View style={styles.submitButton}>
              <Button title="Send" onPress={formikProps.handleSubmit} />
            </View>
          )}
        </React.Fragment>
      )}
    </Formik>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    // paddingTop: 100,
    //  marginBottom: 20,
    paddingBottom: 60,
    flex: 1,
    justifyContent: "center",
    direction: "inherit",

    //marginLeft: 10,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "blue",
    borderWidth: 1,
    //borderColor:'black',
  },
  submitButton: {
    backgroundColor: "#0000FF",
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: "white",
  },
  appTitleLarge: {
    fontSize: 30,
    fontFamily: "Legal Std Bold",
    fontWeight: "bold",
    color: "#0000FF",
    marginLeft: 92,
    marginBottom: 150,
  },
  appTitleSmall: {
    fontSize: 18,
    fontFamily: "Legal Std Bold",
    marginLeft: 100,
    color: "#0000FF",
    marginTop: 10,
    //   /  marginBottom: 100,
    //paddingTop: 10,
  },
  appTitleView: {
    flexDirection: "row",
  },
});
