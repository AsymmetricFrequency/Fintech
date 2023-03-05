import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "./../appTheme/styles/styles";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";


const Lotierror = () => {
  return (
    <LottieView
      style={stylesM.lottie}
      speed={1}
      source={require("../../assets/lottie/failSign.json")}
      autoPlay
    />
  );
};

const Lotiexito = () => {
  return (
    <LottieView
      style={stylesM.lottiexito}
      source={require("../../assets/lottie/sucess.json")}
      autoPlay
      loop={false}
    />
  );
};

const LotiSuccesSign = () => {
  return (
    <LottieView
      style={stylesM.lottieSuccesSign}
      source={require("../../assets/lottie/succesSign.json")}
      autoPlay
      loop={false}
    />
  );
};

const LotiFailSign = () => {
  return (
    <LottieView
      style={stylesM.lottieFailSign}
      source={require("../../assets/lottie/failSign.json")}
      autoPlay
      loop={false}
      speed={1.4}
    />
  );
};

const LotierrorQr = () => {
  return (
    <LottieView
      style={stylesM.lottieqr}
      speed={1.8}
      source={require("../../assets/lottie/error.json")}
      autoPlay
    />
  );
};

const Lotieqr = () => {
  return (
    <LottieView
      style={stylesM.lottieqr}
      source={require("../../assets/lottie/qrscan2.json")}
      speed={1}
      autoPlay
      // loop={false}
    />
  );
};

const LotieReceiveQr = () => {
  return (
    <LottieView
      style={[stylesM.lottieReceiveQr]}
      speed={1.5}
      source={require("../../assets/lottie/createQR2.json")}
      autoPlay
    />
  );
};

const Lotiesplash = () => {
  return (
    <LottieView
      style={stylesM.lottiesplash}
      source={require("../../assets/lottie/spashcndr.json")}
      autoPlay
      // loop={false}
    />
  );
};

const Lotiecopy = () => {
  return (
    <LottieView
      style={stylesM.lottiecopy}
      source={require("../../assets/lottie/copy.json")}
      speed={2.5}
      autoPlay
      loop={true}
    />
  );
};

const Lotiecarga = () => {
  return (
    <LottieView
      style={stylesM.lottiecarga}
      source={require("../../assets/lottie/LoadScreen.json")}
      autoPlay
      speed={1.1}
    />
  );
};


const LotieLogout = () => {
  return (
    <LottieView
      style={stylesM.lottieLogout}
      source={require("../../assets/lottie/logout.json")}
      autoPlay
      speed={1.2}
    />
  );
};

const LotiecargaDark = () => {
  return (
    <LottieView
      style={stylesM.lottiecarga}
      source={require("../../assets/lottie/pantallacargaDark.json")}
      autoPlay
      speed={1.1}
    />
  );
};

const Lotiefallido = () => {
  return (
    <LottieView
      style={stylesM.lottiefallido}
      source={require("../../assets/lottie/tranfallida.json")}
      autoPlay
      loop={false}
      speed={0.6}
    />
  );
};

const Lotiesucces = () => {
  return (
    <LottieView
      style={stylesM.lottiesucces}
      source={require("../../assets/lottie/tranexitosa.json")}
      autoPlay={true}
      loop={false}
    />
  );
};

const LotiesuccesDark = () => {
  return (
    <LottieView
      style={stylesM.lottiesucces}
      source={require("../../assets/lottie/sucess.json")}
      autoPlay={true}
      loop={false}
    />
  );
};

const LotieCerrarSesion = () => {
  return (
    <LottieView
      style={stylesM.lottiecerrars}
      source={require("../../assets/lottie/cerrarsesion.json")}
      autoPlay={true}
      loop={true}
      speed={1}
    />
  );
};

const LotieEnviado = () => {
  return (
    <LottieView
      style={stylesM.lottiecerrars}
      source={require("../../assets/lottie/enviando.json")}
      autoPlay={true}
      loop={true}
    />
  );
};

const LotieInternet = () => {
  return (
    <LottieView
      style={stylesM.lottieinternet}
      source={require("../../assets/lottie/sininternet.json")}
      autoPlay={true}
      loop={true}
      speed={0.5}
    />
  );
};

const LotieSuccesTran = () => {
  return (
    <LottieView
      style={[stylesM.lottietran]}
      source={require("../../assets/lottie/successfully.json")}
      autoPlay={true}
      loop={false}
      speed={1.5}
    />
  );
};


const LotieDeclinedTran = () => {
  return (
    <LottieView
      style={stylesM.lottietran}
      source={require("../../assets/lottie/declined.json")}
      autoPlay={true}
      loop={false}
      speed={1.5}
    />
  );
};

const LotierrorModal = () => {
  return (
    <LottieView
      style={stylesM.lottiesucces}
      source={require("../../assets/lottie/error.json")}
      autoPlay={true}
      loop={false}
      speed={0.8}

    />
  );
};

const LotieEnviadoModal = () => {
  return (
    <LottieView
      style={stylesM.lottiecerrars}
      source={require("../../assets/lottie/enviando.json")}
      autoPlay={true}
      loop={true}
    />
  );
};


const LotieHistory = () => {
  return (
    <LottieView
      style={stylesM.lottieHistory}
      speed={1}
      source={require("../../assets/lottie/history.json")}
      autoPlay
    />
  );
};


export {
  Lotierror,
  Lotiexito,
  Lotieqr,
  Lotiesplash,
  Lotiecopy,
  Lotiecarga,
  LotiecargaDark,
  Lotiefallido,
  Lotiesucces,
  LotiesuccesDark,
  LotieCerrarSesion,
  LotieEnviado,
  LotieInternet,
  LotierrorQr,
  LotieSuccesTran,
  LotieDeclinedTran,
  LotiSuccesSign,
  LotiFailSign,
  LotieReceiveQr,
  LotieLogout,
  LotierrorModal,
  LotieEnviadoModal,
  LotieHistory
};