// Intro.js
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Intro = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Avatar.Image
        style={styles.logoImage}
        size={300}
        source={require("../Pictures/logo.png")}
      />
      <View style={styles.buttons}>
        <Button
          style={styles.signupButton}
          icon="account-question-outline"
          mode="contained"
          onPress={() => navigation.navigate("SignupForm")}
        >
          Sign - up
        </Button>
        <Button
          style={styles.loginButton}
          icon="account-check"
          mode="contained"
          onPress={() => navigation.navigate("LoginForm")}
        >
          Login - in
        </Button>
      </View>
    </View>
  );
};

export default Intro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    gap: 5,
    width: 200,
  },
  logoImage: {
    left: 15,
  },
});
