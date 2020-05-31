import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Login from "./src/components/Login";
import Signup from "./src/components/SignUp";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <AppContainer />
      </View>
    </ScrollView>
  );
}

const AppSwitchNavigator = createSwitchNavigator(
  {
    Signup: { screen: Signup },
    Login: { screen: Login },
  },
  {
    initialRouteName: "Login",
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
