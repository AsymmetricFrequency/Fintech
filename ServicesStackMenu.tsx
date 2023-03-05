import { View, Text } from "react-native";
import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import PayServices from "./src/screens/PayServices";
import ConsultServices from "./src/screens/ConsultServices";
import SavePay from "./src/screens/SavePay";
import CurrentSavings from "./src/screens/CurrentSavings";
import ServicesDrawerApp from "./ServicesDrawerApp";
import Affiliates from "./src/screens/Affiliates";
import MultiPayments from "./src/screens/MultiPayments";
import MobileOperators from "./src/screens/MobileOperators";
import OperatorsPlans from "./src/screens/OperatorsPlans";
import SelectPackageRecharge from "./src/screens/SelectPackageRecharge";
import RechargeCellInfo from "./src/screens/RechargeCellInfo";
import RechargeCell from "./src/screens/RechargeCell";
import BuyPins from "./src/screens/BuyPins";
import SelectPins from "./src/screens/SelectPins";
import SelectPinInfo from "./src/screens/SelectPinInfo";
import VoucherOperators from "./src/screens/VoucherOperators";
import VoucherPins from "./src/screens/VoucherPins";
// Aplicar navegacion inferior a las siguientes pantallas

const ServicesStackMenu = () => {
  const ServicesStack = createStackNavigator();
  return (
    <ServicesStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
      }}
    >
      <ServicesStack.Screen
        name="ServicesDrawerApp"
        component={ServicesDrawerApp}
        options={{ headerShown: false }}
      />

      <ServicesStack.Screen
        name="PayServices"
        component={PayServices}
        options={{ headerShown: false }}
      />

      <ServicesStack.Screen
        name="ConsultServices"
        component={ConsultServices}
        options={{ headerShown: false }}
      />

      <ServicesStack.Screen
        name="Affiliates"
        component={Affiliates}
        options={{ headerShown: false }}
      />

      <ServicesStack.Screen
        name="SavePay"
        component={SavePay}
        options={{ headerShown: false }}
      />

      <ServicesStack.Screen
        name="CurrentSavings"
        component={CurrentSavings}
        options={{ headerShown: false }}
      />

      <ServicesStack.Screen
        name="MultiPayments"
        component={MultiPayments}
        options={{ headerShown: false }}
      />

      <ServicesStack.Screen
        name="MobileOperators"
        component={MobileOperators}
        options={{ headerShown: false }}
      />

      <ServicesStack.Screen
        name="OperatorsPlans"
        component={OperatorsPlans}
        options={{ headerShown: false }}
      />

      <ServicesStack.Screen
        name="SelectPackageRecharge"
        component={SelectPackageRecharge}
        options={{ headerShown: false }}
      />

      <ServicesStack.Screen
        name="RechargeCellInfo"
        component={RechargeCellInfo}
        options={{ headerShown: false }}
      />

      <ServicesStack.Screen
        name="RechargeCell"
        component={RechargeCell}
        options={{ headerShown: false }}
      />

      <ServicesStack.Screen
        name="BuyPins"
        component={BuyPins}
        options={{ headerShown: false }}
      />

      <ServicesStack.Screen
        name="SelectPins"
        component={SelectPins}
        options={{ headerShown: false }}
      />

      <ServicesStack.Screen
        name="SelectPinInfo"
        component={SelectPinInfo}
        options={{ headerShown: false }}
      />

      <ServicesStack.Screen
        name="VoucherOperators"
        component={VoucherOperators}
        options={{ headerShown: false }}
      />

      <ServicesStack.Screen
        name="VoucherPins"
        component={VoucherPins}
        options={{ headerShown: false }}
      />

    </ServicesStack.Navigator>
  );
};

export default ServicesStackMenu;
