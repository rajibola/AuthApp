import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
} from "react-native";

import { hp, wp } from "./common";
import { withNavigation } from "react-navigation";

const TestMeal = [
  {
    name: "Cheese Burger",
    topping: "Beef, Veggies & Chilli",
    img: require("../images/meal1.png"),
    key: "1",
    rating: require("../images/rating.png"),
  },
  {
    name: "Jollof Rice",
    topping: "Grilled Chicken, Veggies & Sauce",
    img: require("../images/meal2.png"),
    key: "2",
    rating: require("../images/rating.png"),
  },
];
const RecommendedMeal = [
  {
    img: require("../images/reco1.png"),
  },
  {
    img: require("../images/reco2.png"),
  },
  {
    img: require("../images/reco3.png"),
  },
  {
    img: require("../images/reco4.png"),
  },
];

class Restaurant extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.icon} source={require("../images/Basket.png")} />
        <Text style={styles.hello}>Hello, John</Text>
        <Text style={styles.hello1}>Select your meal for the day</Text>
        <View style={styles.searchbar}>
          <Image style={styles.icon2} source={require("../images/sbar.png")} />

          <TextInput
            style={styles.input}
            placeholder="search for meals, dishes"
            placeholderTextColor="rgba(74, 74, 74, 0.521798)"
          />
        </View>

        <View style={{ marginTop: hp(29) }}>
          <FlatList
            data={TestMeal}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Image style={styles.img} source={item.img} />
                <View style={styles.label}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.topping}>{item.topping}</Text>
                  <Image source={item.rating} style={styles.rating} />
                </View>
              </View>
            )}
            keyExtractor={(item) => item.key}
          />
        </View>

        <View
          style={{
            width: wp(308),
            height: hp(111),
            marginBottom: hp(37),
            marginLeft: wp(33),
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.last}>Recommended</Text>
            <Text style={styles.last}>View all</Text>
          </View>
          <FlatList
            horizontal={true}
            contentContainerStyle={{ justifyContent: "space-between", flex: 1 }}
            data={RecommendedMeal}
            renderItem={({ item }) => (
              <Image style={styles.imgIcon} source={item.img} />
            )}
          />
        </View>
      </View>
    );
  }
}

export default withNavigation(Restaurant);

const styles = StyleSheet.create({
  container: {
    width: wp(375),
    height: hp(812),
  },

  icon: {
    marginTop: hp(48),
    marginLeft: wp(328),
    resizeMode: "contain",
  },

  icon2: {
    marginLeft: wp(16),
    width: wp(15),
    height: wp(15),
    resizeMode: "contain",
  },

  hello: {
    fontSize: hp(26),
    marginTop: hp(4),
    marginLeft: wp(34),
    color: "#4A4A4A",
    fontWeight: "bold",
  },

  hello1: {
    fontSize: hp(14),
    marginTop: hp(8),
    marginLeft: wp(34),
    color: "#4A4A4A",
  },

  searchbar: {
    width: wp(307),
    height: wp(41),
    backgroundColor: "#F6F6F6",
    marginLeft: wp(34),
    marginTop: hp(24),
    borderRadius: wp(9),
    flexDirection: "row",
    alignItems: "center",
  },

  input: {
    width: wp(293),
    marginLeft: hp(14),
    // height: hp(48),
  },

  img: {
    width: wp(308),
    height: hp(113),
    borderTopRightRadius: wp(9),
    borderTopLeftRadius: wp(9),
    resizeMode: "stretch",
  },

  card: {
    width: wp(308),
    height: hp(192),
    // marginTop: hp(30),
    marginBottom: hp(29),
    marginLeft: wp(33),
    borderColor: "#000",
    marginRight: wp(34),
  },

  label: {
    paddingLeft: wp(22),
    height: hp(79),
  },

  name: {
    paddingTop: hp(12),
    fontSize: hp(14),
    fontWeight: "bold",
  },

  topping: {
    marginTop: hp(5),
    fontSize: hp(12),
    color: "#4a4a4a",
  },

  rating: {
    marginTop: hp(9),
    height: hp(11),
    width: hp(66),
    resizeMode: "contain",
  },

  last: {
    fontSize: hp(14),
  },

  imgIcon: {
    marginTop: hp(13),
    height: hp(70),
    width: hp(63),
    resizeMode: "contain",
    borderRadius: wp(9),
  },
});
