import { StatusBar } from "react-native";
import React from "react";

const BarStatusModal = () => {
  return <StatusBar backgroundColor={"#a490d4"} barStyle={"dark-content"} />;
};

const BarStatusShadown = () => {
  return <StatusBar backgroundColor={"#170541"} barStyle={"dark-content"} />;
};



const BarStatus = () => {
  return <StatusBar backgroundColor={"#3a0ca3"} barStyle={"light-content"} />;
};

export { BarStatus, BarStatusModal,BarStatusShadown };

