import React from "react";
//import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import SignUp from "../screens/SignUp";
import createAppContainer, {
  NavigationContainer,
} from "@react-navigation/native";

const Stack = createStackNavigator();

export default () => {
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="welcome screen"
      headerMode="screen"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: "tomato" },
      }}
    >
      <Stack.Screen
        name="Welcome Screen"
        component={WelcomeScreen}
        options={{
          title: "poosah remittances",
        }}
        // path=""
      />

      <Stack.Screen
        name="sign up"
        component={SignUp}
        options={{
          title: "Sign up",
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>;
};

// const MainApp = {
//   WelcomeScreen: {
//     screen: WelcomeScreen,
//     navigationOptions: {
//       headerTitle: "Welcome Screen",
//     },
//     path: "welcome",
//   },
//   SignUp: {
//     screen: SignUp,
//     navigationOptions: {
//       headerTitle: "sign up",
//     },
//     path: "signup/:1",
//   },
// };

// export default () => {
//   const prefix = "myapp://";
//   return <AppContainer uriPrefix={prefix} />;
// };

//export default createAppContainer(Stack);
