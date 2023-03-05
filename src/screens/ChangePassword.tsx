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

const ChangePassword = ({ navigation, route }: { navigation: any; route: any }) => {
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
                style={[stylesM.boxImgForgotPassword]}
                source={require("../../assets/img/padlock.webp")}
              />
            </View>
              <Text
              style={[
                stylesM.textColortWhiteOpacity,
                stylesM.fontSizeSixteen,
                stylesM.marginTopThirtyThree,
                fontMedium(),
              ]}
            >
              Cambia tu contraseña
              </Text>
              <Text
              style={[
                stylesM.textColortWhiteOpacity,
                stylesM.fontSizeSixteen,
                stylesM.marginTopTwentySeven,
                stylesM.fontLineTwenty,
                fontLight(),
              ]}
            >
              Recupera el acceso a tu billetera con una nueva contraseña
              </Text>
              <Text
              style={[
                stylesM.textColorGray,
                stylesM.fontSizeSixteen,
                stylesM.marginTopFourtyFive,
                fontBold(),
              ]}
            >
              Ingresar nueva contraseña
            </Text>
              <TextInput
                style={[
                  stylesM.boxInputTextChangePass,
                  stylesM.backgroundTransparent,
                  stylesM.fontSizeSixteen,
                  stylesM.textColorWhite,
                ]}
                // value={number}
              />
              <Text
              style={[
                stylesM.textColorGray,
                stylesM.fontSizeSixteen,
                stylesM.marginTopFourty,
                fontBold(),
              ]}
            >
              Verificar contraseña
            </Text>
              <TextInput
                style={[
                  stylesM.boxInputTextChangePass,
                  stylesM.backgroundTransparent,
                  stylesM.textColorWhite,
                  stylesM.fontSizeSixteen,
                ]}
                // value={number}
              />

              <View style={[stylesL.JustifyAlign]}>

              <TouchableOpacity
                activeOpacity={0.5}
                style={[
                  stylesM.buttonChangePass,
                  stylesM.backgroundMidnightBlue,
                  stylesL.JustifyAlign,
                ]}
                onPress={() => navigation.navigate("Login")}
              >
                <Text
                  style={[
                    stylesM.fontSizeSixteen,
                    stylesM.textColorWhite,
                    fontBold(),
                  ]}
                >
                  Cambiar
                </Text>
              </TouchableOpacity>
              </View>
            
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default ChangePassword;
