import {
    StyleSheet,

} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const stylesO = StyleSheet.create({
  completo__flexGrow: {
    flexGrow: 1,
    flex: 0,
  },

  boxGradientLinear__heightMedium: {
    height: RFValue(44),
    marginTop: RFValue(32),
  },

  boxGradientLinear__size: {
    width: RFValue(239),
    height: RFValue(237.5),
  },

  boxBottomQr_txt__width:{
    width:RFValue(120)
  },

  boxMoney__services:{
    marginBottom: RFValue(28)
  },

  buttonVerification__width: {
    minWidth: RFValue(170),
    height: RFValue(32),
    marginTop: RFValue(49),
  },

  buttonServicesBalance__bottom:{
    paddingBottom: RFValue(18) 
  },

  boxHistory__height: {
    width: "100%",
    height: RFValue(150),
  },

  boxGradientLinear__heightInfo: {
    height: RFValue(44),
    marginTop: RFValue(15),
  },


});
