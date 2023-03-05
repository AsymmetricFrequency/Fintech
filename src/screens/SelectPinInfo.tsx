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

const SelectPinInfo = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const paramsPins = route.params?.pins;

  const pins = () => {
    if (paramsPins == "netflix") {
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
          source={require("../../assets/img/Logo-Netflix.webp")}
        />
        </View>
      );
    } else if (paramsPins == "spotify") {
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
          source={require("../../assets/img/Logo-Spotify.webp")}
        />
        </View>
      );
    } else if (paramsPins == "crunchyroll") {
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
          source={require("../../assets/img/Logo-Crunchyroll.webp")}
        />
        </View>
      );
    } else if (paramsPins == "hbo") {
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
          source={require("../../assets/img/Logo-Hbo.webp")}
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
              Comprar Pines
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
                  Has seleccionado
                </Text>

                <View style={[stylesM.marginTopThirtyThree]}>
                  <View
                    style={[
                      stylesM.btnInfoPackage,
                      stylesM.backgroundLavender,
                      stylesM.radiusTwentySix,
                    ]}
                  >
                    {pins()}
                  </View>
                </View>

                <Text
                  style={[
                    stylesM.fontSizeTwelve,
                    fontMedium(),
                    stylesM.marginTopFiftyOne,
                    stylesM.textColorDullpurple,
                  ]}
                >
                  Información del pin
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
                  $100.000
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
                    onPress={() => navigation.navigate("VoucherPins", {
                      pins: paramsPins,
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

export default SelectPinInfo;
