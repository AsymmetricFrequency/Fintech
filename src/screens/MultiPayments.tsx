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

const MultiPayments = ({ navigation }: { navigation: any }) => {
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
              Multipagos
            </Text>
          </View>
          <View
            style={[
              stylesM.boxTotal,
              stylesM.backgroundSnow,
              stylesM.marginTopTwenty,
              stylesM.radiusTopEighteen,
            ]}
          >
            <View style={[stylesM.widthTotal, stylesM.paddingHorizontalThirty]}>
              <Text
                style={[
                  stylesM.textColorDullpurple,
                  stylesM.fontSizeSixteen,
                  stylesM.fontLineThirty,
                  fontMedium(),
                  stylesM.boxTitleMultipayments,
                ]}
              >
                Selecciona el pago que deseas realizar.
              </Text>
              <ScrollView
                contentContainerStyle={[{ paddingBottom: 200 }]}
                horizontal={false}
                showsVerticalScrollIndicator={false}
                endFillColor="#000"
                overScrollMode="never"
              >
                <View
                  style={[
                    stylesL.JustifyAlign,
                    stylesL.flexRow,
                    stylesL.flexWrap,
                    stylesL.spaceBetween,
                    stylesM.paddingHorizontalThirty,
                    stylesM.marginBottomTwentyEight,
                  ]}
                >
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={[
                      stylesM.buttonsMultipayments,
                      stylesM.backgroundLavender,
                      stylesM.radiusTwentySix,
                      stylesL.spaceBetween,
                      stylesL.AlignItems,
                    ]}
                    onPress={() => navigation.navigate("MobileOperators")}
                  >
                    <Text
                      style={[
                        stylesM.textColorDullpurple,
                        stylesM.fontSizeTen,
                        fontMedium(),
                      ]}
                    >
                      Recargar celular
                    </Text>
                    <Image
                      style={[stylesM.buttonsMultipayments_img]}
                      source={require("../../assets/img/Multipago1.webp")}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={[
                      stylesM.buttonsMultipayments,
                      stylesM.backgroundLavender,
                      stylesM.radiusTwentySix,
                      stylesL.spaceBetween,
                      stylesL.AlignItems,
                    ]}
                    onPress={() => navigation.navigate("BuyPins")}
                  >
                    <Text
                      style={[
                        stylesM.textColorDullpurple,
                        stylesM.fontSizeTen,
                        fontMedium(),
                      ]}
                    >
                      Compra de pines
                    </Text>
                    <Image
                      style={[stylesM.buttonsMultipayments_img]}
                      source={require("../../assets/img/Multipago2.webp")}
                    />
                  </TouchableOpacity>
                </View>

                <View
                  style={[
                    stylesL.JustifyAlign,
                    stylesL.flexRow,
                    stylesL.flexWrap,
                    stylesL.spaceBetween,
                    stylesM.paddingHorizontalThirty,
                  ]}
                >
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={[
                      stylesM.buttonsMultipayments,
                      stylesM.backgroundLavender,
                      stylesM.radiusTwentySix,
                      stylesL.spaceBetween,
                      stylesL.AlignItems,
                    ]}
                  >
                    <Text
                      style={[
                        stylesM.textColorDullpurple,
                        stylesM.fontSizeTen,
                        fontMedium(),
                      ]}
                    >
                      Servicios privados
                    </Text>
                    <Image
                      style={[stylesM.buttonsMultipayments_img]}
                      source={require("../../assets/img/m_ultipago3.webp")}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={[
                      stylesM.buttonsMultipayments,
                      stylesM.backgroundLavender,
                      stylesM.radiusTwentySix,
                      stylesL.spaceBetween,
                      stylesL.AlignItems,
                    ]}
                  >
                    <Text
                      style={[
                        stylesM.textColorDullpurple,
                        stylesM.fontSizeTen,
                        fontMedium(),
                      ]}
                    >
                      Compra de plan
                    </Text>
                    <Image
                      style={[stylesM.buttonsMultipayments_img]}
                      source={require("../../assets/img/multipago4.webp")}
                    />
                  </TouchableOpacity>
                </View>
                <View
                  style={[
                    stylesM.widthTotal,
                    stylesM.boxMultipayments,
                    stylesM.backgrounLightAliceBlue,
                    stylesM.radiusTen,
                    stylesM.paddingHorizontalTen,
                    stylesM.paddingVerticalFifteen,
                  ]}
                >
                  <Text
                    style={[
                      stylesM.textColorDarkGray,
                      stylesM.fontSizeTwenty,
                      fontMedium(),
                    ]}
                  >
                    Tus favoritos
                  </Text>

                  <ScrollView
                    contentContainerStyle={[{ paddingBottom: 70 }]}
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
                        stylesM.marginTopFifteen,
                        stylesM.paddingHorizontalThirty,
                      ]}
                    >
                      <View>
                        <TouchableOpacity activeOpacity={0.5}>
                          <Image
                            style={[stylesM.buttonFavourites_img]}
                            source={require("../../assets/img/logoClaro.webp")}
                          />
                        </TouchableOpacity>
                      </View>

                      <View>
                        <TouchableOpacity activeOpacity={0.5}>
                          <Image
                            style={[stylesM.buttonFavourites_img]}
                            source={require("../../assets/img/logoTigo.webp")}
                          />
                        </TouchableOpacity>
                      </View>

                      <View>
                        <TouchableOpacity activeOpacity={0.5}>
                          <Image
                            style={[stylesM.buttonFavourites_img]}
                            source={require("../../assets/img//Logo-Netflix.webp")}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View
                      style={[
                        stylesL.flexRow,
                        stylesL.flexWrap,
                        stylesL.spaceBetween,
                        stylesM.marginTopTwentyFive,
                        stylesM.paddingHorizontalThirty,
                      ]}
                    >
                      <View>
                        <TouchableOpacity activeOpacity={0.5}>
                          <Image
                            style={[stylesM.buttonFavourites_img]}
                            source={require("../../assets/img/Logo-Spotify.webp")}
                          />
                        </TouchableOpacity>
                      </View>

                      <View>
                        <TouchableOpacity activeOpacity={0.5}>
                          <Image
                            style={[stylesM.buttonFavourites_img]}
                            source={require("../../assets/img/Logo-Crunchyroll.webp")}
                          />
                        </TouchableOpacity>
                      </View>

                      <View>
                        <TouchableOpacity activeOpacity={0.5}>
                          <Image
                            style={[stylesM.buttonFavourites_img]}
                            source={require("../../assets/img/logoWom.webp")}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </ScrollView>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default MultiPayments;
