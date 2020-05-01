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

    backgroundColor: "white",
  },
});

export default App;
