/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Keyboard,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";
import WelcomeScreen from "./WelcomeScreen";
import SignUp from "./SignUp";

declare var global: { HermesInternal: null | {} };

const App = () => {
  return (
    <TouchableWithoutFeedback
      style={styles.scrollView}
      onPress={Keyboard.dismiss}
    >
      <View style={styless.all}>
        <WelcomeScreen />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styless = StyleSheet.create({
  all: {
    flex: 1,
    // backgroundColor: "rgb(22, 82, 240)",
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 30,
  },
  emptyHeader: {
    flex: 1,
  },
  body: {
    flex: 1,
  },
  footer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 80,
  },
  appTitleLarge: {
    fontSize: 30,
    fontFamily: "Legal Std Bold",
    fontWeight: "bold",
    color: "white",
  },
  appTitleSmall: {
    fontSize: 30,
    fontFamily: "Legal Std Bold",
    marginLeft: 10,
    color: "white",
  },
  appDetail: {
    fontSize: 23,
    fontFamily: "Legal Std Bold",
    marginTop: 30,
    color: "white",
  },
  appDetail2: {
    fontSize: 23,
    fontFamily: "Legal Std Bold",
    marginTop: 10,
    color: "white",
  },
  appTitleView: {
    flexDirection: "row",
  },

  input: {
    marginTop: 18,
    borderWidth: 1,
    borderColor: "red",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
});

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: "absolute",
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
    color: Colors.dark,
  },
  highlight: {
    fontWeight: "700",
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: "600",
    padding: 4,
    paddingRight: 12,
    textAlign: "right",
  },
});

export default App;
