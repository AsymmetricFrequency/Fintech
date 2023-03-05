import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "../appTheme/styles/styles";
import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as Animatable from "react-native-animatable";




function Notications (params:any)  {


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
    <>
      {params.num ? (
        <Animatable.View
          animation={"bounceIn"}
          style={[
            {
              top: -2,
              right: -7,
              backgroundColor: "#F2B8B5",
              width: 15,
              height: 15,
            },
            stylesL.JustifyAlign,
            stylesL.positionAbsolute,
            stylesM.radiusOneHundred,
          ]}
        >
          <Text style={[{ color: "#601410" }, stylesM.fontSizeTen, fontBold()]}>
            {params.num}
          </Text>
        </Animatable.View>
      ) : (
        <></>
      )}
    </>
  );
};




export {
  Notications,
};