import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import { hp, wp } from "./common";
import { withNavigation } from "react-navigation";

import FloatingLabelInput from "./FloatingLabelInput";

class Signup extends Component {
  state = {
    value: "",
    password: "",
    email: "",
    modalOpen: false,
  };

  handleTextChange = (newText) => this.setState({ value: newText });
  handlePassChange = (newText) => this.setState({ password: newText });
  handleEmailChange = (newText) => this.setState({ email: newText });

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require("../images/food.png")} />
        <Text style={styles.head}>Create your Account</Text>
        <Text style={styles.headTwo}>It’s free and easy to set up!</Text>

        <View style={styles.textbox}>
          {/* <Input placeholder="BASIC INPUT" /> */}

          <FloatingLabelInput
            label="Username"
            value={this.state.value}
            onChangeText={this.handleTextChange}
          />
          <FloatingLabelInput
            label="Email"
            value={this.state.email}
            onChangeText={this.handleEmailChange}
          />
          <FloatingLabelInput
            label="Password"
            value={this.state.password}
            onChangeText={this.handlePassChange}
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.setState({ modalOpen: true })}
        >
          <Text style={{ color: "#fff", fontWeight: "500", fontSize: hp(14) }}>
            SIGNUP
          </Text>
        </TouchableOpacity>
        <View style={styles.last}>
          <View>
            <Text style={{ fontSize: hp(14) }}>New user?</Text>
          </View>
          <View style={{ paddingLeft: wp(5) }}>
            <Text
              style={styles.link}
              onPress={() => this.props.navigation.navigate("Login")}
            >
              Signin
            </Text>
          </View>
        </View>

        <Modal
          visible={this.state.modalOpen}
          transparent={true}
          animationType={"slide"}
        >
          <View
            style={{
              backgroundColor: "rgba(0,0,0,0.6)",
              flex: 1,
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <View
              style={{
                flexDirection: "column",
                width: wp(375),
                height: hp(450),
                backgroundColor: "#fff",
                alignItems: "center",
                justifyContent: "flex-start",
                borderTopLeftRadius: wp(20),
                borderTopRightRadius: wp(20),
              }}
            >
              <View
                style={{
                  backgroundColor: "#E0E6ED",
                  width: wp(36),
                  height: hp(5),
                  borderRadius: wp(10),
                  marginTop: hp(15),
                }}
              ></View>

              <Image
                style={{
                  marginTop: hp(14),
                  width: wp(160.45),
                  height: wp(120),
                  resizeMode: "stretch",
                }}
                source={require("../images/illustration.png")}
              />

              <Text
                style={{
                  fontSize: hp(20),
                  fontWeight: "500",
                  marginTop: hp(14),
                }}
              >
                Default Wallet Selection
              </Text>

              <Text
                style={{
                  fontSize: hp(14),
                  marginTop: hp(17),
                  width: wp(285),
                  textAlign: "center",
                  lineHeight: hp(25),
                  color: "#9da8b6",
                }}
              >
                If you proceed, All cards transactions will be charged from the
                selected wallet.
              </Text>

              <TouchableOpacity
                style={styles.button1}
                onPress={() => this.props.navigation.navigate("Login")}
              >
                <Text
                  style={{
                    color: "#E25F38",
                    fontWeight: "500",
                    fontSize: hp(14),
                  }}
                >
                  CONFIRM
                </Text>
              </TouchableOpacity>

              <Text
                style={{
                  color: "#e25f38",
                  fontSize: hp(12),
                  marginTop: hp(20),
                }}
                onPress={() => this.setState({ modalOpen: false })}
              >
                Click here to cancel
              </Text>
            </View>
          </View>
        </Modal>

        <View style={styles.rect}></View>
      </View>
    );
  }
}

export default withNavigation(Signup);

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
    resizeMode: "contain",
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
    letterSpacing: wp(-0.28),
  },

  button1: {
    height: hp(50),
    width: wp(325),
    marginTop: hp(31),

    fontStyle: "normal",
    fontSize: hp(14),
    lineHeight: hp(17),

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#FDF3F1",
    borderRadius: wp(4),
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

  modal: {
    flex: 1,
    marginTop: hp(387),
    height: hp(425),
    width: wp(375),
    backgroundColor: "#fff",
  },
});
