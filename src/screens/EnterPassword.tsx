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
  Modal,
} from "react-native";
import { BarStatus } from "../components/BarStatus";
import * as Animatable from "react-native-animatable";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import { Lotierror } from "../components/Lottie";
import IconErase from "react-native-vector-icons/Entypo";
import { LinearGradient } from "expo-linear-gradient";
import IconPass from "react-native-vector-icons/FontAwesome";

const sizeErase = Platform.OS === "ios" ? 20 : 23;
const sizePass = Platform.OS === "ios" ? 13 : 15;

const EnterPassword = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  //params
  const phone = route.params?.phone;
  const email = route.params?.email;
  const name = route.params?.name;
  const cc = route.params?.cc;
  const expDate = route.params?.expDate;


  const [password1, setPassword1] = useState({ pass1: "" });
  //Estado background

  const [colour, setColourUno] = useState("transparent");
  const [colourTwo, setColourTwo] = useState("transparent");
  const [colourThree, setColourThree] = useState("transparent");
  const [colourFour, setColourFour] = useState("transparent");

  //Icon
  const [iconPass, setIconPass] = useState(false);
  const [iconPassTwo, setIconPassTwo] = useState(false);
  const [iconPassThree, setIconPassThree] = useState(false);
  const [iconPassFour, setIconPassFour] = useState(false);

  //Modales
  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");
  const [pin4, setPin4] = useState("");

  const [anmt, setanmt] = useState("");
  const [vacioModal, setVacioModal] = useState(false);
  const [MostrarError, setError] = useState("");

  function validadorPassword() {
    setColourFour("transparent");
    setColourThree("transparent");
    setColourTwo("transparent");
    setColourUno("transparent");
    setPin1("");
    setPin2("");
    setPin3("");
    setPin4("");
    setIconPass(false);
    setIconPassTwo(false);
    setIconPassThree(false);
    setIconPassFour(false);
  }

  function genPassword() {
    password1.pass1 = pin1 + pin2 + pin3 + pin4;
    const antipass = password1.pass1;
    console.log(antipass);
    if (antipass.length === 4) {
      navigation.navigate("ConfirmPassword", {
        phone: phone,
        email: email,
        name: name,
        cc: cc,
        expDate: expDate,
        prePassword: antipass,
      });
    } else {
      validadorPassword();
      setVacioModal(true);
      setError("Contraseña inválida");
      setanmt("fadeInDownBig");
      setTimeout(() => {
        setanmt("fadeOutUp");
        setTimeout(() => {
          setVacioModal(false);
        }, 100);
      }, 1850);
    }
  }

  function funcion(numero: string) {
    if (pin1 == "") {
      setPin1(numero);
      setColourUno("rgba(11, 226, 186, 0.31)");
      setIconPass(true);
    } else if (pin1 != "" && pin2 == "") {
      setPin2(numero);
      setColourTwo("rgba(11, 226, 186, 0.31)");
      setIconPassTwo(true);
    } else if (pin1 != "" && pin2 != "" && pin3 == "") {
      setPin3(numero);
      setColourThree("rgba(11, 226, 186, 0.31)");
      setIconPassThree(true);
    } else if (pin1 != "" && pin2 != "" && pin3 != "" && pin4 == "") {
      setPin4(numero);
      setColourFour("rgba(11, 226, 186, 0.31)");
      setIconPassFour(true);
    }
  }

  function borrar() {
    if (pin1 != "" && pin2 != "" && pin3 != "" && pin4 != "") {
      setPin4("");
      setColourFour("transparent");
      setIconPassFour(false);
    } else if (pin1 != "" && pin2 != "" && pin3 != "" && pin4 == "") {
      setPin3("");
      setColourThree("transparent");
      setIconPassThree(false);
    } else if (pin1 != "" && pin2 != "" && pin3 == "" && pin4 == "") {
      setPin2("");
      setColourTwo("transparent");
      setIconPassTwo(false);
    } else if (pin1 != "" && pin2 == "" && pin3 == "" && pin4 == "") {
      setPin1("");
      setColourUno("transparent");
      setIconPass(false);
    } else if (pin1 == "" && pin2 == "" && pin3 == "" && pin4 == "") {
      console.log("====================================");
      console.log("No hay nada que borrar");
      console.log("====================================");
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
      <SafeAreaView style={[stylesB.body]}>
        <BarStatus />
        <View style={[stylesM.boxArrow, stylesM.marginTopTwentySeven]}>
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
        <Modal
          visible={vacioModal}
          transparent
          onRequestClose={() => setVacioModal(false)}
          hardwareAccelerated
        >
          <Animatable.View animation={anmt} duration={600}>
            <View style={stylesB.completo}>
              <View
                style={[
                  stylesM.modalWindow,
                  stylesM.backgroundMidnightBlueLight,
                  stylesL.AlignItems,
                  stylesM.radiusFifteen,
                  stylesL.flexRow,
                ]}
              >
                <View style={stylesL.AlignItems}>
                  <View style={stylesL.JustifyAlign}>
                    <Lotierror />
                  </View>
                </View>
                <View style={stylesM.modalWindow_notification}>
                  <View style={stylesL.Justify}>
                    <Text
                      style={[
                        stylesM.textColorWhite,
                        fontBold(),
                        stylesM.fontSizeTwentyTwo,
                      ]}
                    >
                      Error
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={[
                        stylesM.textColorWhite,
                        fontLight(),
                        stylesM.fontSizeSixteen,
                      ]}
                    >
                      {MostrarError}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </Animatable.View>
        </Modal>

        <View style={stylesB.completo}>
          <View style={[stylesL.JustifyAlign]}>
            <Image
              style={stylesM.boxImgPass}
              source={require("../../assets/img/padlock.webp")}
            />
          </View>
          <View
            style={[
              stylesM.widthTotal,
              stylesM.marginTopTwenty,
              stylesM.paddingHorizontalSixtyFive,
            ]}
          >
            <Text
              style={[
                stylesM.textColorLightGainsboro,
                stylesM.fontSizeSixteen,
                fontBold(),
              ]}
            >
              Crea una contraseña 
            </Text>
          </View>

          {/* Four Circle */}
          <View
            style={[
              stylesM.widthTotal,
              stylesL.spaceBetween,
              stylesM.marginTopTwentyFour,
              stylesL.flexRow,
              stylesM.paddingHorizontalSixtyFive,
              stylesM.boxfourCircle,
            ]}
          >
            <View style={[stylesM.radiusTwenty, stylesM.circlePass]}>
              <View
                style={[
                  stylesM.radiusThirteen,
                  stylesM.boxTotal,
                  { backgroundColor: colour },
                  stylesL.JustifyAlign,
                ]}
              >
                {iconPass ? (
                  <IconPass name="asterisk" size={sizePass} color="white" />
                ) : (
                  <View></View>
                )}
              </View>
            </View>

            <View style={[stylesM.radiusTwenty, stylesM.circlePass]}>
              <View
                style={[
                  stylesM.radiusThirteen,
                  stylesM.boxTotal,
                  { backgroundColor: colourTwo },
                  stylesL.JustifyAlign,
                ]}
              >
                {iconPassTwo ? (
                  <IconPass name="asterisk" size={sizePass} color="white" />
                ) : (
                  <View></View>
                )}
              </View>
            </View>

            <View style={[stylesM.radiusTwenty, stylesM.circlePass]}>
              <View
                style={[
                  stylesM.radiusThirteen,
                  stylesM.boxTotal,
                  { backgroundColor: colourThree },
                  stylesL.JustifyAlign,
                ]}
              >
                {iconPassThree ? (
                  <IconPass name="asterisk" size={sizePass} color="white" />
                ) : (
                  <View></View>
                )}
              </View>
            </View>

            <View style={[stylesM.radiusTwenty, stylesM.circlePass]}>
              <View
                style={[
                  stylesM.radiusThirteen,
                  stylesM.boxTotal,
                  { backgroundColor: colourFour },
                  stylesL.JustifyAlign,
                ]}
              >
                {iconPassFour ? (
                  <IconPass name="asterisk" size={sizePass} color="white" />
                ) : (
                  <View></View>
                )}
              </View>
            </View>
          </View>

          {/* row one */}
          <View
            style={[
              stylesM.widthTotal,
              stylesL.spaceBetween,
              stylesL.flexRow,
              stylesM.paddingHorizontalSixtyFive,
            ]}
          >
            <TouchableOpacity
              style={[stylesM.radiusTwenty, stylesM.circleNumber]}
              activeOpacity={0.5}
              onPress={() => funcion("1")}
            >
              <View style={[stylesM.boxTotal, stylesL.JustifyAlign]}>
                <Text
                  style={[
                    stylesM.textColorWhite,
                    stylesM.fontSizeTwentyEight,
                    fontBold(),
                  ]}
                >
                  1
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[stylesM.radiusTwenty, stylesM.circleNumber]}
              activeOpacity={0.5}
              onPress={() => funcion("2")}
            >
              <View style={[stylesM.boxTotal, stylesL.JustifyAlign]}>
                <Text
                  style={[
                    stylesM.textColorWhite,
                    stylesM.fontSizeTwentyEight,
                    fontBold(),
                  ]}
                >
                  2
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[stylesM.radiusTwenty, stylesM.circleNumber]}
              activeOpacity={0.5}
              onPress={() => funcion("3")}
            >
              <View style={[stylesM.boxTotal, stylesL.JustifyAlign]}>
                <Text
                  style={[
                    stylesM.textColorWhite,
                    stylesM.fontSizeTwentyEight,
                    fontBold(),
                  ]}
                >
                  3
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* row two */}
          <View
            style={[
              stylesM.widthTotal,
              stylesL.spaceBetween,
              stylesM.marginTopTwentyTwo,
              stylesL.flexRow,
              stylesM.paddingHorizontalSixtyFive,
            ]}
          >
            <TouchableOpacity
              style={[stylesM.radiusTwenty, stylesM.circleNumber]}
              activeOpacity={0.5}
              onPress={() => funcion("4")}
            >
              <View style={[stylesM.boxTotal, stylesL.JustifyAlign]}>
                <Text
                  style={[
                    stylesM.textColorWhite,
                    stylesM.fontSizeTwentyEight,
                    fontBold(),
                  ]}
                >
                  4
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[stylesM.radiusTwenty, stylesM.circleNumber]}
              activeOpacity={0.5}
              onPress={() => funcion("5")}
            >
              <View style={[stylesM.boxTotal, stylesL.JustifyAlign]}>
                <Text
                  style={[
                    stylesM.textColorWhite,
                    stylesM.fontSizeTwentyEight,
                    fontBold(),
                  ]}
                >
                  5
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[stylesM.radiusTwenty, stylesM.circleNumber]}
              activeOpacity={0.5}
              onPress={() => funcion("6")}
            >
              <View style={[stylesM.boxTotal, stylesL.JustifyAlign]}>
                <Text
                  style={[
                    stylesM.textColorWhite,
                    stylesM.fontSizeTwentyEight,
                    fontBold(),
                  ]}
                >
                  6
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* row tree */}
          <View
            style={[
              stylesM.widthTotal,
              stylesL.spaceBetween,
              stylesM.marginTopTwentyTwo,
              stylesL.flexRow,
              stylesM.paddingHorizontalSixtyFive,
            ]}
          >
            <TouchableOpacity
              style={[stylesM.radiusTwenty, stylesM.circleNumber]}
              activeOpacity={0.5}
              onPress={() => funcion("7")}
            >
              <View style={[stylesM.boxTotal, stylesL.JustifyAlign]}>
                <Text
                  style={[
                    stylesM.textColorWhite,
                    stylesM.fontSizeTwentyEight,
                    fontBold(),
                  ]}
                >
                  7
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[stylesM.radiusTwenty, stylesM.circleNumber]}
              activeOpacity={0.5}
              onPress={() => funcion("8")}
            >
              <View style={[stylesM.boxTotal, stylesL.JustifyAlign]}>
                <Text
                  style={[
                    stylesM.textColorWhite,
                    stylesM.fontSizeTwentyEight,
                    fontBold(),
                  ]}
                >
                  8
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[stylesM.radiusTwenty, stylesM.circleNumber]}
              activeOpacity={0.5}
              onPress={() => funcion("9")}
            >
              <View style={[stylesM.boxTotal, stylesL.JustifyAlign]}>
                <Text
                  style={[
                    stylesM.textColorWhite,
                    stylesM.fontSizeTwentyEight,
                    fontBold(),
                  ]}
                >
                  9
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* row four */}
          <View
            style={[
              stylesM.widthTotal,
              stylesL.spaceBetween,
              stylesM.marginTopTwentyTwo,
              stylesL.flexRow,
              stylesM.paddingHorizontalSixtyFive,
            ]}
          >
            {/* empty */}
            <View
              style={[
                stylesM.radiusTwenty,
                stylesM.circleNumber,
                { borderWidth: 0 },
              ]}
            >
              <View
                style={[
                  stylesM.boxTotal,
                  stylesM.radiusThirty,
                  stylesL.JustifyAlign,
                ]}
              >
                <Text
                  style={[
                    stylesM.textColorWhite,
                    stylesM.fontSizeTwentyEight,
                    fontBold(),
                  ]}
                ></Text>
              </View>
            </View>

            <TouchableOpacity
              style={[stylesM.radiusTwenty, stylesM.circleNumber]}
              activeOpacity={0.5}
              onPress={() => funcion("0")}
            >
              <View style={[stylesM.boxTotal, stylesL.JustifyAlign]}>
                <Text
                  style={[
                    stylesM.textColorWhite,
                    stylesM.fontSizeTwentyEight,
                    fontBold(),
                  ]}
                >
                  0
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[stylesM.radiusTwenty, stylesM.circleNumber]}
              activeOpacity={0.5}
              onPress={() => borrar()}
            >
              <View style={[stylesM.boxTotal, stylesL.JustifyAlign]}>
                <IconErase name="erase" size={sizeErase} color="white" />
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            style={[
              stylesM.radiusEighteen,
              stylesL.JustifyAlign,
              stylesM.backgroundMidnightBlue,
              stylesM.marginTopTwentySeven,
              stylesM.buttonPass,
            ]}
            onPress={() => genPassword()}
          >
            <Text
              style={[
                stylesM.textColortWhiteGray,
                fontBold(),
                stylesM.fontSizeSixteen,
              ]}
            >
              Siguiente
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default EnterPassword;
