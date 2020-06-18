import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { hp, wp } from "./common";
import { withNavigation } from "react-navigation";

import FloatingLabelInput from "./FloatingLabelInput";

class Login extends Component {
  state = {
    value: "",
    password: "",
  };

  handleTextChange = (newText) => this.setState({ value: newText });
  handlePassChange = (newText) => this.setState({ password: newText });

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require("../images/food.png")} />
        <Text style={styles.head}>Welcome Back!</Text>
        <Text style={styles.headTwo}>Login to your account</Text>

        <View style={styles.textbox}>
          <FloatingLabelInput
            label="Username"
            value={this.state.value}
            onChangeText={this.handleTextChange}
          />
          <FloatingLabelInput
            label="Password"
            value={this.state.password}
            onChangeText={this.handlePassChange}
            secureTextEntry={true}
          />

          <View style={styles.between}>
            <View>
              <Text style={{ fontSize: hp(14) }}>Remember me</Text>
            </View>

            <View>
              <Text style={styles.link}>Forgot Password?</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("Restaurant")}
        >
          <Text style={{ color: "#fff", fontWeight: "500", fontSize: hp(14) }}>
            LOGIN
          </Text>
        </TouchableOpacity>
        <View style={styles.last}>
          <View>
            <Text style={{ fontSize: hp(14) }}>New user?</Text>
          </View>
          <View style={{ paddingLeft: wp(5) }}>
            <Text
              style={styles.link}
              onPress={() => this.props.navigation.navigate("Signup")}
            >
              Signup
            </Text>
          </View>
        </View>
        <View style={styles.rect}></View>
      </View>
    );
  }
}

export default withNavigation(Login);

const styles = StyleSheet.create({
  container: {
    width: wp(375),
    height: hp(812),

    // fontFamily: "TT Norms",
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
    alignSelf: "flex-start",
    height: hp(31),
    marginLeft: wp(34),
    marginTop: hp(221),

    // fontFamily: "TRYVesterbro-Regular",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: hp(26),
    lineHeight: hp(31),
    letterSpacing: wp(-0.52),

    color: "#4A4A4A",
  },

  headTwo: {
    alignSelf: "flex-start",
    height: hp(17),
    marginLeft: wp(36),
    marginTop: hp(8),

    // fontFamily: "TT Norms",
    fontStyle: "normal",
    fontSize: hp(14),
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

  button: {
    height: hp(50),
    width: wp(300),
    marginLeft: wp(38),
    marginRight: wp(37),
    marginTop: hp(63),

    fontStyle: "normal",
    fontSize: hp(14),
    lineHeight: hp(17),

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#E25F38",
    borderRadius: wp(9),
  },

  last: {
    fontWeight: "normal",
    fontSize: hp(14),
    lineHeight: hp(17),

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: hp(14),
    marginTop: hp(20),
  },

  link: {
    color: "#E25F38",
    color: "#E25F38",
    fontWeight: "normal",
    fontSize: hp(14),
  },

  textbox: {
    paddingTop: hp(53),
    paddingLeft: wp(36),
  },

  input: {
    // position: "relative",
    width: wp(293),
    paddingBottom: hp(15),
    height: hp(17 + 44),
  },

  between: {
    flexDirection: "row",
    width: wp(305),
    justifyContent: "space-between",
    fontSize: hp(14),
    marginTop: hp(13.5),
  },
});
