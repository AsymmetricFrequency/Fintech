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
  TextInput,
  Platform,
  Clipboard,
  StyleSheet,
  ScrollView,
  RefreshControl,
} from "react-native";
import {BarStatus} from "../components/BarStatus";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";

import { WebView } from "react-native-webview";

import { readPrivateKey } from "../../controller";

const SavePay = ({ navigation }: { navigation: any }) => {
  const scrollViewRef = React.useRef();
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
      <SafeAreaView style={stylesB.body}>
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
          <View style={[stylesM.boxTitle, stylesL.Justify]}>
            <Text style={[stylesM.textColorWhite, stylesM.fontSizeSixteen]}>
              Ahorrar Paga
            </Text>
          </View>

          <View
            style={[
              stylesM.boxImgSavePay,
              stylesM.backgroundLavender,
              stylesM.radiusTwentySix,
              stylesL.JustifyAlign,
              stylesM.marginTopThirtyThree,
            ]}
          >
            <Image
              style={[stylesM.boxImgSavePay_Img]}
              source={require("../../assets/img/ahorrarPagaServicios.png")}
            />
          </View>

          <View style={[stylesM.paddingHorizontalTwenty, stylesL.AlignItems]}>
            <Text
              style={[
                stylesM.textColorLavender,
                stylesM.fontSizeTwelve,
                fontLight(),
                stylesM.fontLineTwenty,
                stylesM.marginTopThirtyThree,
                stylesL.textAlignCenter,
              ]}
            >
              Nos gusta que tus finanzas crezcan, ahora bajo el método e interés
              simple y recibe una pequeña recompensa al final de tu meta.
            </Text>

            <TouchableOpacity
              activeOpacity={0.5}
              style={[
                stylesM.buttonMySavings,
                stylesM.backgroundFloralWhite,
                stylesM.radiusTwenty,
                stylesL.JustifyAlign,
              ]}
            >
              <Text
                style={[
                  stylesM.textColorLightSlateBlue,
                  stylesM.fontSizeFourteen,
                  fontMedium(),
                ]}
              >
                Mis ahorros
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={[
              stylesM.widthTotal,
              stylesM.backgroundSnow,
              stylesM.marginTopFiftyOne,
              stylesM.radiusTopThirtyFive,
              stylesL.AlignItems,
              stylesM.paddingHorizontalFortyOne,
              stylesL.FlexOne
            ]}
          >
            <View style={[stylesM.widthTotal, stylesL.alignItemsEnd]}>
              <TouchableOpacity
                activeOpacity={0.5}
              >
                <Text
                  style={[
                    stylesM.textColorLavender,
                    stylesM.fontSizeTwentyTwo,
                    fontMedium(),
                    stylesM.marginTopThirtyThree,
                    stylesL.alignItemsEnd,
                  ]}
                >
                  X
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={[
                stylesM.widthTotal,
                stylesL.flexRow,
                stylesL.spaceBetween,
                stylesL.AlignItems,
                stylesL.FlexOne
              ]}
            >
              <TouchableOpacity
                activeOpacity={0.5}
                style={[
                  stylesM.buttonSaveMoney,
                  stylesM.backgroundLavender,
                  stylesM.radiusTwentySix,
                  stylesL.JustifyAlign,
                ]}
                onPress={() => navigation.navigate("CurrentSavings")}
              >
                <Image
                  style={[stylesM.buttonServices_img, stylesM.radiusOneHundred]}
                  source={require("../../assets/img/acueducto.webp")}
                />
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.5}
                style={[
                  stylesM.buttonSaveMoney,
                  stylesM.backgroundLavender,
                  stylesM.radiusTwentySix,
                  stylesL.JustifyAlign,
                ]}
              >
                <Image
                  style={[stylesM.buttonServices_img, stylesM.radiusOneHundred]}
                  source={require("../../assets/img/epm.webp")}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SavePay;
