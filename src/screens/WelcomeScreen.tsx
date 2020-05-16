import React, { Component, useEffect } from "react";
import { Container, Button, Text, View } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import { StyleSheet, Linking, Platform, Alert } from "react-native";
//import navigation from "src/navigation";

import {
  useNavigation,
  useRoute,
  useFocusEffect,
  useNavigationState,
} from "@react-navigation/native";

interface Props {}

export default (props: Props) => {
  const navigation = useNavigation();
  const route = useRoute();
  const index = useNavigationState((state) => state.index);

  useEffect(function () {
    if (Platform.OS === "android") {
      Linking.getInitialURL().then((url: any) => {
        nav(url);
        // navigation.navigate("ConnectToCoinbase");
        // Alert.alert(url);
      });
    } else {
      Linking.addEventListener("url", handleOpenURL);
    }

    return function cleanup() {
      Linking.removeEventListener("url", handleOpenURL);
    };
  });

  const handleOpenURL = (event: { url: any }) => {
    // D
    navigation.navigate(event.url);
  };
  const nav = (url: any) => {
    // E
    //const { navigate } = props.navigation;
    const route = url.replace(/.*?:\/\//g, "");
    const id = route.match(/\/([^\/]+)\/?$/)[1];
    const routeName = route.split("/")[0];

    if (routeName === "resetpassword") {
      Alert.alert("reset");
      navigation.navigate("resetpassword", { id, name: "chris" });
    } else {
      Alert.alert("verification");
      navigation.navigate("coinbaseconnectionsucceeded");
    }

    // else if (routeName === "verification_complete") {
    //   Alert.alert("verification");
    //   navigation.navigate("coinbaseconnectionsucceeded", { id, name: "chris" });
    // } else if (routeName === "home") {
    //   Alert.alert("home");
    //   navigation.navigate("Home", { id, name: "chris" });
    // } else {
    //   navigation.navigate("signup", { id, name: "chris" });
    // }
  };
  ////

  return (
    <View style={styles.all}>
      <View style={styles.container}>
        <View style={styles.emptyHeader}></View>
        <View style={styles.body}>
          <View>
            <View style={styles.appTitleView}>
              <Text style={styles.appTitleLarge}>POSAH |</Text>
              <Text style={styles.appTitleSmall}>Remittance</Text>
            </View>
          </View>
          <View>
            <Text style={styles.appDetail}>Send money to Cameroon.</Text>
            <Text style={styles.appDetail2}>Send to Mobile Money.</Text>
            <Text style={styles.appDetail2}>Fast. Cheap.</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={{ marginLeft: 150 }}></View>
          <Button transparent onPress={() => navigation.navigate("signup")}>
            <Text style={{ fontWeight: "bold", color: "white" }}>
              Get started
            </Text>
          </Button>
          <Button primary rounded style={{ backgroundColor: "white" }}>
            <Text
              onPress={() => navigation.navigate("ConnectToCoinbase")}
              style={{ fontWeight: "bold", color: "blue" }}
            >
              Sign in
            </Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  all: {
    flex: 1,
    backgroundColor: "rgb(22, 82, 240)",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 30,
  },
  emptyHeader: {
    flex: 1,
  },
  body: {
    flex: 1,
  },
  footer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 80,
  },
  appTitleLarge: {
    fontSize: 30,
    fontFamily: "Legal Std Bold",
    fontWeight: "bold",
    color: "white",
  },
  appTitleSmall: {
    fontSize: 30,
    fontFamily: "Legal Std Bold",
    marginLeft: 10,
    color: "white",
  },
  appDetail: {
    fontSize: 23,
    fontFamily: "Legal Std Bold",
    marginTop: 30,
    color: "white",
  },
  appDetail2: {
    fontSize: 23,
    fontFamily: "Legal Std Bold",
    marginTop: 10,
    color: "white",
  },
  appTitleView: {
    flexDirection: "row",
  },
});
