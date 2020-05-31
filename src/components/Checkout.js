import React from "react";
import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";
import { hp, wp } from "./common";
// import { withNavigation } from "react-navigation";

class Checkout extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require("../images/food.png")} />
        <View style={styles.rect}></View>
      </View>
    );
  }
}

export default Checkout;

const styles = StyleSheet.create({
  container: {
    width: wp(375),
    height: hp(812),
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    position: "absolute",
    width: wp(220),
    height: wp(220),
    left: wp(176),
    top: hp(40),
    resizeMode: "contain", // backgroundColor: "rgba(249, 225, 218, 0.1917)",
  },

  head: {
    position: "absolute",
    width: wp(190),
    height: hp(31),
    left: wp(34),
    top: hp(221),

    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: wp(26),
    lineHeight: hp(31),
    letterSpacing: wp(-0.52),

    color: "#4A4A4A",
  },

  headTwo: {
    position: "absolute",
    width: wp(130),
    height: hp(17),
    left: wp(36),
    top: hp(260),

    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: wp(14),
    lineHeight: hp(17),
    letterSpacing: wp(-0.28),

    color: "#4A4A4A",
  },

  rect: {
    position: "absolute",
    width: wp(375),
    height: hp(57),
    left: 0,
    top: hp(755),
    backgroundColor: "#FDF3F1",
  },
});
