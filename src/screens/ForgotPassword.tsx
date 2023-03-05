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
  Platform,
  ActivityIndicator,
  Keyboard,
} from "react-native";
import { BarStatus } from "../components/BarStatus";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { recoverPassword } from "../../controller";

const extraIos = Platform.OS === "ios" ? 0 : -210;

const ForgotPassword = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const [cell, setCell] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [phoneCondition, setPhoneCondition] = useState("");
  const [condicion, setCondicion] = useState(true);
  const [msjCondition, setMsjCondition] = useState(false);
  const [spinnerCode, setSpinnerCode] = useState(false);

  const phoneValidation = (text: any) => {
    setMsjCondition(false);
    if (
      text.includes(".") ||
      text.includes(",") ||
      text.includes("-") ||
      text.includes(" ")
    ) {
      setPhoneCondition("incorrecto");
      setPhoneError("Debes escribir un número de celular válido");
      setCondicion(true);
    } else {
      if (text.split("").length == 10) {
        setCell(text);
        setPhoneCondition("correcto");
        setPhoneError("");
        setCondicion(false);
      } else {
        setPhoneCondition("incorrecto");
        setPhoneError("Por favor ingresa el número de celular.");
        setCondicion(true);
      }
    }
  };

  const msjButton = () => {
    recoverPassword(cell);
    setSpinnerCode(true);
    setTimeout(() => {
      setSpinnerCode(false);
      setMsjCondition(true);
      Keyboard.dismiss()
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
      start={{ x: 0, y: 0.01 }}
      end={{ x: 0, y: 0.7 }}
    >
      <SafeAreaView style={[stylesB.body]}>
        <BarStatus />
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps="handled"
          resetScrollToCoords={{ x: 0, y: 0 }}
          contentContainerStyle={[stylesB.completo, stylesO.completo__flexGrow]}
          scrollEnabled
          enableOnAndroid={true}
          extraScrollHeight={extraIos}
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
          <View>
            <Image
              style={[stylesM.boxImgForgotPassword]}
              source={require("../../assets/img/forgotPass.webp")}
            />
          </View>
          <View
            style={[
              stylesM.widthPercentageHundred,
              stylesM.paddingHorizontalFortyEight,
              stylesM.marginTopThirtyThree,
            ]}
          >
            <Text
              style={[
                stylesM.textColortWhiteOpacity,
                stylesM.fontSizeSixteen,
                fontMedium(),
              ]}
            >
              ¿Olvidaste tu contraseña?
            </Text>
            <Text
              style={[
                stylesM.textColortWhiteOpacity,
                stylesM.fontSizeSixteen,
                stylesM.marginTopTen,
                stylesM.fontLineTwenty,
                fontLight(),
              ]}
            >
              Recupérala fácilmente. Ingresa tu número celular y te enviaremos
              una nueva contraseña al correo electrónico asociado a tu cuenta.
            </Text>
          </View>

          <View
            style={[
              stylesM.paddingHorizontalFortyEight,
              stylesM.marginTopThirtyThree,
            ]}
          >
            <Text
              style={[
                stylesM.textColorLightGainsboro,
                stylesM.fontSizeTwenty,
                stylesM.marginTopSeven,
                stylesM.fontLineTwenty,
                fontBold(),
              ]}
            >
              Ingresar número celular
            </Text>

            <View
              style={[
                stylesM.widthTotal,
                stylesM.inputCompleteSign,
                stylesL.flexRow,
                stylesL.AlignItems,
                stylesM.marginTopEight,
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
                    stylesM.textColorWhite,
                    stylesM.fontSizeTwentyFour,
                    fontBold(),
                  ]}
                  defaultValue={cell}
                  maxLength={10}
                  onChangeText={(text) => phoneValidation(text)}
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
                fontMedium(),
              ]}
            >
              {phoneError}
            </Text>
          </View>

          <View style={[stylesL.JustifyAlign]}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={[
                stylesM.buttonSendCode,
                stylesM.backgroundMidnightBlue,
                stylesL.JustifyAlign,
                stylesM.radiusEighteen,
                condicion
                ? { opacity: 0.6 } : { opacity: 1 },
              ]}
              disabled={condicion}
              onPress={() => [msjButton()]}
            >
              {spinnerCode ? (
                <ActivityIndicator
                  animating={true}
                  color="#1ee3cf"
                  size="small"
                  style={{ width: 50, height: 50 }}
                />
              ) : (
                <Text
                  style={[
                    stylesM.fontSizeSixteen,
                    stylesM.textColortWhiteGray,
                    fontBold(),
                  ]}
                >
                  Enviar contraseña
                </Text>
              )}
            </TouchableOpacity>

            {msjCondition ? (
              <View
                style={[
                  stylesM.paddingHorizontalFiftyTwo,
                  stylesM.marginTopFiftyFive,
                ]}
              >
                <Text
                  style={[
                    stylesM.textColortWhiteOpacity,
                    stylesM.fontSizeTwenty,
                    stylesM.marginTopSeven,
                    stylesM.fontLineTwenty,
                    fontLight(),
                  ]}
                >
                  Hemos enviado la nueva contraseña al correo electrónico
                  asociado a tu número celular.
                </Text>
              </View>
            ) : (
              <></>
            )}
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default ForgotPassword;
