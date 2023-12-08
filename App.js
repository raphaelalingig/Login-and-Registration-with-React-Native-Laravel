import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Intro from "./components/screens/Intro/Intro";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignupForm from "./components/screens/SignupForm";
import LoginForm from "./components/screens/LoginForm";
import ForgotPage from "./components/screens/ForgotPage";
import MainPage from "./components/screens/MainPage";

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          component={Main}
          name="MainScreen"
        />
        <Stack.Screen
          options={{ headerShown: false }}
          component={SignupForm}
          name="SignupForm"
        />
        <Stack.Screen
          options={{ headerShown: false }}
          component={LoginForm}
          name="LoginForm"
        />
        <Stack.Screen
          options={{ headerShown: false }}
          component={ForgotPage}
          name="ForgotPage"
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="MainPage"
          component={MainPage}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Intro"
          component={Intro}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Stack = createNativeStackNavigator();

const Main = ({ navigation }) => {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Intro />
      </SafeAreaView>
    </PaperProvider>
  );
};

const SignUpForm = () => {
  return <SignUpForm />;
};
const Login_Form = () => {
  return <LoginForm />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default App;
