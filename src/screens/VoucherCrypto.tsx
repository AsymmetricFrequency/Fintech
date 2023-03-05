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
  Platform,
} from "react-native";
import { BarStatus } from "../components/BarStatus";
import React, { useState } from "react";

import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import IconDownload from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";

const extraIos = Platform.OS === "ios" ? 0 : -350;


const VoucherCrypto = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {


  
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
        <KeyboardAwareScrollView
          resetScrollToCoords={{ x: 0, y: 0 }}
          contentContainerStyle={[stylesB.completo, stylesO.completo__flexGrow]}
          scrollEnabled
          extraScrollHeight={extraIos}
          enableOnAndroid={true}
          endFillColor="#000"
          overScrollMode="never"
          showsVerticalScrollIndicator={false}
        >
          <View style={stylesM.boxArrow}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={[stylesM.boxArrow_buttom, stylesL.JustifyAlign]}
              onPress={() => navigation.navigate("Crypto")}
            >
              <Image
                style={[stylesM.boxArrow_buttom_image]}
                source={require("../../assets/img/leftArrow.webp")}
              />
            </TouchableOpacity>
          </View>
          <View style={[stylesM.marginTopSeventy, stylesL.Justify]}>
            <Text
              style={[
                stylesM.textColorWhite,
                stylesM.fontSizeTwenty,
                fontMedium(),
              ]}
            >
              Comprobante
            </Text>
          </View>
          <View
            style={[
              stylesM.boxTotal,
              stylesM.backgroundSnow,
              stylesM.marginTopFourtyFive,
              stylesM.radiusTopTwentyEight,
              stylesL.AlignItems,
            ]}
          >
            <Text
              style={[
                stylesM.textColorLightGray,
                stylesM.fontSizeSixteen,
                fontMedium(),
                stylesM.marginTopThirtyFive,
              ]}
            >
              Movimiento hecho en Genesys
            </Text>

            <Image
              style={[stylesM.Voucher_img, stylesM.marginTopTwelve]}
              source={require("../../assets/img/tether.png")}
            />

            <Text
              style={[
                stylesM.textColorLightGray,
                stylesM.fontSizeSixteen,
                fontMedium(),
                stylesM.marginTopSeven,
              ]}
            >
              Número de referencia:
            </Text>
            <Text
              style={[
                stylesM.textColorLightGray,
                stylesM.fontSizeSixteen,
                fontMedium(),
                stylesM.marginTopTwo,
              ]}
            >
              M9870001
            </Text>

            <TouchableOpacity
              activeOpacity={0.9}
              style={[
                stylesM.buttonDownloadVoucher,
                stylesM.backgroundNavy,
                stylesM.radiusTwenty,
                stylesL.JustifyAlign,
                stylesL.flexRow,
                stylesM.marginTopEight,
              ]}
              // onPress={() => navigation.navigate("ConsultServices")}
            >
              <Text
                style={[
                  stylesM.textColorSnow,
                  stylesM.fontSizeFifteen,
                  fontMedium(),
                ]}
              >
                Descargar
              </Text>

              <View style={[stylesM.iconDownload]}>
                <IconDownload
                  name="arrow-down-circle-outline"
                  size={RFValue(18.5)}
                  color="white"
                />
              </View>
            </TouchableOpacity>

            <View
              style={[
                stylesM.widthTotal,
                stylesM.paddingHorizontalSixtySix,
                stylesM.marginTopTwentyFour,
              ]}
            >
              <Text
                style={[
                  stylesM.fontSizeFifteen,
                  stylesM.textColorDullpurple,
                  fontLight(),
                ]}
              >
                Para:
              </Text>
              <Text
                style={[
                  stylesM.fontSizeFifteen,
                  stylesM.marginTopTwo,
                  stylesM.textColorDullpurple,
                  fontMedium(),
                ]}
              >
                Jordan Belfrod
              </Text>

              <Text
                style={[
                  stylesM.fontSizeFifteen,
                  stylesM.marginTopThirteen,
                  stylesM.textColorDullpurple,
                  fontLight(),
                ]}
              >
                Dirección:
              </Text>
              <Text
                style={[
                  stylesM.fontSizeFifteen,
                  stylesM.marginTopTwo,
                  stylesM.textColorDullpurple,
                  fontMedium(),
                ]}
              >
                jbsdbsdsdMM89909
              </Text>

              <Text
                style={[
                  stylesM.fontSizeFifteen,
                  stylesM.marginTopThirteen,
                  stylesM.textColorDullpurple,
                  fontLight(),
                ]}
              >
                Mensajuki de la transa
              </Text>
              <Text
                style={[
                  stylesM.fontSizeFifteen,
                  stylesM.marginTopTwo,
                  stylesM.textColorDullpurple,
                  fontMedium(),
                ]}
              >
                Ahí le envio para el mercado
              </Text>

              <Text
                style={[
                  stylesM.fontSizeFifteen,
                  stylesM.marginTopThirteen,
                  stylesM.textColorDullpurple,
                  fontLight(),
                ]}
              >
                Cantidad enviada:
              </Text>
              <Text
                style={[
                  stylesM.fontSizeFifteen,
                  stylesM.marginTopTwo,
                  stylesM.textColorDullpurple,
                  fontMedium(),
                ]}
              >
                $ 50000
              </Text>

              <Text
                style={[
                  stylesM.fontSizeFifteen,
                  stylesM.marginTopThirteen,
                  stylesM.textColorDullpurple,
                  fontLight(),
                ]}
              >
                Fecha y hora de envío:
              </Text>
              <Text
                style={[
                  stylesM.fontSizeFifteen,
                  stylesM.marginTopTwo,
                  stylesM.textColorDullpurple,
                  fontMedium(),
                ]}
              >
                9 de Diciembre del 2022 a las 10:48 a.m
              </Text>
              <View style={[stylesL.JustifyAlign, stylesM.marginBottomFourty]}>
                <TouchableOpacity
                  activeOpacity={0.9}
                  style={[
                    stylesM.buttonFinishVoucher,
                    stylesM.backgroundMidnightBlue,
                    stylesM.marginTopThirtyEight,
                    stylesM.radiusTwenty,
                    stylesL.JustifyAlign,
                  ]}
                  onPress={() => navigation.navigate("Crypto")}
                >
                  <Text
                    style={[
                      stylesM.textColorSnow,
                      stylesM.fontSizeFifteen,
                      fontMedium(),
                    ]}
                  >
                    Terminar
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default VoucherCrypto;