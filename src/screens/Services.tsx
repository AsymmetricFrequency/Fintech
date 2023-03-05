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
  ScrollView,
  TouchableOpacity,
  Image,
  Modal,
  Platform,
  RefreshControl
} from "react-native";
import { BarStatus, BarStatusModal } from "../components/BarStatus";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import * as Animatable from "react-native-animatable";
import { readPublicKey, getBalanceCOP } from "../../controller";
import { Notications } from "../components/Notifications";
import * as varGlobal from "../components/GlobalVar";
import BottomSheet, { useBottomSheetSpringConfigs } from "@gorhom/bottom-sheet";
import IconX from "react-native-vector-icons/Feather";

const slide = Platform.OS === "ios" ? "55%" : "60%";

//Refresh
const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const Services = ({ navigation }: { navigation: any }) => {
  const [continueModal, setContinueModal] = useState(false);
  const [logout, setlogout] = useState("");
  const [balance, setBalance] = useState();
  const [publicKey, setPublicKey] = useState("");
  const [refreshing, setRefreshing] = React.useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const sheetNot = useRef<BottomSheet>(null);
  const [countNoti, setCountNoti] = useState(0);
  const [anmt, setanmt] = useState("");

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    setCountNoti(varGlobal.globalNew);
  }, [varGlobal.globalNew]);


  const snaPoints = [slide];

  const handleSnapNot = useCallback((index) => {
    sheetNot.current?.snapToIndex(index);
    setanmt("slideInUp");
    setIsOpen(true);
  }, []);

  const handleCloseNot = useCallback(() => {
    sheetNot.current?.close();
    setIsOpen(false);
    setanmt("slideInDown");
  }, []);

  const animationConfigs = useBottomSheetSpringConfigs({
    damping: 80,
    overshootClamping: false,
    restDisplacementThreshold: 0.1,
    restSpeedThreshold: 0.1,
    stiffness: 40,
  });

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
            onPress={() => [handleCloseNot()]}
          >
            <View
              style={[
                stylesM.marginTopEightyFour,
                stylesL.JustifyAlign,
                stylesM.boxMoney,
                stylesO.boxMoney__services,
              ]}
            >
              <Image
                style={[stylesM.imgCopCoin]}
                source={require("../../assets/img/genesyslogoBlue.webp")}
              />
              <Text
                style={[
                  stylesM.textColorWhite,
                  stylesM.fontSizeSixteen,
                  stylesM.marginTopTen,
                  fontLight(),
                ]}
              >
                COP Disponible
              </Text>

              <View style={[stylesL.JustifyAlign]}>
                <Text
                  style={[
                    stylesM.textColorWhite,
                    stylesM.fontSizeFortyEight,
                    fontBold(),
                    stylesM.paddingHorizontalThirty,
                    stylesM.marginTopTen,
                  ]}
                >
                  ${balance}
                </Text>
                
              </View>
            </View>
          </TouchableOpacity>

          <View
            style={[
              stylesM.widthTotal,
              stylesM.backgroundSnow,
              stylesM.radiusTopEighteen,
              stylesL.FlexOne,
            ]}
          >
            <View style={[stylesM.widthTotal, stylesL.Justify]}>
              <View
                style={[
                  stylesM.marginTopNineTeen,
                  stylesM.marginBottomNineteen,
                ]}
              >
                <Text
                  style={[
                    stylesM.textColorDullpurple,
                    stylesM.fontSizeTwenty,
                    fontBold(),
                    stylesL.textAlignCenter,
                  ]}
                >
                  Servicios
                </Text>
              </View>

              <ScrollView
                contentContainerStyle={[
                  { paddingBottom: 50 },
                  // stylesM.paddingHorizontalFortyFour,
                ]}
                horizontal={false}
                showsVerticalScrollIndicator={false}
                endFillColor="#000"
                overScrollMode="never"
              >
                <View
                  style={[
                    stylesL.flexRow,
                    stylesL.flexWrap,
                    stylesL.spaceBetween,
                    stylesM.paddingHorizontalThirty,
                  ]}
                >
                  <View>
                    <View>
                      <Text
                        style={[
                          stylesM.textColorGray,
                          stylesM.fontSizeTwelve,
                          fontLight(),
                          stylesL.textAlignCenter,
                        ]}
                      >
                        Prestamos
                      </Text>
                    </View>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={[
                        stylesM.buttonServicesService,
                        stylesM.backgroundLavender,
                        stylesM.radiusFifteen,
                        stylesL.JustifyAlign,
                        stylesL.spaceBetween,
                        stylesM.marginTopTen,
                        stylesL.Justify,
                      ]}
                      // onPress={() => navigation.navigate("PayServices")}
                    >
                      <Image
                        style={[stylesM.imgLoan]}
                        source={require("../../assets/img/Creditos.webp")}
                      />
                    </TouchableOpacity>
                  </View>

                  <View>
                    <View>
                      <Text
                        style={[
                          stylesM.textColorGray,
                          stylesM.fontSizeTwelve,
                          fontLight(),
                          stylesL.textAlignCenter,
                        ]}
                      >
                        Pagar Servicios
                      </Text>
                    </View>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={[
                        stylesM.buttonServicesService,
                        stylesM.backgroundLavender,
                        stylesM.radiusFifteen,
                        stylesL.JustifyAlign,
                        stylesL.spaceBetween,
                        stylesM.marginTopTen,
                        stylesL.Justify,
                      ]}
                      onPress={() => navigation.navigate("PayServices")}
                    >
                      <Image
                        style={[stylesM.imgToPay]}
                        source={require("../../assets/img/pagarServicios.webp")}
                      />
                    </TouchableOpacity>
                  </View>

                  <View>
                    <View>
                      <Text
                        style={[
                          stylesM.textColorGray,
                          stylesM.fontSizeTwelve,
                          fontLight(),
                          stylesL.textAlignCenter,
                        ]}
                      >
                        Multipagos
                      </Text>
                    </View>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={[
                        stylesM.buttonServicesService,
                        stylesM.backgroundLavender,
                        stylesM.radiusFifteen,
                        stylesL.JustifyAlign,
                        stylesL.spaceBetween,
                        stylesM.marginTopTen,
                        stylesL.Justify,
                      ]}
                      onPress={() => navigation.navigate("MultiPayments")}
                    >
                      <Image
                        style={[stylesM.imgMultipayments]}
                        source={require("../../assets/img/multiPagos.webp")}
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={[stylesM.paddingHorizontalThirty]}>
                  <ScrollView
                    contentContainerStyle={[stylesM.marginTopFourtyFive]}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    endFillColor="#000"
                    overScrollMode="never"
                  >
                    <LinearGradient
                      style={[
                        stylesM.radiusThirtyFive,
                        stylesM.buttonAdvertising,
                        stylesM.paddingHorizontalTwentyFour,
                        stylesM.paddingVerticalTwentyOne,
                        stylesL.flexRow,
                      ]}
                      colors={["#1FBD8E", "#7962F5"]}
                      start={{ x: 0, y: 1 }}
                      end={{ x: 1, y: 1 }}
                    >
                      <View style={[stylesM.widthPercentageFourty]}>
                        <Image
                          style={[
                            stylesM.buttonAdvertising_img,
                            stylesM.radiusTwentyEight,
                          ]}
                          source={require("../../assets/img/acueducto.webp")}
                        />
                      </View>
                      <View
                        style={[
                          stylesM.widthPercentageSixty,
                          stylesM.paddingLeftThirty,
                          stylesL.Justify,
                        ]}
                      >
                        <Text
                          numberOfLines={4}
                          style={[
                            stylesM.textColorWhite,
                            stylesM.fontSizeSixteen,
                            fontMedium(),
                          ]}
                        >
                          Compra un novedoso paralante Inalambrico
                        </Text>
                      </View>
                    </LinearGradient>

                    <LinearGradient
                      style={[
                        stylesB.linear,
                        stylesM.radiusThirtyFive,
                        stylesM.buttonAdvertising,
                        stylesM.paddingHorizontalTwentyFour,
                        stylesM.paddingVerticalTwentyOne,
                        stylesL.flexRow,
                      ]}
                      colors={["#1FBD8E", "#7962F5"]}
                      start={{ x: 0, y: 1 }}
                      end={{ x: 1, y: 1 }}
                    >
                      <View style={[stylesM.widthPercentageFourty]}>
                        <Image
                          style={[
                            stylesM.buttonAdvertising_img,
                            stylesM.radiusTwentyEight,
                          ]}
                          source={require("../../assets/img/acueducto.webp")}
                        />
                      </View>
                      <View
                        style={[
                          stylesM.widthPercentageSixty,
                          stylesM.paddingLeftThirty,
                          stylesL.Justify,
                        ]}
                      >
                        <Text
                          numberOfLines={4}
                          style={[
                            stylesM.textColorWhite,
                            stylesM.fontSizeSixteen,
                            fontMedium(),
                          ]}
                        >
                          Compra un novedoso paralante Inalambrico
                        </Text>
                      </View>
                    </LinearGradient>
                  </ScrollView>
                </View>
              </ScrollView>
            </View>
          </View>

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

export default Services;
