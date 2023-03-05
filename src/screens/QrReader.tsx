import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "../appTheme/styles/styles";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Clipboard,
  Platform,
  Dimensions,
  Modal,
  Button,
  SafeAreaView,
  Image,
  StatusBar,
} from "react-native";
import { Camera } from "expo-camera";
import { useFonts } from "expo-font";
import { BarCodeScanner } from "expo-barcode-scanner";
import * as Animatable from "react-native-animatable";
import {
  Lotierror,
  Lotieqr,
  LotierrorQr,
  LotiFailSign,
} from "../components/Lottie";
import { BarStatus, BarStatusShadown } from "../components/BarStatus";
import { LinearGradient } from "expo-linear-gradient";

const topIos = () => Platform.OS === "ios" && { top: 3 };

const QrReader = ({ navigation, route }: { navigation: any; route: any }) => {
  const fontBold = route.params?.bold;
  const fontLight = route.params?.light;
  const fontMedium = route.params?.medium;

  // +++++++++++++++++++++++++++++++++++++++++Qr para iOS+++++++++++++++++++++++++++++++++++++++++

  if (Platform.OS === "ios") {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState("");

    //preguntando el permiso para camara
    const askForCameraPermission = () => {
      (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status == "granted");
      })();
    };

    useEffect(() => {
      askForCameraPermission();
    }, []);

    //Constantes modales
    const [anmt, setanmt] = useState("");
    const [aprobado, setaprobado] = useState(false);
    const [MostrarError, setError] = useState("");
    const [lottie, setLottie] = useState(<Lotierror />);
    const [mostrartitulo, setmostrartitulo] = useState("");

    //Handleo del escaneado
    const handleBarCodeScanned = ({ data }) => {
      setText(data);
      // Allowed parameters
      var str = data;
      var strFirstThree = str.substring(0, 3);
      var strLastThree = str.substring(str.length - 3, str.length);
      var concatenado = `${strFirstThree}...${strLastThree}`;
      var mensajeNormal = str.substring(3,str.length - 3);
      
      // qr allowed
      if (concatenado === "epa...upa") {
        setScanned(false),
          setaprobado(false),
          setTimeout(() => {
            navigation.navigate("SendMoney", { mensaje:  mensajeNormal});
          }, 200);
      } else if (concatenado === "cry...pto") {
        setScanned(false)
        setaprobado(false),
        setTimeout(() => {
          navigation.navigate("SendCrypto", { mensaje:  mensajeNormal});
        }, 200);
      }


      // qr not allowed
      else {
        setScanned(true);
        setaprobado(true);
        setLottie(<Lotieqr />);
        setanmt("fadeInDownBig");
      }

      Clipboard.setString(data);
    };

    //si el permiso es nulo
    if (hasPermission === null) {
      return (<Text>Permiso Nulo</Text>);
    }

    //si el permiso es falso
    if (hasPermission === false) {
      return (
        <LinearGradient
          style={[stylesB.linear, stylesL.JustifyAlign]}
          colors={["#3A0CA3", "#0f9172"]}
          start={{ x: 0, y: 0.01 }}
          end={{ x: 0, y: 0.7 }}
        >
          <Animatable.View animation={"fadeInDownBig"} duration={600}>
            <View style={[stylesL.JustifyAlign]}>
              <Text
                style={[
                  stylesM.fontSizeTwentyEight,
                  stylesM.textColorWhite,
                  stylesM.textBold,
                ]}
              >
                Permiso Denegado
              </Text>
            </View>
            {/* Lottie */}
            <View style={[stylesL.AlignItems]}>
              <LotiFailSign />
            </View>
            <View style={[stylesM.paddingHorizontalTwentySix]}>
              <Text
                style={[
                  stylesM.textColorWhite,
                  stylesL.textAlignCenter,
                  stylesM.fontSizeSixteen,
                ]}
              >
                Revisa los permisos de la cámara ingresando en configuración,
                privacidad y cámara.
              </Text>
            </View>
            <View style={[stylesL.AlignItems, stylesM.marginTopThirtyFive]}>
              <TouchableOpacity
                style={[
                  stylesM.btnv,
                  stylesL.AlignItems,
                  stylesM.backgroundWhite,
                  stylesM.radiusTwenty,
                ]}
                activeOpacity={0.5}
                onPress={() => regresar()}
              >
                <Text
                  style={[stylesM.textColorPurple, stylesM.fontSizeSixteen]}
                >
                  VOLVER
                </Text>
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </LinearGradient>
      );
    }

    //boton volver
    function regresar() {
      setScanned(false);
      navigation.navigate("BalanceWallet");
    }

    //si el permiso es verdadero
    if (hasPermission === true) {
      return (
        <View style={[stylesM.containeruno, stylesL.AlignItems]}>
          <Modal
            visible={aprobado}
            transparent
            onRequestClose={() => setaprobado(false)}
            hardwareAccelerated
          >
            <View
              style={[stylesB.linear, stylesL.AlignItems, stylesL.JustifyAlign]}
            >
              <Animatable.View animation={anmt} duration={600}>
                <LinearGradient
                  style={stylesB.linear}
                  colors={["#3A0CA3", "#0f9172"]}
                  start={{ x: 0, y: 0.01 }}
                  end={{ x: 0, y: 0.7 }}
                >
                  <SafeAreaView style={stylesB.body}>
                    <BarStatus />
                    <View style={[stylesB.completo, stylesL.Justify]}>
                      <Animatable.View
                        animation={"fadeInDownBig"}
                        duration={1500}
                        style={[stylesL.JustifyAlign]}
                      >
                        <View style={[stylesL.JustifyAlign]}>
                          <Text
                            style={[
                              stylesM.fontSizeTwentyEight,
                              stylesM.textColorWhiteBone,
                              stylesL.textAlignCenter,
                              stylesM.bold,
                            ]}
                          >
                            {`QR NO VÁLIDO \n PARA TRANSACCIONES`}
                          </Text>
                        </View>

                        <View>
                          <Lotieqr />
                        </View>

                        <Text
                          style={[
                            stylesM.textKey,
                            stylesM.textColorWhite,
                            stylesL.textAlignCenter,
                            stylesM.fontSizeTwenty,
                            fontMedium,
                          ]}
                        >
                          Lo sentimos, el código QR escaneado no cumple con los
                          parámetros permitidos.
                        </Text>
                        {/* Texto copiado */}
                        <View>
                          <Text
                            style={[
                              stylesM.copiadotxtAndroid,
                              stylesM.textColorLightpurple,
                              stylesM.fontSizeTwenty,
                              stylesL.textAlignCenter,
                            ]}
                          >
                            {text}
                          </Text>
                        </View>

                        <View
                          style={[stylesM.widthRectangle, stylesL.AlignItems]}
                        >
                          <View style={[stylesM.widthPercentageFive]}>
                            <TouchableOpacity
                              style={[
                                stylesM.boxBottomQr_txt,
                                stylesM.backgroundCian,
                                stylesM.radiusTwenty,
                                stylesL.JustifyAlign,
                              ]}
                              activeOpacity={0.5}
                              onPress={() => [
                                setScanned(false),
                                setaprobado(false),
                              ]}
                            >
                              <Text
                                style={[
                                  stylesM.fontSizeTwenty,
                                  stylesM.textColorBlack,
                                  stylesM.bold,
                                ]}
                              >
                                REESCANEAR
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </Animatable.View>
                    </View>
                  </SafeAreaView>
                </LinearGradient>
              </Animatable.View>
            </View>
          </Modal>

          {/* camara */}
          <SafeAreaView style={[stylesB.body]}>
            <BarStatusShadown />
            <View style={stylesM.boxArrow}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={[stylesM.boxArrow_buttom, stylesL.JustifyAlign]}
                onPress={() => regresar()}
              >
                <Image
                  style={[stylesM.boxArrow_buttom_image]}
                  source={require("../../assets/img/leftArrow.webp")}
                />
              </TouchableOpacity>
            </View>

            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={[stylesB.completo, stylesL.Justify]}
            >
              <View
                style={[
                  stylesM.tituloqr,
                  stylesL.AlignItems,
                  stylesM.backgroundBlackMedium,
                  stylesM.radiusFifteen,
                ]}
              >
                <Text style={stylesM.textColorWhite}>ESCANEAR CÓDIGO QR</Text>
              </View>
              <Animatable.View
                style={[
                  stylesM.barcodebox,
                  stylesL.AlignItems,
                  stylesM.radiusFifteen,
                ]}
                animation="pulse"
                duration={2000}
                iterationCount={"infinite"}
              ></Animatable.View>
              <View style={[stylesM.cajavolver, stylesL.AlignItems]}>
                <TouchableOpacity
                  style={[
                    stylesM.btnvolver,
                    stylesL.AlignItems,
                    stylesM.backgroundWhite,
                    stylesM.radiusTwenty,
                  ]}
                  activeOpacity={0.5}
                  onPress={() => regresar()}
                >
                  <Text
                    style={[stylesM.textColorPurple, stylesM.fontSizeSixteen]}
                  >
                    VOLVER
                  </Text>
                </TouchableOpacity>
              </View>
            </BarCodeScanner>
          </SafeAreaView>
        </View>
      );
    }

    return (
      // permiso denegado

      <LinearGradient
        style={[stylesB.linear, stylesL.JustifyAlign]}
        colors={["#3A0CA3", "#0f9172"]}
        start={{ x: 0, y: 0.01 }}
        end={{ x: 0, y: 0.7 }}
      >
        <Animatable.View animation={"fadeInDownBig"} duration={600}>
          <View style={[stylesL.JustifyAlign]}>
            <Text
              style={[
                stylesM.fontSizeTwentyEight,
                stylesM.textColorWhite,
                stylesM.textBold,
              ]}
            >
              Permiso Denegado
            </Text>
          </View>
          {/* Lottie */}
          <View style={[stylesL.AlignItems]}>
            <LotiFailSign />
          </View>
          <View style={[stylesM.paddingHorizontalTwentySix]}>
            <Text
              style={[
                stylesM.textColorWhite,
                stylesL.textAlignCenter,
                stylesM.fontSizeSixteen,
              ]}
            >
              Revisa los permisos de la cámara ingresando en configuración,
              privacidad y cámara.
            </Text>
          </View>
          <View style={[stylesL.AlignItems, stylesM.marginTopThirtyFive]}>
            <TouchableOpacity
              style={[
                stylesM.btnv,
                stylesL.AlignItems,
                stylesM.backgroundWhite,
                stylesM.radiusTwenty,
              ]}
              activeOpacity={0.5}
              onPress={() => regresar()}
            >
              <Text style={[stylesM.textColorPurple, stylesM.fontSizeSixteen]}>
                VOLVER
              </Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </LinearGradient>
    );

    // +++++++++++++++++++++++++++++++++++++++++Qr para Android+++++++++++++++++++++++++++++++++++++++++
  } else if (Platform.OS === "android") {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [scanned, setScanned] = useState(false);
    //Constantes modales
    const [text, setText] = useState("");

    //boton volver
    function regresar() {
      setScanned(false);
      navigation.navigate("BalanceWallet");
    }

    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === "granted");
      })();
    }, []);

    if (hasPermission === null) {
      return (
        <LinearGradient
          colors={["#090437", "#000"]}
          style={stylesB.linear}
          start={{ x: 0, y: 1.6 }}
          end={{ x: 0, y: 0 }}
        >
          <SafeAreaView style={stylesB.body}>
            <BarStatus />
            <View style={[stylesB.completo, stylesL.JustifyAlign]}>
              <Text
                style={[
                  stylesM.textColorWhite,
                  stylesL.textAlignCenter,
                  stylesM.fontSizeTwenty,
                  fontMedium,
                  stylesM.fontLineThirty,
                ]}
              >
                {`Se ha denegado el permiso de la cámara,\n verifique la configuración`}
              </Text>
              <View style={[stylesL.AlignItems, stylesM.marginTopTwenty]}>
                <TouchableOpacity
                  style={[
                    stylesM.boxBottomQr_txt,
                    stylesO.boxBottomQr_txt__width,
                    stylesM.backgroundCian,
                    stylesM.radiusTwenty,
                    stylesL.JustifyAlign,
                    stylesM.marginTopThirtyEight,
                  ]}
                  activeOpacity={0.5}
                  onPress={() => regresar()}
                >
                  <Text
                    style={[
                      stylesM.fontSizeTwentyFour,
                      stylesM.textColorBlack,
                      fontBold,
                      topIos(),
                    ]}
                  >
                    VOLVER
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        </LinearGradient>
      );
    }

    if (hasPermission === false) {
      return (
        <LinearGradient
          colors={["#090437", "#000"]}
          style={stylesB.linear}
          start={{ x: 0, y: 1.6 }}
          end={{ x: 0, y: 0 }}
        >
          <SafeAreaView style={stylesB.body}>
            <BarStatus />
            <View style={[stylesB.completo, stylesL.Justify]}>
              <Animatable.View
                animation={"fadeInDownBig"}
                duration={1500}
                style={[stylesL.JustifyAlign]}
              >
                <View style={[stylesL.JustifyAlign]}>
                  <Text
                    style={[
                      stylesM.fontSizeTwentyEight,
                      stylesM.textColorWhite,
                      fontBold,
                    ]}
                  >
                    Permiso Denegado
                  </Text>
                </View>

                <View>
                  <LotierrorQr />
                </View>

                <Text
                  style={[
                    stylesM.textKey,
                    stylesM.textColorWhite,
                    stylesL.textAlignCenter,
                    stylesM.fontSizeTwenty,
                    fontMedium,
                    stylesM.fontLineThirty,
                  ]}
                >
                  {`Se ha denegado el permiso de la cámara,\n verifique la configuración`}
                </Text>

                <View style={stylesL.AlignItems}>
                  <TouchableOpacity
                    style={[
                      stylesM.boxBottomQr_txt,
                      stylesO.boxBottomQr_txt__width,
                      stylesM.backgroundCian,
                      stylesM.radiusTwenty,
                      stylesL.JustifyAlign,
                    ]}
                    activeOpacity={0.5}
                    onPress={() => regresar()}
                  >
                    <Text
                      style={[
                        stylesM.fontSizeTwentyFour,
                        stylesM.textColorBlack,
                        fontBold,
                        topIos(),
                      ]}
                    >
                      VOLVER
                    </Text>
                  </TouchableOpacity>
                </View>
              </Animatable.View>
            </View>
          </SafeAreaView>
        </LinearGradient>
      );
    }
    if (scanned == true) {
      // Allowed parameters
      var str = text;
      var strFirstThree = str.substring(0, 3);
      var strLastThree = str.substring(str.length - 3, str.length);
      var concatenado = `${strFirstThree}...${strLastThree}`;
      var mensajeNormal = str.substring(3,str.length - 3);

      // qr allowed
      if (concatenado === "epa...upa") {
        setScanned(false);
        setTimeout(() => {
          navigation.navigate("SendMoney", { mensaje:  mensajeNormal });
        }, 200);
      }else if (concatenado === "cry...pto") {
        setScanned(false);
        setTimeout(() => {
          navigation.navigate("SendCrypto", { mensaje:  mensajeNormal });
        }, 200);
      }
      // qr not allowed
      else {
        return (
          <LinearGradient
            style={stylesB.linear}
            colors={["#3A0CA3", "#0f9172"]}
            start={{ x: 0, y: 0.01 }}
            end={{ x: 0, y: 0.7 }}
          >
            <SafeAreaView style={stylesB.body}>
              <BarStatus />
              <View style={[stylesB.completo, stylesL.Justify]}>
                <Animatable.View
                  animation={"fadeInDownBig"}
                  duration={1500}
                  style={[stylesL.JustifyAlign]}
                >
                  <View style={[stylesL.JustifyAlign]}>
                    <Text
                      style={[
                        stylesM.fontSizeTwentyEight,
                        stylesM.textColorWhiteBone,
                        stylesL.textAlignCenter,
                        stylesM.bold,
                      ]}
                    >
                      {`QR NO VÁLIDO \n PARA TRANSACCIONES`}
                    </Text>
                  </View>

                  <View>
                    <Lotieqr />
                  </View>

                  <Text
                    style={[
                      stylesM.textKey,
                      stylesM.textColorWhite,
                      stylesL.textAlignCenter,
                      stylesM.fontSizeTwenty,
                      fontMedium,
                    ]}
                  >
                    Lo sentimos, el código QR escaneado no cumple con los
                    parámetros permitidos.
                  </Text>
                  {/* Texto copiado */}
                  <View>
                    <Text
                      style={[
                        stylesM.copiadotxtAndroid,
                        stylesM.textColorLightpurple,
                        stylesM.fontSizeTwenty,
                        stylesL.textAlignCenter,
                      ]}
                    >
                      {text}
                    </Text>
                  </View>

                  <View style={[stylesM.widthRectangle, stylesL.AlignItems]}>
                    <View style={[stylesM.widthPercentageFive]}>
                      <TouchableOpacity
                        style={[
                          stylesM.boxBottomQr_txt,
                          stylesM.backgroundCian,
                          stylesM.radiusTwenty,
                          stylesL.JustifyAlign,
                        ]}
                        activeOpacity={0.8}
                        onPress={() => [setScanned(false)]}
                      >
                        <Text
                          style={[
                            stylesM.fontSizeTwentyFour,
                            stylesM.textColorBlack,
                            stylesM.bold,
                          ]}
                        >
                          REESCANEAR
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Animatable.View>
              </View>
            </SafeAreaView>
          </LinearGradient>
        );
      }
    }

    return (
      <SafeAreaView style={stylesB.body}>
        <BarStatus />
        <View style={stylesM.boxArrow}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={[stylesM.boxArrow_buttom, stylesL.JustifyAlign]}
            onPress={() => regresar()}
          >
            <Image
              style={[stylesM.boxArrow_buttom_image]}
              source={require("../../assets/img/leftArrow.webp")}
            />
          </TouchableOpacity>
        </View>
        <Camera
          onBarCodeScanned={(...args) => {
            const data = args[0].data;
            const result = JSON.stringify(data);
            Clipboard.setString(data);
            setScanned(true);
            setText(data);
          }}
          barCodeScannerSettings={{
            barCodeTypes: ["qr"],
          }}
          style={[stylesB.completo, stylesL.Justify]}
        >
          <View
            style={[
              stylesM.box_titleQr,
              stylesL.AlignItems,
              stylesM.radiusSixteen,
              stylesM.backgroundBlackMedium,
            ]}
          >
            <Text style={[stylesM.textColorWhite, fontBold]}>
              ESCANEAR CÓDIGO QR
            </Text>
          </View>
          <Animatable.View
            style={[stylesM.boxScanQr, stylesM.radiusSixteen]}
            animation="pulse"
            duration={2000}
            iterationCount={"infinite"}
          ></Animatable.View>
        </Camera>
      </SafeAreaView>
    );
  }

  return null;
};

export default QrReader;
