import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat, Send, InputToolbar, Bubble } from "react-native-gifted-chat";
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
  Alert
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BarStatus } from "../components/BarStatus";
import { useFonts } from "expo-font";
import es from 'dayjs/locale/es' 

const ChatBot = ({ navigation }: { navigation: any }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hola, ¡bienvenido! ¿En qué puedo ayudarte hoy?",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar:  require('../../assets/img/avatarChat.webp'),
        },
      },
    ]);
  }, []);

  const customtInputToolbar = props => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          borderRadius:4,
          minHeight:37,
        }}
      />
    );
  };

  const customtBubble = props => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: '#FBF9FF',
            width:"90%",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.1,
            shadowRadius: 5,
            elevation: 5,
            borderRadius:5,
            display: 'flex',
            borderBottomLeftRadius: 0,
          },
        }}
        textStyle={{
          left: {
            color: '#A29FC6',
            fontWeight:"400"
          },
        }}
      />
    );
  };


  const onSend = useCallback((messages = []) => {
    const [messageToSend] = messages;
    messageToSend.pending = true;
     setMessages(previousMessages => GiftedChat.append(previousMessages, [messageToSend]))
   }, [])

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

        <View style={[stylesM.boxTitle]}>
          <Text
            style={[
              stylesM.textColorWhite,
              stylesM.fontSizeSixteen,
              fontMedium(),
              stylesL.textAlignCenter,
            ]}
          >
            Servicio al cliente
          </Text>
        </View>
        <View
          style={[
            stylesM.boxTotal,
            stylesM.backgroundSnow,
            stylesM.marginTopTwenty,
            stylesM.radiusTopEighteen,
            stylesL.FlexOne,
            stylesM.heightPercentageEight,
            stylesM.paddingHorizontalTwenty,
          ]}
        >
          <View style={[stylesM.marginTopTwentyTwo]}>
            <Text
              style={[
                stylesM.textColorDullpurple,
                stylesM.fontSizeSixteen,
                fontLight(),
              ]}
            >
              Realiza tus consultas con nuestro asistente virtual
            </Text>
          </View>
          <View
            style={[
              stylesL.FlexOne,
              stylesM.backgroundLavender,
              stylesM.boxChat,
              stylesM.radiusTen,
              stylesM.marginTopTen,
            ]}
          >
            <GiftedChat
              messages={messages}
              onSend={(messages) => onSend(messages)}
              user={{
                _id: 1,
              }}
              renderInputToolbar={(props) => customtInputToolbar(props)}
              renderBubble={(props) => customtBubble(props)}
              locale={es}
              timeFormat="hh:mm A"
              dateFormat="D/MMMM/YYYY"
              keyboardShouldPersistTaps="never"
              placeholder={"Escribe aquí "}
              onPressAvatar={() => alert("short press")}
              onPress={() => {
                Alert.alert("Bubble pressed");
              }}
              renderSend={(props) => {
                const { text, onSend } = props;
                return (
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => {
                      if (text && onSend) {
                        onSend({ text: text.trim() }, true);
                      }
                    }}
                    style={[
                      stylesM.boxChat_send, stylesM.heighTotal,stylesL.JustifyAlign,
                    ]}
                  >
                    <Text style={[fontBold(), stylesM.textColorDullpurple, stylesM.fontSizeFourteen]}>Enviar</Text>
                    <Send />
                  </TouchableOpacity>
                );
              }}
              timeTextStyle={{
                left: { color: "#A29FC6" },
                right: { color: "white" },
              }}
              scrollToBottom
              alwaysShowSend={true}
              bottomOffset={-20}
            />
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default ChatBot;
