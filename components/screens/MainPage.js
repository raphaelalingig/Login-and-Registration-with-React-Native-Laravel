import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Card, TextInput, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";


const MainPage = () => {
  const [text, setText] = useState(""); // Define the state for the email input
  const navigation = useNavigation();
  const handleLogoutPress = () => {
    // Navigate to the ForgotPage screen
    navigation.navigate("Intro");
  };
  return (
    <Card style={styles.container}>
      <Card.Content>
        <Text style={styles.textTitle}>MainPage</Text>
        <Text>Enter your e-mail address below to reset your password.</Text>
        
        
        <Card.Actions>
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitText} onPress={handleLogoutPress}>Logout</Text>
          </TouchableOpacity>
        </Card.Actions>
      </Card.Content>
    </Card>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  container: {
    margin: 16,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  submitButton: {
    backgroundColor: "gray",
    padding: 10,
    borderRadius: 10,
  },
  submitText: {
    color: "white",
  },
  textTitle: {
    fontSize: 28,
    fontWeight: "bold",
  },
});
