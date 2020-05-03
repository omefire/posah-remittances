import React from "react";
import WelcomeScreen from "./WelcomeScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignUp from "./SignUp";

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" 
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Register" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
