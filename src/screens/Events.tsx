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

const Events = ({ navigation }: { navigation: any }) => {
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
            ]}
          >
            <View>
              <View style={[stylesL.Justify, stylesM.marginTopTwelve]}>
                <Text
                  style={[
                    stylesM.textColorDullpurple,
                    stylesM.fontSizeFourteen,
                    fontBold(),
                    stylesM.boxEvents_titleTxt,
                  ]}
                >
                  Electro Party
                </Text>
              </View>
              <TouchableOpacity
                activeOpacity={0.9}
                style={[
                  stylesO.boxHistory__height,
                  stylesM.radiusFifteen,
                  stylesL.flexRow,
                ]}
                onPress={() => navigation.navigate("EventsInfo")}
              >
                <Image
                  source={require("../../assets/img/publi.webp")}
                  style={[stylesM.boxEvents_img, stylesM.radiusFifteen]}
                />
                <View
                  style={[
                    stylesM.backgroundLightSlateBlue,
                    stylesM.boxEvents_text,
                    stylesM.radiusFive,
                    stylesL.JustifyAlign,
                  ]}
                >
                  <Text
                    style={[
                      stylesM.textColorWhite,
                      stylesM.fontSizeFifteen,
                      fontMedium(),
                    ]}
                  >
                    Ver más
                  </Text>
                </View>
              </TouchableOpacity>
            </View>


            <View>
              <View style={[stylesL.Justify, stylesM.marginTopTwelve]}>
                <Text
                  style={[
                    stylesM.textColorDullpurple,
                    stylesM.fontSizeFourteen,
                    fontBold(),
                    stylesM.boxEvents_titleTxt,
                  ]}
                >
                  Electro Party
                </Text>
              </View>
              <TouchableOpacity
                activeOpacity={0.9}
                style={[
                  stylesO.boxHistory__height,
                  stylesM.radiusFifteen,
                  stylesL.flexRow,
                ]}
                onPress={() => navigation.navigate("EventsInfo")}
              >
                <Image
                  source={require("../../assets/img/publi.webp")}
                  style={[stylesM.boxEvents_img, stylesM.radiusFifteen]}
                />
                <View
                  style={[
                    stylesM.backgroundLightSlateBlue,
                    stylesM.boxEvents_text,
                    stylesM.radiusFive,
                    stylesL.JustifyAlign,
                  ]}
                >
                  <Text
                    style={[
                      stylesM.textColorWhite,
                      stylesM.fontSizeFifteen,
                      fontMedium(),
                    ]}
                  >
                    Ver más
                  </Text>
                </View>
              </TouchableOpacity>
            </View>


            <View>
              <View style={[stylesL.Justify, stylesM.marginTopTwelve]}>
                <Text
                  style={[
                    stylesM.textColorDullpurple,
                    stylesM.fontSizeFourteen,
                    fontBold(),
                    stylesM.boxEvents_titleTxt,
                  ]}
                >
                  Electro Party
                </Text>
              </View>
              <TouchableOpacity
                activeOpacity={0.9}
                style={[
                  stylesO.boxHistory__height,
                  stylesM.radiusFifteen,
                  stylesL.flexRow,
                ]}
                onPress={() => navigation.navigate("EventsInfo")}
              >
                <Image
                  source={require("../../assets/img/publi.webp")}
                  style={[stylesM.boxEvents_img, stylesM.radiusFifteen]}
                />
                <View
                  style={[
                    stylesM.backgroundLightSlateBlue,
                    stylesM.boxEvents_text,
                    stylesM.radiusFive,
                    stylesL.JustifyAlign,
                  ]}
                >
                  <Text
                    style={[
                      stylesM.textColorWhite,
                      stylesM.fontSizeFifteen,
                      fontMedium(),
                    ]}
                  >
                    Ver más
                  </Text>
                </View>
              </TouchableOpacity>


              
            </View>

          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Events;
