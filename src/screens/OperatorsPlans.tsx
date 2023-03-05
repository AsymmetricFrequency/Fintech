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

const OperatorsPlans = ({
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
        <View>
          <TouchableOpacity
            activeOpacity={0.5}
            style={[stylesL.flexRow, stylesM.marginTopFifteen]}
            onPress={() =>
              navigation.navigate("SelectPackageRecharge", {
                operators: paramsOperators,
              })
            }
          >
            <View style={[stylesM.widthPercentageTwentyFive]}>
              <View
                style={[
                  stylesM.btnPlans,
                  stylesM.backgroundLavender,
                  stylesM.radiusTwentySix,
                ]}
              >
                <View style={[stylesL.alignItemsEnd]}>
                  <Image
                    style={[
                      stylesM.buttonPlans_img,
                      stylesL.AlignItems,
                      stylesL.Justify,
                      stylesL.JustifyAlign,
                    ]}
                    source={require("../../assets/img/logoClaro.webp")}
                  />
                </View>
              </View>
            </View>
            <View style={[stylesM.widthPercentageSeventyFive, stylesL.Justify]}>
              <Text
                style={[
                  stylesM.leftTwelve,
                  stylesM.textColorDarkPurple,
                  fontBold(),
                  stylesM.fontSizeSixteen,
                ]}
              >
                Tv, Prepago
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.5}
            style={[stylesL.flexRow, stylesM.marginTopThirtyFive]}
            onPress={() =>
              navigation.navigate("SelectPackageRecharge", {
                operators: paramsOperators,
              })
            }
          >
            <View style={[stylesM.widthPercentageTwentyFive]}>
              <View
                style={[
                  stylesM.btnPlans,
                  stylesM.backgroundLavender,
                  stylesM.radiusTwentySix,
                ]}
              >
                <View style={[stylesL.alignItemsEnd]}>
                  <Image
                    style={[
                      stylesM.buttonPlans_img,
                      stylesL.AlignItems,
                      stylesL.Justify,
                      stylesL.JustifyAlign,
                    ]}
                    source={require("../../assets/img/logoClaro.webp")}
                  />
                </View>
              </View>
            </View>
            <View style={[stylesM.widthPercentageSeventyFive, stylesL.Justify]}>
              <Text
                style={[
                  stylesM.leftTwelve,
                  stylesM.textColorDarkPurple,
                  fontBold(),
                  stylesM.fontSizeSixteen,
                ]}
              >
                Navegar
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.5}
            style={[stylesL.flexRow, stylesM.marginTopThirtyFive]}
            onPress={() =>
              navigation.navigate("SelectPackageRecharge", {
                operators: paramsOperators,
              })
            }
          >
            <View style={[stylesM.widthPercentageTwentyFive]}>
              <View
                style={[
                  stylesM.btnPlans,
                  stylesM.backgroundLavender,
                  stylesM.radiusTwentySix,
                ]}
              >
                <View style={[stylesL.alignItemsEnd]}>
                  <Image
                    style={[
                      stylesM.buttonPlans_img,
                      stylesL.AlignItems,
                      stylesL.Justify,
                      stylesL.JustifyAlign,
                    ]}
                    source={require("../../assets/img/logoClaro.webp")}
                  />
                </View>
              </View>
            </View>
            <View style={[stylesM.widthPercentageSeventyFive, stylesL.Justify]}>
              <Text
                style={[
                  stylesM.leftTwelve,
                  stylesM.textColorDarkPurple,
                  fontBold(),
                  stylesM.fontSizeSixteen,
                ]}
              >
                Hablar
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.5}
            style={[stylesL.flexRow, stylesM.marginTopThirtyFive]}
            onPress={() =>
              navigation.navigate("SelectPackageRecharge", {
                operators: paramsOperators,
              })
            }
          >
            <View style={[stylesM.widthPercentageTwentyFive]}>
              <View
                style={[
                  stylesM.btnPlans,
                  stylesM.backgroundLavender,
                  stylesM.radiusTwentySix,
                ]}
              >
                <View style={[stylesL.alignItemsEnd]}>
                  <Image
                    style={[
                      stylesM.buttonPlans_img,
                      stylesL.AlignItems,
                      stylesL.Justify,
                      stylesL.JustifyAlign,
                    ]}
                    source={require("../../assets/img/logoClaro.webp")}
                  />
                </View>
              </View>
            </View>
            <View style={[stylesM.widthPercentageSeventyFive, stylesL.Justify]}>
              <Text
                style={[
                  stylesM.leftTwelve,
                  stylesM.textColorDarkPurple,
                  fontBold(),
                  stylesM.fontSizeSixteen,
                ]}
              >
                Todo incluido
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    } else if (paramsOperators == "tigo") {
      return (
        <View>
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={[stylesL.flexRow, stylesM.marginTopFifteen]}
                  onPress={() =>
                    navigation.navigate("SelectPackageRecharge", {
                      operators: paramsOperators,
                    })
                  }
                >
                  <View style={[stylesM.widthPercentageTwentyFive]}>
                    <View
                      style={[
                        stylesM.btnPlans,
                        stylesM.backgroundLavender,
                        stylesM.radiusTwentySix,
                      ]}
                    >
                      <View style={[stylesL.alignItemsEnd]}>
                        <Image
                          style={[
                            stylesM.buttonPlans_img,
                            stylesL.AlignItems,
                            stylesL.Justify,
                            stylesL.JustifyAlign,
                          ]}
                          source={require("../../assets/img/logoTigo.webp")}
                        />
                      </View>
                    </View>
                  </View>
                  <View
                    style={[
                      stylesM.widthPercentageSeventyFive,
                      stylesL.Justify,
                    ]}
                  >
                    <Text
                      style={[
                        stylesM.leftTwelve,
                        stylesM.textColorDarkPurple,
                        fontBold(),
                        stylesM.fontSizeSixteen,
                      ]}
                    >
                      Internet
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.5}
                  style={[stylesL.flexRow, stylesM.marginTopThirtyFive]}
                  onPress={() =>
                    navigation.navigate("SelectPackageRecharge", {
                      operators: paramsOperators,
                    })
                  }
                >
                  <View style={[stylesM.widthPercentageTwentyFive]}>
                    <View
                      style={[
                        stylesM.btnPlans,
                        stylesM.backgroundLavender,
                        stylesM.radiusTwentySix,
                      ]}
                    >
                      <View style={[stylesL.alignItemsEnd]}>
                        <Image
                          style={[
                            stylesM.buttonPlans_img,
                            stylesL.AlignItems,
                            stylesL.Justify,
                            stylesL.JustifyAlign,
                          ]}
                          source={require("../../assets/img/logoTigo.webp")}
                        />
                      </View>
                    </View>
                  </View>
                  <View
                    style={[
                      stylesM.widthPercentageSeventyFive,
                      stylesL.Justify,
                    ]}
                  >
                    <Text
                      style={[
                        stylesM.leftTwelve,
                        stylesM.textColorDarkPurple,
                        fontBold(),
                        stylesM.fontSizeSixteen,
                      ]}
                    >
                      Hablar y mensajear
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.5}
                  style={[stylesL.flexRow, stylesM.marginTopThirtyFive]}
                  onPress={() =>
                    navigation.navigate("SelectPackageRecharge", {
                      operators: paramsOperators,
                    })
                  }
                >
                  <View style={[stylesM.widthPercentageTwentyFive]}>
                    <View
                      style={[
                        stylesM.btnPlans,
                        stylesM.backgroundLavender,
                        stylesM.radiusTwentySix,
                      ]}
                    >
                      <View style={[stylesL.alignItemsEnd]}>
                        <Image
                          style={[
                            stylesM.buttonPlans_img,
                            stylesL.AlignItems,
                            stylesL.Justify,
                            stylesL.JustifyAlign,
                          ]}
                          source={require("../../assets/img/logoTigo.webp")}
                        />
                      </View>
                    </View>
                  </View>
                  <View
                    style={[
                      stylesM.widthPercentageSeventyFive,
                      stylesL.Justify,
                    ]}
                  >
                    <Text
                      style={[
                        stylesM.leftTwelve,
                        stylesM.textColorDarkPurple,
                        fontBold(),
                        stylesM.fontSizeSixteen,
                      ]}
                    >
                      Combos
                    </Text>
                  </View>
                </TouchableOpacity>
                </View>
      );
    } else if (paramsOperators == "movistar") {
      return (
        <View>
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={[stylesL.flexRow, stylesM.marginTopFifteen]}
                  onPress={() =>
                    navigation.navigate("SelectPackageRecharge", {
                      operators: paramsOperators,
                    })
                  }
                >
                  <View style={[stylesM.widthPercentageTwentyFive]}>
                    <View
                      style={[
                        stylesM.btnPlans,
                        stylesM.backgroundLavender,
                        stylesM.radiusTwentySix,
                      ]}
                    >
                      <View style={[stylesL.alignItemsEnd]}>
                        <Image
                          style={[
                            stylesM.buttonPlans_img,
                            stylesL.AlignItems,
                            stylesL.Justify,
                            stylesL.JustifyAlign,
                          ]}
                          source={require("../../assets/img/logoMovistar.webp")}
                        />
                      </View>
                    </View>
                  </View>
                  <View
                    style={[
                      stylesM.widthPercentageSeventyFive,
                      stylesL.Justify,
                    ]}
                  >
                    <Text
                      style={[
                        stylesM.leftTwelve,
                        stylesM.textColorDarkPurple,
                        fontBold(),
                        stylesM.fontSizeSixteen,
                      ]}
                    >
                      Voz
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.5}
                  style={[stylesL.flexRow, stylesM.marginTopThirtyFive]}
                  onPress={() =>
                    navigation.navigate("SelectPackageRecharge", {
                      operators: paramsOperators,
                    })
                  }
                >
                  <View style={[stylesM.widthPercentageTwentyFive]}>
                    <View
                      style={[
                        stylesM.btnPlans,
                        stylesM.backgroundLavender,
                        stylesM.radiusTwentySix,
                      ]}
                    >
                      <View style={[stylesL.alignItemsEnd]}>
                        <Image
                          style={[
                            stylesM.buttonPlans_img,
                            stylesL.AlignItems,
                            stylesL.Justify,
                            stylesL.JustifyAlign,
                          ]}
                          source={require("../../assets/img/logoMovistar.webp")}
                        />
                      </View>
                    </View>
                  </View>
                  <View
                    style={[
                      stylesM.widthPercentageSeventyFive,
                      stylesL.Justify,
                    ]}
                  >
                    <Text
                      style={[
                        stylesM.leftTwelve,
                        stylesM.textColorDarkPurple,
                        fontBold(),
                        stylesM.fontSizeSixteen,
                      ]}
                    >
                      Todo incluido
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.5}
                  style={[stylesL.flexRow, stylesM.marginTopThirtyFive]}
                  onPress={() =>
                    navigation.navigate("SelectPackageRecharge", {
                      operators: paramsOperators,
                    })
                  }
                >
                  <View style={[stylesM.widthPercentageTwentyFive]}>
                    <View
                      style={[
                        stylesM.btnPlans,
                        stylesM.backgroundLavender,
                        stylesM.radiusTwentySix,
                      ]}
                    >
                      <View style={[stylesL.alignItemsEnd]}>
                        <Image
                          style={[
                            stylesM.buttonPlans_img,
                            stylesL.AlignItems,
                            stylesL.Justify,
                            stylesL.JustifyAlign,
                          ]}
                          source={require("../../assets/img/logoMovistar.webp")}
                        />
                      </View>
                    </View>
                  </View>
                  <View
                    style={[
                      stylesM.widthPercentageSeventyFive,
                      stylesL.Justify,
                    ]}
                  >
                    <Text
                      style={[
                        stylesM.leftTwelve,
                        stylesM.textColorDarkPurple,
                        fontBold(),
                        stylesM.fontSizeSixteen,
                      ]}
                    >
                      Datos
                    </Text>
                  </View>
                </TouchableOpacity>
                </View>
      );
    } else if (paramsOperators == "wom") {
      return (
        <View>
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={[stylesL.flexRow, stylesM.marginTopThirtyFive]}
                  onPress={() =>
                    navigation.navigate("SelectPackageRecharge", {
                      operators: paramsOperators,
                    })
                  }
                >
                  <View style={[stylesM.widthPercentageTwentyFive]}>
                    <View
                      style={[
                        stylesM.btnPlans,
                        stylesM.backgroundLavender,
                        stylesM.radiusTwentySix,
                      ]}
                    >
                      <View style={[stylesL.alignItemsEnd]}>
                        <Image
                          style={[
                            stylesM.buttonPlans_img,
                            stylesL.AlignItems,
                            stylesL.Justify,
                            stylesL.JustifyAlign,
                          ]}
                          source={require("../../assets/img/logoWom.webp")}
                        />
                      </View>
                    </View>
                  </View>
                  <View
                    style={[
                      stylesM.widthPercentageSeventyFive,
                      stylesL.Justify,
                    ]}
                  >
                    <Text
                      style={[
                        stylesM.leftTwelve,
                        stylesM.textColorDarkPurple,
                        fontBold(),
                        stylesM.fontSizeSixteen,
                      ]}
                    >
                      Todo incluido
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.5}
                  style={[stylesL.flexRow, stylesM.marginTopThirtyFive]}
                  onPress={() =>
                    navigation.navigate("SelectPackageRecharge", {
                      operators: paramsOperators,
                    })
                  }
                >
                  <View style={[stylesM.widthPercentageTwentyFive]}>
                    <View
                      style={[
                        stylesM.btnPlans,
                        stylesM.backgroundLavender,
                        stylesM.radiusTwentySix,
                      ]}
                    >
                      <View style={[stylesL.alignItemsEnd]}>
                        <Image
                          style={[
                            stylesM.buttonPlans_img,
                            stylesL.AlignItems,
                            stylesL.Justify,
                            stylesL.JustifyAlign,
                          ]}
                          source={require("../../assets/img/logoWom.webp")}
                        />
                      </View>
                    </View>
                  </View>
                  <View
                    style={[
                      stylesM.widthPercentageSeventyFive,
                      stylesL.Justify,
                    ]}
                  >
                    <Text
                      style={[
                        stylesM.leftTwelve,
                        stylesM.textColorDarkPurple,
                        fontBold(),
                        stylesM.fontSizeSixteen,
                      ]}
                    >
                      Datos
                    </Text>
                  </View>
                </TouchableOpacity>
                </View>
      );
    } else if (paramsOperators == "virgin") {
      return (
        <View>
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={[stylesL.flexRow, stylesM.marginTopThirtyFive]}
                  onPress={() =>
                    navigation.navigate("SelectPackageRecharge", {
                      operators: paramsOperators,
                    })
                  }
                >
                  <View style={[stylesM.widthPercentageTwentyFive]}>
                    <View
                      style={[
                        stylesM.btnPlans,
                        stylesM.backgroundLavender,
                        stylesM.radiusTwentySix,
                      ]}
                    >
                      <View style={[stylesL.alignItemsEnd]}>
                        <Image
                          style={[
                            stylesM.buttonPlans_img,
                            stylesL.AlignItems,
                            stylesL.Justify,
                            stylesL.JustifyAlign,
                          ]}
                          source={require("../../assets/img/logoVirgin.webp")}
                        />
                      </View>
                    </View>
                  </View>
                  <View
                    style={[
                      stylesM.widthPercentageSeventyFive,
                      stylesL.Justify,
                    ]}
                  >
                    <Text
                      style={[
                        stylesM.leftTwelve,
                        stylesM.textColorDarkPurple,
                        fontBold(),
                        stylesM.fontSizeSixteen,
                      ]}
                    >
                      Bolsas
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.5}
                  style={[stylesL.flexRow, stylesM.marginTopThirtyFive]}
                  onPress={() =>
                    navigation.navigate("SelectPackageRecharge", {
                      operators: paramsOperators,
                    })
                  }
                >
                  <View style={[stylesM.widthPercentageTwentyFive]}>
                    <View
                      style={[
                        stylesM.btnPlans,
                        stylesM.backgroundLavender,
                        stylesM.radiusTwentySix,
                      ]}
                    >
                      <View style={[stylesL.alignItemsEnd]}>
                        <Image
                          style={[
                            stylesM.buttonPlans_img,
                            stylesL.AlignItems,
                            stylesL.Justify,
                            stylesL.JustifyAlign,
                          ]}
                          source={require("../../assets/img/logoVirgin.webp")}
                        />
                      </View>
                    </View>
                  </View>
                  <View
                    style={[
                      stylesM.widthPercentageSeventyFive,
                      stylesL.Justify,
                    ]}
                  >
                    <Text
                      style={[
                        stylesM.leftTwelve,
                        stylesM.textColorDarkPurple,
                        fontBold(),
                        stylesM.fontSizeSixteen,
                      ]}
                    >
                      Antiplanes
                    </Text>
                  </View>
                </TouchableOpacity>
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
                  Selecciona el tipo de paquete que deseas comprar
                </Text>
              </View>

              <ScrollView
                contentContainerStyle={[
                  { paddingBottom: 50, paddingHorizontal: 21 },
                ]}
                horizontal={false}
                showsVerticalScrollIndicator={false}
                endFillColor="#000"
                overScrollMode="never"
              >
                {operators()}
              </ScrollView>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default OperatorsPlans;
