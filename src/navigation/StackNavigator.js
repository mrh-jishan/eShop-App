import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import { theme } from './../core/theme';

const Stack = createStackNavigator();

const screenOptionStyle = {
  // activeColor: theme.colors.white,
  // inactiveColor: theme.colors.white,
  // barStyle: { backgroundColor: theme.colors.primary },
  // headerStyle: {
  //   backgroundColor: "#9AC4F8",
  // },
  // headerTintColor: "white",
  // headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator, ContactStackNavigator };
