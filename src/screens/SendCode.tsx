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
  SafeAreaView,
  TouchableOpacity,
  Image,
  Platform,
  Modal,
  TextInput,
} from "react-native";
import {BarStatus} from "../components/BarStatus";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import IconCopy from "react-native-vector-icons/Ionicons";
import * as Animatable from "react-native-animatable";

const sizeCopy = Platform.OS === "ios" ? 19 : 22;
const topIos = () => Platform.OS === "ios" && { top: 3 };

const SendCode = ({ navigation, route }: { navigation: any; route: any }) => {
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
    <LinearGradient
      style={stylesB.linear}
      colors={["#3A0CA3", "#0f9172"]}
      start={{ x: 0, y: 0.01 }}
      end={{ x: 0, y: 0.7 }}
    >
      <SafeAreaView style={[stylesB.body]}>
        <BarStatus />
        <View style={stylesB.completo}>
          <View style={stylesM.boxArrow}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={[stylesM.boxArrow_buttom, stylesL.JustifyAlign]}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={[stylesM.boxArrow_buttom_image]}
                source={require("../../assets/img/leftArrow.webp")}
              />
            </TouchableOpacity>
          </View>
          <View style={[stylesM.widthRectangle, stylesM.bottomTitle]}>
            <View style={[stylesL.JustifyAlign]}>
              <Image
                style={[stylesM.boxImgSendCode]}
                source={require("../../assets/img/enviarCodigo.webp")}
              />
            </View>
            <Text
              style={[
                stylesM.textColortWhiteOpacity,
                stylesM.fontSizeSixteen,
                stylesM.marginTopFourty,
                fontMedium(),
              ]}
            >
              Ingresa el código
            </Text>
            <Text
              style={[
                stylesM.textColortWhiteOpacity,
                stylesM.fontSizeFourteen,
                stylesM.marginTopSeven,
                stylesM.fontLineTwenty,
                fontLight(),
              ]}
            >
              Hemos enviado un código a tu numero celular para que puedas cambiar tu contraseña
            </Text>

            <Text
              style={[
                stylesM.textColorGray,
                stylesM.fontSizeTwenty,
                stylesM.marginTopSixty,
                stylesM.fontLineTwenty,
                fontBold(),
              ]}
            >
              Ingresar código
            </Text>
            <TextInput
              style={[
                stylesM.backgroundTransparent,
                stylesM.boxInputTextSendCode,
                stylesM.radiusTen,
              ]}
              // value={number}
            />

            <View style={[stylesL.JustifyAlign]}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={[
                  stylesM.buttonVerificate,
                  stylesM.backgroundMidnightBlue,
                  stylesL.JustifyAlign,
                ]}
                onPress={() => navigation.navigate("ChangePassword")}
              >
                <Text
                  style={[
                    stylesM.fontSizeSixteen,
                    stylesM.textColorWhite,
                    fontBold(),
                  ]}
                >
                  Verificar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SendCode;
