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
import QRCode from "react-native-qrcode-svg";


import { readPublicKey } from "../../controller";

import { RFValue } from "react-native-responsive-fontsize";


const ReceiveCrypto = ({ navigation }: { navigation: any }) => {

  const [pubKey, setPubKey] = useState("nopkey");

  async function getPubKey() {
    const pub = await readPublicKey();
    setPubKey(pub);
  }

  useEffect(() => {
    getPubKey()
  }, [])

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
      start={{ x: 0, y: 0.5 }}
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

          <View
            style={[
              stylesM.marginTopSixtyEight,
              stylesM.widthTotal,
              stylesL.Justify,
              stylesM.paddingHorizontalTwenty,
            ]}
          >
            <Text
              style={[
                stylesM.textColorWhite,
                stylesM.fontSizeTwenty,
                fontBold(),
              ]}
            >
              Recibir
            </Text>
          </View>

          <View
            style={[
              stylesM.widthPercentageHundred,
              stylesM.paddingHorizontalTwenty,
              stylesM.marginTopTwenty,
            ]}
          >
            <Text
              style={[
                stylesM.textColortWhiteOpacity,
                stylesM.fontSizeSixteen,
                stylesM.fontLineTwenty,
                fontLight(),
              ]}
            >
              Para recibir criptoactivos rápidamente en tu billetera genera un
              código QR, así cuando escaneen el QR podrán enviarte a tu número
              de cuenta el dinero.
            </Text>
          </View>

          <View
            style={[
              stylesM.boxTotal,
              stylesM.backgroundSnow,
              stylesM.marginTopOneHundredTwentyThree,
              stylesM.radiusTopTwenty,
              stylesL.FlexOne,
            ]}
          >
            <ScrollView
              contentContainerStyle={{ marginTop: 50, bottom: 50 }}
              horizontal={false}
              showsVerticalScrollIndicator={false}
            >
              <View
                style={[
                  stylesM.widthTotal,
                  stylesL.JustifyAlign,
                  stylesM.marginTopSeventySeven,
                ]}
              >
                <View style={[stylesL.positionRelative, stylesL.JustifyAlign]}>
                  <View>
                    <Image
                      style={[stylesM.boxSlideQr_margen]}
                      source={require("../../assets/img/margenQR.webp")}
                    />
                  </View>
                  <View style={[stylesL.positionAbsolute]}>
                    <QRCode
                      size={RFValue(210)}
                      backgroundColor={"#FBF9FF"}
                      color={"#71727a"}
                      value={pubKey}
                    />
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default ReceiveCrypto;
