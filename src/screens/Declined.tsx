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
  Platform,
} from "react-native";
import { BarStatus } from "../components/BarStatus";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { LotieDeclinedTran } from "../components/Lottie";

const sizeCopy = Platform.OS === "ios" ? 19 : 22;

const Declined = ({ navigation, route }: { navigation: any; route: any }) => {
  //respuesta
  const respuesta = route.params?.resp;
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
  const topIos = () => Platform.OS === "ios" && { top: 3 };

  return (
    <LinearGradient
      style={stylesB.linear}
      colors={["#3A0CA3", "#0f9172"]}
      start={{ x: 0, y: 0.01 }}
      end={{ x: 0, y: 0.7 }}
    >
      <SafeAreaView style={stylesB.body}>
        <BarStatus />
        <View style={[stylesB.completo, stylesL.JustifyAlign]}>
          <View style={[stylesM.widthRectangle, stylesL.JustifyAlign]}>
            <LotieDeclinedTran />
          </View>
          <View
            style={[
              stylesM.widthRectangle,
              stylesM.bottomTitle,
              stylesL.AlignItems,
            ]}
          >
            <Text
              style={[
                stylesM.textColorCian,
                stylesM.fontSizeThirtyFive,
                fontBold(),
              ]}
            >
              Transacción Fallida
            </Text>
            <Text
              style={[
                stylesM.textColorWhite,
                stylesM.fontSizeSixteen,
                stylesM.marginTopTwenty,
                fontMedium(),
              ]}
            >
              {respuesta}
            </Text>
          </View>
          <View
            style={[
              stylesM.boxGradientLinear,
              stylesM.widthRectangle,
              stylesO.boxGradientLinear__heightMedium,
              stylesM.boxBottom,
            ]}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("Crypto")}
              activeOpacity={0.8}
              style={[
                stylesM.boxTotal,
                stylesM.radiusTwentyFive,
                stylesL.JustifyAlign,
                stylesM.backgroundCian,
              ]}
            >
              <View style={[]}>
                <Text
                  style={[
                    stylesM.textColorBlack,
                    fontBold(),
                    stylesM.fontSizeTwentyEight,
                  ]}
                >
                  Continuar
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Declined;
