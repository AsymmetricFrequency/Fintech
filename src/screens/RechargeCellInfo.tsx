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
  ScrollView,
} from "react-native";
import { BarStatus } from "../components/BarStatus";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";

const RechargeCellInfo = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const paramsOperators = route.params?.operators;

  const operators = () => {
    if (paramsOperators == "claro") {
      return (
        <View
        style={[
          stylesL.alignItemsEnd
        ]}>
        <Image
          style={[
            stylesM.buttonPackage_img,
            stylesL.AlignItems,
            stylesL.Justify,
            stylesL.JustifyAlign,
          ]}
          source={require("../../assets/img/logoClaro.webp")}
        />
        </View>
      );
    } else if (paramsOperators == "tigo") {
      return (
        <View
        style={[
          stylesL.alignItemsEnd
        ]}>
        <Image
          style={[
            stylesM.buttonPackage_img,
            stylesL.AlignItems,
            stylesL.Justify,
            stylesL.JustifyAlign,
          ]}
          source={require("../../assets/img/logoTigo.webp")}
        />
        </View>
      );
    } else if (paramsOperators == "movistar") {
      return (
        <View
        style={[
          stylesL.alignItemsEnd
        ]}>
        <Image
          style={[
            stylesM.buttonPackage_img,
            stylesL.AlignItems,
            stylesL.Justify,
            stylesL.JustifyAlign,
          ]}
          source={require("../../assets/img/logoMovistar.webp")}
        />
        </View>
      );
    } else if (paramsOperators == "wom") {
      return (
        <View
        style={[
          stylesL.alignItemsEnd
        ]}>
        <Image
          style={[
            stylesM.buttonPackage_img,
            stylesL.AlignItems,
            stylesL.Justify,
            stylesL.JustifyAlign,
          ]}
          source={require("../../assets/img/logoWom.webp")}
        />
        </View>
      );
    } else if (paramsOperators == "virgin") {
      return (
        <View
        style={[
          stylesL.alignItemsEnd
        ]}>
        <Image
          style={[
            stylesM.buttonPackage_img,
            stylesL.AlignItems,
            stylesL.Justify,
            stylesL.JustifyAlign,
          ]}
          source={require("../../assets/img/logoVirgin.webp")}
        />
        </View>
      );
    }
  };
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
            <Text
              style={[
                stylesM.textColorWhite,
                stylesM.fontSizeSixteen,
                fontMedium(),
              ]}
            >
              Operadores Móviles
            </Text>
          </View>
          <View
            style={[
              stylesM.boxTotal,
              stylesM.backgroundSnow,
              stylesM.marginTopTwenty,
              stylesM.radiusTopEighteen,
              stylesL.FlexOne,
            ]}
          >
            <View style={[stylesM.widthTotal, stylesL.Justify]}>
              <View
                style={[
                  stylesM.paddingHorizontalTwentyOne,
                  stylesM.marginTopTwentyFour,
                  stylesM.marginBottomNineteen,
                ]}
              >
                <Text
                  style={[
                    stylesM.textColorDullpurple,
                    stylesM.fontSizeSixteen,
                    fontLight(),
                  ]}
                >
                  Has seleccionado este paquete para recargar tu celular.
                </Text>

                <View style={[stylesM.marginTopThirtyThree]}>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    style={[
                      stylesM.btnInfoPackage,
                      stylesM.backgroundLavender,
                      stylesM.radiusTwentySix,
                    ]}
                  >
                    {operators()}
                  </TouchableOpacity>
                </View>

                <Text
                  style={[
                    stylesM.fontSizeTwelve,
                    fontMedium(),
                    stylesM.marginTopFiftyOne,
                    stylesM.textColorDullpurple,
                  ]}
                >
                  Información del plan
                </Text>

                <Text
                  style={[
                    stylesM.backgroundTransparent,
                    stylesM.textColorDarkLavander,
                    stylesM.fontSizeThirtyTwo,
                    stylesM.marginTopNinety,
                    fontBold(),
                  ]}
                >
                  $50.000
                </Text>

                <View style={stylesL.JustifyAlign}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={[
                      stylesM.buttonRechargeInfo,
                      stylesM.backgroundMidnightBlue,
                      stylesM.radiusTwenty,
                      stylesL.JustifyAlign,
                      stylesM.marginTopNinety,
                    ]}
                    onPress={() => navigation.navigate("RechargeCell", {
                      operators: paramsOperators,
                    })}
                  >
                    <Text
                      style={[
                        stylesM.textColorSnow,
                        stylesM.fontSizeFourteen,
                        fontMedium(),
                      ]}
                    >
                      Siguiente
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default RechargeCellInfo;
