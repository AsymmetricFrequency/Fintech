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
  ScrollView,
  RefreshControl,
  TextInput,
  Platform,
  Clipboard,
  Modal,
} from "react-native";
import { BarStatus, BarStatusShadown } from "../components/BarStatus";
import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { RFValue } from "react-native-responsive-fontsize";
import CurrencyInput from "react-native-currency-input";
import IconDown from "react-native-vector-icons/FontAwesome";
import IconPaste from "react-native-vector-icons/FontAwesome5";

import * as Animatable from "react-native-animatable";

import {
  LotieEnviadoModal,
  LotierrorModal,
  LotiFailSign,
} from "../components/Lottie";

import {
  readPublicKey,
  getBalanceSol,
  getBalanceToken,
  getPrices,
  sendSPL,
  sendSol,
  readPrivateKey,
} from "../../controller";

const SendCrypto = ({ navigation, route }: { navigation: any; route: any }) => {
  const mensaje = route.params?.mensaje;

  //Nuevo

  const sizeCopy = Platform.OS === "ios" ? 19 : 22;

  console.log(Number("0.1"));

  const [bloqueoText, setBloqueoText] = useState(true);
  const [toPublic, setToPublic] = useState("");
  const [amount, setAmount] = useState("");

  const [selectedToken, setSelectedToken] = useState("SOL");
  const [selectedMint, setSelectedMint] = useState("");
  const [secretKey, setSecretKey] = useState("");

  const [publicKey, setPublicKey] = useState("");

  const [solBalance, setSolBalance] = useState("0.0");
  const [usdtBalance, setUsdtBalance] = useState("0.0");
  const [usdcBalance, setUsdcBalance] = useState("0.0");
  const [ethBalance, setEthBalance] = useState("0.0");
  const [totalBalance, setTotalBalance] = useState("0.0");

  useEffect(() => {
    if (mensaje) {
      setToPublic(mensaje);
    }
  });

  async function leerSecretKey() {
    const key = await readPrivateKey();

    setSecretKey(key);
  }

  leerSecretKey();

  async function getPublicKey() {
    const pub = await readPublicKey();
    setPublicKey(pub);
    await getBalance(pub);
  }

  async function getBalance(publicKey: any) {
    try {
      const solBalance = await getBalanceSol(publicKey);
      setSolBalance(solBalance.balance);

      const usdtBalance = await getBalanceToken(
        publicKey,
        "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"
      );
      setUsdtBalance(usdtBalance.balance);

      const usdcBalance = await getBalanceToken(
        publicKey,
        "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"
      );
      setUsdcBalance(usdcBalance.balance);

      const ethBalance = await getBalanceToken(
        publicKey,
        "2FPyTwcZLUg1MDrwsyoP4D6s1tM7hAkHYRjkNb5w6Pxk"
      );
      setEthBalance(ethBalance.balance);
      const prices = await getPrices();

      const solAmount = solBalance * prices.solana;
      const ethAmount = ethBalance * prices.ethereum;
      const totalAmount = (
        Number(solAmount) +
        Number(ethAmount) +
        Number(usdcBalance) +
        Number(usdtBalance)
      ).toString();
      const round = totalAmount.substring(0, 5);
      setTotalBalance(round);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPublicKey();
  }, []);

  //Funcion enviar SOL
  async function enviarSoles() {
    if (toPublic == "") {
      setLottierror(true);
      setanmt("fadeInDownBig");
      setTimeout(() => {
        setanmt("fadeOutUp");
        setTimeout(() => {
          setLottierror(false);
          setDisableSend(false);
        }, 100);
      }, 2000);
    } else {
      setLoadingModal(true);
      setanmt("fadeInDownBig");
      const amnt = amount.replace(",", ".");
      console.log(anmt);
      const transaccion = await sendSol(secretKey, toPublic, Number(amnt));
      console.log(transaccion);
      console.log("SOL");

      var respuesta_es = "";
      var spaceCount = transaccion.split(" ").length - 1;

      //Handleo de errores
      if (spaceCount > 0) {
        if (
          transaccion ==
          "failed to send transaction: Transaction simulation failed: Error processing Instruction 0: custom program error: 0x1"
        ) {
          respuesta_es = "Insufficient balance for this transaction";
          setTimeout(() => {
            setLoadingModal(false);
            navigation.navigate("Declined", { resp: respuesta_es });
            setDisableSend(false);
          }, 1500);
        } else if (transaccion == "Invalid public key input") {
          respuesta_es = "Invalid destination public key";
          setTimeout(() => {
            setLoadingModal(false);
            navigation.navigate("Declined", { resp: respuesta_es });
            setDisableSend(false);
          }, 1500);
        } else if (transaccion == "Non-base58 character") {
          respuesta_es = "Invalid destination public key";
          setTimeout(() => {
            setLoadingModal(false);
            navigation.navigate("Declined", { resp: respuesta_es });
            setDisableSend(false);
          }, 1500);
        } else if (
          transaccion ==
          "failed to send transaction: Transaction simulation failed: Attempt to debit an account but found no record of a prior credit."
        ) {
          respuesta_es = "Fondos insuficientes para la Transacción";
          setTimeout(() => {
            setLoadingModal(false);
            navigation.navigate("Declined", { resp: respuesta_es });
            setDisableSend(false);
          }, 1500);
        } else if (
          transaccion ==
          "failed to send transaction = Transaction simulation failed: Insufficient funds for fee"
        ) {
          respuesta_es = "Insufficient Funds for the Transaction";
          setTimeout(() => {
            setLoadingModal(false);
            navigation.navigate("Declined", { resp: respuesta_es });
            setDisableSend(false);
          }, 1500);
        } else {
          respuesta_es = "Something went wrong, please try again";
          setTimeout(() => {
            setLoadingModal(false);
            navigation.navigate("Declined", { resp: respuesta_es });
            setDisableSend(false);
          }, 1500);
        }
      } else {
        setTimeout(() => {
          setLoadingModal(false);
          navigation.navigate("Succesful", {
            resp: JSON.parse(transaccion).transfer_transaction,
            num: amount,
          });
          setDisableSend(false);
        }, 1500);
      }
    }
  }

  async function enviarSpl() {
    if (toPublic == "") {
      setLottierror(true);
      setanmt("fadeInDownBig");
      setTimeout(() => {
        setanmt("fadeOutUp");
        setTimeout(() => {
          setLottierror(false);
          setDisableSend(false);
        }, 100);
      }, 1000);
    } else {
      setLoadingModal(true);
      setanmt("fadeInDownBig");
      const transaccion = await sendSPL(
        secretKey,
        toPublic,
        Number(amount),
        selectedMint
      );
      console.log(transaccion);
      console.log("SPL");

      var respuesta_es = "";
      var spaceCount = transaccion.split(" ").length - 1;

      //Handleo de errores
      if (spaceCount > 0) {
        if (
          transaccion ==
          "failed to send transaction: Transaction simulation failed: Error processing Instruction 0: custom program error: 0x1"
        ) {
          respuesta_es = "Insufficient balance for this transaction";
          setTimeout(() => {
            setLoadingModal(false);
            navigation.navigate("Declined", { resp: respuesta_es });
            setDisableSend(false);
          }, 1500);
        } else if (transaccion == "Invalid public key input") {
          respuesta_es = "Invalid destination public key";
          setTimeout(() => {
            setLoadingModal(false);
            navigation.navigate("Declined", { resp: respuesta_es });
            setDisableSend(false);
          }, 1500);
        } else if (transaccion == "Non-base58 character") {
          respuesta_es = "Invalid destination public key";
          setTimeout(() => {
            setLoadingModal(false);
            navigation.navigate("Declined", { resp: respuesta_es });
            setDisableSend(false);
          }, 1500);
        } else if (
          transaccion ==
          "failed to send transaction: Transaction simulation failed: Attempt to debit an account but found no record of a prior credit."
        ) {
          respuesta_es = "Fondos insuficientes para la Transacción";
          setTimeout(() => {
            setLoadingModal(false);
            navigation.navigate("Declined", { resp: respuesta_es });
            setDisableSend(false);
          }, 1500);
        } else if (
          transaccion ==
          "failed to send transaction = Transaction simulation failed: Insufficient funds for fee"
        ) {
          respuesta_es = "Insufficient Funds for the Transaction";
          setTimeout(() => {
            setLoadingModal(false);
            navigation.navigate("Declined", { resp: respuesta_es });
            setDisableSend(false);
          }, 1500);
        } else {
          respuesta_es = "Something went wrong, please try again";
          setTimeout(() => {
            setLoadingModal(false);
            navigation.navigate("Declined", { resp: respuesta_es });
            setDisableSend(false);
          }, 1500);
        }
      } else {
        setTimeout(() => {
          setLoadingModal(false);
          navigation.navigate("Succesful", {
            resp: JSON.parse(transaccion).transfer_transaction,
            num: amount,
          });
          setDisableSend(false);
        }, 1500);
      }
    }
  }

  const [continueModal, setContinueModal] = useState(false);

  const [loadingModal, setLoadingModal] = useState(false);

  const [anmt, setanmt] = useState("");
  const [disableSend, setDisableSend] = useState(false);

  const [lottierror, setLottierror] = useState(false);

  const fetchCopiedText = async () => {
    const text = await Clipboard.getString();
    setToPublic(text);
    setBloqueoText(false);
  };

  const ModalContinue = () => {
    setContinueModal(true);
    setanmt("fadeIn");
  };

  const HideModal = () => {
    setTimeout(() => {
      setanmt("fadeOutDown");
      setTimeout(() => {
        setContinueModal(false);
      }, 100);
    }, 2);
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
      start={{ x: 0, y: 0.5 }}
      end={{ x: 0, y: 0.7 }}
    >
      <SafeAreaView style={stylesB.body}>
        <BarStatus />

        {/* Modal Continue */}
        <Modal
          visible={continueModal}
          transparent
          onRequestClose={() => setContinueModal(false)}
          hardwareAccelerated
        >
          <Animatable.View
            animation={anmt}
            style={[
              stylesB.completo,
              stylesL.JustifyAlign,
              stylesM.backgroundOpacity,
            ]}
            duration={600}
          >
            <View
              style={[
                stylesM.modalSend,
                stylesM.backgroundTransparenDark,
                stylesL.JustifyAlign,
                stylesM.radiusFifteen,
                stylesM.radiusThirty,
              ]}
            >
              <View
                style={[
                  stylesM.heightPercentageEight,
                  stylesL.flexColumn,
                  stylesM.widthPercentageHundred,
                ]}
              >
                <View style={[stylesM.heightPercentageTwo]}>
                  <Text
                    style={[
                      stylesM.textColorCian,
                      fontMedium(),
                      stylesM.fontSizeTwentyFour,
                    ]}
                  >
                    Elige tu token
                  </Text>
                </View>
                <View
                  style={[
                    stylesM.heightPercentageEight,
                    stylesL.flexRow,
                    stylesL.flexWrap,
                    stylesL.spaceBetween,
                    stylesM.marginTopTwenty,
                    stylesM.paddingHorizontalEight,
                  ]}
                >
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={[stylesM.marginBottomFifteen]}
                    onPress={() => [
                      HideModal(),
                      setSelectedToken("USDT"),
                      setSelectedMint(
                        "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"
                      ),
                    ]}
                  >
                    <Image
                      source={require("../../assets/img/tether.png")}
                      style={[stylesM.boxImgModal]}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={[stylesM.marginBottomFifteen]}
                    onPress={() => [
                      HideModal(),
                      setSelectedToken("USDC"),
                      setSelectedMint(
                        "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"
                      ),
                    ]}
                  >
                    <Image
                      source={require("../../assets/img/usdc.png")}
                      style={[stylesM.boxImgModal]}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={[stylesM.marginBottomFifteen]}
                    onPress={() => [HideModal(), setSelectedToken("SOL")]}
                  >
                    <Image
                      source={require("../../assets/img/sol.png")}
                      style={[stylesM.boxImgModal]}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={[stylesM.marginBottomFifteen]}
                    onPress={() => [
                      HideModal(),
                      setSelectedToken("ETH"),
                      setSelectedMint(
                        "2FPyTwcZLUg1MDrwsyoP4D6s1tM7hAkHYRjkNb5w6Pxk"
                      ),
                    ]}
                  >
                    <Image
                      source={require("../../assets/img/eth.png")}
                      style={[stylesM.boxImgModal]}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={[
                  stylesM.heightPercentageTwo,
                  stylesM.widthPercentageHundred,
                  stylesL.flexRow,
                  stylesL.JustifyAlign,
                  stylesL.justifyEnd,
                ]}
              >
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => HideModal()}
                >
                  <Text
                    style={[
                      stylesM.textColorLilac,
                      fontLight(),
                      stylesM.fontSizeTwentyTwo,
                    ]}
                  >
                    Cancelar
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Animatable.View>
        </Modal>

        {/* Modal loading */}
        <Modal
          visible={loadingModal}
          transparent
          onRequestClose={() => setLoadingModal(false)}
          hardwareAccelerated
        >
          <View
            style={[
              stylesL.JustifyAlign,
              stylesB.completo,
              stylesM.backgroundShadown,
            ]}
          >
            <BarStatusShadown />
            <Animatable.View animation={anmt}>
              <View style={[stylesL.AlignItems]}>
                <LotieEnviadoModal />
              </View>
            </Animatable.View>
          </View>
        </Modal>

        <Modal
          visible={lottierror}
          transparent
          onRequestClose={() => setLottierror(false)}
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
                  stylesM.marginTopEight,
                ]}
              >
                Por favor ingrese una llave pública
              </Text>
            </Animatable.View>
          </View>
        </Modal>

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

          <View
            style={[
              stylesM.marginTopSixtyEight,
              stylesM.widthTotal,
              stylesL.Justify,
              stylesM.paddingHorizontalTwentyFour,
            ]}
          >
            <Text
              style={[
                stylesM.textColorWhite,
                stylesM.fontSizeTwenty,
                fontBold(),
              ]}
            >
              Enviar
            </Text>
          </View>

          <View
            style={[
              stylesM.widthPercentageHundred,
              stylesM.paddingHorizontalTwentyFour,
              stylesM.marginTopTwenty,
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
              Para empezar, simplemente ingresé la dirección de la billetera de
              criptomoneda, el monto que desea enviar y la criptomoneda que
              desea enviar.
            </Text>
          </View>

          <View
            style={[
              stylesM.boxTotal,
              stylesM.backgroundSnow,
              stylesM.marginTopThirtyThree,
              stylesM.radiusTopTwenty,
              stylesL.FlexOne,
            ]}
          >
            <ScrollView
              contentContainerStyle={{ marginTop: 50, bottom: 50 }}
              horizontal={false}
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
            >
              <View
                style={[
                  stylesM.widthTotal,
                  stylesL.JustifyAlign,
                  stylesM.marginTopFourty,
                ]}
              >
                <Text
                  style={[
                    stylesM.fontSizeSixteen,
                    stylesM.textColorLightSlateBlue,
                    fontMedium(),
                  ]}
                >
                  Cantidad
                </Text>
              </View>

              <View style={[stylesL.JustifyAlign, stylesM.marginTopTen]}>
                <CurrencyInput
                  keyboardType="numeric"
                  autoCapitalize="none"
                  placeholder="0.0"
                  value={amount}
                  delimiter="."
                  separator=","
                  precision={6}
                  placeholderTextColor="#E2E4F5"
                  onChangeValue={(text) => setAmount(text)}
                  style={[
                    { minWidth: RFValue(60) },
                    stylesM.textColorLightSlateBlue80,
                    stylesM.fontSizeFortyEight,
                    fontBold(),
                    stylesM.paddingHorizontalEight,
                  ]}
                  maxLength={9}
                  />
              </View>

              <View style={[stylesL.AlignItems]}>
                {selectedToken == "SOL" && (
                  <Text
                    style={[
                      stylesM.fontSizeSixteen,
                      fontBold(),
                      stylesM.textColorMediumAquamarine,
                    ]}
                  >
                    $ {solBalance}
                  </Text>
                )}
                {selectedToken == "USDT" && (
                  <Text
                    style={[
                      stylesM.fontSizeSixteen,
                      fontBold(),
                      stylesM.textColorMediumAquamarine,
                    ]}
                  >
                    $ {usdtBalance}
                  </Text>
                )}
                {selectedToken == "USDC" && (
                  <Text
                    style={[
                      stylesM.fontSizeSixteen,
                      fontBold(),
                      stylesM.textColorMediumAquamarine,
                    ]}
                  >
                    $ {usdcBalance}
                  </Text>
                )}
                {selectedToken == "ETH" && (
                  <Text
                    style={[
                      stylesM.fontSizeSixteen,
                      fontBold(),
                      stylesM.textColorMediumAquamarine,
                    ]}
                  >
                    $ {ethBalance}
                  </Text>
                )}
              </View>

              <View style={[stylesM.paddingHorizontalThirtyTwo]}>
                <View
                  style={[
                    stylesM.widthTotal,
                    stylesM.inputSendCrypto,
                    stylesL.flexRow,
                    stylesL.AlignItems,
                    stylesM.marginTopThirtyFive,
                  ]}
                >
                  <View style={[stylesM.widthPercentageNinety]}>
                    <TextInput
                      onChangeText={(val) => setToPublic(val)}
                      autoCapitalize="none"
                      placeholder="Ingresar dirección"
                      value={toPublic}
                      placeholderTextColor="#ae9ada"
                      underlineColorAndroid="transparent"
                      style={[
                        stylesM.backgroundTransparent,
                        stylesM.textColorLightSlateBlue80,
                        stylesM.fontSizeSixteen,
                        fontBold(),
                      ]}
                    ></TextInput>
                  </View>

                  <View style={[stylesM.widthPercentageTen]}>
                    <TouchableOpacity
                      activeOpacity={0.5}
                      onPress={() => fetchCopiedText()}
                      style={[
                        stylesL.JustifyAlign,
                        stylesL.alignItemsEnd,
                        stylesM.heighTotal,
                      ]}
                    >
                      <IconPaste name="paste" size={sizeCopy} color="#ae9ada" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <View style={[stylesL.JustifyAlign, stylesM.marginTopTwentyFour]}>
                {selectedToken === `SOL` && (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={[
                      stylesM.boxCoinCrypto,
                      stylesM.widthRectangleCrypto,
                      stylesM.backgroundMidnightBlue,
                      stylesM.radiusSix,
                      stylesL.flexRow,
                      stylesL.JustifyAlign,
                    ]}
                    onPress={() => ModalContinue()}
                  >
                    <View style={[stylesL.Justify]}>
                      <Image
                        source={require(`../../assets/img/sol.png`)}
                        style={[stylesM.boxCoinCrypto_img]}
                      />
                    </View>

                    <View style={[stylesL.Justify]}>
                      <Text
                        style={[
                          stylesM.leftTwelve,
                          stylesM.textColorWhite,
                          fontBold(),
                          stylesM.fontSizeSixteen,
                        ]}
                      >
                        {selectedToken}
                      </Text>
                    </View>

                    <View style={[stylesM.leftTwelve, stylesL.Justify]}>
                      <IconDown
                        name="chevron-down"
                        size={sizeCopy}
                        color="#fff"
                      />
                    </View>
                  </TouchableOpacity>
                )}

                {selectedToken === `USDT` && (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={[
                      stylesM.boxCoinCrypto,
                      stylesM.widthRectangleCrypto,
                      stylesM.backgroundMidnightBlue,
                      stylesM.radiusSix,
                      stylesL.flexRow,
                      stylesL.JustifyAlign,
                    ]}
                    onPress={() => ModalContinue()}
                  >
                    <View style={[stylesL.Justify]}>
                      <Image
                        source={require(`../../assets/img/tether.png`)}
                        style={[stylesM.boxCoinCrypto_img]}
                      />
                    </View>

                    <View style={[stylesL.Justify]}>
                      <Text
                        style={[
                          stylesM.leftTwelve,
                          stylesM.textColorWhite,
                          fontBold(),
                          stylesM.fontSizeSixteen,
                        ]}
                      >
                        {selectedToken}
                      </Text>
                    </View>

                    <View style={[stylesM.leftTwelve, stylesL.Justify]}>
                      <IconDown
                        name="chevron-down"
                        size={sizeCopy}
                        color="#fff"
                      />
                    </View>
                  </TouchableOpacity>
                )}

                {selectedToken === `ETH` && (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={[
                      stylesM.boxCoinCrypto,
                      stylesM.widthRectangleCrypto,
                      stylesM.backgroundMidnightBlue,
                      stylesM.radiusSix,
                      stylesL.flexRow,
                      stylesL.JustifyAlign,
                    ]}
                    onPress={() => ModalContinue()}
                  >
                    <View style={[stylesL.Justify]}>
                      <Image
                        source={require(`../../assets/img/eth.png`)}
                        style={[stylesM.boxCoinCrypto_img]}
                      />
                    </View>

                    <View style={[stylesL.Justify]}>
                      <Text
                        style={[
                          stylesM.leftTwelve,
                          stylesM.textColorWhite,
                          fontBold(),
                          stylesM.fontSizeSixteen,
                        ]}
                      >
                        {selectedToken}
                      </Text>
                    </View>

                    <View style={[stylesM.leftTwelve, stylesL.Justify]}>
                      <IconDown
                        name="chevron-down"
                        size={sizeCopy}
                        color="#fff"
                      />
                    </View>
                  </TouchableOpacity>
                )}

                {selectedToken === `USDC` && (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={[
                      stylesM.boxCoinCrypto,
                      stylesM.widthRectangleCrypto,
                      stylesM.backgroundMidnightBlue,
                      stylesM.radiusSix,
                      stylesL.flexRow,
                      stylesL.JustifyAlign,
                    ]}
                    onPress={() => ModalContinue()}
                  >
                    <View style={[stylesL.Justify]}>
                      <Image
                        source={require(`../../assets/img/usdc.png`)}
                        style={[stylesM.boxCoinCrypto_img]}
                      />
                    </View>

                    <View style={[stylesL.Justify]}>
                      <Text
                        style={[
                          stylesM.leftTwelve,
                          stylesM.textColorWhite,
                          fontBold(),
                          stylesM.fontSizeSixteen,
                        ]}
                      >
                        {selectedToken}
                      </Text>
                    </View>

                    <View style={[stylesM.leftTwelve, stylesL.Justify]}>
                      <IconDown
                        name="chevron-down"
                        size={sizeCopy}
                        color="#fff"
                      />
                    </View>
                  </TouchableOpacity>
                )}
              </View>

              <View style={[stylesL.JustifyAlign, stylesM.marginTopTwentyFour]}>
                {selectedToken == "SOL" && (
                  <TouchableOpacity
                    onPress={() => {
                      [enviarSoles(), setDisableSend(true)];
                    }}
                    disabled={disableSend}
                    activeOpacity={0.8}
                    style={[
                      stylesM.boxSendCrypto,
                      stylesM.radiusSeventeen,
                      stylesL.JustifyAlign,
                      stylesM.backgroundMidnightBlue,
                    ]}
                  >
                    <View style={[]}>
                      <Text
                        style={[
                          stylesM.textColorWhite,
                          fontBold(),
                          stylesM.fontSizeSixteen,
                        ]}
                      >
                        Enviar
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}

                {selectedToken == "USDT" && (
                  <TouchableOpacity
                    onPress={() => {
                      enviarSpl();
                    }}
                    activeOpacity={0.8}
                    style={[
                      stylesM.boxSendCrypto,
                      stylesM.radiusSeventeen,
                      stylesL.JustifyAlign,
                      stylesM.backgroundMidnightBlue,
                    ]}
                  >
                    <View style={[]}>
                      <Text
                        style={[
                          stylesM.textColorWhite,
                          fontBold(),
                          stylesM.fontSizeSixteen,
                        ]}
                      >
                        Enviar
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}

                {selectedToken == "USDC" && (
                  <TouchableOpacity
                    onPress={() => {
                      enviarSpl();
                    }}
                    activeOpacity={0.8}
                    style={[
                      stylesM.boxSendCrypto,
                      stylesM.radiusSeventeen,
                      stylesL.JustifyAlign,
                      stylesM.backgroundMidnightBlue,
                    ]}
                  >
                    <View style={[]}>
                      <Text
                        style={[
                          stylesM.textColorWhite,
                          fontBold(),
                          stylesM.fontSizeSixteen,
                        ]}
                      >
                        Enviar
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}

                {selectedToken == "ETH" && (
                  <TouchableOpacity
                    onPress={() => {
                      enviarSpl();
                    }}
                    activeOpacity={0.8}
                    style={[
                      stylesM.boxSendCrypto,
                      stylesM.radiusSeventeen,
                      stylesL.JustifyAlign,
                      stylesM.backgroundMidnightBlue,
                    ]}
                  >
                    <View style={[]}>
                      <Text
                        style={[
                          stylesM.textColorWhite,
                          fontBold(),
                          stylesM.fontSizeSixteen,
                        ]}
                      >
                        Enviar
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}
              </View>
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SendCrypto;
