import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Search from "./Search";

import { hp, wp } from "./common";
import { withNavigation } from "react-navigation";

class Restaurant extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require("../images/Basket.png")} />
        <Text style={styles.hello}>Hello, John</Text>
        <Text style={styles.hello1}>Select your meal for the day</Text>
        <Search />
      </View>
    );
  }
}

export default withNavigation(Restaurant);

const styles = StyleSheet.create({
  container: {
    width: wp(375),
    height: hp(812),

    // fontFamily: "TT Norms",
  },
  image: {
    marginTop: hp(48),
    marginLeft: wp(328),
    resizeMode: "contain",
  },

  hello: {
    fontSize: hp(26),
    marginTop: hp(4),
    marginLeft: wp(34),
    color: "#4A4A4A",
  },

  hello1: {
    fontSize: hp(14),
    marginTop: hp(8),
    marginLeft: wp(34),
    color: "#4A4A4A",
  },
});
