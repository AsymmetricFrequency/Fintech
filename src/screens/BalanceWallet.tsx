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
  Platform,
  TouchableOpacity,
  Image,
  Modal,
  RefreshControl,
  ScrollView
} from "react-native";
import { BarStatus, BarStatusModal } from "../components/BarStatus";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Notications } from "../components/Notifications";
import * as varGlobal  from "../components/GlobalVar";
import { useFonts } from "expo-font";
import * as Animatable from "react-native-animatable";
import IconX from "react-native-vector-icons/Feather";
import { readPublicKey, getBalanceCOP } from "../../controller";
import BottomSheet, {
  useBottomSheetSpringConfigs,
} from "@gorhom/bottom-sheet";

const slide = Platform.OS === "ios" ? "55%" : "60%";

//Refresh
const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const BalanceWallet = ({ navigation }: { navigation: any }) => {
  const sheetMov = useRef<BottomSheet>(null);
  const [refreshing, setRefreshing] = React.useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const sheetNot = useRef<BottomSheet>(null);
  const [countNoti, setCountNoti] = useState(0)
  const [anmt, setanmt] = useState("");


  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    setCountNoti(varGlobal.globalNew)
    
  }, [varGlobal.globalNew])

  const snaPoints = [slide];

  const handleSnapMov = useCallback((index) => {
    handleCloseNot()
    sheetMov.current?.snapToIndex(index);
    setanmt("slideInUp");
    setIsOpen(true);
  }, []);

  const handleCloseMov = useCallback(() => {
    sheetMov.current?.close();
    setIsOpen(false);
    setanmt("slideInDown");
  }, []);

  const handleSnapNot = useCallback((index) => {
    handleCloseMov()
    sheetNot.current?.snapToIndex(index);
    setanmt("slideInUp");
    setIsOpen(true);

  }, []);

  const handleCloseNot = useCallback(() => {
    sheetNot.current?.close();
    setIsOpen(false);
    setanmt("slideInDown");
    
  }, [])

  const [continueModal, setContinueModal] = useState(false);

  const ModalContinue = () => {
    setContinueModal(true);
    setlogout("slideInUp");
  };

  const HideContinue = () => {
    setlogout("fadeOut");
    setTimeout(() => {
      setTimeout(() => {
        setContinueModal(false);
        navigation.navigate("LogoutScreen");
      }, 100);
    }, 200);
  };

  const HideModal = () => {
    setlogout("fadeOutDownBig");
    setTimeout(() => {
      setTimeout(() => {
        setContinueModal(false);
      }, 100);
    }, 550);
  };

  const animationConfigs = useBottomSheetSpringConfigs({
    damping: 80,
    overshootClamping: false,
    restDisplacementThreshold: 0.1,
    restSpeedThreshold: 0.1,
    stiffness: 40,
  });

  const [logout, setlogout] = useState("");
  const [publicKey, setPublicKey] = useState("");
  const [balance, setBalance] = useState();

  async function getPublicKey() {
    const pub = await readPublicKey();
    console.log("pub ", pub);

    setPublicKey(pub);
    await getBalance(pub);
  }

  useEffect(() => {
    getPublicKey();
  }, []);

  async function getBalance(publicKey: any) {
    getBalanceCOP(publicKey)
      .then((resp) => {
        console.log("balance ", resp.balance);
        setBalance(resp.balance);
      })
      .catch((error) => {
        console.log(error);
      });
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
              stylesM.backgroundGhostWhite,
            ]}
          >
            <BarStatusModal />
            <Animatable.View
              animation={logout}
              duration={600}
              style={[
                stylesM.modalLogout,
                stylesM.backgroundDullPurple,
                stylesL.AlignItems,
                stylesM.radiusTwentyEight,
                stylesL.flexColumn,
              ]}
            >
              <View style={[stylesM.marginTopSixtyEight]}>
                <Text
                  style={[
                    stylesM.textColorWhiteBone,
                    fontMedium(),
                    stylesM.fontSizeTwentyFour,
                  ]}
                >
                  ¿Deseas cerrar sesión?
                </Text>
              </View>
              <View
                style={[
                  stylesM.paddingHorizontalTwentyFour,
                  stylesM.marginTopFifteen,
                ]}
              >
                <Text
                  style={[
                    stylesM.textColorGainsboro,
                    stylesM.fontLineTwenty,
                    stylesM.fontSizeSixteen,
                  ]}
                >
                  Al cerrar la sesión debes volver a ingresar tus credenciales
                  al iniciar la aplicación.
                </Text>
              </View>
              <View
                style={[
                  stylesL.flexRow,
                  stylesL.AlignItems,
                  stylesM.widthPercentageHundred,
                  stylesL.justifyEnd,
                  stylesM.marginTopThirtyEight,
                ]}
              >
                <View
                  style={[
                    stylesL.alignItemsEnd,
                    stylesL.flexRow,
                    stylesL.spaceAround,
                    stylesM.widthPercentageSeventy,
                  ]}
                >
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => HideContinue()}
                  >
                    <Text
                      style={[
                        stylesM.textColorLightpurple,
                        fontMedium(),
                        stylesM.fontSizeSixteen,
                      ]}
                    >
                      Cerrar sesión
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    style={[stylesM.modalLogout_cancel]}
                    onPress={() => HideModal()}
                  >
                    <Text
                      style={[
                        stylesM.textColorLightpurple,
                        fontMedium(),
                        stylesM.fontSizeSixteen,
                      ]}
                    >
                      Cancelar
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Animatable.View>
          </View>
        </Modal>
        <View style={[stylesB.completo, stylesL.positionRelative]}>
          {Platform.OS === "ios" ? (
            <></>
          ) : (
            <TouchableOpacity
              activeOpacity={0.8}
              style={[
                stylesM.marginTopTen,
                stylesL.justifyEnd,
                stylesL.alignItemsEnd,
                stylesL.positionAbsolute,
                stylesM.boxLogout,
              ]}
              onPress={() => ModalContinue()}
            >
              <Image
                style={[stylesM.logOutButton_Img]}
                source={require("../../assets/img/logOut.webp")}
              />
            </TouchableOpacity>
          )}

          <TouchableOpacity
            activeOpacity={0.7}
            style={[stylesM.notificationButton, { zIndex: 999 }]}
            onPress={() => handleSnapNot(0)}
          >
            <Image
              style={[stylesM.notificationButton_Img]}
              source={require("../../assets/img/notificaciones.webp")}
            />

            <Notications num={countNoti >= 6 ? "+5" : countNoti} />
          </TouchableOpacity>

          <TouchableOpacity
            disabled={!isOpen}
            activeOpacity={1}
            style={[stylesM.widthTotal]}
            onPress={() => [handleCloseMov(), handleCloseNot()]}
          >
            <Animatable.View
              animation={anmt}
              style={[
                isOpen ? stylesM.marginTopSeventySeven : stylesM.animationDown,
                stylesL.JustifyAlign,
                stylesM.boxMoney,
              ]}
            >
              <Image
                style={[
                  isOpen
                    ? stylesM.imgGenesysLogoBlue
                    : stylesM.imgGenesysLogoBlueFalse,
                ]}
                source={require("../../assets/img/genesyslogoBlue.webp")}
              />
              <Text
                style={[
                  stylesM.textColorWhite,
                  stylesM.fontSizeSixteen,
                  isOpen ? stylesM.marginTopTen : stylesM.marginTopFifteen,
                  fontLight(),
                ]}
              >
                COP Disponible
              </Text>

              <View style={[stylesL.JustifyAlign]}>
                <Text
                  style={[
                    stylesM.textColorWhite,
                    isOpen ? stylesM.fontSizeFourty : stylesM.fontSizeSixtyFour,
                    fontBold(),
                    stylesM.paddingHorizontalThirty,
                    isOpen ? stylesM.marginTopTen : stylesM.marginTopSevenTeen,
                  ]}
                >
                  ${balance}
                </Text>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={[
                    stylesM.buttonMovements,
                    isOpen ? stylesM.marginTopTen : stylesM.marginTopNineTeen,
                    stylesM.backgroundBlueLight,
                    stylesM.radiusTwenty,
                    stylesL.JustifyAlign,
                  ]}
                  onPress={() => handleSnapMov(0)}
                >
                  <Text
                    style={[
                      stylesM.textColorWhite,
                      stylesM.fontSizeFourteen,
                      fontMedium(),
                    ]}
                  >
                    Movimiento$
                  </Text>
                </TouchableOpacity>
              </View>
            </Animatable.View>
          </TouchableOpacity>

          <BottomSheet
            ref={sheetMov}
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
                stylesM.boxWhite,
                stylesM.widthTotal,
                stylesL.alignItemsEnd,
                stylesM.marginTopNegativeEight,
              ]}
            >
              <View>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => handleCloseMov()}
                  style={[stylesM.widthPercentageFifteen]}
                >
                  <IconX name="x" size={40} color="#9C9C9C" />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={[
                stylesM.widthPercentageHundred,
                stylesL.AlignItems,
                stylesM.boxWhite,
                stylesM.marginTopTwelve,
                stylesM.marginBottomFourty,
              ]}
            >
              <Text
                style={[
                  stylesM.textColorDullpurple,
                  stylesM.fontSizeTwentyFour,
                  fontBold(),
                ]}
              >
                Movimiento$
              </Text>
            </View>
            <ScrollView
              contentContainerStyle={[{ paddingHorizontal: 60 }]}
              showsVerticalScrollIndicator={false}
            >
              <View style={[stylesM.widthTotal, stylesM.marginBottomTwenty]}>
                <View
                  style={[
                    stylesL.flexRow,
                    stylesL.flexWrap,
                    stylesL.spaceBetween,
                  ]}
                >
                  <View>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={[
                        stylesM.buttonServicesBalance,
                        stylesM.backgroundWhite,
                        stylesM.radiusSixteen,
                        stylesL.JustifyAlign,
                        stylesL.spaceBetween,
                      ]}
                      onPress={() => navigation.navigate("SendMoney")}
                    >
                      <View>
                        <Text
                          style={[
                            stylesM.textColorDarkGray,
                            stylesM.fontSizeTwelve,
                            fontMedium(),
                            stylesL.textAlignCenter,
                          ]}
                        >
                          Enviar Dinero
                        </Text>
                      </View>
                      <Image
                        style={[stylesM.buttonServicesBalance_img]}
                        source={require("../../assets/img/enviarDinero.webp")}
                      />
                    </TouchableOpacity>
                  </View>

                  <View>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={[
                        stylesM.buttonServicesBalance,
                        stylesM.backgroundWhite,
                        stylesM.radiusSixteen,
                        stylesL.JustifyAlign,
                        stylesL.spaceBetween,
                      ]}
                    >
                      <View>
                        <Text
                          style={[
                            stylesM.textColorDarkGray,
                            stylesM.fontSizeTwelve,
                            fontMedium(),
                            stylesL.textAlignCenter,
                          ]}
                        >
                          Sacar Dinero
                        </Text>
                      </View>
                      <Image
                        style={[stylesM.imgLogoWithdraw]}
                        source={require("../../assets/img/transaction-1.webp")}
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                <View
                  style={[
                    stylesL.flexRow,
                    stylesL.flexWrap,
                    stylesL.spaceBetween,
                    stylesM.marginTopFourty,
                  ]}
                >
                  <View>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={[
                        stylesM.buttonServicesBalance,
                        stylesM.backgroundWhite,
                        stylesM.radiusSixteen,
                        stylesL.JustifyAlign,
                        stylesL.spaceBetween,
                      ]}
                      onPress={() => navigation.navigate("ReceiveMoney")}
                    >
                      <View>
                        <Text
                          style={[
                            stylesM.textColorDarkGray,
                            stylesM.fontSizeTwelve,
                            fontMedium(),
                            stylesL.textAlignCenter,
                          ]}
                        >
                          Recibir Dinero
                        </Text>
                      </View>
                      <Image
                        style={[stylesM.buttonServicesBalance_img]}
                        source={require("../../assets/img/leerQR.webp")}
                      />
                    </TouchableOpacity>
                  </View>

                  <View>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={[
                        stylesM.buttonServicesBalance,
                        stylesM.backgroundWhite,
                        stylesM.radiusSixteen,
                        stylesL.JustifyAlign,
                        stylesL.spaceBetween,
                        stylesO.buttonServicesBalance__bottom,
                      ]}
                      onPress={() => navigation.navigate("QrReader")}
                    >
                      <View>
                        <Text
                          style={[
                            stylesM.textColorDarkGray,
                            stylesM.fontSizeTwelve,
                            fontMedium(),
                            stylesL.textAlignCenter,
                          ]}
                        >
                          Leer QR
                        </Text>
                      </View>
                      <Image
                        style={[stylesM.imgLogoQR]}
                        source={require("../../assets/img/Scan-QR-2.webp")}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </ScrollView>
          </BottomSheet>

          <BottomSheet
            ref={sheetNot}
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
              <View
                style={[stylesM.widthPercentageEightyFive, stylesL.Justify]}
              >
                <Text
                  style={[
                    stylesM.textColorDullpurple,
                    stylesM.fontSizeSixteen,
                    fontBold(),
                  ]}
                >
                  Notificaciones
                </Text>
              </View>

              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => handleCloseNot()}
                style={[stylesM.widthPercentageFifteen, stylesL.alignItemsEnd]}
              >
                <IconX name="x" size={40} color="#9C9C9C" />
              </TouchableOpacity>
            </View>

            <ScrollView
              contentContainerStyle={[
                { paddingBottom: 30 },
                stylesM.boxWhiteqr,
              ]}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
              horizontal={false}
              showsVerticalScrollIndicator={false}
              endFillColor="#000"
              overScrollMode="never"
            >
              <View
                style={[
                  stylesM.widthTotal,
                  stylesM.boxNoti,
                  stylesM.backgroundLavender,
                  stylesM.radiusFifteen,
                  stylesM.paddingVerticalFifteen,
                  stylesL.flexRow,
                ]}
              >
                <View
                  style={[stylesM.widthPercentageTwenty, stylesL.JustifyAlign]}
                >
                  <Image
                    style={[
                      stylesM.iconCam,
                    ]}
                    source={require("../../assets/img/notificaciones.webp")}
                  />
                </View>

                <View style={[stylesM.widthPercentageEighty, stylesL.Justify]}>
                  <Text
                    style={[
                      stylesM.textColorDarkGray,
                      stylesM.fontSizeSixteen,
                      fontLight(),
                    ]}
                  >
                    ¡Bienvenido a tu billetera fintech! ¡Ahora puedes
                    administrar tus finanzas digitales desde la comodidad de tu
                    hogar!
                  </Text>
                </View>
              </View>

              <View
                style={[
                  stylesM.widthTotal,
                  stylesM.boxNoti,
                  stylesM.backgroundLavender,
                  stylesM.radiusFifteen,
                  stylesM.paddingVerticalFifteen,
                  stylesL.flexRow,
                ]}
              >
                <View
                  style={[stylesM.widthPercentageTwenty, stylesL.JustifyAlign]}
                >
                  <Image
                    style={[
                      stylesM.iconCam,
                    ]}
                    source={require("../../assets/img/notificaciones.webp")}
                  />
                </View>

                <View style={[stylesM.widthPercentageEighty, stylesL.Justify]}>
                  <Text
                    style={[
                      stylesM.textColorDarkGray,
                      stylesM.fontSizeSixteen,
                      fontLight(),
                    ]}
                  >
                    ¡Aprovecha los beneficios de la billetera fintech con el
                    nuevo crédito instantáneo!
                  </Text>
                </View>
              </View>

              <View
                style={[
                  stylesM.widthTotal,
                  stylesM.boxNoti,
                  stylesM.backgroundLavender,
                  stylesM.radiusFifteen,
                  stylesM.paddingVerticalFifteen,
                  stylesL.flexRow,
                ]}
              >
                <View
                  style={[stylesM.widthPercentageTwenty, stylesL.JustifyAlign]}
                >
                  <Image
                    style={[
                      stylesM.iconCam,
                    ]}
                    source={require("../../assets/img/notificaciones.webp")}
                  />
                </View>

                <View style={[stylesM.widthPercentageEighty, stylesL.Justify]}>
                  <Text
                    style={[
                      stylesM.textColorDarkGray,
                      stylesM.fontSizeSixteen,
                      fontLight(),
                    ]}
                  >
                    ¡Recarga tu billetera fintech ahora con tarjetas de crédito,
                    débito y otros métodos de pago en línea!
                  </Text>
                </View>
              </View>

              <View
                style={[
                  stylesM.widthTotal,
                  stylesM.boxNoti,
                  stylesM.backgroundLavender,
                  stylesM.radiusFifteen,
                  stylesM.paddingVerticalFifteen,
                  stylesL.flexRow,
                ]}
              >
                <View
                  style={[stylesM.widthPercentageTwenty, stylesL.JustifyAlign]}
                >
                  <Image
                    style={[
                      stylesM.iconCam,
                    ]}
                    source={require("../../assets/img/notificaciones.webp")}
                  />
                </View>

                <View style={[stylesM.widthPercentageEighty, stylesL.Justify]}>
                  <Text
                    style={[
                      stylesM.textColorDarkGray,
                      stylesM.fontSizeSixteen,
                      fontLight(),
                    ]}
                  >
                    ¡Recarga tu billetera fintech ahora con tarjetas de crédito,
                    débito y otros métodos de pago en línea!
                  </Text>
                </View>
              </View>
            </ScrollView>
          </BottomSheet>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default BalanceWallet;
