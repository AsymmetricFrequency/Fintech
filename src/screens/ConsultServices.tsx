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
  TextInput,
  ScrollView,
  Platform,
} from "react-native";
import {BarStatus} from "../components/BarStatus";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
const extraIos = Platform.OS === "ios" ? 0 : -350;

const ConsultServices = ({ navigation }: { navigation: any }) => {
  // state
  const [isFocused, setIsFocused] = useState({
    radicado: false,
    factura: false,
    nombre: false,
    servicio: false,
    cantidad: false,
  });
  // handlers focus
  const handleInputFocus = (textinput: any) => {
    setIsFocused({
      [textinput]: true,
    });
  };
  const handleInputBlur = (textinput: any) => {
    setIsFocused({
      [textinput]: false,
    });
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
        <KeyboardAwareScrollView
          resetScrollToCoords={{ x: 0, y: 0 }}
          contentContainerStyle={[stylesB.completo, stylesO.completo__flexGrow]}
          scrollEnabled
          extraScrollHeight={extraIos}
          enableOnAndroid={true}
          endFillColor="#000"
          overScrollMode="never"
        >
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
                fontLight(),
              ]}
            >
              Consulta
            </Text>
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
            <Image
              style={[
                stylesM.buttonServices_img,
                stylesM.radiusOneHundred,
                stylesM.marginTopTwelve,
              ]}
              source={require("../../assets/img/acueducto.webp")}
            />

            <View
              style={[
                stylesM.widthTotal,
                stylesM.paddingHorizontalTwenty,
                stylesM.marginTopTen,
              ]}
            >
              <View>
                <Text
                  style={[
                    stylesM.fontSizeTwelve,
                    fontLight(),
                    {
                      color: isFocused.radicado ? "#3A54B3" : "#A29FC6",
                    },
                  ]}
                >
                  Ingrese su número de radicado:
                </Text>

                <TextInput
                  style={[
                    stylesM.boxInputTextService,
                    stylesM.backgroundTransparent,
                    stylesM.marginTopTwo,
                    {
                      borderBottomColor: isFocused.radicado
                        ? "#3A51B3"
                        : "#E2E4F5",
                    },
                  ]}
                  onFocus={() => handleInputFocus("radicado")}
                  onBlur={() => handleInputBlur("radicado")}
                />
              </View>

              <View style={stylesL.JustifyAlign}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={[
                    stylesM.buttonConsultService,
                    stylesM.backgroundNavy,
                    stylesM.radiusTwenty,
                    stylesL.JustifyAlign,
                  ]}
                  onPress={() => navigation.navigate("ConsultServices")}
                >
                  <Text
                    style={[
                      stylesM.textColorSnow,
                      stylesM.fontSizeFourteen,
                      fontMedium(),
                    ]}
                  >
                    Consultar
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={[{ paddingBottom: 20 }]}>
                <View>
                  <Text
                    style={[
                      stylesM.fontSizeTwelve,
                      fontLight(),
                      {
                        color: isFocused.factura ? "#3A54B3" : "#A29FC6",
                      },
                    ]}
                  >
                    Número de factura:
                  </Text>

                  <TextInput
                    style={[
                      stylesM.boxInputTextService,
                      stylesM.backgroundTransparent,
                      stylesM.marginTopTwo,
                      {
                        borderBottomColor: isFocused.factura
                          ? "#3A51B3"
                          : "#E2E4F5",
                      },
                    ]}
                    onFocus={() => handleInputFocus("factura")}
                    onBlur={() => handleInputBlur("factura")}
                  />
                </View>

                <View>
                  <Text
                    style={[
                      stylesM.fontSizeTwelve,
                      stylesM.marginTopTwelve,
                      fontLight(),
                      {
                        color: isFocused.nombre ? "#3A54B3" : "#A29FC6",
                      },
                    ]}
                  >
                    Nombre:
                  </Text>

                  <TextInput
                    style={[
                      stylesM.boxInputTextService,
                      stylesM.backgroundTransparent,
                      stylesM.marginTopTwo,
                      {
                        borderBottomColor: isFocused.nombre
                          ? "#3A51B3"
                          : "#E2E4F5",
                      },
                    ]}
                    onFocus={() => handleInputFocus("nombre")}
                    onBlur={() => handleInputBlur("nombre")}
                  />
                </View>

                <View>
                  <Text
                    style={[
                      stylesM.fontSizeTwelve,
                      stylesM.marginTopTwelve,
                      fontLight(),
                      {
                        color: isFocused.servicio ? "#3A54B3" : "#A29FC6",
                      },
                    ]}
                  >
                    Servicio:
                  </Text>

                  <TextInput
                    style={[
                      stylesM.boxInputTextService,
                      stylesM.backgroundTransparent,
                      stylesM.marginTopTwo,
                      {
                        borderBottomColor: isFocused.servicio
                          ? "#3A51B3"
                          : "#E2E4F5",
                      },
                    ]}
                    onFocus={() => handleInputFocus("servicio")}
                    onBlur={() => handleInputBlur("servicio")}
                  />
                </View>

                <View>
                  <Text
                    style={[
                      stylesM.textColorDullpurple,
                      stylesM.fontSizeTwelve,
                      stylesM.marginTopTwelve,
                      fontLight(),
                    ]}
                  >
                    Fecha límite de pago:
                  </Text>

                  <TextInput
                    editable={false}
                    style={[
                      stylesM.boxInputTextService,
                      stylesM.backgroundTransparent,
                      stylesM.marginTopTwo,
                      { borderBottomColor: "#E2E4F5" },
                    ]}
                  />
                </View>

                <View>
                  <Text
                    style={[
                      stylesM.fontSizeTwelve,
                      stylesM.marginTopTwelve,
                      fontLight(),
                      {
                        color: isFocused.cantidad ? "#3A54B3" : "#A29FC6",
                      },
                    ]}
                  >
                    Cantidad a pagar:
                  </Text>

                  <TextInput
                    keyboardType="numeric"
                    style={[
                      stylesM.boxInputTextService,
                      stylesM.backgroundTransparent,
                      stylesM.marginTopTwo,
                      {
                        borderBottomColor: isFocused.cantidad
                          ? "#3A51B3"
                          : "#E2E4F5",
                      },
                    ]}
                    onFocus={() => handleInputFocus("cantidad")}
                    onBlur={() => handleInputBlur("cantidad")}
                  />
                </View>

                <View style={[stylesL.JustifyAlign]}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={[
                      stylesM.buttonPayService,
                      stylesM.backgroundOceanBlue,
                      stylesM.radiusTwenty,
                      stylesL.JustifyAlign,
                    ]}
                  >
                    <Text
                      style={[
                        stylesM.textColorWhite,
                        stylesM.fontSizeFourteen,
                        fontMedium(),
                      ]}
                    >
                      Pagar
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default ConsultServices;
