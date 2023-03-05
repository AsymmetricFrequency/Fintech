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
  ScrollView,
  Image,
  TextInput,
  Linking,
  ActivityIndicator,
  TouchableOpacity,
  Platform,
} from "react-native";
import { BarStatus } from "../components/BarStatus";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";

const sizeArrow = Platform.OS === "ios" ? 23 : 16;

const EventsInfo = ({ navigation, route }: { navigation: any; route: any }) => {
  //params
  const info = route.params?.info;

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
        <View style={[stylesB.completo, stylesO.completo__flexGrow]}>
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
              Eventos
            </Text>
          </View>

          <View
            style={[
              stylesM.boxTotal,
              stylesM.backgroundSnow,
              stylesM.marginTopTwenty,
              stylesM.radiusTopEighteen,
              stylesL.FlexOne,
              stylesM.heightPercentageEight,
              stylesM.paddingHorizontalTwenty,
              stylesL.JustifyAlign,
            ]}
          >
            <View
              style={[
                stylesM.widthPercentageHundred,
                stylesM.boxEventsInfo,
                stylesM.marginTopTwentyTwo,
              ]}
            >
              <Image
                style={[stylesM.boxEvents_img, stylesM.radiusFifteen]}
                source={require("../../assets/img/publi.webp")}
              />
            </View>

            <View
              style={[
                stylesM.widthPercentageHundred,
                stylesL.FlexOne,
                stylesM.marginTopThirtyFive,
                stylesM.heighTotal,
              ]}
            >
              <ScrollView
                contentContainerStyle={{}}
                horizontal={false}
                showsVerticalScrollIndicator={false}
                endFillColor="#000"
                overScrollMode="never"
              >
                <Text
                  style={[
                    stylesM.textColorRosyBrown,
                    fontLight(),
                    stylesM.fontSizeSixteen,
                  ]}
                >
                  Electro Party
                </Text>
                <Text
                  style={[
                    stylesM.textColorRosyBrown,
                    stylesM.labelEvent,
                    fontBold(),
                    stylesM.fontSizeSixteen,
                  ]}
                >
                  Xolarix
                </Text>

                <Text
                  style={[
                    stylesM.textColorRosyBrown,
                    fontLight(),
                    stylesM.fontSizeSixteen,
                  ]}
                >
                  Cl 5 # 9 - 54
                </Text>
                <Text
                  style={[
                    stylesM.textColorRosyBrown,
                    stylesM.labelEvent,
                    fontBold(),
                    stylesM.fontSizeSixteen,
                  ]}
                >
                  Cali, Colombia
                </Text>

                <Text
                  style={[
                    stylesM.textColorRosyBrown,
                    fontLight(),
                    stylesM.fontSizeSixteen,
                  ]}
                >
                  29 - 10 - 2022
                </Text>

                <Text
                  style={[
                    stylesM.textColorRosyBrown,
                    stylesM.labelEvent,
                    stylesM.marginTopFifteen,
                    fontBold(),
                    stylesM.fontSizeSixteen,
                  ]}
                >
                  The Best Electro Party in town with a top cured line up
                </Text>

                <View style={stylesL.JustifyAlign}>
                  <TouchableOpacity
                    activeOpacity={0.9}
                    style={[
                      stylesM.buttonSendMoney,
                      stylesM.backgroundMidnightBlue,
                      stylesM.radiusFifteen,
                      stylesL.JustifyAlign,
                      stylesM.marginTopTwenty,
                      { marginBottom: 60 },
                    ]}
                  >
                    <Text
                      style={[
                        stylesM.textColorSnow,
                        stylesM.fontSizeSixteen,
                        fontMedium(),
                      ]}
                    >
                      Completar formulario
                    </Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default EventsInfo;
