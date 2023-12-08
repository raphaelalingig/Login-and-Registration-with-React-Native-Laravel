import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Card, TextInput, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const ForgotPage = () => {
  const [text, setText] = useState(""); // Define the state for the email input
  const navigation = useNavigation();
  return (
    <Card style={styles.container}>
      <Card.Content>
        <Text style={styles.textTitle}>Forgot your password?</Text>
        <Text>Enter your e-mail address below to reset your password.</Text>
        <TextInput
          label="Email:"
          value={text}
          mode="outlined"
          onChangeText={(text) => setText(text)}
          left={<TextInput.Icon icon="email" />}
        />
        <Card.Actions>
          <Button onPress={() => navigation.navigate("LoginForm")}>Back</Button>
          <Button onPress={() => console.log("Submit to what")}>Submit</Button>
        </Card.Actions>
      </Card.Content>
    </Card>
  );
};

export default ForgotPage;

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
