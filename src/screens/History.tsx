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
  Image,
  TouchableOpacity,
  Modal,
  Platform,
  FlatList,
  RefreshControl,
} from "react-native";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { readPublicKey, getBalanceCOP, historyTransactions, readPhone } from "../../controller";
import { BarStatus, BarStatusModal } from "../components/BarStatus";
import * as Animatable from "react-native-animatable";
import TransacitonHistory from "../components/TransactionHistory";
import IconR from "react-native-vector-icons/Entypo";
import IconS from "react-native-vector-icons/Ionicons";
import { LotieHistory } from "../components/Lottie";


import { Searchbar } from 'react-native-paper';
//Refresh
const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const History = ({ navigation }: { navigation: any }) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [balance, setBalance] = useState();
  const [publicKey, setPublicKey] = useState("");
  const [continueModal, setContinueModal] = useState(false);
  const [logout, setlogout] = useState("");
  const [transactions, setTransactions] = useState([])
  const [emptyTransactions, setEmptyTransactions] = useState(true)




  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);


  async function getPublicKey() {
    const pub = await readPublicKey();
    console.log("pub ", pub);

    setPublicKey(pub);
    await getBalance(pub);
  }

  async function getTransactions() {
    const phone = await readPhone()
    const tran = await historyTransactions(phone)
    setTransactions(tran)
  }

  console.log("transacciones",transactions);
  
  useEffect(() => {
    getTransactions();
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

          <View style={[stylesM.boxTitle, stylesL.Justify]}>
            <Text
              style={[
                stylesM.textColorWhite,
                stylesM.fontSizeSixteen,
                fontMedium(),
              ]}
            >
              Historial
            </Text>
          </View>
          <View
            style={[
              stylesM.boxTotal,
              stylesM.backgroundSnow,
              stylesM.marginTopTwenty,
              stylesM.radiusTopEighteen,
              stylesL.FlexOne,
              stylesM.paddingHorizontalTwenty,
            ]}
          >
            <View style={[stylesM.marginTopTwentyFour]}>
              <Searchbar
                placeholder="Consulta aquí tus movimientos"
                onChangeText={onChangeSearch}
                value={searchQuery}
                placeholderTextColor={"rgba(156, 156, 156, 0.49)"}
                iconColor={"rgba(47, 45, 150, 0.09)"}
                keyboardType={"numeric"}
                style={[stylesM.searchBarBottom]}
              />

              {emptyTransactions ? (
                <>
                  <Text
                    style={[
                      stylesM.fontSizeSixteen,
                      stylesM.textColorDarkGray,
                      fontMedium(),
                    ]}
                  >
                    No hay ningún movimiento de dinero en esta lista.
                  </Text>
                  <View
                    style={[
                      stylesL.JustifyAlign,
                      stylesM.heightPercentageEighty,
                    ]}
                  >
                    <LotieHistory />
                  </View>
                </>
              ) : (
                <>
                  <View>
                    <Text
                      style={[
                        stylesM.fontSizeTen,
                        fontMedium(),
                        stylesM.textColorDarkGray,
                        stylesL.textAlignCenter,
                      ]}
                    >
                      Enero / 5 / 2023
                    </Text>
                    <View style={[stylesM.boxReceive]}>
                      <View
                        style={[
                          stylesM.widthTotal,
                          stylesM.boxHistory,
                          stylesM.backgroundLightCyan,
                          stylesM.radiusThirteen,
                          stylesM.paddingHorizontalTwenty,
                          stylesM.paddingVerticalFifteen,
                          stylesM.marginTopSeven,
                          stylesL.flexRow,
                        ]}
                      >
                        <View style={[stylesM.widthPercentageTen]}>
                          <Image
                            style={[stylesM.boxReceive_img]}
                            source={require("../../assets/img/receiveBox.webp")}
                          />
                        </View>
                        <View
                          style={[
                            stylesM.widthPercentageFourty,
                            stylesL.Justify,
                            stylesM.leftTwelve,
                          ]}
                        >
                          <Text
                            style={[
                              stylesM.fontSizeFourteen,
                              fontBold(),
                              stylesM.textColorBlackOpacity,
                            ]}
                          >
                            De
                          </Text>
                          <Text
                            style={[
                              stylesM.fontSizeFourteen,
                              fontLight(),
                              stylesM.textColorBlackOpacity,
                            ]}
                          >
                            3245692571
                          </Text>
                        </View>
                        <View
                          style={[
                            stylesM.widthPercentageFifty,
                            stylesL.Justify,
                            stylesL.alignItemsEnd,
                          ]}
                        >
                          <Text
                            style={[
                              stylesM.fontSizeTwenty,
                              fontBold(),
                              stylesM.textColorBlackOpacity,
                            ]}
                          >
                            $50.000
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View>
                    <Text
                      style={[
                        stylesM.fontSizeTen,
                        fontMedium(),
                        stylesM.textColorDarkGray,
                        stylesL.textAlignCenter,
                      ]}
                    >
                      Enero / 8 / 2023
                    </Text>
                    <View style={[stylesM.boxSend]}>
                      <View
                        style={[
                          stylesM.widthTotal,
                          stylesM.boxHistory,
                          stylesM.backgroundLightLavender,
                          stylesM.radiusThirteen,
                          stylesM.paddingHorizontalTwenty,
                          stylesM.paddingVerticalFifteen,
                          stylesM.marginTopSeven,
                          stylesL.flexRow,
                        ]}
                      >
                        <View
                          style={[
                            stylesM.widthPercentageFifty,
                            stylesL.Justify,
                            stylesL.alignItemsStart,
                          ]}
                        >
                          <Text
                            style={[
                              stylesM.fontSizeTwenty,
                              fontBold(),
                              stylesM.textColorBlackOpacity,
                            ]}
                          >
                            $10.000
                          </Text>
                        </View>

                        <View
                          style={[
                            stylesM.widthPercentageFourty,
                            stylesL.Justify,
                            stylesL.alignItemsEnd,
                          ]}
                        >
                          <Text
                            style={[
                              stylesM.fontSizeFourteen,
                              fontBold(),
                              stylesM.textColorBlackOpacity,
                            ]}
                          >
                            Envió a
                          </Text>
                          <Text
                            style={[
                              stylesM.fontSizeFourteen,
                              fontLight(),
                              stylesM.textColorBlackOpacity,
                            ]}
                          >
                            3153332120
                          </Text>
                        </View>

                        <View
                          style={[
                            stylesM.widthPercentageTen,
                            stylesL.alignItemsEnd,
                          ]}
                        >
                          <Image
                            style={[stylesM.boxSend_img]}
                            source={require("../../assets/img/sendBox.webp")}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                </>
              )}
            </View>
            {/* <FlatList
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
              data={transactions}
              renderItem={({ item }) => {
                return <TransacitonHistory trans={item} />;
              }}
              keyExtractor={(item, index) => index.toString()}
            ></FlatList> */}
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default History;
