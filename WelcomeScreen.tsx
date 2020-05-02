import React from "react";
import { Button, Text, View, Container, Content } from "native-base";
import { NativeRouter, Route, Link } from "react-router-native";


import { StyleSheet, TouchableHighlight, Alert } from "react-native";
import SignUp from "./SignUp";

interface Props {
  navigation: any;
}

export default (props: Props) => {
  const { navigation } = props;
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
            <Button primary bordered style={{ flexDirection: "column", justifyContent: "center",  backgroundColor: "blue"}} onPress={() => navigation.navigate("Register")}>
              <Text style={{ color: "white"}}>Get started</Text>
            </Button>
            <Button transparent style={{ flexDirection: "column", justifyContent: "center", marginTop: 15 }}>
              <Text style={{ color: "blue"}}>Sign In</Text>
            </Button>
          </View>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  all: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 30,
  },
  emptyHeader: {
    flex: 2,
  },
  body: {
    flex: 5,
  },
  footer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: 80,
    //backgroundColor: "yellow",
    marginRight: 30,
    height: 10
  },
  appTitleLarge: {
    fontSize: 30,
    fontFamily: "Legal Std Bold",
    fontWeight: "bold",
    color: "blue",
  },
  appTitleSmall: {
    fontSize: 30,
    fontFamily: "Legal Std Bold",
    marginLeft: 10,
    color: "blue",
  },
  appDetail: {
    fontSize: 23,
    fontFamily: "Legal Std Bold",
    marginTop: 30,
    color: "blue",
  },
  appDetail2: {
    fontSize: 23,
    fontFamily: "Legal Std Bold",
    marginTop: 10,
    color: "blue",
  },
  appTitleView: {
    flexDirection: "row",
  },
});
