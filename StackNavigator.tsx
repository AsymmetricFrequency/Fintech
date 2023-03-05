import { View, Text } from "react-native";
import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import History from "./src/screens/History";
import PayServices from "./src/screens/PayServices";
import Security from "./src/screens/Security";
import QrReader from "./src/screens/QrReader";
import ConsultServices from "./src/screens/ConsultServices";
import SavePay from "./src/screens/SavePay";
import CurrentSavings from "./src/screens/CurrentSavings";
import Services from "./src/screens/Services";
import Splash from "./src/screens/Splash";
import Login from "./src/screens/Login";
import SignUp from "./src/screens/SignUp";
import ForgotPassword from "./src/screens/ForgotPassword";
import Affiliates from "./src/screens/Affiliates";
import SendCode from "./src/screens/SendCode";
import ChangePassword from "./src/screens/ChangePassword";
import LoadScreen from "./src/screens/LoadScreen";
import MultiPayments from "./src/screens/MultiPayments";
import CompleteSign from "./src/screens/CompleteSign";
import EnterPassword from "./src/screens/EnterPassword";
import ConfirmPassword from "./src/screens/ConfirmPassword";
import ConfirmAsync from "./src/screens/ConfirmAsync";
import LogoutScreen from "./src/screens/LogoutScreen";



import NavigationMenu from "./NavigationMenu";
import ChatBot from "./src/screens/ChatBot";
// Navigacion principal

const StackNavigator = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
    // screenOptions={{
    //   cardStyleInterpolator:
    //     CardStyleInterpolators.forRevealFromBottomAndroid,
    // }}
    >
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      /> 
      <Stack.Screen
        name="CompleteSign"
        component={CompleteSign}
        options={{ headerShown: false }}
      /> 
      <Stack.Screen
        name="EnterPassword"
        component={EnterPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ConfirmPassword"
        component={ConfirmPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ConfirmAsync"
        component={ConfirmAsync}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SendCode"
        component={SendCode}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoadScreen"
        component={LoadScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NavigationMenu"
        component={NavigationMenu}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Security"
        component={Security}
        options={{ headerShown: false }}
      /> 
      <Stack.Screen
        name="History"
        component={History}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PayServices"
        component={PayServices}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="QrReader"
        component={QrReader}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ConsultServices"
        component={ConsultServices}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SavePay"
        component={SavePay}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CurrentSavings"
        component={CurrentSavings}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Affiliates"
        component={Affiliates}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MultiPayments"
        component={MultiPayments}
        options={{ headerShown: false }}
      />
      
      <Stack.Screen
        name="LogoutScreen"
        component={LogoutScreen}
        options={{ headerShown: false }}
      />
      
      <Stack.Screen
        name="ChatBot"
        component={ChatBot}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
};

export default StackNavigator;
