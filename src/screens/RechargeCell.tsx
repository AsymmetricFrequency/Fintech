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
import { BarStatus } from "../components/BarStatus";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
const extraIos = Platform.OS === "ios" ? 0 : -350;

const RechargeCell = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const paramsOperators = route.params?.operators;
  
  const [cc, setCc] = useState("");

  const [phoneError, setPhoneError] = useState("");
  const [phoneCondition, setPhoneCondition] = useState("");
  const [phoneEmpty, setPhoneEmpty] = useState(true);

  const phoneValidation = (text: any) => {
    if (
      text.includes(".") ||
      text.includes(",") ||
      text.includes("-") ||
      text.includes(" ")
    ) {
      setPhoneCondition("incorrecto");
      setPhoneError("Debes escribir un número de celular válido");
      setPhoneEmpty(true);
    } else {
      if (text.split("").length == 10) {
        setCc(text);
        setPhoneCondition("correcto");
        setPhoneError("");
        setPhoneEmpty(false);
      } else {
        setPhoneCondition("incorrecto");
        setPhoneError("Por favor ingresa el número de celular.");
        setPhoneEmpty(true);
      }
    }
  };

  // state
  const [isFocused, setIsFocused] = useState({
    phone: false,
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
                fontMedium(),
              ]}
            >
              Multipagos
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
            <Text
              style={[
                stylesM.textColorDullpurple,
                stylesM.fontSizeTwelve,
                stylesM.marginTopTwentyTwo,
                fontMedium(),
              ]}
            >
              Recargar celular
            </Text>
            <Image
              style={[stylesM.RechargeCell_img, stylesM.marginTopThirteen]}
              source={require("../../assets/img/Multipago1.webp")}
            />

            <View
              style={[
                stylesM.widthTotal,
                stylesM.paddingHorizontalTwenty,
                stylesM.marginTopFiftyFive,
              ]}
            >
              <View>
                <Text
                  style={[
                    stylesM.fontSizeFifteen,
                    fontMedium(),
                    {
                      color: isFocused.phone ? "#3A54B3" : "#A29FC6",
                    },
                  ]}
                >
                  Ingrese el número de celular.
                </Text>

                <View
                  style={[
                    stylesM.widthTotal,
                    stylesM.inputCompleteSign,
                    stylesL.flexRow,
                    stylesL.AlignItems,
                    stylesM.marginTopTwo,
                    phoneCondition === "correcto" && {
                      borderBottomColor: "#1ee3cf",
                    },
                    phoneCondition === "incorrecto" && {
                      borderBottomColor: "red",
                    },
                  ]}
                >
                  <View style={[stylesM.widthPercentageNinety]}>
                    <TextInput
                      keyboardType="numeric"
                      autoCapitalize="none"
                      underlineColorAndroid="transparent"
                      style={[
                        stylesM.backgroundTransparent,
                        stylesM.textColorDarkGray,
                        stylesM.fontSizeTwentyFour,
                        fontBold(),
                      ]}
                      maxLength={10}
                      onChangeText={(text) => phoneValidation(text)}
                      onFocus={() => handleInputFocus("phone")}
                      onBlur={() => handleInputBlur("phone")}
                    />
                  </View>
                  <View
                    style={[
                      stylesM.widthPercentageTen,
                      stylesL.JustifyAlign,
                      stylesL.alignItemsEnd,
                      stylesM.heighTotal,
                    ]}
                  >
                    {phoneCondition === "correcto" && (
                      <Image
                        style={stylesM.inputCompleteSign_img}
                        source={require("../../assets/img/correcto.webp")}
                      />
                    )}
                    {phoneCondition === "incorrecto" && (
                      <Image
                        style={stylesM.inputCompleteSign_img}
                        source={require("../../assets/img/incorrecto.webp")}
                      />
                    )}
                  </View>
                </View>
                <Text
                  style={[
                    stylesM.textColorLigthCoral,
                    stylesM.fontSizeTwelve,
                    stylesM.marginTopTen,
                    fontLight(),
                  ]}
                >
                  {phoneError}
                </Text>

                <Text
                  style={[
                    stylesM.fontSizeFifteen,
                    fontMedium(),
                    stylesM.marginTopTwenty,
                    stylesM.textColorDullpurple,
                  ]}
                >
                  Valor de recarga
                </Text>

                <Text
                  style={[
                    stylesM.backgroundTransparent,
                    stylesM.textColorDarkGray,
                    stylesM.fontSizeThirtyTwo,
                    stylesM.marginTopTen,
                    fontBold(),
                  ]}
                >
                  $50.000
                </Text>
              </View>

              <View style={stylesL.JustifyAlign}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={[
                    stylesM.buttonRechargeCell,
                    stylesM.backgroundMidnightBlue,
                    stylesM.radiusTwenty,
                    stylesL.JustifyAlign,
                    stylesM.marginTopFiftyEight,
                  ]}
                  onPress={() => navigation.navigate("VoucherOperators", {
                    operators: paramsOperators,
                  })}
                >
                  <Text
                    style={[
                      stylesM.textColorSnow,
                      stylesM.fontSizeFourteen,
                      fontMedium(),
                    ]}
                  >
                    Recargar
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

export default RechargeCell;
