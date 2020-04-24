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
  password: yup
    .string()
    .label("Password")
    .required()
    .min(2, "Seems a bit short...")
    .max(15, " try a shorter password..."),
  passwordConfirmation: yup
    .string()
    .required()
    .label("Confirm password")
    .test("passwords-match", "Passwords must match ", function (value) {
      return this.parent.password === value;
    }),
});

export default () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.appTitleLarge}>POSAH | Remittance</Text>
    </View>

    <View>
      <Text style={styles.appTitleSmall}>RESET YOUR PASSWORD</Text>
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
        Please enter your new password:
      </Text>
    </View>
    <Formik
      initialValues={{
        password: "",
        passwordConfirmation: "",
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
          <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
            <TextInput
              underlineColorAndroid="transparent"
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
              placeholder="password"
              style={styles.input}
              onChangeText={formikProps.handleChange("password")}
              onBlur={formikProps.handleBlur("password")}
              secureTextEntry
            />
            <Text style={{ color: "red", paddingLeft: 15 }}>
              {formikProps.touched.password && formikProps.errors.password}
            </Text>
          </View>

          <View style={{ marginHorizontal: 20 }}>
            <TextInput
              underlineColorAndroid="transparent"
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
              placeholder="Confirm password"
              style={styles.input}
              onChangeText={formikProps.handleChange("passwordConfirmation")}
              onBlur={formikProps.handleBlur("passwordConfirmation")}
              secureTextEntry
            />
            <Text
              style={{
                color: "red",

                paddingLeft: 15,
              }}
            >
              {formikProps.touched.passwordConfirmation &&
                formikProps.errors.passwordConfirmation}
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
