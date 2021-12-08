import React from "react";
import { View, Linking } from "react-native";
import * as firebase from "firebase";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  Layout,
  Button,
  Text,
  TopNav,
  Section,
  SectionContent,
  useTheme,
  themeColor,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";

export default function ({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();
  return (
    <Layout>
      <TopNav
        middleContent="Home"
        leftContent={
          <Ionicons
            name={isDarkmode ? "sunny" : "moon"}
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        leftAction={() => {
          if (isDarkmode) {
            setTheme("light");
          } else {
            setTheme("dark");
          }
        }}
        rightContent={
//
            <TouchableOpacity 
              onPress={() => {
                firebase.auth().signOut();
              }}
            style={{ height: 20, width:70 }}>
    <Text>LoGOut</Text>
            </TouchableOpacity>
         
 //
        }
       

      />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Section style={{ marginTop: 20 }}>
          <SectionContent>
         
            <Button
              style={{ marginTop: 10 }}
              text="Check Latest News Here"
              status="info"
              onPress={() => Linking.openURL("https://exp.host/@msahil1214/news-app")}
            />
            
            
          </SectionContent>
        </Section>
      </View>
    </Layout>
  );
}
