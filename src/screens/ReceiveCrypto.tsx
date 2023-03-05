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
  Platform,
  Clipboard,
  Modal
} from "react-native";
import { BarStatus } from "../components/BarStatus";
import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import QRCode from "react-native-qrcode-svg";
import IconCopy from "react-native-vector-icons/Feather";
import * as Animatable from "react-native-animatable";

import { readPublicKey } from "../../controller";

import { RFValue } from "react-native-responsive-fontsize";


const ReceiveCrypto = ({ navigation }: { navigation: any }) => {
  const sizeCopy = Platform.OS === "ios" ? 19 : 22;
  const [anmt, setanmt] = useState("");
  const [vacioModal, setVacioModal] = useState(false);

  const [pubKey, setPubKey] = useState("nopkey");

  async function getPubKey() {
    const pub = await readPublicKey();
    setPubKey(pub);
  }

  useEffect(() => {
    getPubKey();
  }, []);

  //Allowed parameters
  var str = pubKey;
  var strFirstThree = str.substring(0, 3);
  var strLastThree = str.substring(str.length - 3, str.length);
  var concatenado = `${strFirstThree}...${strLastThree}`;

  const CopyKey = () => {
    Clipboard.setString(pubKey);
    setVacioModal(true);
    setanmt("slideInUp");
    setTimeout(() => {
      setanmt("fadeOutDownBig");
      setTimeout(() => {
        setVacioModal(false);
      }, 100);
    }, 1000);
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
      start={{ x: 0, y: 0.5 }}
      end={{ x: 0, y: 0.7 }}
    >
      <SafeAreaView style={stylesB.body}>
        <BarStatus />
        <Modal
          visible={vacioModal}
          transparent
          onRequestClose={() => setVacioModal(false)}
          hardwareAccelerated
        >
          <Animatable.View
            animation={anmt}
            style={[stylesB.completo]}
            duration={600}
          >
            <View
              style={[
                stylesM.modalBottom,
                stylesM.backgroundNavy,
                stylesL.JustifyAlign,
                stylesM.radiusFifteen,
              ]}
            >
              <Text
                style={[
                  stylesM.textColorCian,
                  fontBold(),
                  stylesM.fontSizeFourteen,
                ]}
              >
                ¡Llave publica copiada!
              </Text>
            </View>
          </Animatable.View>
        </Modal>
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
              stylesM.marginTopThirtyThree,
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
                  stylesM.marginTopSixtytwo,
                ]}
              >
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => CopyKey()}
                  style={[
                    stylesL.flexRow,
                    stylesM.radiusFifteen,
                    stylesM.marginBottomTwenty,
                    stylesM.boxKey,
                  ]}
                >
                  <View style={[stylesM.widthPercentageSixty]}>
                    <Text style={[fontMedium(), stylesM.textColorGray, stylesL.textAlignCenter]}>
                      {concatenado}
                    </Text>
                  </View>
                  <View style={[stylesM.widthPercentageFourty]}>
                    <View
                      //
                      style={[stylesL.JustifyAlign, stylesL.alignItemsEnd]}
                    >
                      <IconCopy name="copy" size={sizeCopy} color="#ae9ada" />
                    </View>
                  </View>
                </TouchableOpacity>

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
                      // value={pubKey}
                      value={"gola"}
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
