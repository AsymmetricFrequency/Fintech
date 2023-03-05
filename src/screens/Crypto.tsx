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
} from "react-native";
import { BarStatus } from "../components/BarStatus";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import IconArrow from "react-native-vector-icons/SimpleLineIcons";

import {
  readPublicKey,
  getBalanceSol,
  getBalanceToken,
  getPrices,
} from "../../controller";

  //Refresh
  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

const Crypto = ({ navigation }: { navigation: any }) => {


  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  async function doIt() {
    const pub = await readPublicKey();
    getBalance(pub);
  }

  const [solBalance, setSolBalance] = useState("0.0");
  const [usdtBalance, setUsdtBalance] = useState("0.0");
  const [usdcBalance, setUsdcBalance] = useState("0.0");
  const [ethBalance, setEthBalance] = useState("0.0");
  const [totalBalance, setTotalBalance] = useState("0.0");

  async function getBalance(publicKey: any) {
    try {
      const solanaBalance = await getBalanceSol(publicKey);
      setSolBalance(solanaBalance.balance);
      
      const balanceUsdt = await getBalanceToken(
        publicKey,
        "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"
      );
      setUsdtBalance(balanceUsdt.balance);

      const balanceUsdc = await getBalanceToken(
        publicKey,
        "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"
      );
      setUsdcBalance(balanceUsdc.balance);

      const balanceEth = await getBalanceToken(
        publicKey,
        "2FPyTwcZLUg1MDrwsyoP4D6s1tM7hAkHYRjkNb5w6Pxk"
      );
      setEthBalance(balanceEth.balance);
      const prices = await getPrices();

      const solAmount = Number(solBalance) * prices.solana;
      
      const ethAmount = Number(ethBalance) * prices.ethereum;
      
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
    doIt()
  })

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
          <View style={[stylesM.marginTopEightyOne, stylesL.Justify]}>
            <Text
              style={[
                stylesM.textColorWhite,
                stylesM.fontSizeSixteen,
                fontLight(),
              ]}
            >
              Cryptomonedas
            </Text>
          </View>
          <View style={[stylesL.JustifyAlign]}>
            <Text
              style={[
                stylesM.textColorWhite,
                stylesM.fontSizeFortyEight,
                fontMedium(),
                stylesM.paddingHorizontalThirty,
                stylesM.marginTopTwelve,
              ]}
            >
              ${totalBalance}
            </Text>
          </View>
          <View
            style={[
              stylesM.boxTotal,
              stylesM.backgroundSnow,
              stylesM.marginTopEightyOne,
              stylesM.radiusTopTwenty,
              stylesL.FlexOne,
            ]}
          >
            <View style={[stylesL.flexRow, stylesM.boxHeightCrypto]}>
              <View
                style={[stylesM.widthPercentageFifty, stylesL.JustifyAlign]}
              >
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={[
                    stylesM.radiusSix,
                    stylesL.flexRow,
                    stylesL.JustifyAlign,
                  ]}
                  onPress={() => navigation.navigate("SendCrypto")}
                >
                  <IconArrow
                    style={{ transform: [{ rotate: "45deg" }] }}
                    name="arrow-up-circle"
                    size={42}
                    color="#32239A"
                  />
                  <View style={[stylesL.Justify]}>
                    <Text
                      style={[
                        stylesM.leftTwelve,
                        stylesM.textColorPurple70,
                        fontMedium(),
                        stylesM.fontSizeSixteen,
                      ]}
                    >
                      Enviar
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View
                style={[stylesM.widthPercentageFifty, stylesL.JustifyAlign]}
              >
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={[
                    stylesM.radiusSix,
                    stylesL.flexRow,
                    stylesL.JustifyAlign,
                  ]}
                  onPress={() => navigation.navigate("ReceiveCrypto")}
                >
                  <IconArrow
                    style={{ transform: [{ rotate: "225deg" }] }}
                    name="arrow-up-circle"
                    size={42}
                    color="#32239A"
                  />
                  <View style={[stylesL.Justify]}>
                    <Text
                      style={[
                        stylesM.leftTwelve,
                        stylesM.textColorPurple70,
                        fontMedium(),
                        stylesM.fontSizeSixteen,
                      ]}
                    >
                      Recibir
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={[stylesM.box_lineTwo]}></View>
            <ScrollView
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
              contentContainerStyle={{ marginTop: 34, bottom: 50 }}
              horizontal={false}
              showsVerticalScrollIndicator={false}
              style={[stylesM.paddingHorizontalFifteen]}
            >
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  stylesM.boxCoin,
                  stylesM.backgroundSnow,
                  stylesM.radiusSix,
                  stylesL.flexRow,
                  stylesM.marginTopSevenTeen,
                ]}
                // onPress={() =>
                //   navigation.navigate("Currency", {
                //     cur: "USDT",
                //     balance: usdtBalance
                //   })
                // }
              >
                <View
                  style={[
                    stylesM.widthPercentageTwenty,
                    stylesL.Justify,
                    stylesL.AlignItems,
                  ]}
                >
                  <Image
                    source={require("../../assets/img/tether.png")}
                    style={[stylesM.boxCoin_img]}
                  />
                </View>
                <View
                  style={[stylesM.widthPercentageFourtyfive, stylesL.Justify]}
                >
                  <Text
                    style={[
                      stylesM.leftTwelve,
                      stylesM.textColorTeal,
                      fontBold(),
                      stylesM.fontSizeSixteen,
                    ]}
                  >
                    USDT
                  </Text>
                </View>
                <View
                  style={[
                    stylesM.widthPercentageThirtyfive,
                    stylesL.JustifyAlign,
                    stylesL.alignItemsEnd,
                  ]}
                >
                  <Text
                    style={[
                      stylesM.textColorTeal,
                      fontBold(),
                      stylesM.fontSizeSixteen,
                      stylesM.paddingHorizontalFifteen,
                    ]}
                  >
                    {usdtBalance}
                  </Text>
                </View>
              </TouchableOpacity>

              <View style={[stylesM.box_line]}></View>

              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  stylesM.boxCoin,
                  stylesM.backgroundSnow,
                  stylesM.radiusSix,
                  stylesL.flexRow,
                ]}
                // onPress={() =>
                //   navigation.navigate("Currency", {
                //     cur: "USDC",
                //     balance: usdcBalance
                //   })
                // }
              >
                <View
                  style={[
                    stylesM.widthPercentageTwenty,
                    stylesL.Justify,
                    stylesL.AlignItems,
                  ]}
                >
                  <Image
                    source={require("../../assets/img/usdc.png")}
                    style={[stylesM.boxCoin_img]}
                  />
                </View>
                <View
                  style={[stylesM.widthPercentageFourtyfive, stylesL.Justify]}
                >
                  <Text
                    style={[
                      stylesM.leftTwelve,
                      stylesM.textColorTeal,
                      fontBold(),
                      stylesM.fontSizeSixteen,
                    ]}
                  >
                    USDC
                  </Text>
                </View>
                <View
                  style={[
                    stylesM.widthPercentageThirtyfive,
                    stylesL.JustifyAlign,
                    stylesL.alignItemsEnd,
                  ]}
                >
                  <Text
                    style={[
                      stylesM.textColorTeal,
                      fontBold(),
                      stylesM.fontSizeSixteen,
                      stylesM.paddingHorizontalFifteen,
                    ]}
                  >
                    {usdcBalance}
                  </Text>
                </View>
              </TouchableOpacity>

              <View style={[stylesM.box_line]}></View>

              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  stylesM.boxCoin,
                  stylesM.backgroundSnow,
                  stylesM.radiusSix,
                  stylesL.flexRow,
                ]}
                // onPress={() =>
                //   navigation.navigate("Currency", {
                //     cur: "SOL",
                //     balance: solBalance
                //   })
                // }
              >
                <View
                  style={[
                    stylesM.widthPercentageTwenty,
                    stylesL.Justify,
                    stylesL.AlignItems,
                  ]}
                >
                  <Image
                    source={require("../../assets/img/sol.png")}
                    style={[stylesM.boxCoin_img]}
                  />
                </View>
                <View
                  style={[stylesM.widthPercentageFourtyfive, stylesL.Justify]}
                >
                  <Text
                    style={[
                      stylesM.leftTwelve,
                      stylesM.textColorTeal,
                      fontBold(),
                      stylesM.fontSizeSixteen,
                    ]}
                  >
                    SOL
                  </Text>
                </View>
                <View
                  style={[
                    stylesM.widthPercentageThirtyfive,
                    stylesL.JustifyAlign,
                    stylesL.alignItemsEnd,
                  ]}
                >
                  <Text
                    style={[
                      stylesM.textColorTeal,
                      fontBold(),
                      stylesM.fontSizeSixteen,
                      stylesM.paddingHorizontalFifteen,
                    ]}
                  >
                    {solBalance}
                  </Text>
                </View>
              </TouchableOpacity>

              <View style={[stylesM.box_line]}></View>

              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  stylesM.boxCoin,
                  stylesM.backgroundSnow,
                  stylesM.radiusSix,
                  stylesL.flexRow,
                ]}
                // onPress={() =>
                //   navigation.navigate("Currency", {
                //     cur: "ETH",
                //     balance: ethBalance
                //   })
                // }
              >
                <View
                  style={[
                    stylesM.widthPercentageTwenty,
                    stylesL.Justify,
                    stylesL.AlignItems,
                  ]}
                >
                  <Image
                    source={require("../../assets/img/eth.png")}
                    style={[stylesM.boxCoin_img]}
                  />
                </View>
                <View
                  style={[stylesM.widthPercentageFourtyfive, stylesL.Justify]}
                >
                  <Text
                    style={[
                      stylesM.leftTwelve,
                      stylesM.textColorTeal,
                      fontBold(),
                      stylesM.fontSizeSixteen,
                    ]}
                  >
                    ETH
                  </Text>
                </View>
                <View
                  style={[
                    stylesM.widthPercentageThirtyfive,
                    stylesL.JustifyAlign,
                    stylesL.alignItemsEnd,
                  ]}
                >
                  <Text
                    style={[
                      stylesM.textColorTeal,
                      fontBold(),
                      stylesM.fontSizeSixteen,
                      stylesM.paddingHorizontalFifteen,
                    ]}
                  >
                    {ethBalance}
                  </Text>
                </View>
              </TouchableOpacity>
              <View style={[stylesM.box_line]}></View>
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Crypto;
