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
  Linking,
} from "react-native";
import {BarStatus} from "../components/BarStatus";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { LotieSuccesTran } from "../components/Lottie";



const Succesful = ({ navigation, route }: { navigation: any; route: any }) => {
  //respuesta
  const respuesta = route.params?.resp;
  const num = route.params?.num;
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
          <Text
            style={[
              stylesM.textColorCian,
              stylesM.fontSizeThirtyFive,
              fontBold(),
            ]}
          >
            Transacción Exitosa
          </Text>
          <View style={[stylesM.widthRectangle, stylesL.JustifyAlign]}>
            <LotieSuccesTran />
          </View>

          <Text
            style={[
              stylesM.textColorCian,
              stylesM.fontSizeTwentyTwo,
              fontBold(),
              stylesM.marginTopTwentyFive,
            ]}
          >
            Cantidad Enviada:
          </Text>
          <View style={[stylesM.marginTopEight]}>
            <Text
              style={[
                stylesM.textColorWhite,
                stylesM.fontSizeThirty,
                fontBold(),
              ]}
            >
              {num}
            </Text>
          </View>
          <View
            style={[
              stylesM.widthRectangle,
              stylesL.AlignItems,
              stylesM.marginTopFifteen,
            ]}
          >
            <TouchableOpacity onPress={() => Linking.openURL(respuesta)}>
              <Text
                style={[
                  stylesM.textColorWhite,
                  fontLight(),
                  stylesM.fontSizeSixteen,
                ]}
              >
                {respuesta}
              </Text>
            </TouchableOpacity>
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

export default Succesful;
