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
import React, {useState} from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";


const PayServices = ({ navigation }: { navigation: any }) => {
  const [typeServicesOne, setTypeServicesOne] = useState(true)
  const [typeServicesTwo, setTypeServicesTwo] = useState(false)
  const [typeServicesThree, setTypeServicesThree] = useState(false)

  //Change Background in Buttons
  function typeBtn(type:any){
    if (type === "water") {
      setTypeServicesOne(true)
      setTypeServicesTwo(false)
      setTypeServicesThree(false)
    } else if (type === "gas"){
      setTypeServicesOne(false)
      setTypeServicesTwo(true)
      setTypeServicesThree(false)
    } else if (type === "energy"){
      setTypeServicesOne(false)
      setTypeServicesTwo(false)
      setTypeServicesThree(true)
    }
  } 
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
          <View style={[stylesM.boxArrow]}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={[stylesM.boxArrow_buttom, stylesL.JustifyAlign]}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={[stylesM.boxArrow_buttom_image]}
                source={require("../../assets/img/leftArrow.webp")}
              />
            </TouchableOpacity>
          </View>
          <View style={[stylesM.boxTitle]}>
            <Text style={[stylesM.textColorWhite, stylesM.fontSizeSixteen, fontLight()]}>
              Pagar Servicios
            </Text>
          </View>
          <View
            style={[
              stylesM.backgroundSnow,
              stylesM.boxServices,
              stylesM.radiusEighteen,
              stylesL.spaceBetween,
              stylesL.AlignItems,
              stylesL.flexRow,
            ]}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              style={[
                stylesM.boxServices_btnType,
                typeServicesOne
                ? stylesM.backgroundMediumPurple
                : stylesM.backgroundLavender,
                stylesM.radiusFifteen,
                stylesL.AlignItems,
                stylesL.flexColumn,
                stylesL.spaceAround,
              ]}
              onPress={() => typeBtn("water")}

            >
              <Text
                style={[
                  typeServicesOne
                  ? stylesM.textColorWhite
                  : stylesM.textColorDullpurple,
                  stylesM.fontSizeTen,
                  fontLight(),
                ]}
              >
                Agua
              </Text>
              <Image
                style={[stylesM.boxServices_btnType_img]}
                source={require("../../assets/img/agua.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={[
                stylesM.boxServices_btnType,
                typeServicesTwo
                ? stylesM.backgroundMediumPurple
                : stylesM.backgroundLavender,
                stylesM.radiusFifteen,
                stylesL.AlignItems,
                stylesL.flexColumn,
                stylesL.spaceAround,
              ]}
              onPress={() => typeBtn("gas")}

            >
              <Text
                style={[
                  typeServicesTwo
                  ? stylesM.textColorWhite
                  : stylesM.textColorDullpurple,
                  stylesM.fontSizeTen,
                  fontLight(),
                ]}
              >
                Gas
              </Text>
              <Image
                style={[stylesM.boxServices_btnType_img]}
                source={require("../../assets/img/gas.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={[
                stylesM.boxServices_btnType,
                typeServicesThree
                ? stylesM.backgroundMediumPurple
                : stylesM.backgroundLavender,
                stylesM.radiusFifteen,
                stylesL.AlignItems,
                stylesL.flexColumn,
                stylesL.spaceAround,
              ]}
              onPress={() => typeBtn("energy")}

            >
              <Text
                style={[
                  typeServicesThree
                  ? stylesM.textColorWhite
                  : stylesM.textColorDullpurple,
                  stylesM.fontSizeTen,
                  fontLight(),
                ]}
              >
                Energía
              </Text>
              <Image
                style={[stylesM.boxServices_btnType_img]}
                source={require("../../assets/img/energia.png")}
              />
            </TouchableOpacity>
          </View>
          <View
            style={[
              stylesM.boxTotal,
              stylesM.backgroundSnow,
              stylesM.marginTopFiftyOne,
              stylesM.radiusTopThirtyFive,
              stylesL.AlignItems,
            ]}
          >
            <View style={[stylesM.widthTotal, stylesM.paddingHorizontalTwenty]}>
              <Text
                style={[
                  stylesM.textColorDullpurple,
                  stylesM.fontSizeSixteen,
                  fontMedium(),
                  stylesM.boxTitleServices,
                ]}
              >
                Empresas
              </Text>
              <Text
                style={[
                  stylesM.textColorDullpurple,
                  stylesM.fontSizeTwelve,
                  fontLight(),
                  stylesM.fontLineTwenty,
                ]}
              >
                Seleccione la empresa que brinda el servicio de acueducto en su
                residencia para que pueda hacer el pago de la factura desde la
                billetera con facilidad.
              </Text>

              <ScrollView
                contentContainerStyle={[{ paddingBottom: 50 }]}
                horizontal={false}
                nestedScrollEnabled
                showsVerticalScrollIndicator={false}
              >
                <View
                  style={[
                    stylesL.flexRow,
                    stylesL.flexWrap,
                    stylesL.spaceBetween,
                    stylesM.paddingHorizontalSeven,
                    stylesM.marginTopTen,
                  ]}
                >
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={[
                      stylesM.buttonServices,
                      stylesL.JustifyAlign,
                      stylesM.marginVerticalTwentyOne,
                    ]}
                    onPress={() => navigation.navigate("ConsultServices")}
                  >
                    <Image
                      style={[
                        stylesM.buttonServices_img,
                        stylesM.radiusOneHundred,
                      ]}
                      source={require("../../assets/img/acueducto.webp")}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={[
                      stylesM.buttonServices,
                      stylesL.JustifyAlign,
                      stylesM.marginVerticalTwentyOne,
                    ]}
                  >
                    <Image
                      style={[
                        stylesM.buttonServices_img,
                        stylesM.radiusOneHundred,
                      ]}
                      source={require("../../assets/img/epm.webp")}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={[
                      stylesM.buttonServices,
                      stylesL.JustifyAlign,
                      stylesM.marginVerticalTwentyOne,
                    ]}
                  >
                    <Image
                      style={[
                        stylesM.buttonServices_img,
                        stylesM.radiusOneHundred,
                      ]}
                      source={require("../../assets/img/emcali.webp")}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={[
                      stylesM.buttonServices,
                      stylesL.JustifyAlign,
                      stylesM.marginVerticalTwentyOne,
                    ]}
                  >
                    <Image
                      style={[
                        stylesM.buttonServices_img,
                        stylesM.radiusOneHundred,
                      ]}
                      source={require("../../assets/img/aguas.webp")}
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

export default PayServices;
