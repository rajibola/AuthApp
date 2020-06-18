import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { hp, wp } from "./common";
import { withNavigation } from "react-navigation";

import FloatingLabelInput from "./FloatingLabelInput";

class Orders extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* {Menu  and cart} */}
        <View style={styles.menu}>
          <Image style={styles.image} source={require("../images/menu.png")} />
          <Image
            style={styles.image}
            source={require("../images/Basket.png")}
          />
        </View>

        <View style={styles.menu1}>
          <Text style={styles.itemname}>Cheese Burger</Text>
          <View>
            <Text style={styles.naira}>NGN</Text>
            <Text style={styles.price}>2000</Text>
          </View>
        </View>

        <Image
          style={styles.itempic}
          source={require("../images/burger.png")}
        />

        <Text style={styles.itemdesc}>
          Our Medium Cheeze burger is packed with just the right the amount of
          nutrition including veggies you need to kickstart your day. Perfect
          for breakfast choice!
        </Text>

        <Text style={styles.size}>Size</Text>

        <View style={styles.sizetype}>
          <TouchableOpacity style={styles.type}>
            <Text>S</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.midtype}>
            <Text>M</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.type}>
            <Text>L</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("Checkout")}
        >
          <Text style={styles.buttontext}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(Orders);

const styles = StyleSheet.create({
  container: {
    width: wp(375),
    height: hp(812),
  },

  menu: {
    flexDirection: "row",
    marginTop: hp(48.5),
    height: hp(18.5),
    width: wp(281.39 + 15.5 + 20),
    marginLeft: wp(31.11),
    justifyContent: "space-between",
    alignItems: "center",
  },

  menu1: {
    flexDirection: "row",
    marginTop: hp(32),
    height: hp(58),
    marginLeft: wp(34),
    marginRight: wp(32),
    justifyContent: "space-between",
    alignItems: "flex-end",
  },

  itemname: {
    fontSize: wp(25),
    width: hp(147),
    height: hp(58),
    lineHeight: hp(29),
    letterSpacing: wp(-0.52),
    fontWeight: "bold",
    justifyContent: "center",
    alignSelf: "center",
    color: "#4A4A4A",
  },

  price: {
    fontSize: hp(26),
    lineHeight: hp(33),
    letterSpacing: wp(-0.52),
    fontWeight: "bold",
    color: "#4A4A4A",
  },

  naira: { alignSelf: "flex-end", color: "#4A4A4A" },

  itempic: {
    marginTop: hp(59),
    width: hp(296),
    height: hp(214),
    alignSelf: "center",
    resizeMode: "contain",
  },

  itemdesc: {
    width: wp(296),
    height: hp(77),
    alignSelf: "center",
    textAlign: "center",
    marginTop: hp(41),
    fontSize: hp(14),
    lineHeight: hp(19),
    letterSpacing: wp(-0.28),
    color: "#4a4a4a",
  },

  size: {
    textAlign: "center",
    fontSize: hp(14),
    fontWeight: "bold",
    marginTop: hp(25),
  },

  sizetype: {
    flexDirection: "row",
    marginTop: hp(26),
    justifyContent: "space-between",
    width: wp(46 + 139 + 46),
    height: hp(46),
    marginLeft: wp(72),

    alignItems: "center",
  },

  type: {
    width: wp(46),
    height: wp(46),
    borderRadius: wp(9),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
  },

  midtype: {
    width: wp(46),
    height: wp(46),
    borderRadius: wp(9),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFEFC",
  },

  button: {
    height: hp(50),
    width: wp(300),
    marginLeft: wp(38),
    marginRight: wp(37),
    marginTop: hp(41),

    fontStyle: "normal",
    fontSize: hp(14),
    lineHeight: hp(17),

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#E25F38",
    borderRadius: wp(9),
  },

  buttontext: { color: "#fff", fontWeight: "500", fontSize: hp(14) },
});
