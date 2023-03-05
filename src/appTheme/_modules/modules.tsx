import { StyleSheet, Platform, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const copyIos = Platform.OS === "ios" ? "23%" : "30%";
const keyIos = Platform.OS === "ios" ? "77%" : "70%";

const modalIos = Platform.OS === "ios" ? 0.3 : 0.27;
const modalIosSend = Platform.OS === "ios" ? 0.33 : 0.3;
const alturaios = Platform.OS === "ios" ? "11%" : "2%";

const boxWhiteIos = Platform.OS === "ios" ? 80 : 69;

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;

export const stylesM = StyleSheet.create({
  // =====================================================================
  // Global Variables
  // =====================================================================

  //-----> text color

  textColorGray: {
    color: "#8E8E8E",
  },

  textColorDarkLavander: {
    color: "#BEC0D7",
  },

  textColorLightSlateBlue80: {
    color: "rgba(58, 12, 163, 0.8)",
  },

  textColorPurple70: {
    color: "rgba(50, 34, 154, 0.7)",
  },

  textColorBlack: {
    color: "black",
  },

  textColorBlackOpacity: {
    color: "rgba(0, 0, 0, 0.52)",
  },

  textColorWhiteBone: {
    color: "#E6E1E5",
  },

  textColorLightGainsboro: {
    color: "#D2CFCF",
  },

  textColorLightGray: {
    color: "#7D7C7F",
  },

  textColorWhite: {
    color: "#FFFFFF",
  },

  textColorRebeccaPurple: {
    color: "#5B298A",
  },

  textColortWhiteOpacity: {
    color: "rgba(255, 255, 255, 0.68)",
  },

  textColortWhiteGray: {
    color: "#E4F2F5",
  },

  textColorLightSlateBlue: {
    color: "#6750a4",
  },

  textColorLightBlue: {
    color: "#394c9e",
  },

  textColorMidnightBlue: {
    color: "#170E50",
  },

  textColorDullpurple: {
    color: "#A29FC6",
  },

  textColorDarkPurple: {
    color: "#1D0356",
  },

  textColorDarkPurpleOpc: {
    color: "#2A2475",
  },

  textColorLightpurple: {
    color: "#D0BCFF",
  },

  textColorDarkGray: {
    color: "#9C9C9C",
  },

  textColorLavender: {
    color: "#c9c7df",
  },

  textColorLigthCoral: {
    color: "#EC6D75",
  },

  textColorGainsboro: {
    color: "#CAC4D0",
  },

  textColorRed: {
    color: "red",
  },

  textColorRosyBrown: {
    color: "#C0AEAE",
  },

  textShadow: {
    textShadowColor: "black",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 20,
  },

  //-----> background color

  backgroundTransparent: {
    backgroundColor: "transparent",
  },

  backgroundLightCyan: {
    backgroundColor: "#ecf9fa",
  },

  backgroundLavender: {
    backgroundColor: "#E2E4F5",
  },

  backgroundLightLavender: {
    backgroundColor: "#f0effc",
  },

  backgroundOceanBlue: {
    backgroundColor: "#008EB5",
  },

  backgroundSnow: {
    backgroundColor: "#FBF9FF",
  },

  backgroundShadown: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },

  backgroundFloralWhite: {
    backgroundColor: "#FFFBFE",
  },

  backgroundGhostWhite: {
    backgroundColor: "rgba(255, 255, 255, 0.54)",
  },

  backgroundWhite: {
    backgroundColor: "#FFF",
  },

  backgroundGray: {
    backgroundColor: "#7e7d80",
  },

  backgroundLightSlateBlue: {
    backgroundColor: "#3A0CA3",
  },

  backgroundMidnightBlueLight: {
    backgroundColor: "#230965",
  },

  backgroundBlueLight: {
    backgroundColor: "rgba(33, 150, 243, 1)",
  },

  backgroundMidnightBlue: {
    backgroundColor: "#170E50",
  },

  backgroundMidnightDisable: {
    backgroundColor: "rgba(22, 14, 78, 0.82)",
  },

  backgroundMediumPurple: {
    backgroundColor: "#7770BC",
  },

  backgroundPurple: {
    backgroundColor: "rgba(34, 9, 90, 1)",
  },

  backgroundDullPurple: {
    backgroundColor: "#351d6c",
  },

  backgroundLightPurple: {
    backgroundColor: "#351d6c",
  },

  backgroundRed: {
    backgroundColor: "red",
  },

  backgroundOpacityBlack: {
    backgroundColor: "rgba(0, 0, 4, 0.9)",
  },

  backgroundPurpleIndigo: {
    backgroundColor: "rgba(91, 41, 137, 1)",
  },

  //-----> fontsize

  fontSizeTen: {
    fontSize: RFValue(9),
  },

  fontSizeEleven: {
    fontSize: RFValue(10),
  },

  fontSizeTwelve: {
    fontSize: RFValue(11),
  },

  fontSizeFourteen: {
    fontSize: RFValue(13),
  },

  fontSizeFifteen: {
    fontSize: RFValue(14),
  },

  fontSizeSixteen: {
    fontSize: RFValue(15),
  },

  fontSizeTwenty: {
    fontSize: RFValue(17),
  },

  fontSizeTwentyFour: {
    fontSize: RFValue(20),
  },

  fontSizeTwentyEight: {
    fontSize: RFValue(23),
  },

  fontSizeThirty: {
    fontSize: RFValue(25),
  },

  fontSizeFourty: {
    fontSize: RFValue(37),
  },

  fontSizeFortyEight: {
    fontSize: RFValue(40),
  },

  fontSizeSixtyFour: {
    fontSize: RFValue(53.5),
  },

  fontLineTwenty: {
    lineHeight: RFValue(18.5),
  },

  //-----> margin

  marginTopNegativeEight: {
    marginTop: RFValue(-7),
  },

  marginTopTwo: {
    marginTop: RFValue(2),
  },

  marginTopSeven: {
    marginTop: RFValue(6),
  },

  marginTopEight: {
    marginTop: RFValue(7),
  },

  marginTopTen: {
    marginTop: RFValue(9),
  },

  marginTopTwelve: {
    marginTop: RFValue(10),
  },

  marginTopThirteen: {
    marginTop: RFValue(12),
  },

  marginTopFifteen: {
    marginTop: RFValue(14),
  },

  marginTopSevenTeen: {
    marginTop: RFValue(15.5),
  },

  marginTopTwenty: {
    marginTop: RFValue(17),
  },

  marginTopNineTeen: {
    marginTop: RFValue(18),
  },

  marginTopTwentyTwo: {
    marginTop: RFValue(20),
  },

  marginTopTwentyFour: {
    marginTop: RFValue(22),
  },

  marginTopTwentyFive: {
    marginTop: RFValue(23),
  },

  marginTopTwentySeven: {
    marginTop: RFValue(25),
  },

  marginTopTwentyNine: {
    marginTop: RFValue(27),
  },

  marginTopThirtyOne: {
    marginTop: RFValue(26),
  },

  marginTopThirtyThree: {
    marginTop: RFValue(28),
  },

  marginTopThirtyFive: {
    marginTop: RFValue(30),
  },

  marginTopThirtyEight: {
    marginTop: RFValue(33),
  },

  marginTopFourty: {
    marginTop: RFValue(36.5),
  },

  marginTopFourtyThree: {
    marginTop: RFValue(39),
  },

  marginTopFourtyFive: {
    marginTop: RFValue(41),
  },

  marginTopFourtyNine: {
    marginTop: RFValue(45),
  },

  marginTopFiftyOne: {
    marginTop: RFValue(47),
  },

  marginTopFiftyFive: {
    marginTop: RFValue(50.5),
  },

  marginTopFiftyThree: {
    marginTop: RFValue(44),
  },

  marginTopFiftyEight: {
    marginTop: RFValue(48),
  },

  marginTopFiftyNine: {
    marginTop: RFValue(49),
  },

  marginTopSixtyEight: {
    marginTop: RFValue(54),
  },

  marginTopSixty: {
    marginTop: RFValue(55),
  },

  marginTopSixtytwo: {
    marginTop: RFValue(57),
  },

  marginTopSeventy: {
    marginTop: RFValue(65),
  },

  marginTopSeventySeven: {
    marginTop: RFValue(64),
  },

  marginTopEightyOne: {
    marginTop: RFValue(68),
  },

  marginTopEightyFour: {
    marginTop: RFValue(78),
  },

  marginTopNinety: {
    marginTop: RFValue(79),
  },

  marginBottomTwenty: {
    marginBottom: RFValue(17),
  },

  marginBottomFourty: {
    marginBottom: RFValue(33.5),
  },

  marginTopOneHundredTwentyThree: {
    marginTop: RFValue(113.5),
  },

  marginBottomNineteen: {
    marginBottom: RFValue(16),
  },

  marginBottomTwentyEight: {
    marginBottom: RFValue(25.5),
  },

  marginVerticalTwentyOne: {
    marginVertical: RFValue(17.5),
  },

  //-----> no margin

  //-----> width

  boxTotal: {
    width: "100%",
    height: "100%",
  },

  widthPercentageTen: {
    width: "10%",
  },

  widthPercentageFifteen: {
    width: "15%",
  },

  widthPercentageTwenty: {
    width: "20%",
  },

  widthPercentageTwentyFive: {
    width: "25%",
  },

  widthPercentageThirty: {
    width: "30%",
  },

  widthPercentageThirtyfive: {
    width: "35%",
  },

  widthPercentageFourty: {
    width: "40%",
  },

  widthPercentageFourtyfive: {
    width: "45%",
  },

  widthPercentageFifty: {
    width: "50%",
  },

  widthPercentageSixty: {
    width: "60%",
  },

  widthPercentageSeventy: {
    width: "70%",
  },

  widthPercentageSeventyFive: {
    width: "75%",
  },

  widthPercentageEighty: {
    width: "80%",
  },

  widthPercentageEightyFive: {
    width: "85%",
  },

  widthPercentageNinety: {
    width: "90%",
  },

  widthTotal: {
    width: "100%",
  },

  //-----> height

  heightPercentageEighty: {
    height: "80%",
  },

  heighTotal: {
    height: "100%",
  },

  //-----> radius

  radiusTwo: {
    borderRadius: 2,
  },

  radiusFive: {
    borderRadius: 5,
  },

  radiusTen: {
    borderRadius: 10,
  },

  radiusThirteen: {
    borderRadius: 13,
  },

  radiusFifteen: {
    borderRadius: 15,
  },

  radiusEighteen: {
    borderRadius: 18,
  },

  radiusTwenty: {
    borderRadius: 20,
  },

  radiusTwentyFive: {
    borderRadius: 25,
  },

  radiusTwentySix: {
    borderRadius: 26,
  },

  radiusTwentyEight: {
    borderRadius: 28,
  },

  radiusThirty: {
    borderRadius: 30,
  },

  radiusThirtyFive: {
    borderRadius: 35,
  },

  radiusOneHundred: {
    borderRadius: 100,
  },

  radiusTopThirtyFive: {
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },

  radiusTopTwentyEight: {
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
  },

  radiusTopEighteen: {
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },

  radiusTopTwenty: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  //-----> padding

  paddingHorizontalSeven: {
    paddingHorizontal: 7,
  },

  paddingHorizontalTen: {
    paddingHorizontal: RFValue(9),
  },

  paddingHorizontalTwenty: {
    paddingHorizontal: RFValue(19),
  },

  paddingHorizontalTwentyOne: {
    paddingHorizontal: RFValue(20),
  },

  paddingHorizontalThirty: {
    paddingHorizontal: RFValue(29),
  },

  paddingHorizontalThirtyTwo: {
    paddingHorizontal: RFValue(31),
  },

  paddingHorizontalFortyOne: {
    paddingHorizontal: RFValue(40),
  },

  paddingHorizontalFortyFour: {
    paddingHorizontal: RFValue(36),
  },

  paddingHorizontalFiftySix: {
    paddingHorizontal: RFValue(50.5),
  },

  paddingHorizontalSixtyFive: {
    paddingHorizontal: RFValue(54),
  },

  paddingHorizontalSixtySix: {
    paddingHorizontal: RFValue(60),
  },

  paddingHorizontalSeventyNine: {
    paddingHorizontal: RFValue(73),
  },

  paddingHorizontalEightyTwo: {
    paddingHorizontal: RFValue(boxWhiteIos),
  },

  paddingVerticalTwentyOne: {
    paddingVertical: RFValue(17.5),
  },

  paddingHorizontalTwentyFour: {
    paddingHorizontal: RFValue(20),
  },

  paddingHorizontalFortySix: {
    paddingHorizontal: RFValue(38.5),
  },

  paddingHorizontalFortyEight: {
    paddingHorizontal: RFValue(40),
  },

  paddingHorizontalFiftyTwo: {
    paddingHorizontal: RFValue(43.5),
  },

  paddingHorizontalNinety: {
    paddingHorizontal: RFValue(75),
  },

  paddingHorizontalHundredTwo: {
    paddingHorizontal: windowWidth * 0.245,
  },

  paddingVerticalFifteen: {
    paddingVertical: RFValue(12.5),
  },

  paddingLeftThirty: {
    paddingLeft: RFValue(25),
  },

  // =====================================================================
  // End Global Variables
  // =====================================================================

  //Lottie

  lottie: {
    width: RFValue(41.7),
    height: RFValue(41.7),
  },

  lottiexito: {
    width: 60,
    height: 60,
  },

  lottieqr: {
    width: 380,
    height: 380,
  },

  lottieReceiveQr: {
    width: RFValue(280),
    height: RFValue(280),
  },

  lottieSuccesSign: {
    width: RFValue(350),
    height: RFValue(350),
  },

  lottieFailSign: {
    width: RFValue(200),
    height: RFValue(200),
  },

  lottieHistory: {
    width: RFValue(300),
    height: RFValue(300),
  },

  lottiesplash: {
    width: RFValue(336),
    height: RFValue(289),
  },

  lottiecopy: {
    width: 53,
    height: 53,
  },

  lottiecarga: {
    width: 220,
    height: 220,
  },

  lottieLogout: {
    width: RFValue(100),
    height: RFValue(100),
  },

  lottiefallido: {
    width: RFValue(213.8),
    height: RFValue(213.8),
  },

  lottiesucces: {
    width: RFValue(136.9),
    height: RFValue(136.9),
  },

  lottietran: {
    width: RFValue(180),
    height: RFValue(180),
  },

  lottiecerrars: {
    width: RFValue(230),
    height: RFValue(230),
  },

  lottieinternet: {
    width: RFValue(334),
    height: RFValue(334),
  },

  //End Lottie

  //balance wallet

  boxMoney: {
    marginBottom: RFValue(82),
  },

  buttonServicesBalance: {
    width: RFValue(94),
    height: RFValue(94),
    paddingTop: RFValue(8),
    paddingBottom: RFValue(12),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },

  buttonServicesBalance_img: {
    width: RFValue(54),
    height: RFValue(54),
    resizeMode: "contain",
  },

  boxWhite: {
    paddingLeft: RFValue(36),
    paddingRight: RFValue(22.5),
  },

  boxWhiteqr: {
    paddingLeft: RFValue(19),
    paddingRight: RFValue(22.5),
  },

  animationDown: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    marginTop: RFValue(-50),
  },

  imgGenesysLogoBlue: {
    height: RFValue(56),
    width: RFValue(56),
    resizeMode: "contain",
  },

  imgGenesysLogoBlueFalse: {
    height: RFValue(152),
    width: RFValue(152),
    resizeMode: "contain",
  },

  buttonMovements: {
    height: RFValue(33.5),
    width: RFValue(147.5),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },

  imgLogoWithdraw: {
    height: RFValue(46),
    width: RFValue(46),
    resizeMode: "contain",
  },

  imgLogoQR: {
    width: RFValue(42),
    height: RFValue(42),
    resizeMode: "contain",
  },

  boxLogout: {
    top: 0,
    right: RFValue(20),
    zIndex: 999,
  },

  //end balance wallet

  //Services

  imgCopCoin: {
    height: 86,
    width: 86,
    resizeMode: "contain",
  },

  buttonServicesService: {
    width: RFValue(81),
    minHeight: RFValue(81),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
  },

  buttonServicesService_img: {
    width: RFValue(35),
    height: RFValue(35),
    resizeMode: "contain",
  },

  boxTitleBottom: {
    width: RFValue(56),
  },

  buttonAdvertising: {
    width: RFValue(256.5),
    height: RFValue(136),
    marginRight: RFValue(17),
  },

  buttonAdvertising_img: {
    width: RFValue(97),
    height: RFValue(97),
    resizeMode: "contain",
  },

  imgLoan: {
    width: RFValue(44),
    height: RFValue(44),
    resizeMode: "contain",
  },

  imgMultipayments: {
    width: RFValue(44),
    height: RFValue(44),
    resizeMode: "contain",
  },

  imgToPay: {
    width: RFValue(44),
    height: RFValue(44),
    resizeMode: "contain",
  },

  //end services

  // CustomDrawer

  boxImgDrawer: {
    width: RFValue(44),
    height: RFValue(44),
    resizeMode: "contain",
    marginTop: RFValue(19),
    marginBottom: RFValue(26.5),
  },

  boxTitleDrawer: {
    height: RFValue(32),
  },

  // End CustomDrawer

  //Payservices

  boxTitle: {
    marginTop: RFValue(46),
  },

  boxServices: {
    width: RFValue(215),
    height: RFValue(72),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    position: "absolute",
    top: RFValue(73),
    zIndex: 1,
    paddingHorizontal: RFValue(17),
    paddingVertical: RFValue(11.5),
  },

  boxServices_btnType: {
    width: RFValue(49),
    height: RFValue(50),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },

  boxServices_btnType_img: {
    width: RFValue(32),
    height: RFValue(32),
    resizeMode: "contain",
  },

  boxTitleServices: {
    marginTop: RFValue(78),
    marginBottom: RFValue(6),
  },

  buttonServices: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 25,
  },

  buttonServices_img: {
    width: RFValue(92),
    height: RFValue(92),
    resizeMode: "contain",
  },

  //end Payservices

  //Consultservice

  boxInputTextService: {
    height: RFValue(32),
    paddingVertical: RFValue(4),
    borderBottomWidth: 1,
  },

  buttonConsultService: {
    height: RFValue(22.5),
    width: RFValue(118),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginTop: RFValue(22.5),
    marginBottom: RFValue(20),
  },

  buttonPayService: {
    height: RFValue(22.5),
    width: RFValue(69),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginTop: RFValue(17),
  },

  //end Consultservice

  //SavePay

  boxImgSavePay: {
    height: RFValue(96),
    width: RFValue(96),
  },

  boxImgSavePay_Img: {
    height: RFValue(58.5),
    width: RFValue(58.5),
  },

  buttonMySavings: {
    height: RFValue(36),
    width: RFValue(127),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginTop: RFValue(30.5),
  },

  buttonSaveMoney: {
    width: RFValue(120.5),
    height: RFValue(120.5),
  },

  //end SavePay

  //CurrentSavings

  imgCurrentSavings: {
    height: RFValue(66.5),
    width: RFValue(66.5),
  },

  buttonMoney: {
    height: RFValue(25),
    width: RFValue(99),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginTop: RFValue(15.5),
  },

  //end CurrentSavings

  //LogOut Button

  logOutButton_Img: {
    height: RFValue(23),
    width: RFValue(23),
    resizeMode: "contain",
  },

  //End LogOut Button

  //notification button

  notificationButton: {
    position: "absolute",
    right: RFValue(33),
    top: RFValue(45),
  },

  notificationButton_Img: {
    height: RFValue(26),
    width: RFValue(26),
    resizeMode: "contain",
  },

  iconCam: {
    width: RFValue(33),
    height: RFValue(35),
    resizeMode: "contain",
  },

  boxNoti: {
    minHeight: RFValue(84.5),
    marginBottom: RFValue(15),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },

  //end notification button

  //History

  boxHistory: {
    minHeight: RFValue(57),
    marginBottom: RFValue(32),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },

  searchBarBottom: {
    marginBottom: RFValue(25),
  },

  boxReceive: {
    marginRight: RFValue(14),
  },

  boxReceive_img: {
    width: RFValue(19),
    height: RFValue(19),
    resizeMode: "contain",
  },

  boxSend: {
    marginLeft: RFValue(14),
  },

  boxSend_img: {
    width: RFValue(17),
    height: RFValue(17),
    resizeMode: "contain",
  },
  //end history

  //Login

  boxImgLogin: {
    width: RFValue(117),
    height: RFValue(117),
    resizeMode: "contain",
    marginTop: RFValue(99),
  },

  boxTextGenesys: {
    width: RFValue(123),
    height: RFValue(23),
    resizeMode: "contain",
  },

  boxNumberCountry: {
    borderRightColor: "#1ee3cf",
    borderRightWidth: 1,
  },

  boxNumberLogin: {
    paddingLeft: RFValue(4),
  },

  buttonGetInto: {
    width: RFValue(200),
    height: RFValue(34),
  },

  inputCompleteSign_img: {
    width: RFValue(18),
    height: RFValue(18),
    resizeMode: "contain",
  },

  boxTextModal: {
    marginTop: RFValue(-10),
    width: RFValue(190),
  },

  modalCenterLogin: {
    minHeight: RFValue(320),
    width: RFValue(260),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },

  boxTextFail: {
    marginBottom: RFValue(33),
    minHeight: RFValue(24),
  },
  //end Login

  //Register

  boxTextGenesysRegister: {
    width: RFValue(136),
    height: RFValue(25),
    marginTop: RFValue(61),
    resizeMode: "contain",
  },

  boxInputTextRegister: {
    height: RFValue(35),
    paddingHorizontal: RFValue(14),
    borderBottomColor: "#8E8E8E",
    borderBottomWidth: 1,
  },

  buttonRegister: {
    width: RFValue(224.5),
    height: RFValue(32),
    marginTop: RFValue(63),
    marginBottom: RFValue(33),
  },

  //end Register

  //Forgot Password

  boxInputTextForgotPass: {
    height: RFValue(42),
    borderBottomColor: "#8E8E8E",
    borderBottomWidth: 1,
  },

  boxImgForgotPassword: {
    width: RFValue(89),
    height: RFValue(89),
    marginTop: RFValue(62.5),
    resizeMode: "contain",
  },

  buttonSendCode: {
    width: RFValue(182),
    height: RFValue(33.5),
    marginTop: RFValue(39),
  },

  //End Forgot Password

  //Send Code

  boxImgSendCode: {
    height: RFValue(99),
    width: RFValue(99),
    marginTop: RFValue(62.5),
  },

  boxInputTextSendCode: {
    height: RFValue(63.5),
    paddingHorizontal: RFValue(14),
    borderBottomColor: "#8E8E8E",
    borderBottomWidth: 1,
  },

  buttonVerificate: {
    height: RFValue(37),
    width: RFValue(220.5),
    borderRadius: 17,
    marginTop: RFValue(40.5),
  },

  //End Send Code

  //Change Password

  boxInputTextChangePass: {
    height: RFValue(43),
    paddingHorizontal: RFValue(14),
    borderBottomColor: "#8E8E8E",
    borderBottomWidth: 1,
  },

  buttonChangePass: {
    height: RFValue(37),
    width: RFValue(220.5),
    borderRadius: 17,
    marginTop: RFValue(40.5),
  },

  //End Change Password

  //Affiliates

  boxTitleAffiliates: {
    marginTop: RFValue(34),
    marginBottom: RFValue(28),
  },

  buttonsAffiliates: {
    width: RFValue(180.5),
    height: RFValue(180.5),
    paddingTop: RFValue(22),
    paddingBottom: RFValue(41),
    marginBottom: RFValue(21),
  },

  buttonsAffiliates_img: {
    height: RFValue(75.5),
    width: RFValue(75.5),
    resizeMode: "contain",
  },

  //End Affiliates

  // QrBtn

  buttonImage: {
    width: RFValue(49),
    height: RFValue(49),
    resizeMode: "contain",
    marginBottom: RFValue(40),
  },

  // End QrBtn

  // MultiPayments

  boxTitleMultipayments: {
    marginTop: RFValue(28),
    marginBottom: RFValue(20),
  },

  buttonsMultipayments: {
    width: RFValue(108),
    height: RFValue(132),
    paddingTop: RFValue(10),
    paddingBottom: RFValue(24),
  },

  buttonsMultipayments_img: {
    height: RFValue(79),
    width: RFValue(79),
    resizeMode: "contain",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },

  boxMultipayments: {
    height: RFValue(226),
    marginTop: RFValue(24),
    marginBottom: 5,
  },

  buttonFavourites_img: {
    width: RFValue(55),
    height: RFValue(55),
    resizeMode: "contain",
  },

  // End MultiPayments

  // MobileOperators

  buttonOperators_img: {
    width: RFValue(56),
    height: RFValue(56),
    resizeMode: "contain",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 3,
  },

  buttonAdvertisingOperators: {
    width: RFValue(303),
    height: RFValue(195),
    marginRight: RFValue(17),
  },

  buttonAdvertisingOperators_img: {
    width: RFValue(130),
    height: RFValue(130),
    resizeMode: "contain",
  },

  // End Mobile Operators

  // Operators Plans

  btnPlans: {
    width: RFValue(70),
    height: RFValue(70),
    resizeMode: "contain",
    paddingVertical: RFValue(10.5),
    paddingHorizontal: RFValue(7),

  },

  buttonPlans_img: {
    width: RFValue(21),
    height: RFValue(21),
    resizeMode: "contain",
  },

  // End Operators Plans

  // SelectPackageRecharge

  btnPackage: {
    width: RFValue(128),
    height: RFValue(135),
    resizeMode: "contain",
    paddingVertical: RFValue(16),
    paddingHorizontal: RFValue(10),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.6,
    shadowRadius: 3,
    elevation:5
  },

  buttonPackage_img: {
    width: RFValue(32),
    height: RFValue(32),
    resizeMode: "contain",
  },

  // End SelectPackageRecharge

  // RechargeCellInfo

  btnInfoPackage: {
    width: "100%",
    height: RFValue(136),
    resizeMode: "contain",
    paddingVertical: RFValue(16),
    paddingHorizontal: RFValue(10),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.6,
    shadowRadius: 3,
    elevation:5
  },

  buttonRechargeInfo: {
    height: RFValue(27),
    width: RFValue(156),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginTop: RFValue(18.5),
    marginBottom: RFValue(16),
  },

  // End RechargeCellInfo

  // RechargeCell

  RechargeCell_img: {
    width: RFValue(68.5),
    height: RFValue(68.5),
    resizeMode: "contain",
  },

  boxInputRechargeCell: {
    height: RFValue(32),
    paddingVertical: RFValue(4),
    borderBottomWidth: 1,
    borderBottomColor: "#8E8E8E",
  },

  buttonRechargeCell: {
    height: RFValue(22.5),
    width: RFValue(118),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginTop: RFValue(18.5),
    marginBottom: RFValue(16),
  },

  buttonPayRecharge: {
    height: RFValue(22.5),
    width: RFValue(97.5),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginTop: RFValue(31),
  },

  // End RechargeCell

  // Buy Pins

  buttonPins_img: {
    width: RFValue(86),
    height: RFValue(86),
    resizeMode: "contain",

  },


  // End Pins

  // SelectPins

  btnPackagePins: {
    width: RFValue(148),
    height: RFValue(158),
    resizeMode: "contain",
    paddingVertical: RFValue(11.5),
    paddingHorizontal: RFValue(10.5),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.6,
    shadowRadius: 3,
    elevation:5
  },

  // End SelectPins

  // CompleteSign

  datePicker: {
    justifyContent: "center",
    alignItems: "flex-start",
    width: 320,
    height: 260,
    display: "flex",
  },

  inputCompleteSign: {
    height: RFValue(35),
    borderBottomColor: "#8E8E8E",
    borderBottomWidth: 1,
  },

  boxInputTextComplete: {
    height: RFValue(36),
    borderBottomColor: "#8E8E8E",
    borderBottomWidth: 1,
  },

  inputDate: {
    height: RFValue(35),
    borderBottomColor: "#8E8E8E",
    borderBottomWidth: 1,
  },

  // End CompleteSign

  // Sign

  boxLottieSign: {
    marginTop: RFValue(-65),
  },

  textSign: {
    marginTop: RFValue(-55),
    width: RFValue(180),
    marginBottom: RFValue(35),
  },

  boxLottieFailSign: {
    marginTop: RFValue(15),
  },

  textFailSign: {
    marginTop: RFValue(15),
    width: RFValue(180),
    marginBottom: RFValue(35),
  },

  buttonVerification: {
    width: RFValue(127.5),
    height: RFValue(32),
    marginTop: RFValue(49),
  },

  buttonContinueSign: {
    width: RFValue(204),
    height: RFValue(29),
  },

  boxCount: {
    height: RFValue(25),
  },

  bottomNegative: {
    bottom: RFValue(-26),
  },

  // End Sign

  // Send Money

  imgCopSendMoney: {
    width: RFValue(92),
    height: RFValue(92),
    resizeMode: "contain",
  },

  buttonSendMoney: {
    width: RFValue(191.5),
    height: RFValue(34),
    marginTop: RFValue(35),
    marginBottom: RFValue(28),
  },

  inputSendMoney: {
    borderBottomColor: "#E2E4F5",
    borderBottomWidth: 1,
  },

  boxInputPhone: {
    height: RFValue(36),
    borderBottomWidth: 1,
  },

  boxInputMsj: {
    minHeight: RFValue(60),
    borderBottomWidth: 1,
  },

  // End Send Money

  // Receive Money

  buttonGenerateQR: {
    height: RFValue(38),
    width: RFValue(190.5),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },

  boxSlideQr: {
    position: "relative",
    height: "100%",
  },

  boxSlideQr_margen: {
    resizeMode: "contain",
    width: RFValue(255),
    height: RFValue(255),
  },

  buttonSendQR: {
    minWidth: RFValue(110),
    height: RFValue(34),
    marginTop: RFValue(35),
    marginBottom: RFValue(28),
  },

  // End Receive Money

  // Voucher Screen

  Voucher_img: {
    width: RFValue(80),
    height: RFValue(80),
    resizeMode: "contain",
    zIndex: 1,
  },

  buttonDownloadVoucher: {
    height: RFValue(30),
    minWidth: RFValue(115),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 8,
  },

  buttonFinishVoucher: {
    height: RFValue(30),
    minWidth: RFValue(132),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },

  iconDownload: {
    marginLeft: RFValue(3),
  },

  // End Voucher Screen

  // Voucher Operators

  VoucherOperator_img: {
    width: RFValue(37),
    height: RFValue(37),
    resizeMode: "contain",
    marginTop: RFValue(-41),
    marginRight: RFValue(-71),
    zIndex: 1,
  },

  //End Voucher Operators

  //EnterPassword

  boxfourCircle: {
    marginBottom: RFValue(20),
  },

  circlePass: {
    width: RFValue(53),
    height: RFValue(53.5),
    borderColor: "#00FFAB",
    borderWidth: 4,
  },

  boxScrollPass: {
    width: RFValue(350),
  },

  circleNumber: {
    width: RFValue(62),
    height: RFValue(63.5),
    borderColor: "rgba(0, 255, 171, 0.51)",
    borderWidth: 4,
  },

  boxImgPass: {
    width: RFValue(84),
    height: RFValue(84),
    resizeMode: "contain",
    marginTop: RFValue(46),
  },

  boxTextPass: {
    width: RFValue(88),
    height: RFValue(17),
    resizeMode: "contain",
    marginTop: RFValue(12),
  },

  boxTitlePass: {
    marginTop: RFValue(28),
  },

  buttonPass: {
    width: RFValue(189),
    height: RFValue(34),
  },

  boxButtonForgot: {
    height: RFValue(30),
  },

  //End Enter Password

  // Crypto

  boxCoin: {
    height: RFValue(50),
    marginBottom: RFValue(3),
  },

  boxCoin_img: {
    width: RFValue(50),
    height: RFValue(50),
    resizeMode: "contain",
  },

  box_line: {
    height: RFValue(1),
    backgroundColor: "#E2E4F5",
    marginBottom: RFValue(14),
  },

  box_lineTwo: {
    height: RFValue(2),
    backgroundColor: "#E2E4F5",
    marginBottom: RFValue(5),
  },

  boxHeightCrypto: {
    height: RFValue(65),
  },

  //End Crypto

  // Events

  boxEvents_titleTxt: {
    marginBottom: RFValue(3),
    marginLeft: RFValue(6),
  },

  boxSearch: {
    height: RFValue(29),
  },

  boxEvents_text: {
    position: "absolute",
    right: RFValue(10),
    bottom: RFValue(8),
    textShadowColor: "black",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    paddingHorizontal: RFValue(10),
    paddingVertical: RFValue(2),
  },

  boxEvents_img: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  boxNtf_textName: {
    textShadowColor: "black",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },

  // End events

  // Send Crypto

  inputSendCrypto: {
    height: RFValue(35),
    borderBottomColor: "rgba(58, 12, 163, 0.24);",
    borderBottomWidth: 1,
  },

  boxCoinCrypto: {
    height: RFValue(51),
    marginBottom: RFValue(3),
  },

  boxCoinCrypto_img: {
    width: RFValue(28),
    height: RFValue(28),
    resizeMode: "contain",
  },

  boxSendCrypto: {
    height: RFValue(35),
    width: RFValue(192),
    marginBottom:RFValue(45)
  },

  widthRectangleCrypto: {
    width: RFValue(322),
  },

  marginTopThirty: {
    marginTop: RFValue(33),
  },

  heightPercentageTwo: {
    height: "20%",
  },

  boxTxt_total: {
    marginLeft: RFValue(16),
  },

  heightPercentageSix: {
    height: "60%",
  },

  fontSizeSeventyFive: {
    fontSize: RFValue(85),
  },

  textColorMediumAquamarine: {
    color: "#50af95",
  },

  boxMedium: {
    marginBottom: RFValue(22),
  },

  paddingLeft: {
    paddingLeft: RFValue(12),
  },

  textLight: {
    fontWeight: "normal",
  },

  copyButton: {
    width: RFValue(21.8),
    height: RFValue(21.8),
  },

  boxBottomTab: {
    position: "absolute",
    bottom: RFValue(10),
  },

  backgroundOpacity: {
    backgroundColor: "rgba(0, 0, 0, 0.70)",
  },

  modalSend: {
    height: windowHeight * modalIosSend,
    padding: RFValue(20),
    width: windowWidth * 0.8,
  },

  backgroundTransparenDark: {
    backgroundColor: "#1C1B1F",
  },

  marginBottomFifteen: {
    marginBottom: RFValue(15),
  },

  boxImgModal: {
    width: RFValue(58),
    height: RFValue(58),
    resizeMode: "contain",
  },

  textColorLilac: {
    color: "#D0BCFF",
  },

  // End Send Crypto

  //QrReader

  // --Style iOS--

  containeruno: {
    height: windowHeight,
    paddingTop: RFValue(35),
    paddingHorizontal: RFValue(15),
    width: windowWidth,
  },

  tituloqr: {
    position: "absolute",
    padding: RFValue(20),
    top: RFValue(60),
  },

  barcodebox: {
    borderWidth: 5,
    borderColor: "rgba(255, 255, 255, 0.45)",
    height: windowHeight * 0.5,
    width: windowWidth * 0.9,
  },

  cajavolver: {
    bottom: RFValue(90),
    position: "absolute",
  },

  btnvolver: {
    elevation: 10,
    paddingHorizontal: RFValue(50),
    paddingVertical: RFValue(15),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },

  // --end Style iOS--

  // --Modal--

  ventanafull: {
    height: windowHeight * 0.15,
    width: windowWidth * 0.95,
  },

  texticonfull: {
    top: RFValue(-140),
  },

  icontextfull: {
    top: RFValue(-150),
  },

  notificacionfull: {
    top: RFValue(-80),
  },

  copiadotxt: {
    top: RFValue(-70),
  },

  copiadotxtAndroid: {
    top: RFValue(-30),
    textDecorationLine: "line-through",
  },

  dcVC: {
    padding: RFValue(15),
    top: RFValue(-50),
  },

  dcV: {
    width: RFValue(143),
  },

  dcC: {
    width: RFValue(143),
  },

  btnVC: {
    elevation: 10,
    marginHorizontal: RFValue(15),
    paddingVertical: RFValue(12),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },

  // --Style Android--

  cajaqra: {
    height: windowHeight,
    width: windowWidth,
  },

  dcVCa: {
    padding: RFValue(15),
  },

  // --Camara--

  btnv: {
    elevation: 10,
    paddingHorizontal: RFValue(50),
    paddingVertical: RFValue(15),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },

  // --End Camara--

  box_titleQr: {
    padding: RFValue(20),
    top: RFValue(-40),
  },

  boxScanQr: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.4,
    borderWidth: 5,
    borderColor: "rgba(255, 255, 255, 0.45)",
  },

  textKey: {
    paddingHorizontal: RFValue(12),
    top: RFValue(-50),
  },

  boxBottomQr: {
    padding: RFValue(12),
  },

  boxBottomQr_txt: {
    height: RFValue(42),
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },

  bold: {
    fontWeight: "bold",
  },

  //End QrReader

  //ChatBot

  boxChat: {
    paddingVertical: RFValue(20),
    paddingHorizontal: RFValue(14),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: RFValue(10),
  },

  boxChat_send: {
    width: RFValue(55),
  },

  //End ChatBot

  // =====================================================================
  // UNITY VARIABLES
  // =====================================================================

  textColorCian: {
    color: "#1ee3cf",
  },

  textColorWhiteCian: {
    color: "#9dece4",
  },

  textColorTeal: {
    color: "#18737D",
  },

  textColorSnow: {
    color: "#FBF9FF",
  },

  textColorPurple: {
    color: "#5a35b7",
  },

  textBold: {
    fontWeight: "bold",
  },

  fontSizeTwentyTwo: {
    fontSize: RFValue(18),
  },

  fontSizeThirtyTwo: {
    fontSize: RFValue(27),
  },

  fontSizeThirtyFive: {
    fontSize: RFValue(29),
  },

  fontSizeTwentySeven: {
    fontSize: RFValue(23),
  },

  fontLineThirty: {
    lineHeight: 30,
  },

  backgroundBlack: {
    backgroundColor: "black",
  },

  backgrounLightAliceBlue: {
    backgroundColor: "#D9E2FF",
  },

  backgroundtWhiteSmoke: {
    backgroundColor: "#F4F5FE",
  },

  backgroundGreen: {
    backgroundColor: "#0AA06E",
  },

  backgroundCian: {
    backgroundColor: "#1ee3cf",
  },

  backgroundNavy: {
    backgroundColor: "#3A0CA3",
  },

  backgroundLilac: {
    backgroundColor: "rgba(52, 23, 118, 0.5)",
  },

  backgroundBlackMedium: {
    backgroundColor: "rgba(29, 29, 27, 0.45)",
  },

  widthRectangle: {
    width: RFValue(305),
  },

  radiusSix: {
    borderRadius: 6,
  },

  radiusSixteen: {
    borderRadius: 16,
  },

  radiusSeventeen: {
    borderRadius: 17,
  },

  widthPercentageTree: {
    width: copyIos,
  },

  widthPercentageFive: {
    width: "50%",
  },

  widthPercentageSeven: {
    width: keyIos,
  },

  widthPercentageHundred: {
    width: "100%",
  },

  heightPercentageEight: {
    height: "80%",
  },

  leftTwelve: {
    marginLeft: RFValue(10),
  },

  paddingLeftTitle: {
    paddingLeft: RFValue(17),
  },

  bottomTitle: {
    marginBottom: RFValue(33),
  },

  paddingHorizontalFifteen: {
    paddingHorizontal: RFValue(12),
  },

  paddingHorizontalEight: {
    paddingHorizontal: RFValue(7),
  },

  paddingHorizontalTwentySix: {
    paddingHorizontal: RFValue(14),
    // paddingVertical: RFValue(16),
  },

  // =====================================================================
  // END UNITY VARIABLES.
  // =====================================================================

  //Splash

  completo__logoGenesys: {
    height: RFValue(247),
    marginTop: RFValue(176),
    marginHorizontal: RFValue(50),
    width: RFValue(247),
  },

  completo__lettersVortex: {
    height: RFValue(15),
    bottom: 43,
    position: "absolute",
    width: RFValue(85),
  },

  //End Splash

  // Arrow

  boxArrow: {
    position: "absolute",
    left: RFValue(12),
    marginTop: RFValue(10),
    zIndex: 3,
    elevation: 3,
  },

  boxArrow_buttom: {
    width: RFValue(40),
    height: RFValue(40),
    zIndex: 3,
    elevation: 3,
  },

  boxArrow_buttom_image: {
    resizeMode: "contain",
    width: RFValue(35),
    height: RFValue(27),
  },

  //End Arrow

  //Balance
  boxGradientLinear: {
    height: RFValue(173),
    padding: 1,
  },

  //End Balance

  //Receive

  boxBottom: {
    position: "absolute",
    bottom: RFValue(50),
  },

  //End Receive

  //Modal
  modalWindow: {
    borderWidth: 0.5,
    borderColor: "black",
    height: windowHeight * 0.1,
    paddingLeft: RFValue(12),
    paddingRight: RFValue(12),
    top: alturaios,
    width: windowWidth * 0.95,
  },

  modalCenter: {
    minHeight: RFValue(350),
    width: RFValue(260),
  },

  modalLogout: {
    minHeight: RFValue(225),
    width: RFValue(260),
  },

  modalLogout_cancel: {
    marginRight: RFValue(23),
  },

  modalWindow_notification: {
    marginLeft: RFValue(5),
  },

  //End Modal

  //Security

  boxImgSecurity: {
    resizeMode: "contain",
    width: RFValue(34),
    height: RFValue(34),
  },

  //End Security

  boxTitle__margin: {
    marginTop: RFValue(41.5),
  },

  // End ReddemEvents

  // EventsInfo
  labelEvent: {
    marginBottom: RFValue(12),
    marginTop: RFValue(1),
  },

  boxEventsInfo: {
    height: RFValue(280),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },

  // End EventsInfo
});
