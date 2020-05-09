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

  firstName: yup.string().required().min(2),
  lastName: yup.string().required().min(2),

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
  agreeToTerms: yup
    .boolean()
    .label("Terms")
    .test(
      "is-true",
      "Must agree to terms to continue",
      (value) => value === true
    ),

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

export default () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.appTitleLarge}>POSAH | Remittance</Text>
    </View>

    <View>
      <Text style={styles.appTitleSmall}>Sign Up</Text>
    </View>
    <Formik
      initialValues={{
        email: "",
        password: "",
        passwordConfirmation: "",
        firstName: "",
        lastName: "",
        agreeToTerms: false,
      }}
      onSubmit={(values, actions) => {
        // alert(JSON.stringify(values));

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
              placeholder="First name"
              style={styles.input}
              onChangeText={formikProps.handleChange("firstName")}
              onBlur={formikProps.handleBlur("firstName")}
              autoFocus
            />
            <Text style={{ color: "red", paddingLeft: 15 }}>
              {formikProps.touched.firstName && formikProps.errors.firstName}
            </Text>
          </View>

          <View style={{ marginHorizontal: 20 }}>
            <TextInput
              underlineColorAndroid="transparent"
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
              placeholder="Last name"
              style={styles.input}
              onChangeText={formikProps.handleChange("lastName")}
              onBlur={formikProps.handleBlur("lastName")}
              autoFocus
            />
            {/* <Text style={{ color: "red" }}>
               {formikProps.touched.email && formikProps.errors.email}
            </Text> */}
          </View>

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

          <StyledSwitch
            label="Agree to Terms"
            formikKey="agreeToTerms"
            formikProps={formikProps}
          />

          {formikProps.isSubmitting ? (
            <ActivityIndicator />
          ) : (
            <View style={styles.submitButton}>
              <Button title="Submit" onPress={formikProps.handleSubmit} />
            </View>
          )}
        </React.Fragment>
      )}
    </Formik>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    marginBottom: 20,
    paddingBottom: 60,
    flex: 1,
    justifyContent: "center",

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
    marginBottom: 30,
  },
  appTitleSmall: {
    fontSize: 18,
    fontFamily: "Legal Std Bold",
    marginLeft: 35,
    color: "#0000FF",
  },
  appTitleView: {
    flexDirection: "row",
  },
});
