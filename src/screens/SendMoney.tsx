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
  Modal,
  ActivityIndicator,
  Keyboard,
} from "react-native";
import { BarStatus, BarStatusShadown } from "../components/BarStatus";
import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CurrencyInput from "react-native-currency-input";
import {
  getInfoUser,
  readPrivateKey,
  sendSPL,
  saveTransaction,
} from "../../controller";
import { RFValue } from "react-native-responsive-fontsize";
import * as Animatable from "react-native-animatable";
import { LotiFailSign } from "../components/Lottie";
import { readPhone } from "../../controller";

const extraIos = Platform.OS === "ios" ? 0 : -330;

const SendMoney = ({ navigation, route }: { navigation: any; route: any }) => {
  const mensaje = route.params?.mensaje;

  const [foco, setFoco] = useState(true);

  useEffect(() => {
    if (mensaje != undefined) {
      setFoco(false);
    } else {
      setFoco(true);
    }
    console.log("CAMBIO");
  }, [mensaje]);

  useEffect(() => {
    if (mensaje) {
      const spliteado = mensaje.split(";");

      setMoneyCondition("correcto");
      setPhoneCondition("correcto");
      setConfirmCondition("correcto");
      setMoney(spliteado[1]);
      setNumberPhone(spliteado[0]);
      setNumberConfirm(spliteado[0]);
      setPhoneEmpty(false);
      setMoneyEmpty(false);
    }
  }, 200);

  // state
  const [isFocused, setIsFocused] = useState({
    celular: false,
    confirmcel: false,
    msj: false,
  });

  // Money
  const [money, setMoney] = useState("");
  const [moneyError, setMoneyError] = useState("");
  const [moneyCondition, setMoneyCondition] = useState("");
  const [moneyEmpty, setMoneyEmpty] = useState(true);

  // Phone
  const [phoneError, setPhoneError] = useState("");
  const [phoneCondition, setPhoneCondition] = useState("");
  const [phoneEmpty, setPhoneEmpty] = useState(true);

  // Phone Confirm
  const [confirmError, setConfirmError] = useState("");
  const [confirmCondition, setConfirmCondition] = useState("");

  const [numberPhone, setNumberPhone] = useState("");
  const [numberConfirm, setNumberConfirm] = useState("");

  //activate the button
  const [empty, setEmpty] = useState(true);
  const [edit, setEdit] = useState(true);

  //modal
  const [continueModal, setContinueModal] = useState(false);
  const [anmt, setanmt] = useState("");
  const [spinner, setSpinner] = useState(false);
  const [msjError, setMsjError] = useState("");
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

  //Phone
  const inputNumber = (text: any) => {
    setNumberPhone(text);

    if (
      text.includes(".") ||
      text.includes(",") ||
      text.includes("-") ||
      text.includes(" ")
    ) {
      setPhoneError("Debes escribir un número de celular válido");

      setPhoneCondition("incorrecto");
    } else {
      if (text.split("").length === 10) {
        setPhoneError("");
        setPhoneCondition("correcto");
      } else {
        setPhoneError("Debes escribir un número de celular válido");

        setPhoneCondition("incorrecto");
      }
    }
  };

  //Phone Confirm
  const inputConfirm = (text: any) => {
    setNumberConfirm(text);
    if (
      text.includes(".") ||
      text.includes(",") ||
      text.includes("-") ||
      text.includes(" ")
    ) {
    } else {
      if (text.split("").length === 10) {
        setConfirmError("");
        setConfirmCondition("correcto");
      } else {
      }
    }
  };

  const confirmPhone = () => {
    if (numberPhone === "" && numberConfirm === "") {
      setConfirmError("");
      setConfirmCondition("");
    } else {
      if (numberPhone.length === 10) {
        if (numberPhone === numberConfirm) {
          setConfirmError("");
          setPhoneEmpty(false);
          setConfirmCondition("correcto");
        } else {
          setConfirmError("Los números no coinciden");
          setPhoneEmpty(true);
          setConfirmCondition("incorrecto");
        }
      } else {
        setPhoneEmpty(true);
      }
    }
  };

  useEffect(() => {
    confirmPhone();
  }, [numberPhone, numberConfirm]);

  useEffect(() => {
    if (phoneEmpty === false && moneyEmpty === false) {
      setEmpty(false);
    } else {
      setEmpty(true);
    }
  }, [phoneEmpty, moneyEmpty]);

  //hide modal error
  const hideModal = () => {
    setanmt("fadeOutDown");
    setTimeout(() => {
      setContinueModal(false);
      setSpinner(false);
      navigation.navigate("SendMoney");
    }, 600);
  };

  const goBack = () => {
    Keyboard.dismiss();
    setTimeout(() => {
      navigation.navigate("BalanceWallet");
    }, 200);
  };

  //variables
  const [toPublicKey, setToPublicKey] = useState("");
  const [idLocal, setIdLocal] = useState("");
  const [idReceive, setIdReceive] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [message, setMessage] = useState("");
  const [fromName, setFromName] = useState("");
  const [fromCedula, setFromCedula] = useState("");
  const [fechaEnvio, setFechaEnvio] = useState("");
  const [phoneLocal, setPhoneLocal] = useState("");

  async function leerPrivada() {
    const secret = await readPrivateKey();
    setSecretKey(secret);
  }

  async function traerId() {
    const phone = await readPhone();
    const info = await getInfoUser(phone);
    setPhoneLocal(phone);
    setIdLocal(info._id);
  }

  async function traerToPublica(phone: string) {
    const info = await getInfoUser(phone);
    setToPublicKey(info.publicKey);
    setIdReceive(info._id);
  }

  async function infoVoucher(phone: string) {
    const info = await getInfoUser(phone);
    setFromName(info.name);
    setFromCedula(info.cedula);

    //Fecha Transaccion
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);
    const dia = hoy.getDate();
    const mesnum = hoy.getMonth();
    const mes = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    const año = hoy.getFullYear();
    const hora = hoy.toLocaleTimeString();

    setFechaEnvio(
      dia + " de " + mes[mesnum] + " del " + año + " a las " + hora
    );
  }

  useEffect(() => {
    traerToPublica(numberConfirm);
    infoVoucher(numberConfirm);
  }, [numberConfirm]);

  leerPrivada();
  traerId();

  async function enviarDinero(
    secret: string,
    toPublic: string,
    amount: number,
    mint: string
  ) {
    setSpinner(true);
    setEmpty(true);
    setEdit(false);
    const transaccion = await sendSPL(secret, toPublic, amount, mint);

    var spaceCount = transaccion.split(" ").length - 1;

    //Handleo de errores
    if (spaceCount > 0) {
      if (
        transaccion ==
        "failed to send transaction: Transaction simulation failed: Error processing Instruction 0: custom program error: 0x1"
      ) {
        setContinueModal(true);
        setMsjError("Saldo insuficiente para esta transacción");
        setanmt("slideInUp");
        setEmpty(false);
        setEdit(true);
      } else if (
        transaccion ==
        "failed to send transaction: Transaction simulation failed: Attempt to debit an account but found no record of a prior credit."
      ) {
        setContinueModal(true);
        setMsjError("Fondos insuficientes para la transacción");
        setanmt("slideInUp");
        setEmpty(false);
        setEdit(true);
      } else if (
        transaccion ==
        "failed to send transaction = Transaction simulation failed: Insufficient funds for fee"
      ) {
        setContinueModal(true);
        setMsjError("Fondos insuficientes para la transacción");
        setanmt("slideInUp");
        setEmpty(false);
        setEdit(true);
      } else {
        setContinueModal(true);
        setMsjError(
          "¡Lamentamos informarle que su transferencia de dinero no se ha completado con éxito!"
        );
        setanmt("slideInUp");
        setEmpty(false);
        setEdit(true);
      }
    } else {
      await saveTransaction(
        idLocal,
        "Send",
        numberConfirm,
        money,
        message,
        JSON.parse(transaccion).transfer_transaction,
        fechaEnvio
      );
      await saveTransaction(
        idReceive,
        "Receive",
        phoneLocal,
        money,
        message,
        JSON.parse(transaccion).transfer_transaction,
        fechaEnvio
      );

      navigation.navigate("Voucher", {
        fromName: fromName,
        fromCedula: fromCedula,
        fromNumero: numberConfirm,
        amount: money,
        fecha: fechaEnvio,
      });
      setEmpty(false);
      setEdit(true);
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
              duration={400}
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
                  stylesM.fontSizeSixteen,
                  fontMedium(),
                  stylesL.textAlignCenter,
                  stylesM.boxTextModal,
                ]}
              >
                {msjError}
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
          <View style={[stylesM.boxArrow]}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={[stylesM.boxArrow_buttom, stylesL.JustifyAlign]}
              onPress={() => goBack()}
            >
              <Image
                style={[stylesM.boxArrow_buttom_image]}
                source={require("../../assets/img/leftArrow.webp")}
              />
            </TouchableOpacity>
          </View>
          <View
            style={[
              stylesM.marginTopEightyOne,
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
              Enviar Dinero
            </Text>
          </View>

          <Text
            style={[
              stylesM.textColorWhite,
              stylesM.fontSizeSixteen,
              stylesM.marginTopFourtyFive,
              fontLight(),
            ]}
          >
            Ingresar cantidad
          </Text>

          <View
            style={[
              stylesM.inputSendMoney,
              stylesM.marginTopTwelve,
              moneyCondition === "incorrecto" && {
                borderBottomColor: "red",
              },
              moneyCondition === "" && {
                borderBottomColor: "#E2E4F5",
              },
            ]}
          >
            <CurrencyInput
              editable={edit}
              autoFocus={foco}
              placeholder={"$ 0"}
              placeholderTextColor="#A29FC6"
              value={money}
              style={[
                { minWidth: RFValue(60) },
                stylesM.textColorWhite,
                stylesM.fontSizeFortyEight,
                fontBold(),
                stylesL.textAlignCenter,
              ]}
              onChangeValue={(text) => moneyValidation(text)}
              prefix="$"
              delimiter="."
              precision={0}
              minValue={0}
              onChangeText={(formattedValue) => {}}
              maxLength={12}
            />
          </View>
          <Text
            style={[
              stylesM.textColorLigthCoral,
              stylesM.fontSizeTwelve,
              stylesM.marginTopEight,
              fontMedium(),
            ]}
          >
            {moneyError}
          </Text>

          <View
            style={[
              stylesM.boxTotal,
              stylesM.backgroundSnow,
              stylesM.marginTopSeventySeven,
              stylesM.radiusTopEighteen,
              stylesL.AlignItems,
            ]}
          >
            <View
              style={[
                stylesM.widthTotal,
                stylesM.paddingHorizontalTwenty,
                stylesM.marginTopTwentyFive,
              ]}
            >
              <View>
                <View>
                  <Text
                    style={[
                      stylesM.fontSizeFifteen,
                      fontMedium(),
                      {
                        color: isFocused.celular ? "#3A54B3" : "#A29FC6",
                      },
                    ]}
                  >
                    Ingresar número telefónico:
                  </Text>
                  <View
                    style={[
                      stylesM.widthTotal,
                      stylesM.inputCompleteSign,
                      stylesL.flexRow,
                      stylesL.AlignItems,
                      phoneCondition === "correcto" && {
                        borderBottomColor: "#1ee3cf",
                      },
                      phoneCondition === "incorrecto" && {
                        borderBottomColor: "red",
                      },
                      phoneCondition === "" && {
                        borderBottomColor: "#E2E4F5",
                      },
                    ]}
                  >
                    <View style={[stylesM.widthPercentageNinety]}>
                      <TextInput
                        editable={edit}
                        keyboardType="numeric"
                        autoCapitalize="none"
                        underlineColorAndroid="transparent"
                        value={numberPhone}
                        style={[
                          stylesM.backgroundTransparent,
                          stylesM.textColorBlack,
                          stylesM.fontSizeTwentyFour,
                          fontMedium(),
                        ]}
                        maxLength={10}
                        onChangeText={(text) => inputNumber(text)}
                        onFocus={() => handleInputFocus("celular")}
                        onBlur={() => handleInputBlur("celular")}
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
                      stylesM.marginTopEight,
                      fontLight(),
                    ]}
                  >
                    {phoneError}
                  </Text>
                </View>

                <View>
                  <Text
                    style={[
                      stylesM.fontSizeFifteen,
                      stylesM.marginTopTwenty,
                      fontMedium(),
                      {
                        color: isFocused.confirmcel ? "#3A54B3" : "#A29FC6",
                      },
                    ]}
                  >
                    Confirmar número de telefónico:
                  </Text>

                  <View
                    style={[
                      stylesM.widthTotal,
                      stylesM.inputCompleteSign,
                      stylesL.flexRow,
                      stylesL.AlignItems,
                      confirmCondition === "correcto" && {
                        borderBottomColor: "#1ee3cf",
                      },
                      confirmCondition === "incorrecto" && {
                        borderBottomColor: "red",
                      },
                      confirmCondition === "" && {
                        borderBottomColor: "#E2E4F5",
                      },
                    ]}
                  >
                    <View style={[stylesM.widthPercentageNinety]}>
                      <TextInput
                        editable={edit}
                        keyboardType="numeric"
                        autoCapitalize="none"
                        value={numberConfirm}
                        style={[
                          stylesM.backgroundTransparent,
                          stylesM.textColorBlack,
                          stylesM.fontSizeTwentyFour,
                          fontMedium(),
                        ]}
                        maxLength={10}
                        onChangeText={(text) => inputConfirm(text)}
                        onFocus={() => handleInputFocus("confirmcel")}
                        onBlur={() => handleInputBlur("confirmcel")}
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
                      {confirmCondition === "correcto" && (
                        <Image
                          style={stylesM.inputCompleteSign_img}
                          source={require("../../assets/img/correcto.webp")}
                        />
                      )}
                      {confirmCondition === "incorrecto" && (
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
                      stylesM.marginTopEight,
                      fontLight(),
                    ]}
                  >
                    {confirmError}
                  </Text>
                </View>

                <Text
                  style={[
                    stylesM.fontSizeFifteen,
                    stylesM.marginTopTwenty,
                    fontMedium(),
                    {
                      color: isFocused.msj ? "#3A54B3" : "#A29FC6",
                    },
                  ]}
                >
                  Mensaje:
                </Text>

                <TextInput
                  editable={edit}
                  multiline={true}
                  numberOfLines={2}
                  style={[
                    stylesM.boxInputMsj,
                    stylesM.fontSizeTwentyFour,
                    stylesM.marginTopTwo,
                    {
                      borderBottomColor: isFocused.msj ? "#3A54B3" : "#E2E4F5",
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
                    stylesM.buttonSendMoney,
                    stylesM.backgroundMidnightBlue,
                    stylesM.radiusThirteen,
                    stylesL.JustifyAlign,
                    empty ? { opacity: 0.6 } : { opacity: 1 },
                  ]}
                  onPress={() =>
                    enviarDinero(
                      secretKey,
                      toPublicKey,
                      Number(money),
                      "8HVNzVijeQvd9wj6n2M1JonN2AS6Xvyq9MsJsVsYofLs"
                    )
                  }
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
                      Enviar Dinero
                    </Text>
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SendMoney;
