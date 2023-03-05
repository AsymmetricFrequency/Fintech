import { Platform, Image, TouchableOpacity, View } from "react-native";
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RFValue } from "react-native-responsive-fontsize";

import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "./src/appTheme/styles/styles";

import Declined from "./src/screens/Declined";

const Tab = createBottomTabNavigator();
const barIos = Platform.OS === "ios" ? 61 : 50;

import HomeStackMenu from "./HomeStackMenu";
import ServicesStackMenu from "./ServicesStackMenu";
import HistoryDrawerApp from "./HistoryDrawerApp";
import QrReader from "./src/screens/QrReader";
import ChatBot from "./src/screens/ChatBot";
// Navegacion inferior

const NavigationMenu = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: RFValue(barIos),
          backgroundColor: "rgba(255, 255, 255, 0.57)",
          borderTopColor: "rgba(255, 255, 255, 0.57)",
          elevation: 0,
        },

        tabBarIcon: ({ focused }) => {
          let imagenes;
          if (route.name === "HomeStackMenu") {
            imagenes = focused
              ? require("./assets/img/homeOnPressed.webp")
              : require("./assets/img/home.webp");
          } else if (route.name === "ServicesStackMenu") {
            imagenes = focused
              ? require("./assets/img/serviciosOnPressed.webp")
              : require("./assets/img/servicios.webp");
          } 
          else if (route.name === "HistoryDrawerApp") {
            imagenes = focused
              ? require("./assets/img/transaccionesOnPressed.webp")
              : require("./assets/img/transacciones.webp") 
          }
          else if (route.name === "ChatBot") {
            imagenes = focused
              ? require("./assets/img/chatbot.webp")
              : require("./assets/img/chatbot.webp") 
          }
          return (
            <Image
              source={imagenes}
              style={{
                height: RFValue(25),
                width: RFValue(25),
                resizeMode: "contain",
              }}
            />
          );
        },
      })}
    >
      <Tab.Screen name="HomeStackMenu" component={HomeStackMenu} />
      <Tab.Screen name="ServicesStackMenu" component={ServicesStackMenu} />
      <Tab.Screen 
        name="QrReader" 
        component={QrReader} 
        options={({ navigation }) => ({
          tabBarIcon: () => (
            <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate(QrReader)}>
                <Image source={require("./assets/img/scanQR.webp")} style={[stylesM.buttonImage]} />
            </TouchableOpacity>
          ),
        })}
      />
      <Tab.Screen name="HistoryDrawerApp" component={HistoryDrawerApp} />
      <Tab.Screen name="ChatBot" component={ChatBot} />


    </Tab.Navigator>
  )
}

export default NavigationMenu