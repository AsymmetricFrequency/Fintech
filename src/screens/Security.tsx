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
    Image,
    TouchableOpacity,
    ScrollView,
    Platform,
    Switch,
  } from "react-native";
  
  import {BarStatus} from "../components/BarStatus";
  import React, { useState } from "react";
  import { LinearGradient } from "expo-linear-gradient";
  import { useFonts } from "expo-font";
  
  const topIos = () => Platform.OS === "ios" && { top: 3 };
  
  const Security = ({ navigation }: { navigation: any }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
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
            <View
              style={[
                stylesM.boxTitle,
                stylesM.widthRectangle,
                stylesM.bottomTitle,
              ]}
            >
              <Text
                style={[
                  stylesM.textColorCian,
                  stylesM.fontSizeTwentySeven,
                  fontBold(),
                  topIos(),
                ]}
              >
                Security
              </Text>
            </View>
            <View
              style={[
                stylesM.widthRectangle,
                stylesM.heightPercentageEight,
                stylesM.paddingHorizontalTwentySix,
              ]}
            >
              <ScrollView
                contentContainerStyle={{
                  marginTop: 50,
                  bottom: 50,
                  paddingRight: 12,
                }}
                horizontal={false}
                showsVerticalScrollIndicator={true}
              >
                <View
                  style={[
                    stylesM.boxNoti,
                    stylesM.radiusSix,
                    stylesM.backgroundLilac,
                    stylesL.flexRow,
                  ]}
                >
                  <View
                    style={[
                      Platform.OS === "ios"
                        ? stylesM.widthPercentageTree
                        : stylesM.widthPercentageTwenty,
                      stylesL.Justify,
                      stylesL.alignItemsEnd,
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

                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => setIsEnabled(!isEnabled)}
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
                        stylesM.leftTwelve,
                        stylesM.fontSizeTwentySeven,
                        fontBold(),
                        topIos(),
                      ]}
                    >
                      Face/Touch
                    </Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate("EnterPassword")}
                  style={[
                    stylesM.boxNoti,
                    stylesM.radiusSix,
                    stylesM.backgroundLilac,
                    stylesL.flexRow,
                  ]}
                  
                >
                  <View
                    style={[
                      Platform.OS === "ios"
                        ? stylesM.widthPercentageTree
                        : stylesM.widthPercentageTwenty,
                      stylesL.Justify,
                      stylesL.alignItemsEnd,
                    ]}
                  >
                    <Image
                      style={[stylesM.boxImgSecurity]}
                      source={require("../../assets/img/security.png")}
                    />
                  </View>

                  <View
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
                        stylesM.leftTwelve,
                        stylesM.fontSizeTwentySeven,
                        fontBold(),
                        topIos(),
                      ]}
                    >
                      Change Password
                    </Text>
                  </View>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </View>
        </SafeAreaView>
      </LinearGradient>
    );
  };
  
  export default Security;
  