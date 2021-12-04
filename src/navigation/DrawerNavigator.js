import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { ContactStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Tab" component={TabNavigator} />
      <Drawer.Screen name="Nav" component={ContactStackNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;