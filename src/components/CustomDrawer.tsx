import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "./../appTheme/styles/styles";

import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { useFonts } from "expo-font";
import { BarStatusModal } from "../components/BarStatus";
import * as Animatable from "react-native-animatable";


function CustomDrawer({ navigation }: { navigation: any }) {
  const [anmt, setanmt] = useState("");
  const [logout, setlogout] = useState("");

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

  // const [isEnabled, setIsEnabled] = useState(false);
  // const toggleSwitch = () => {
  //   setIsEnabled((previousState) => !previousState);
  //   navigation.navigate("StackNavigator", {
  //     bold: "defi",
  //   })
  // };
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
    <View style={[stylesB.linear]}>
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
                Al cerrar la sesión debes volver a ingresar tus credenciales al
                iniciar la aplicación.
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
                  stylesM.widthPercentageEighty,
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

      <DrawerContentScrollView contentContainerStyle={{ top: 0, left: 30 }}>
        <View>
          <Image
            source={require("./../../assets/img/genesysLogo.webp")}
            style={[stylesM.boxImgDrawer]}
          />
        </View>



        <TouchableOpacity
          activeOpacity={1}
          style={[stylesM.widthTotal, stylesM.boxTitleDrawer, stylesL.Justify]}
        >
          <Text
            style={[
              stylesM.textColorLightBlue,
              fontMedium(),
              stylesM.fontSizeSixteen,
            ]}
          >
            Información Personal
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={1}
          style={[stylesM.widthTotal, stylesM.boxTitleDrawer, stylesL.Justify]}
        >
          <Text
            style={[
              stylesM.textColorLightBlue,
              fontLight(),
              stylesM.fontSizeSixteen,
            ]}
          >
            Seguridad
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.5}
          style={[stylesM.widthTotal, stylesM.boxTitleDrawer, stylesL.Justify]}
          onPress={() => navigation.navigate("Crypto")}
        >
          <Text
            style={[
              stylesM.textColorLightBlue,
              fontLight(),
              stylesM.fontSizeSixteen,
            ]}
          >
            Tus Cryptomonedas
          </Text>
        </TouchableOpacity>



        <TouchableOpacity
          activeOpacity={0.5}
          style={[stylesM.widthTotal, stylesM.boxTitleDrawer, stylesL.Justify]}
          onPress={() => navigation.navigate("Events")}
        >
          <Text
            style={[
              stylesM.textColorLightBlue,
              fontLight(),
              stylesM.fontSizeSixteen,
            ]}
          >
            Eventos
          </Text>
        </TouchableOpacity>
        {Platform.OS === "ios" ? (
          <TouchableOpacity
            activeOpacity={0.5}
            style={[
              stylesM.widthTotal,
              stylesM.boxTitleDrawer,
              stylesL.Justify,
            ]}
            onPress={() => ModalContinue()}
          >
            <Text
              style={[
                stylesM.textColorLightBlue,
                fontLight(),
                stylesM.fontSizeSixteen,
              ]}
            >
              Cerrar Sesión
            </Text>
          </TouchableOpacity>
        ) : (
          <></>
        )}

        {/* swiche enviar mensaje al navegador */}
        {/* <View
          style={[
            stylesM.widthTotal,
            stylesM.boxTitleDrawer,
            stylesM.paddingLeftTitle,
            stylesL.Justify,
            stylesL.flexRow,
          ]}
        >
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => [setIsEnabled(!isEnabled), navigation.navigate("StackNavigator", {
              bold: "defi",
            })]}
            style={[
              Platform.OS === "ios"
                ? stylesM.widthPercentageSeven
                : stylesM.widthPercentageEighty,
              stylesL.Justify,
            ]}
          >
            <Text
              style={[
                stylesM.textColorWhite,
                fontBold(),
                topIos(),
                stylesM.fontSizeTwentyFour,
              ]}
            >
              Fintech
            </Text>
          </TouchableOpacity>

          <View
            style={[
              Platform.OS === "ios"
                ? stylesM.widthPercentageTree
                : stylesM.widthPercentageTwenty,
              stylesL.JustifyAlign,
            ]}
          >
            <Switch
              trackColor={{ false: "#020107", true: "#C4C4C4" }}
              thumbColor={isEnabled ? "#2CF6F6" : "#C4C4C4"}
              ios_backgroundColor="#020107"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View> */}
      </DrawerContentScrollView>
    </View>
  );
}

export default CustomDrawer;
