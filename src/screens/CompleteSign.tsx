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
} from "react-native";
import { BarStatus } from "../components/BarStatus";
import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebase-config";
import { getAuth } from "firebase/auth";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import IconDate from "react-native-vector-icons/AntDesign";
import moment from "moment";

const extraIos = Platform.OS === "ios" ? 0 : -240;

const CompleteSign = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  //params
  const phone = route.params?.phone;

  //Variables
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [cc, setCc] = useState("");

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [eventDate, setEventDate] = useState("");
  //activate the button
  const [empty, setEmpty] = useState(true);

  //validation states
  const [emailError, setEmailError] = useState("");
  const [emailCondition, setEmailCondition] = useState("");
  const [emailEmpty, setEmailEmpty] = useState(true);

  const [nameError, setNameError] = useState("");
  const [nameCondition, setNameCondition] = useState("");
  const [nameEmpty, setNameEmpty] = useState(true);

  const [ccError, setCcError] = useState("");
  const [ccCondition, setCcCondition] = useState("");
  const [ccEmpty, setCcEmpty] = useState(true);

  const [dateError, setDateError] = useState("");
  const [dateCondition, setDateCondition] = useState("");
  const [dateEmpty, setDateEmpty] = useState(true);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const monthAndYear = moment(date).format("DD/MM/YYYY");
    setEventDate(monthAndYear);
    if (monthAndYear === "") {
      setDateCondition("incorrecto");
      setDateError("Por favor ingresa la fecha de expedición del documento.");
      setDateEmpty(true);
    } else {
      setDateCondition("correcto");
      setDateError("");
      setDateEmpty(false);
    }
    hideDatePicker();
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);

  //Empty fields to activate button
  useEffect(() => {
    if (
      emailEmpty === true ||
      nameEmpty === true ||
      ccEmpty === true ||
      dateEmpty === true
    ) {
      setEmpty(true);
    } else {
      setEmpty(false);
    }
  }, [emailEmpty, nameEmpty, ccEmpty, dateEmpty]);

  const ready = () => {
    navigation.navigate("EnterPassword", {
      phone: phone,
      email: email,
      name: name,
      cc: cc,
      expDate: eventDate,
    });
  };

  const emailValidation = (text: any) => {
    const isValidEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (text === "") {
      setEmailCondition("incorrecto");
      setEmailError("Por favor ingresa tu correo electrónico.");
      setEmailEmpty(true);
    } else if (!isValidEmail.test(text)) {
      setEmailCondition("incorrecto");
      setEmailError("Ingresa un correo electrónico válido.");
      setEmailEmpty(true);
    } else {
      setEmail(text);
      setEmailCondition("correcto"), setEmailError("");
      setEmailEmpty(false);
    }
  };

  const nameValidation = (text: any) => {
    if (text === "") {
      setNameCondition("incorrecto");
      setNameError("Por favor ingresa tu nombre.");
      setNameEmpty(true);
    } else {
      setName(text);
      setNameCondition("correcto");
      setNameError("");
      setNameEmpty(false);
    }
  };

  const ccValidation = (text: any) => {
    if (
      text.includes(".") ||
      text.includes(",") ||
      text.includes("-") ||
      text.includes(" ")
    ) {
      setCcCondition("incorrecto");
      setCcError("Debes escribir tu documento sin caracteres ni espacios.");
      setCcEmpty(true);
    } else {
      if (text.split("").length >= 8) {
        setCc(text);
        setCcCondition("correcto");
        setCcError("");
        setCcEmpty(false);
      } else {
        setCcCondition("incorrecto");
        setCcError("Por favor ingresa tu documento.");
        setCcEmpty(true);
      }
    }
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
          resetScrollToCoords={{ x: 0, y: 0 }}
          contentContainerStyle={[stylesB.completo, stylesO.completo__flexGrow]}
          scrollEnabled
          enableOnAndroid={true}
          extraScrollHeight={extraIos}
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
          <View style={[]}>
            <Image
              style={[stylesM.boxImgPass, stylesM.marginTopFourtyNine]}
              source={require("../../assets/img/padlock.webp")}
            />
          </View>

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
                stylesM.marginTopThirtyOne,
                fontLight(),
              ]}
            >
              Bienvenido al ecosistema financiero más completo y amigable,
              registra tus datos para iniciar
            </Text>
          </View>

          <View
            style={[
              stylesM.widthTotal,
              stylesM.marginTopThirtyThree,
              stylesM.paddingHorizontalFiftyTwo,
            ]}
          >
            <View>
              <Text
                style={[
                  stylesM.textColorLightGainsboro,
                  stylesM.fontSizeFifteen,
                  fontBold(),
                ]}
              >
                Ingresar correo electrónico
              </Text>

              <View
                style={[
                  stylesM.widthTotal,
                  stylesM.inputCompleteSign,
                  stylesL.flexRow,
                  stylesL.AlignItems,
                  emailCondition === "correcto" && {
                    borderBottomColor: "#1ee3cf",
                  },
                  emailCondition === "incorrecto" && {
                    borderBottomColor: "red",
                  },
                ]}
              >
                <View style={[stylesM.widthPercentageNinety]}>
                  <TextInput
                    keyboardType="email-address"
                    autoCapitalize="none"
                    underlineColorAndroid="transparent"
                    style={[
                      stylesM.backgroundTransparent,
                      stylesM.textColorWhite,
                      stylesM.fontSizeTwentyFour,
                      fontBold(),
                    ]}
                    onChangeText={(text) => emailValidation(text)}
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
                  {emailCondition === "correcto" && (
                    <Image
                      style={stylesM.inputCompleteSign_img}
                      source={require("../../assets/img/correcto.webp")}
                    />
                  )}
                  {emailCondition === "incorrecto" && (
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
                {emailError}
              </Text>
            </View>

            <View style={[stylesM.marginTopFifteen]}>
              <Text
                style={[
                  stylesM.textColorLightGainsboro,
                  stylesM.fontSizeFifteen,
                  fontBold(),
                ]}
              >
                Ingresar nombre completo
              </Text>

              <View
                style={[
                  stylesM.widthTotal,
                  stylesM.inputCompleteSign,
                  stylesL.flexRow,
                  stylesL.AlignItems,
                  nameCondition === "correcto" && {
                    borderBottomColor: "#1ee3cf",
                  },
                  nameCondition === "incorrecto" && {
                    borderBottomColor: "red",
                  },
                ]}
              >
                <View style={[stylesM.widthPercentageNinety]}>
                  <TextInput
                    autoCapitalize="none"
                    underlineColorAndroid="transparent"
                    style={[
                      stylesM.backgroundTransparent,
                      stylesM.textColorWhite,
                      stylesM.fontSizeTwentyFour,
                      fontBold(),
                    ]}
                    onChangeText={(text) => nameValidation(text)}
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
                  {nameCondition === "correcto" && (
                    <Image
                      style={stylesM.inputCompleteSign_img}
                      source={require("../../assets/img/correcto.webp")}
                    />
                  )}
                  {nameCondition === "incorrecto" && (
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
                {nameError}
              </Text>
            </View>

            <View style={[stylesM.marginTopFifteen]}>
              <Text
                style={[
                  stylesM.textColorLightGainsboro,
                  stylesM.fontSizeFifteen,
                  fontBold(),
                ]}
              >
                Ingresar número de documento
              </Text>

              <View
                style={[
                  stylesM.widthTotal,
                  stylesM.inputCompleteSign,
                  stylesL.flexRow,
                  stylesL.AlignItems,
                  ccCondition === "correcto" && {
                    borderBottomColor: "#1ee3cf",
                  },
                  ccCondition === "incorrecto" && {
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
                    onChangeText={(text) => ccValidation(text)}
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
                  {ccCondition === "correcto" && (
                    <Image
                      style={stylesM.inputCompleteSign_img}
                      source={require("../../assets/img/correcto.webp")}
                    />
                  )}
                  {ccCondition === "incorrecto" && (
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
                {ccError}
              </Text>
            </View>

            <Text
              style={[
                stylesM.textColorLightGainsboro,
                stylesM.fontSizeFifteen,
                stylesM.marginTopFifteen,
                stylesM.fontLineTwenty,
                fontBold(),
              ]}
            >
              Ingresa la fecha de expedición del documento
            </Text>
            <TouchableOpacity
              onPress={showDatePicker}
              style={[
                stylesM.widthTotal,
                stylesL.flexRow,
                stylesM.inputDate,
                stylesL.AlignItems,
                dateCondition === "correcto" && {
                  borderBottomColor: "#1ee3cf",
                },
                dateCondition === "incorrecto" && {
                  borderBottomColor: "red",
                },
              ]}
            >
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
              <View style={stylesM.widthPercentageNinety}>
                <Text
                  style={[
                    stylesM.backgroundTransparent,
                    stylesM.textColorWhite,
                    fontBold(),
                    stylesM.fontSizeTwentyFour,
                  ]}
                >
                  {eventDate}
                </Text>
              </View>
              <View style={[stylesM.widthPercentageTen, stylesL.JustifyAlign]}>
                <IconDate name="calendar" size={20} color="#FFFF" />
              </View>
            </TouchableOpacity>
            <Text
              style={[
                stylesM.textColorLigthCoral,
                stylesM.fontSizeTwelve,
                stylesM.marginTopTen,
                fontMedium(),
              ]}
            >
              {dateError}
            </Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            disabled={empty}
            style={[
              stylesM.buttonContinueSign,
              stylesM.marginTopFiftyThree,
              stylesM.marginBottomFourty,
              stylesM.backgroundMidnightBlue,
              stylesL.JustifyAlign,
              stylesM.radiusEighteen,
              empty
                ? { opacity: 0.6 } : { opacity: 1 },
            ]}
            onPress={ready}
          >
            <Text
              style={[
                stylesM.fontSizeSixteen,
                stylesM.textColortWhiteGray,
                fontBold(),
              ]}
            >
              Continuar
            </Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default CompleteSign;
