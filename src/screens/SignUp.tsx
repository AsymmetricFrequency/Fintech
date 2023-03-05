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
  Modal,
} from "react-native";
import { BarStatus, BarStatusShadown } from "../components/BarStatus";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CountDown from "react-native-countdown-component";
import { RFValue } from "react-native-responsive-fontsize";
import { getInfoUser } from "../../controller";
import * as Animatable from "react-native-animatable";
import { LotiFailSign } from "../components/Lottie";

const extraIos = Platform.OS === "ios" ? 0 : -225;

const SignUp = ({ navigation, route }: { navigation: any; route: any }) => {
  ////Funciones Twilio

  async function enviarMsg(tel: string) {
    const msg = await fetch(
      `https://genesyswallet.com/twilio/verify/+57${tel}`
    );
    console.log(msg);
    return tel;
  }

  async function check(tel: string, codigo: string) {
    const msg = await fetch(
      `https://genesyswallet.com/twilio/check/+57${tel}/${codigo}`
    );
    const result = await msg.json();
    if (result.status === "approved") {
      setTimeout(() => {
        setValidadorCode("");
        setCondicionCode(true);
        setIconcondicionCode("correcto");
        setTimeout(() => {
          navigation.navigate("CompleteSign", { phone: tel });
        }, 100);
      }, 1500);
      // navigation.navigate("CompleteSign", { phone: tel });
    } else {
      setTimeout(() => {
        setValidadorCode("El código de verificación no es correcto");
        setCondicionCode(false);
        setIconcondicionCode("incorrecto");
      }, 1500);
    }
    console.log(result.status);
    return result.status;
  }

  const [continueModal, setContinueModal] = useState(false);
  const [anmt, setanmt] = useState("");
  // Phone
  const [validador, setValidador] = useState("");
  const [condicion, setCondicion] = useState(false);
  const [iconcondicion, setIconcondicion] = useState("");
  const [arrayTxt, setArrayTxt] = useState([]);
  const [spinner, setSpinner] = useState(false);
  // code
  const [validadorCode, setValidadorCode] = useState("");
  const [condicionCode, setCondicionCode] = useState(false);
  const [iconcondicionCode, setIconcondicionCode] = useState("");
  const [arrayTxtCode, setArrayTxtCode] = useState([]);
  const [spinnerCode, setSpinnerCode] = useState(false);

  // Visible code
  const [envio, setEnvio] = useState(false);

  const [time, setTime] = useState(true);
  const [inputTime, setInputTime] = useState(true);
  //Visible countDown
  const [count, setCount] = useState(true);

  //Phone
  const inputNumber = (text: any) => {
    setArrayTxt(text);
    if (
      text.includes(".") ||
      text.includes(",") ||
      text.includes("-") ||
      text.includes(" ")
    ) {
      setValidador("Debes escribir un número de celular válido");
      setCondicion(false);
      setTime(true);
      setEnvio(false);
      setIconcondicion("incorrecto");
    } else {
      if (arrayTxt.length === 9) {
        setValidador("");
        setCondicion(true);
        setIconcondicion("correcto");
      } else {
        setValidador("Debes escribir un número de celular válido");
        setCondicion(false);
        setTime(true);
        setEnvio(false);
        setIconcondicion("incorrecto");
      }
    }
  };

  //Code
  const inputNumberCode = (text: any) => {
    setArrayTxtCode(text);
    if (
      text.includes(".") ||
      text.includes(",") ||
      text.includes("-") ||
      text.includes(" ")
    ) {
      setValidadorCode("Debes escribir un código de seis dígitos");
      setCondicionCode(false);
      setIconcondicionCode("incorrecto");
    } else {
      if (arrayTxtCode.length === 5) {
        setValidadorCode("");
        setIconcondicionCode("");
        setCondicionCode(true);
      } else {
        setValidadorCode("Debes escribir un código de seis dígitos");
        setCondicionCode(false);
        setIconcondicionCode("incorrecto");
      }
    }
  };

  //check
  const verification = () => {
    setSpinner(true);

    const res = getInfoUser(arrayTxt.toString()).then((info) => {
      if (info) {
        setContinueModal(true);
        setanmt("slideInUp");
      } else {
        enviarMsg(arrayTxt.toString());
        setValidadorCode("");
        setIconcondicionCode("");
        setCount(true);
        setInputTime(!time);
        setSpinner(true);
        setTimeout(() => {
          setSpinner(false);
          setEnvio(true);
        }, 2000);
      }
    });
  };

  //check again
  const newverification = () => {
    setValidadorCode("");
    setIconcondicionCode("");
    setCount(true);
    setTime(true);
    setInputTime(time);
    setEnvio(false);
    enviarMsg(arrayTxt.toString());
    setSpinner(true);
    setTimeout(() => {
      setSpinner(false);
      setEnvio(true);
      setTime(true);
    }, 2000);
  };

  //check code
  const verificationCode = () => {
    check(arrayTxt.toString(), arrayTxtCode.toString());
    setSpinnerCode(true);
    setTimeout(() => {
      setSpinnerCode(false);
    }, 1500);
  };

  const hideModal = () => {
    setEnvio(false);
    setCount(false);
    setInputTime(true);
    setanmt("fadeOut");
    setTimeout(() => {
      setContinueModal(false);
      setSpinner(false);
      navigation.navigate("SignUp");
    }, 200);
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
        <Modal
          visible={continueModal}
          transparent
          onRequestClose={() => setContinueModal(false)}
          hardwareAccelerated
        >
          <View
            style={[
              stylesB.completo,
              stylesL.JustifyAlign,
              stylesM.backgroundShadown,
            ]}
          >
            <BarStatusShadown />
            <Animatable.View
              animation={anmt}
              duration={600}
              style={[
                stylesM.modalCenterLogin,
                stylesM.backgroundLightPurple,
                stylesL.AlignItems,
                stylesM.radiusTwentyEight,
                stylesL.flexColumn,
              ]}
            >
              <View style={[stylesM.boxLottieFailSign]}>
                <LotiFailSign />
              </View>
              <Text
                style={[
                  stylesM.textColorLightpurple,
                  stylesM.fontSizeTwentyFour,
                  fontMedium(),
                  stylesL.textAlignCenter,
                  stylesM.boxTextModal,
                ]}
              >
                El número ingresado ya tiene una cuenta activa
              </Text>
              <TouchableOpacity
                onPress={() => hideModal()}
                activeOpacity={0.6}
                style={[
                  stylesM.marginTopTwentyFour,
                  stylesM.boxTextFail,
                  stylesL.JustifyAlign,
                ]}
              >
                <Text
                  style={[
                    stylesM.fontSizeSixteen,
                    stylesM.textColorLightpurple,
                    fontMedium(),
                    stylesM.textShadow,
                  ]}
                >
                  Intentar nuevamente
                </Text>
              </TouchableOpacity>
            </Animatable.View>
          </View>
        </Modal>
        <KeyboardAwareScrollView
          resetScrollToCoords={{ x: 0, y: 0 }}
          contentContainerStyle={[stylesB.completo, stylesO.completo__flexGrow]}
          scrollEnabled
          extraScrollHeight={extraIos}
          enableOnAndroid={true}
          endFillColor="#000"
          overScrollMode="never"
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
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
          <Image
            style={[stylesM.boxTextGenesysRegister]}
            source={require("../../assets/img/genesysTitle.webp")}
          />
          <View
            style={[
              stylesM.widthPercentageHundred,
              stylesM.paddingHorizontalFiftyTwo,
            ]}
          >
            <Text
              style={[
                stylesM.textColortWhiteOpacity,
                stylesM.fontSizeTwenty,
                stylesM.marginTopThirtyEight,
                fontLight(),
              ]}
            >
              Ingresa tú número de teléfono celular, enviaremos un código de
              verificación.
            </Text>
          </View>

          <View
            style={[
              stylesM.widthTotal,
              stylesM.marginTopFiftyThree,
              stylesM.paddingHorizontalFiftyTwo,
            ]}
          >
            <Text
              style={[
                stylesM.textColorLightGainsboro,
                stylesM.fontSizeFifteen,
                fontBold(),
              ]}
            >
              Ingresar número telefónico
            </Text>

            <View
              style={[
                stylesM.widthTotal,
                stylesM.inputCompleteSign,
                stylesL.flexRow,
                stylesL.AlignItems,
                iconcondicion === "correcto" && {
                  borderBottomColor: "#1ee3cf",
                },
                iconcondicion === "incorrecto" && { borderBottomColor: "red" },
              ]}
            >
              <View
                style={[stylesM.widthPercentageFifteen, stylesL.AlignItems]}
              >
                <Text
                  style={[
                    stylesM.textColorWhite,
                    stylesM.fontSizeTwentyFour,
                    fontBold(),
                  ]}
                >
                  +57
                </Text>
              </View>
              <View
                style={[
                  stylesM.widthPercentageSeventyFive,
                  stylesM.boxNumberLogin,
                ]}
              >
                <TextInput
                  keyboardType="numeric"
                  autoCapitalize="none"
                  editable={inputTime}
                  style={[
                    stylesM.backgroundTransparent,
                    stylesM.textColorWhite,
                    stylesM.fontSizeTwentyFour,
                    fontBold(),
                  ]}
                  maxLength={10}
                  onChangeText={(text) => inputNumber(text)}
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
                {iconcondicion === "correcto" && (
                  <Image
                    style={stylesM.inputCompleteSign_img}
                    source={require("../../assets/img/correcto.webp")}
                  />
                )}
                {iconcondicion === "incorrecto" && (
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
              {validador}
            </Text>
          </View>

          {envio ? (
            <View
              style={[
                { position: "relative" },
                stylesM.widthTotal,
                stylesL.JustifyAlign,
              ]}
            >
              <TouchableOpacity
                activeOpacity={0.8}
                disabled={time}
                style={[
                  stylesO.buttonVerification__width,
                  stylesL.JustifyAlign,
                  stylesM.radiusEighteen,
                  stylesM.marginTopFiftyThree,
                  { opacity: time ? 0.7 : 1 },
                  !condicion
                    ? stylesM.backgroundMidnightDisable
                    : stylesM.backgroundGreen,
                ]}
                onPress={() => {
                  newverification();
                }}
              >
                {spinner ? (
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
                    Verificar nuevamente
                  </Text>
                )}
              </TouchableOpacity>
              {!condicion ? (
                <></>
              ) : (
                <>
                  {count ? (
                    <View
                      style={[stylesM.bottomNegative, stylesL.positionAbsolute]}
                    >
                      <CountDown
                        until={120}
                        size={19}
                        running={envio}
                        style={[stylesM.boxCount]}
                        onFinish={() => [
                          setTime(false),
                          setInputTime(true),
                          setCount(false),
                        ]}
                        digitStyle={{ height: RFValue(25), width: RFValue(30) }}
                        digitTxtStyle={{ color: "#fff" }}
                        timeToShow={["M", "S"]}
                        timeLabels={{ m: "", s: "" }}
                        showSeparator
                        separatorStyle={{
                          color: "#fff",
                          height: "100%",
                          textAlignVertical: "center",
                          marginTop: -4,
                        }}
                      />
                    </View>
                  ) : (
                    <></>
                  )}
                </>
              )}
            </View>
          ) : (
            <TouchableOpacity
              activeOpacity={0.8}
              disabled={!condicion}
              style={[
                stylesM.buttonVerification,
                stylesL.JustifyAlign,
                stylesM.radiusEighteen,
                stylesM.marginTopFiftyThree,
                !condicion
                  ? stylesM.backgroundMidnightDisable
                  : stylesM.backgroundGreen,
              ]}
              onPress={() => {
                verification();
              }}
            >
              {spinner ? (
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
                  Verificar
                </Text>
              )}
            </TouchableOpacity>
          )}

          {envio ? (
            <>
              <View
                style={[
                  stylesL.JustifyAlign,
                  stylesM.paddingHorizontalSixtySix,
                  stylesM.marginTopSixtytwo,
                ]}
              >
                <Text
                  style={[
                    stylesM.textColorWhite,
                    stylesM.fontSizeFifteen,
                    fontLight(),
                    stylesL.textAlignCenter,
                  ]}
                >
                  Hemos enviado un código de verificación a tu teléfono celular
                </Text>
              </View>

              <View
                style={[
                  stylesM.widthTotal,
                  { marginTop: 43 },
                  stylesM.paddingHorizontalFortyEight,
                ]}
              >
                <Text
                  style={[
                    stylesM.textColorLightGainsboro,
                    stylesM.fontSizeFifteen,
                    fontBold(),
                  ]}
                >
                  Ingresa el código de verificación
                </Text>

                <View
                  style={[
                    stylesM.widthTotal,
                    stylesM.inputCompleteSign,
                    stylesL.flexRow,
                    stylesL.AlignItems,
                    iconcondicionCode === "correcto" && {
                      borderBottomColor: "#1ee3cf",
                    },
                    iconcondicionCode === "incorrecto" && {
                      borderBottomColor: "red",
                    },
                  ]}
                >
                  <View
                    style={[
                      stylesM.widthPercentageNinety,
                      stylesM.boxNumberLogin,
                    ]}
                  >
                    <TextInput
                      autoFocus={true}
                      keyboardType="numeric"
                      autoCapitalize="none"
                      style={[
                        stylesM.backgroundTransparent,
                        stylesM.textColorWhite,
                        stylesM.fontSizeTwentyFour,
                        fontBold(),
                      ]}
                      maxLength={6}
                      onChangeText={(text) => inputNumberCode(text)}
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
                    {iconcondicionCode === "correcto" && (
                      <Image
                        style={stylesM.inputCompleteSign_img}
                        source={require("../../assets/img/correcto.webp")}
                      />
                    )}
                    {iconcondicionCode === "incorrecto" && (
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
                  {validadorCode}
                </Text>
              </View>

              <TouchableOpacity
                activeOpacity={0.8}
                disabled={!condicionCode}
                style={[
                  stylesM.buttonContinueSign,
                  stylesL.JustifyAlign,
                  stylesM.radiusEighteen,
                  stylesM.marginTopSixtytwo,
                  stylesM.marginBottomFourty,
                  stylesM.backgroundMidnightBlue,
                  !condicionCode ? { opacity: 0.6 } : { opacity: 1 },
                ]}
                onPress={() => {
                  verificationCode();
                }}
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
                    Continuar
                  </Text>
                )}
              </TouchableOpacity>
            </>
          ) : (
            <></>
          )}
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SignUp;
