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
import {BarStatus} from "../components/BarStatus";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";

const Affiliates = ({ navigation }: { navigation: any }) => {
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
            <Text style={[stylesM.textColorWhite, stylesM.fontSizeSixteen]}>
              Afiliados
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
            <View
              style={[stylesM.widthTotal, stylesM.paddingHorizontalFiftySix]}
            >
              <Text
                style={[
                  stylesM.textColorDullpurple,
                  stylesM.fontSizeSixteen,
                  stylesM.fontLineThirty,
                  fontLight(),
                  stylesM.boxTitleAffiliates,
                ]}
              >
                Aquí puedes comprar productos y servicios, adicional puedes
                empezar a generar ingresos.
              </Text>
              <ScrollView
                contentContainerStyle={[
                  { paddingBottom: 250 },
                ]}
                horizontal={false}
                showsVerticalScrollIndicator={false}
                endFillColor="#000"
                overScrollMode="never"

              >
                <View style={stylesL.JustifyAlign}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={[
                      stylesM.buttonsAffiliates,
                      stylesM.backgroundLavender,
                      stylesM.radiusThirtyFive,
                      stylesL.spaceBetween,
                      stylesL.AlignItems,
                    ]}
                  >
                    <Text
                      style={[
                        stylesM.textColorDullpurple,
                        stylesM.fontSizeTwenty,
                        fontMedium(),
                      ]}
                    >
                      Emprendedor
                    </Text>
                    <Image
                      style={[stylesM.buttonsAffiliates_img]}
                      source={require("../../assets/img/Emprendedores.webp")}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={[
                      stylesM.buttonsAffiliates,
                      stylesM.backgroundLavender,
                      stylesM.radiusThirtyFive,
                      stylesL.spaceBetween,
                      stylesL.AlignItems,
                    ]}
                  >
                    <Text
                      style={[
                        stylesM.textColorDullpurple,
                        stylesM.fontSizeTwenty,
                        fontMedium(),
                      ]}
                    >
                      Comprador
                    </Text>
                    <Image
                      style={[stylesM.buttonsAffiliates_img]}
                      source={require("../../assets/img/Comprador.webp")}
                    />
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

export default Affiliates;
