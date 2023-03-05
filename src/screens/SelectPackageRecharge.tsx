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
import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";

const SelectPackageRecharge = ({
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
                    stylesM.textColorDarkPurpleOpc,
                    stylesM.fontSizeSixteen,
                    fontLight(),
                  ]}
                >
                  Selecciona el operador con el que desea comprar la recarga
                  telefónica desde la billetera con facilidad.
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
                    stylesM.paddingHorizontalTwenty,
                  ]}
                >
                  <View>
                    <TouchableOpacity
                      activeOpacity={0.5}
                      style={[
                        stylesM.btnPackage,
                        stylesM.backgroundLavender,
                        stylesM.radiusTwentySix,
                      ]}
                      onPress={() =>
                        navigation.navigate("RechargeCellInfo", {
                          operators: paramsOperators,
                        })
                      }
                    >
                      {operators()}
                    </TouchableOpacity>
                  </View>

                  <View>
                    <TouchableOpacity
                      activeOpacity={0.5}
                      style={[
                        stylesM.btnPackage,
                        stylesM.backgroundLavender,
                        stylesM.radiusTwentySix,
                      ]}
                      onPress={() =>
                        navigation.navigate("RechargeCellInfo", {
                          operators: paramsOperators,
                        })
                      }
                    >
                      {operators()}
                    </TouchableOpacity>
                  </View>
                </View>

                <View
                  style={[
                    stylesL.flexRow,
                    stylesL.flexWrap,
                    stylesL.spaceBetween,
                    stylesM.marginTopFourty,
                    stylesM.paddingHorizontalTwenty,
                  ]}
                >
                  <View>
                    <TouchableOpacity
                      activeOpacity={0.5}
                      style={[
                        stylesM.btnPackage,
                        stylesM.backgroundLavender,
                        stylesM.radiusTwentySix,
                      ]}
                      onPress={() =>
                        navigation.navigate("RechargeCellInfo", {
                          operators: paramsOperators,
                        })
                      }
                    >
                      {operators()}
                    </TouchableOpacity>
                  </View>

                  <View>
                    <TouchableOpacity
                      activeOpacity={0.5}
                      style={[
                        stylesM.btnPackage,
                        stylesM.backgroundLavender,
                        stylesM.radiusTwentySix,
                      ]}
                      onPress={() =>
                        navigation.navigate("RechargeCellInfo", {
                          operators: paramsOperators,
                        })
                      }
                    >
                      {operators()}
                    </TouchableOpacity>
                  </View>
                </View>

                <View
                  style={[
                    stylesL.flexRow,
                    stylesL.flexWrap,
                    stylesL.spaceBetween,
                    stylesM.marginTopFourty,
                    stylesM.paddingHorizontalTwenty,
                  ]}
                >
                  <View>
                    <TouchableOpacity
                      activeOpacity={0.5}
                      style={[
                        stylesM.btnPackage,
                        stylesM.backgroundLavender,
                        stylesM.radiusTwentySix,
                      ]}
                      onPress={() =>
                        navigation.navigate("RechargeCellInfo", {
                          operators: paramsOperators,
                        })
                      }
                    >
                      {operators()}
                    </TouchableOpacity>
                  </View>

                  <View>
                    <TouchableOpacity
                      activeOpacity={0.5}
                      style={[
                        stylesM.btnPackage,
                        stylesM.backgroundLavender,
                        stylesM.radiusTwentySix,
                      ]}
                      onPress={() =>
                        navigation.navigate("RechargeCellInfo", {
                          operators: paramsOperators,
                        })
                      }
                    >
                      {operators()}
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

export default SelectPackageRecharge;
