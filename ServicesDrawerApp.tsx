import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "./src/components/CustomDrawer";

import Services from './src/screens/Services';

const ServicesDrawer = createDrawerNavigator();

const ServicesDrawerApp = () => {
    
  
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
        name="Services"
        component={Services}
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

export default ServicesDrawerApp