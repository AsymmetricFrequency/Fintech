import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "../appTheme/styles/styles";
import { View, SafeAreaView, Image } from "react-native";
import {BarStatus} from "../components/BarStatus";
import React from "react";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";

const Splash = ({ navigation }: { navigation: any }) => {
  function navegar() {
    navigation.replace("Login");
  }

  setTimeout(() => {
    navegar();
  }, 2500);
  return (
    <LinearGradient
      style={stylesB.linear}
      colors={["#3A0CA3", "#0f9172"]}
      start={{ x: 0, y: 0.01 }}
      end={{ x: 0, y: 0.7 }}
    >
      <SafeAreaView style={[stylesB.body]}>
        <BarStatus />
        <View style={stylesB.completo}>
          <Animatable.View
            animation="pulse"
            easing="ease-out"
            iterationCount="infinite"
          >
            <Image
              style={stylesM.completo__logoGenesys}
              source={require("../../assets/img/genesysLogo.webp")}
            />
          </Animatable.View>
          <Image
            style={stylesM.completo__lettersVortex}
            source={require("../../assets/img/vortexName.png")}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Splash;
