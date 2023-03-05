import { View, Text } from "react-native";
import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";


import Security from "./src/screens/Security";
import DrawerApp from "./DrawerApp";
import SendMoney from "./src/screens/SendMoney";
import ReceiveMoney from "./src/screens/ReceiveMoney";
import Events from "./src/screens/Events";
import EventsInfo from "./src/screens/EventsInfo";
import Voucher from "./src/screens/Voucher";
import Crypto from "./src/screens/Crypto";
import SendCrypto from "./src/screens/SendCrypto";
import ReceiveCrypto from "./src/screens/ReceiveCrypto";
import VoucherCrypto from "./src/screens/VoucherCrypto";
import Succesful from "./src/screens/Succesful";
import Declined from "./src/screens/Declined";

// Aplicar navegacion inferior a las siguientes pantallas

const HomeStackMenu = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
      }}
    >
      <HomeStack.Screen
        name="DrawerApp"
        component={DrawerApp}
        options={{ headerShown: false }}
      />

      <HomeStack.Screen
        name="Security"
        component={Security}
        options={{ headerShown: false }}
      />

      <HomeStack.Screen
        name="Events"
        component={Events}
        options={{ headerShown: false }}
      />

      <HomeStack.Screen
        name="SendMoney"
        component={SendMoney}
        options={{ headerShown: false }}
      />

      <HomeStack.Screen
        name="ReceiveMoney"
        component={ReceiveMoney}
        options={{ headerShown: false }}
      />

      <HomeStack.Screen
        name="Voucher"
        component={Voucher}
        options={{ headerShown: false }}
      />

      <HomeStack.Screen
        name="EventsInfo"
        component={EventsInfo}
        options={{ headerShown: false }}
      />

      <HomeStack.Screen
        name="Crypto"
        component={Crypto}
        options={{ headerShown: false }}
      />

      <HomeStack.Screen
        name="SendCrypto"
        component={SendCrypto}
        options={{ headerShown: false }}
      />

      <HomeStack.Screen
        name="ReceiveCrypto"
        component={ReceiveCrypto}
        options={{ headerShown: false }}
      />

      <HomeStack.Screen
        name="VoucherCrypto"
        component={VoucherCrypto}
        options={{ headerShown: false }}
      />

      <HomeStack.Screen
        name="Succesful"
        component={Succesful}
        options={{ headerShown: false }}
      />

      <HomeStack.Screen
        name="Declined"
        component={Declined}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackMenu;
