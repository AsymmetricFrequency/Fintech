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
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
  Modal,
} from "react-native";
import { BarStatus, BarStatusShadown } from "../components/BarStatus";
import { getInfoUser } from "../../controller";
import { useState } from "react";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as Animatable from "react-native-animatable";
import { LotiFailSign } from "../components/Lottie";


import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebase-config";
import { RFValue } from "react-native-responsive-fontsize";


const extraIos = Platform.OS === "ios" ? 0 : -210;

const Login = ({ navigation }: { navigation: any}) => {



  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validador, setValidador] = useState("");
  const [condicion, setCondicion] = useState(false);
  const [iconcondicion, setIconcondicion] = useState("");

  const [anmt, setanmt] = useState("");
  const [spinnerCode, setSpinnerCode] = useState(false);


  // Estado del error
  const [continueModal, setContinueModal] = useState(false);

  const [arrayTxt, setArrayTxt] = useState([]);

  const handleSignIn = () => {
    setSpinnerCode(true);
    //Login conditions
    const res = getInfoUser(arrayTxt.toString()).then((info) =>{
     
      //Verifying password
      if(info){
        //navigate to the next screen
        navigation.replace("ConfirmAsync",{phone:arrayTxt.toString()});
        setTimeout(() => {
          setSpinnerCode(false);
        }, 500);
      }else {
        //wrong password    
        setContinueModal(true);
        setanmt("slideInUp");
        setTimeout(() => {
          setanmt("fadeOutUp");
          setTimeout(() => {
            setContinueModal(false);
            setSpinnerCode(false);
          }, 100);
        }, 5000);
      }
    })
  };

  const hideModal = () => {
    setanmt("fadeOut");
    setTimeout(() => {
      setSpinnerCode(false);
      setContinueModal(false);
      navigation.navigate("SignUp");
    }, 100);

  }

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
      setIconcondicion("incorrecto");
    } else {
      // console.log(text.split("").length);
      if (text.split("").length === 10) {
        
        setValidador("");
        setCondicion(true);
        setIconcondicion("correcto");

        
      } else {
        setValidador("Debes escribir un número de celular válido");
        setCondicion(false);
        setIconcondicion("incorrecto");
      }
    }
  };

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
  const fontLight = () => ({ fontFamily: "RobotoLight" });
  const fontMedium = () => ({ fontFamily: "RobotoMedium" });


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
                  stylesM.fontSizeTwenty,
                  fontMedium(),
                  stylesL.textAlignCenter,
                  stylesM.boxTextModal,
                ]}
              >
                Lo sentimos, las credenciales ingresadas no tienen una cuenta
                activa
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
                    stylesM.textShadow
                  ]}
                >
                  ¡Registrese ahora!
                </Text>
              </TouchableOpacity>
            </Animatable.View>
          </View>
        </Modal>
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
          <View style={[stylesL.JustifyAlign]}>
            <Image
              style={stylesM.boxImgLogin}
              source={require("../../assets/img/genesysLogo.webp")}
            />
            <Image
              style={[stylesM.boxTextGenesys, stylesM.marginTopTwenty]}
              source={require("../../assets/img/genesysTitle.webp")}
            />
          </View>

          <View
            style={[
              stylesM.widthTotal,
              stylesM.marginTopEightyOne,
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
                style={[
                  stylesM.widthPercentageTwenty,
                  stylesL.AlignItems,
                  stylesM.boxNumberCountry,
                ]}
              >
                <Text
                  style={[
                    stylesM.textColorCian,
                    stylesM.fontSizeTwentyFour,
                    fontBold(),
                  ]}
                >
                  +57
                </Text>
              </View>
              <View
                style={[
                  stylesM.widthPercentageSeventy,
                  stylesM.boxNumberLogin,
                ]}
              >
                <TextInput
                  keyboardType="numeric"
                  autoCapitalize="none"
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

          <TouchableOpacity
            activeOpacity={0.8}
            style={[
              stylesM.buttonGetInto,
              stylesM.marginTopFiftyFive,
              stylesM.radiusEighteen,
              stylesM.backgroundMidnightBlue,
              stylesL.JustifyAlign,
              stylesM.marginTopFiftyEight,
              !condicion
                ? { opacity: 0.6 } : { opacity: 1 },
            ]}
            disabled={!condicion}
            onPress={handleSignIn}
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
          <TouchableOpacity
            activeOpacity={0.5}
            style={[stylesL.JustifyAlign, stylesM.marginTopFiftyThree]}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text
              style={[
                stylesM.fontSizeSixteen,
                stylesM.textColorWhiteCian,
                fontMedium(),
              ]}
            >
              Registrarme
            </Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Login;
