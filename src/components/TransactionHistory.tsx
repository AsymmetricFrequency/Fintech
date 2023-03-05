import {
    stylesB,
    stylesL,
    stylesM,
    stylesO,
    stylesS,
  } from "../appTheme/styles/styles";
  import {
    View,
    Text,
  } from "react-native";

import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { readPublicKey, getBalanceCOP, historyTransactions, readPhone } from "../../controller";


const TransactionHistory = ({ trans }) => {
    
  //fonts
  const [fontsLoadedBold] = useFonts({
    RobotoBold: require("../appTheme/fonts/Roboto-Bold.ttf"),
  });

  const [fontsLoadedMedium] = useFonts({
    RobotoMedium: require("../appTheme/fonts/Roboto-Medium.ttf"),
  });

  const [fontsLoadedLight] = useFonts({
    RobotoLight: require("../appTheme/fonts/Roboto-Light.ttf"),
  });

  if (!fontsLoadedBold || !fontsLoadedMedium || !fontsLoadedLight) {
    return null;
  }

  const fontBold = () => ({ fontFamily: "RobotoBold" });
  const fontMedium = () => ({ fontFamily: "RobotoMedium" });
  const fontLight = () => ({ fontFamily: "RobotoLight" });
  
    return (
      <View
        style={[
          stylesM.widthTotal,
          stylesM.boxHistory,
          stylesM.backgroundLavender,
          stylesM.radiusTen,
          stylesM.paddingHorizontalTen,
          stylesM.paddingVerticalFifteen,
        ]}
      >
        {trans.transactionType == "Send" && (
          <View>
            <Text style={[stylesM.textColorDarkGray, stylesM.fontSizeSixteen]}>
              Destinatario:
              {trans.phone}
            </Text>
            <Text
              style={[
                stylesM.textColorDarkGray,
                stylesM.fontSizeSixteen,
                stylesM.marginTopTen,
              ]}
            >
              Valor:
              {trans.amount}
            </Text>
          </View>
        )}
        {trans.transactionType == "Receive" && (
          <View>
            <Text style={[stylesM.textColorDarkGray, stylesM.fontSizeSixteen]}>
              Recibe:
              {trans.phone}
            </Text>
            <Text
              style={[
                stylesM.textColorDarkGray,
                stylesM.fontSizeSixteen,
                stylesM.marginTopTen,
              ]}
            >
              Valor:
              {trans.amount}
            </Text>
          </View>
        )}
      </View>
    );
};
  
  export default TransactionHistory;
  