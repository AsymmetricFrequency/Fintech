import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "../appTheme/styles/styles";
import {
  View,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { LotieLogout } from "../components/Lottie";
import {BarStatus} from "../components/BarStatus";
import { useEffect } from "react";
import React, { BackHandler } from 'react-native';
import { savePhone, savePrivateKey, savePublicKey } from "../../controller";

const LogoutScreen = ({ navigation, route }: { navigation: any; route: any }) => {

  useEffect(()=> {
    BackHandler.exitApp();
    setTimeout(()=>{ 
      navigation.navigate("Login") 
    },1300)
  },[])
  return (
    <LinearGradient
      style={stylesB.linear}
      colors={["#3A0CA3", "#0f9172"]}
      start={{ x: 0, y: 0.01 }}
      end={{ x: 0, y: 0.7 }}
    >
      <SafeAreaView style={stylesB.body}>
        <BarStatus/>
        <View style={[stylesB.completo]}>
          <View style={[stylesL.JustifyAlign, stylesB.linear]}>
            <LotieLogout />
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default LogoutScreen;