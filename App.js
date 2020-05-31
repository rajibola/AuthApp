import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "./src/components/Login";
import Signup from "./src/components/SignUp";
import Restaurant from "./src/components/Restaurant";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer />
    </View>
  );
}

const AppSwitchNavigator = createSwitchNavigator(
  {
    Signup: { screen: Signup },
    Login: { screen: Login },
    Restaurant: { screen: Restaurant },
  },
  {
    initialRouteName: "Restaurant",
  }
);

const AppContainer = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
