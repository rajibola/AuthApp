import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  FlatList,
} from "react-native";
import { hp, wp } from "./common";
import { withNavigation } from "react-navigation";

const Checkout = () => {
  const [data, setData] = useState([
    {
      name: "Cheese Burger",
      topping: "Beef, Veggies & Chilli",
      img: require("../images/meal1.png"),
      key: "1",
      price: "NGN 2,000",
    },
    {
      name: "Large Pizza",
      topping: "Extra Cheese & Toppings",
      img: require("../images/meal2.png"),
      key: "2",
      price: "NGN 2,070",
    },
    {
      name: "Grilled Turkey",
      topping: "Sauce and Pepper",
      img: require("../images/meal1.png"),
      key: "3",
      price: "NGN 3,050",
    },
    {
      name: "Peppersoup",
      topping: "Beef & Mutton",
      img: require("../images/meal2.png"),
      key: "4",
      price: "NGN 4,000",
    },
  ]);

  const deleteItem = (key) => {
    setData((prevData) => {
      return prevData.filter((item) => item.key != key);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.head}>My Orders</Text>
      <Text style={styles.head2}>
        Welcome to your cart, preview items below.
      </Text>

      <View style={{ marginTop: hp(35.36) }}>
        <FlatList
          data={data}
          ListEmptyComponent={() => (
            <Text style={[styles.head, { marginTop: 0 }]}>
              There are no orders yet!
            </Text>
          )}
          deleteItem={deleteItem}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image style={styles.icon} source={item.img} />
              <View style={styles.label}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.topping}>{item.topping}</Text>
              </View>
              <Text style={styles.price}>{item.price}</Text>
              <TouchableOpacity
                style={styles.delbac}
                onPress={() => deleteItem(item.key)}
              >
                <Image
                  style={styles.del}
                  source={require("../images/del.png")}
                />
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.key}
        />
      </View>
      {data.length > 0 ? (
        <View style={styles.total}>
          <Text style={styles.totaltext}>Total:</Text>
          <Text style={styles.totalvalue}>NGN 20,000</Text>
        </View>
      ) : null}
      {data.length > 0 ? (
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "#fff", fontWeight: "500", fontSize: hp(14) }}>
            CHECKOUT
          </Text>
        </TouchableOpacity>
      ) : null}
      <View style={styles.rect}></View>
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  container: {
    width: wp(375),
    height: hp(812),
    paddingLeft: wp(34),
    paddingRight: wp(30),
  },

  head: {
    fontSize: hp(26),
    fontWeight: "bold",
    marginTop: hp(119),
    letterSpacing: wp(-0.52),
  },

  head2: {
    fontSize: hp(14),
    marginTop: hp(8),
    letterSpacing: wp(-0.28),
  },

  rect: {
    position: "absolute",
    width: wp(375),
    height: hp(57),
    top: hp(755),
    backgroundColor: "#FDF3F1",
  },

  card: {
    height: hp(44.91),
    width: wp(311),
    marginBottom: hp(36.93),
    flexDirection: "row",
    alignItems: "center",
  },

  icon: {
    height: hp(43),
    width: hp(39),
    borderRadius: hp(9),
    marginRight: hp(14),
    resizeMode: "cover",
  },

  label: {
    width: wp(30 + 127),
  },

  name: {
    fontSize: hp(14),
    fontWeight: "bold",
    color: "#4A4A4A",
    letterSpacing: wp(-0.28),
  },

  topping: {
    fontSize: hp(12),
    color: "#4A4A4A",
    letterSpacing: wp(-0.24),
  },

  price: {
    fontSize: hp(12),
    fontWeight: "500",
  },

  delbac: {
    width: wp(30),
    height: wp(30),
    backgroundColor: "#F9E1DA",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: wp(15),
    marginLeft: wp(28),
  },

  total: {
    marginTop: hp(53 - 36.93),
    flexDirection: "row",
    justifyContent: "space-between",
    width: wp(33 + 127 + 137),
    marginLeft: wp(43 - 34),
    marginRight: wp(35),
    height: hp(27),
    alignItems: "flex-end",
  },

  totaltext: {
    fontSize: hp(14),
    color: "#4A4A4A",
    letterSpacing: hp(-0.28),
  },

  totalvalue: {
    fontSize: hp(23),
    color: "#4A4A4A",
    letterSpacing: hp(-0.46),
    fontWeight: "bold",
  },

  button: {
    height: hp(50),
    width: wp(300),

    marginTop: hp(40),

    fontStyle: "normal",
    fontSize: hp(14),
    lineHeight: hp(17),

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#E25F38",
    borderRadius: wp(9),
    letterSpacing: wp(-0.28),
  },
});
