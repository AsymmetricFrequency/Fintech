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

const CurrentSavings = ({ navigation }: { navigation: any }) => {
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
              Ahorro Actual
            </Text>
          </View>

          <View style={[stylesL.JustifyAlign, stylesM.marginTopFiftyNine]}>
            <Image
              style={[stylesM.imgCurrentSavings]}
              source={require("../../assets/img/ahorrarPagaServicios.png")}
            />

            <Text
              style={[
                stylesM.textColorWhite,
                stylesM.fontSizeFourty,
                fontBold(),
                stylesM.marginTopThirtyEight,
                stylesM.paddingHorizontalFortyOne,
              ]}
            >
              $0
            </Text>
          </View>

          <View
            style={[
              stylesM.widthTotal,
              stylesM.backgroundSnow,
              stylesM.marginTopOneHundredTwentyThree,
              stylesM.radiusTopThirtyFive,
              stylesL.AlignItems,
              stylesM.paddingHorizontalFortyOne,
              stylesL.FlexOne,
            ]}
          >
            <View style={[stylesM.widthTotal, stylesL.alignItemsEnd]}>
              <TouchableOpacity activeOpacity={0.5}>
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
              style={[stylesM.widthTotal, stylesL.Justify, stylesL.FlexOne]}
            >
              <Text
                style={[
                  stylesM.textColorDullpurple,
                  stylesM.fontSizeTwelve,
                  fontLight(),
                ]}
              >
                Ingrese la cantidad de dinero que desea ahorrar
              </Text>

              <TextInput
                style={[
                  stylesM.widthTotal,
                  stylesM.boxInputTextService,
                  stylesM.backgroundLavender,
                  stylesM.radiusFive,
                ]}
                // value={number}
              />
              <View style={[stylesL.JustifyAlign]}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={[
                    stylesM.buttonMoney,
                    stylesM.backgroundLightSlateBlue,
                    stylesM.radiusTwenty,
                    stylesL.JustifyAlign,
                  ]}
                  onPress={() => navigation.navigate("ConsultServices")}
                >
                  <Text
                    style={[
                      stylesM.textColorWhite,
                      stylesM.fontSizeFourteen,
                      fontMedium(),
                    ]}
                  >
                    Ahorrar
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default CurrentSavings;
