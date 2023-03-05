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
  TextInput,
  ActivityIndicator,
  Keyboard,
} from "react-native";
import { BarStatus } from "../components/BarStatus";
import React, { useState, useCallback, useRef, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import QRCode from "react-native-qrcode-svg";
import * as Animatable from "react-native-animatable";
import IconX from "react-native-vector-icons/Feather";
import { LotieReceiveQr } from "../components/Lottie";
import CurrencyInput from "react-native-currency-input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { readPhone } from "../../controller";

import BottomSheet, {
  useBottomSheetSpringConfigs,
} from "@gorhom/bottom-sheet";
import { RFValue } from "react-native-responsive-fontsize";


const extraIos = Platform.OS === "ios" ? -200 : -330;

const ReceiveMoney = ({ navigation }: { navigation: any }) => {
  const sheetRef = useRef<BottomSheet>(null);

  const [number, setNumber] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const [anmt, setanmt] = useState("");
  // state
  const [isFocused, setIsFocused] = useState({
    money: false,
    msj: false,
  });

  async function readNumber() {
    const num = await readPhone();
    setNumber(num);
  }

  readNumber();
  // Money
  const [money, setMoney] = useState("");
  const [moneyError, setMoneyError] = useState("");
  const [moneyCondition, setMoneyCondition] = useState("");
  const [moneyEmpty, setMoneyEmpty] = useState(true);

  const [iosSlide, setIosSlide] = useState("60%");

  const slide = Platform.OS === "ios" ? iosSlide : "65%";

  //activate the button
  const [empty, setEmpty] = useState(true);
  const [spinner, setSpinner] = useState(false);
  const [message, setMessage] = useState("");
  const [viewQr, setViewQR] = useState(false);

  const snaPoints = [slide];

  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
    setanmt("slideInUp");
    setIsOpen(true);
  }, []);

  const handleClosePress = useCallback(() => {
    Keyboard.dismiss();
    setTimeout(() => {
      sheetRef.current?.close();
      setIsOpen(false);
      setanmt("slideInDown");
    }, 200);
  }, []);

  const animationConfigs = useBottomSheetSpringConfigs({
    damping: 80,
    overshootClamping: false,
    restDisplacementThreshold: 0.1,
    restSpeedThreshold: 0.1,
    stiffness: 40,
  });

  // handlers focus
  const handleInputFocus = (textinput: any) => {
    setIsFocused({
      [textinput]: true,
    });
    setIosSlide("90%")
  };
  const handleInputBlur = (textinput: any) => {
    setIsFocused({
      [textinput]: false,
    });
    setIosSlide("60%")
  };

  //Money
  const moneyValidation = (text: any) => {
    setMoney(text);
    if (text === "" || text === null) {
      setMoneyCondition("incorrecto");
      setMoneyError("Por favor ingresa la cantidad a enviar");
      setMoneyEmpty(true);
    } else {
      setMoneyCondition("correcto");
      setMoneyError("");
      setMoneyEmpty(false);
    }
  };

  useEffect(() => {
    if (moneyEmpty === false) {
      setEmpty(false);
    } else {
      setEmpty(true);
    }
  }, [moneyEmpty]);

  //Generate Qr
  const generateQr = () => {
    setSpinner(true);
    setTimeout(() => {
      setViewQR(true);
      setSpinner(false);
      setIosSlide("60%")
    }, 300);
  };

  //Finish Qr
  const FinishQr = () => {
    setViewQR(false);
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

          <TouchableOpacity
            disabled={!isOpen}
            activeOpacity={1}
            style={[stylesM.widthTotal, stylesL.AlignItems]}
            onPress={() => handleClosePress()}
          >
            <View
              style={[
                stylesM.marginTopEightyFour,
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
                Recibir Dinero
              </Text>
            </View>

            <View
              style={[
                stylesM.widthPercentageHundred,
                stylesM.paddingHorizontalTwenty,
                stylesM.marginTopThirtyOne,
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
                Para recibir dinero rápidamente en tu billetera genera un código
                QR, así cuando escaneen el QR podrán enviarte a tu número de
                cuenta el dinero.
              </Text>
            </View>

            {isOpen ? (
              <></>
            ) : (
              <>
                <Animatable.View animation={anmt}>
                  <LotieReceiveQr />
                </Animatable.View>
                <Animatable.View
                  animation={anmt}
                  style={[
                    isOpen ? stylesM.marginTopFourty : {},
                    stylesL.JustifyAlign,
                    stylesM.boxMoney,
                  ]}
                >
                  <View style={[stylesL.JustifyAlign]}>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={[
                        stylesM.buttonGenerateQR,
                        stylesM.backgroundMidnightBlue,
                        stylesM.radiusSeventeen,
                        stylesL.JustifyAlign,
                      ]}
                      onPress={() => handleSnapPress(0)}
                    >
                      <Text
                        style={[
                          stylesM.textColorWhite,
                          stylesM.fontSizeSixteen,
                          fontMedium(),
                        ]}
                      >
                        Generar QR
                      </Text>
                    </TouchableOpacity>
                  </View>
                </Animatable.View>
              </>
            )}
          </TouchableOpacity>
          <BottomSheet
            ref={sheetRef}
            index={-1}
            snapPoints={snaPoints}
            enableHandlePanningGesture={false}
            enableContentPanningGesture={false}
            animationConfigs={animationConfigs}
            handleIndicatorStyle={stylesM.backgroundTransparent}
            backgroundStyle={stylesM.backgroundSnow}
          >
            <View
              style={[
                stylesL.flexRow,
                stylesL.spaceBetween,
                stylesM.boxWhiteqr,
                stylesM.marginBottomNineteen,
              ]}
            >
              <View style={[stylesM.widthPercentageEightyFive]}>
                {viewQr ? (
                  <Text
                    style={[
                      stylesM.textColorLightGray,
                      stylesM.fontSizeSixteen,
                      fontLight(),
                    ]}
                  >
                    Tu código QR para recibir dinero
                  </Text>
                ) : (
                  <Text
                    style={[
                      stylesM.textColorLightGray,
                      stylesM.fontSizeSixteen,
                      fontMedium(),
                    ]}
                  >
                    Ingresa la siguiente información para generar el código QR
                  </Text>
                )}
              </View>

              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => handleClosePress()}
                style={[stylesM.widthPercentageFifteen, stylesL.alignItemsEnd]}
              >
                <IconX name="x" size={20} color="#c9c7df" />
              </TouchableOpacity>
            </View>
            <KeyboardAwareScrollView
              keyboardShouldPersistTaps="handled"
              resetScrollToCoords={{ x: 0, y: 0 }}
              contentContainerStyle={[
                stylesB.completo,
                stylesO.completo__flexGrow,
              ]}
              scrollEnabled
              enableOnAndroid={true}
              extraScrollHeight={extraIos}
              endFillColor="#000"
              overScrollMode="never"
              showsVerticalScrollIndicator={false}
            >
              {viewQr ? (
                <>
                  <Animatable.View animation={"fadeIn"}>
                    <View
                      style={[stylesL.positionRelative, stylesL.JustifyAlign]}
                    >
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
                          value={
                            "epa" + number + ";" + money + ";" + message + "upa"
                          }
                        />
                      </View>
                    </View>
                  </Animatable.View>
                  <Animatable.View animation={"slideInUp"} duration={1000}>
                    <View style={stylesL.JustifyAlign}>
                      <TouchableOpacity
                        activeOpacity={0.8}
                        disabled={empty}
                        style={[
                          stylesM.buttonSendQR,
                          empty
                            ? stylesM.backgroundMidnightDisable
                            : stylesM.backgroundMidnightBlue,
                          stylesM.radiusThirteen,
                          stylesL.JustifyAlign,
                          stylesM.marginTopTwentyFour,
                        ]}
                        onPress={() => FinishQr()}
                      >
                        <Text
                          style={[
                            stylesM.textColorSnow,
                            stylesM.fontSizeSixteen,
                            fontMedium(),
                          ]}
                        >
                          Terminar
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </Animatable.View>
                </>
              ) : (
                <View
                  style={[
                    stylesM.widthTotal,
                    stylesM.paddingHorizontalTwenty,
                    stylesM.marginTopThirtyFive,
                  ]}
                >
                  <View>
                    <View>
                      <Text
                        style={[
                          stylesM.fontSizeFifteen,
                          fontMedium(),
                          {
                            color: isFocused.money ? "#3A54B3" : "#A29FC6",
                          },
                        ]}
                      >
                        Ingrese el valor que desea para su código QR:
                      </Text>
                      <View
                        style={[
                          stylesM.widthTotal,
                          stylesM.inputCompleteSign,
                          stylesL.Justify,
                          {
                            borderBottomColor: isFocused.money
                              ? "#3A54B3"
                              : "#E2E4F5",
                          },
                        ]}
                      >
                        <View style={[]}>
                          <CurrencyInput
                            value={money}
                            style={[
                              { minWidth: RFValue(60) },
                              stylesM.textColorBlack,
                              stylesM.fontSizeTwentyFour,
                              fontMedium(),
                            ]}
                            onChangeValue={(text) => moneyValidation(text)}
                            prefix="$"
                            delimiter="."
                            precision={0}
                            minValue={0}
                            onChangeText={(formattedValue) => {}}
                            maxLength={12}
                            onFocus={() => handleInputFocus("money")}
                            onBlur={() => handleInputBlur("money")}
                          />
                        </View>
                      </View>
                      <Text
                        style={[
                          stylesM.textColorLigthCoral,
                          stylesM.fontSizeTwelve,
                          stylesM.marginTopEight,
                          fontLight(),
                        ]}
                      >
                        {moneyError}
                      </Text>
                    </View>

                    <Text
                      style={[
                        stylesM.fontSizeFifteen,
                        stylesM.marginTopTwenty,
                        ,
                        fontMedium(),
                        {
                          color: isFocused.msj ? "#3A54B3" : "#A29FC6",
                        },
                      ]}
                    >
                      Mensaje:
                    </Text>

                    <TextInput
                      multiline={true}
                      numberOfLines={2}
                      style={[
                        stylesM.boxInputMsj,
                        stylesM.fontSizeTwentyFour,
                        stylesM.marginTopTwo,
                        {
                          borderBottomColor: isFocused.msj
                            ? "#3A54B3"
                            : "#E2E4F5",
                        },
                      ]}
                      onFocus={() => handleInputFocus("msj")}
                      onBlur={() => handleInputBlur("msj")}
                      onChangeText={(text) => setMessage(text)}
                    />
                  </View>

                  <View style={stylesL.JustifyAlign}>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      disabled={empty}
                      style={[
                        stylesM.buttonSendQR,
                        empty
                          ? stylesM.backgroundMidnightDisable
                          : stylesM.backgroundMidnightBlue,
                        stylesM.radiusThirteen,
                        stylesL.JustifyAlign,
                        stylesM.marginTopSixty,
                      ]}
                      onPress={() => generateQr()}
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
                            stylesM.textColorSnow,
                            stylesM.fontSizeSixteen,
                            fontMedium(),
                          ]}
                        >
                          Generar QR
                        </Text>
                      )}
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </KeyboardAwareScrollView>
          </BottomSheet>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default ReceiveMoney;
