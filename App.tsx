/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import "react-native-gesture-handler";
//import * as React from "react";
//import { NavigationContainer } from "@react-navigation/native";
import {
  NavigationContainer,
  DarkTheme,
  useLinking,
} from "@react-navigation/native";
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
  Alert,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  Appearance,
  useColorScheme,
  AppearanceProvider,
} from "react-native-appearance";

//

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
// const MaterialBottomTabs = createMaterialBottomTabNavigator();
// const MaterialTopTabs = createMaterialTopTabNavigator();

//

import WelcomeScreen from "./src/screens/WelcomeScreen";
import SignUp from "./src/screens/SignUp";
import SendConfirmationEmail from "./src/screens/SendConfirmationEmail";
import ResetPassword from "./src/screens/ResetPassword";

import AppContainer from "./src/navigation";
import ConnectToCoinbase from "./src/screens/ConnectToCoinbase";
import CoinbaseConnectionSucceeded from "./src/screens/CoinbaseConnectionSucceeded";

//declare var global: { HermesInternal: null | {} };

//

const App = () => {
  ////

  ////
  const colorScheme = useColorScheme();
  //
  const MyTheme = {
    dark: false,
    colors: {
      primary: "white",
      background: "white",
      card: "#65509f",
      text: "white",
      border: "green",
    },
  };

  //

  const createHomeStack = () => (
    <Stack.Navigator
      initialRouteName="WelcomeHome"
      headerMode="screen"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: "blue" },
      }}
    >
      <Stack.Screen
        name="Home"
        //children={createDrawer}
        component={WelcomeScreen}
        options={{
          title: "               POSAH | REMITTANCES",
        }}
      />
      <Stack.Screen
        name="ConnectToCoinbase"
        //children={createDrawer}
        component={ConnectToCoinbase}
        options={{
          title: "               connect to coinbase",
        }}
      />
      <Stack.Screen
        name="resetpassword"
        //children={createDrawer}
        component={ResetPassword}
        options={{
          title: "               Reset Password",
        }}
      />
      <Stack.Screen
        name="coinbaseconnectionsucceeded"
        //children={createDrawer}
        component={CoinbaseConnectionSucceeded}
        options={{
          title: "               connection succeeded",
        }}
      />

      <Stack.Screen
        name="signup"
        component={SignUp}
        options={{
          title: "signup Screen",
        }}
      />

      {/* <Stack.Screen name="Bottom Tabs" children={this.createBottomTabs} />
  <Stack.Screen name="Top Tabs" children={this.createTopTabs} /> */}
    </Stack.Navigator>
  );

  const createDrawer = () => (
    <Drawer.Navigator drawerStyle={{ backgroundColor: "blue" }}>
      <Drawer.Screen name="welcome" component={WelcomeScreen} />
      <Drawer.Screen name="signup" component={SignUp} />

      <Drawer.Screen name="reset" component={ResetPassword} />
      {/* <Drawer.Screen name="Contacts" component={Screen1} />
  <Drawer.Screen name="Favorites" component={Screen2} />
  <Drawer.Screen name="Settings" component={Screen3} /> */}
    </Drawer.Navigator>
  );
  /// deep link

  ///

  //
  return (
    // <NavigationContainer>
    //   <TouchableWithoutFeedback
    //     style={styles.scrollView}
    //     onPress={Keyboard.dismiss}
    //   >
    //     <View style={styless.all}>
    //       <AppContainer />
    //     </View>
    //   </TouchableWithoutFeedback>
    // </NavigationContainer>
    // <AppContainer/ >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <AppearanceProvider>
        <NavigationContainer
          theme={colorScheme == "dark" ? DarkTheme : MyTheme}
        >
          {createHomeStack()}
        </NavigationContainer>
      </AppearanceProvider>
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
