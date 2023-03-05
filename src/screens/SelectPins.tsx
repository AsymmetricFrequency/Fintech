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

const SelectPins = ({ navigation, route }: { navigation: any; route: any }) => {
  const paramsPins = route.params?.platforms;

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
            stylesL.alignItemsEnd,
            stylesL.justifyEnd
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

  const pinstext = () => {
    if (paramsPins == "netflix") {
      return (
        "Selecciona el pin de Netflix que deseas comprar."
      );
    } else if (paramsPins == "spotify") {
      return (
        "Selecciona el pin de Spotify que deseas comprar."
      );
    } else if (paramsPins == "crunchyroll") {
      return (
        "Selecciona el pin de Crunchyroll que deseas comprar."
      );
    } else if (paramsPins == "hbo") {
      return (
        "Selecciona el pin de Hbo que deseas comprar."
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
                  {pinstext()}
                </Text>
              </View>

              <ScrollView
                contentContainerStyle={[
                  { paddingBottom: 50 },
                  stylesM.paddingHorizontalTwentyOne,
                ]}
                horizontal={false}
                showsVerticalScrollIndicator={false}
                endFillColor="#000"
                overScrollMode="never"
              >
                <View
                  style={[
                    stylesL.flexRow,
                    stylesL.flexWrap,
                    stylesL.spaceBetween,
                    stylesM.marginTopTwentyFive,
                  ]}
                >
                  <View>
                    <TouchableOpacity
                      activeOpacity={0.5}
                      style={[
                        stylesM.btnPackagePins,
                        stylesM.backgroundLavender,
                        stylesM.radiusTwentySix,
                      ]}
                      onPress={() => navigation.navigate("SelectPinInfo", {
                        pins: paramsPins,
                      })}
                    >
                      {pins()}
                    </TouchableOpacity>
                  </View>

                  <View>
                    <TouchableOpacity
                      activeOpacity={0.5}
                      style={[
                        stylesM.btnPackagePins,
                        stylesM.backgroundLavender,
                        stylesM.radiusTwentySix,
                      ]}
                      onPress={() => navigation.navigate("SelectPinInfo", {
                        pins: paramsPins,
                      })}
                    >
                      {pins()}
                    </TouchableOpacity>
                  </View>
                </View>

                <View
                  style={[
                    stylesL.flexRow,
                    stylesL.flexWrap,
                    stylesL.spaceBetween,
                    stylesM.marginTopFourty,
                  ]}
                >
                  <View>
                    <TouchableOpacity
                      activeOpacity={0.5}
                      style={[
                        stylesM.btnPackagePins,
                        stylesM.backgroundLavender,
                        stylesM.radiusTwentySix,
                      ]}
                      onPress={() => navigation.navigate("SelectPinInfo", {
                        pins: paramsPins,
                      })}
                    >
                      {pins()}
                    </TouchableOpacity>
                  </View>

                  <View>
                    <TouchableOpacity
                      activeOpacity={0.5}
                      style={[
                        stylesM.btnPackagePins,
                        stylesM.backgroundLavender,
                        stylesM.radiusTwentySix,
                      ]}
                      onPress={() => navigation.navigate("SelectPinInfo", {
                        pins: paramsPins,
                      })}
                    >
                      {pins()}
                    </TouchableOpacity>
                  </View>
                </View>

                <View
                  style={[
                    stylesL.flexRow,
                    stylesL.flexWrap,
                    stylesL.spaceBetween,
                    stylesM.marginTopFourty,
                  ]}
                >
                  <View>
                    <TouchableOpacity
                      activeOpacity={0.5}
                      style={[
                        stylesM.btnPackagePins,
                        stylesM.backgroundLavender,
                        stylesM.radiusTwentySix,
                      ]}
                      onPress={() => navigation.navigate("SelectPinInfo", {
                        pins: paramsPins,
                      })}
                    >
                      {pins()}
                    </TouchableOpacity>
                  </View>

                  <View>
                    <TouchableOpacity
                      activeOpacity={0.5}
                      style={[
                        stylesM.btnPackagePins,
                        stylesM.backgroundLavender,
                        stylesM.radiusTwentySix,
                      ]}
                      onPress={() => navigation.navigate("SelectPinInfo", {
                        pins: paramsPins,
                      })}
                    >
                      {pins()}
                    </TouchableOpacity>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SelectPins;
