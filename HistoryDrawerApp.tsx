import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "./src/components/CustomDrawer";

import History from './src/screens/History';
const ServicesDrawer = createDrawerNavigator();
const drawerScreenOptions = {
    swipeEnabled: false,
    headerTransparent: true,
    headerTitle: "",
    headerTintColor: "white",
  };

// Navigacion Lateral

const HistoryDrawerApp = () => {
    
  
  return (
    <ServicesDrawer.Navigator
      drawerContent={CustomDrawer}
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#F4F4F4",
          width: 280,
        },
      }}
    >
      <ServicesDrawer.Screen
        name="History"
        component={History}
        options={{
          swipeEnabled: true,
          headerTransparent: true,
          headerTitle: "",
          headerTintColor: "white",
        }}
      />
    </ServicesDrawer.Navigator>
  )
}

export default HistoryDrawerApp