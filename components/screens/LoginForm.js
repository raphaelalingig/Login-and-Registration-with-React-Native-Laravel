import { StyleSheet, TouchableOpacity, ToastAndroid, View } from "react-native";
import React, { useState } from "react";
import { Button, Card, TextInput, Text, HelperText } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import fetchServices from "../services/fetchServices";
import { Formik } from "formik";
import * as Yup from "yup";

const LoginForm = () => {
  const [email, setEmail] = useState(""); // assuming you have these state variables
  const [password, setPassword] = useState("");
  const [text, setText] = useState("");
  const [showPass, setShowPass] = useState(false);
  const navigation = useNavigation();

  const showToast = (message = "Something went wrong") => {
    ToastAndroid.show(message, 3000);
  };

  const handleForgotPasswordPress = () => {
    // Navigate to the ForgotPage screen
    navigation.navigate("ForgotPage");
  };
  const ClickableText = ({ onPress, text }) => (
    <TouchableOpacity onPress={onPress}>
      <Text style={{ color: "blue", textDecorationLine: "underline" }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
  const handleLogin = async () => {
    try {
      const url = "http://192.168.1.15:8000/api/v1/login";
      const data = {
        email,
        password,
      };
      const result = await fetchServices.postData(url, data);

      if (result.message != null) {
        showToast(result?.message);
      } else {
        navigation.navigate("MainPage");
      }
    } catch (e) {
      console.debug(e.toString());
    }
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid Email")
      .required("Please enter your email"),
    password: Yup.string().required("Please enter your password"),
  });

  return (
    <View style={{ flex: 1, justifyContent: "center", paddingHorizontal: 20 }}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values) => {
          await handleLogin(values);
        }}
        validationSchema={validationSchema}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          errors,
          touched,
          setTouched,
        }) => {
          return (
            <View styles={{ flex: 1 }}>
              <Text variant="displayMedium">Welcome Back</Text>
              <Text style={{ fontWeight: "bold", color: "#4f378b" }}>
                Log in to your account
              </Text>
              <TextInput
                mode="outlined"
                placeholder="Email"
                label="Email"
                left={<TextInput.Icon icon="email" />}
                style={{ marginTop: 10 }}
                defaultValue={values.email}
                value={values.email}
                keyboardType="email-address"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                error={errors.email && touched.email}
                onFocus={() => setTouched({ email: true }, false)}
              />
              {errors.email && touched.email && (
                <HelperText type="error" visible={errors.email}>
                  {errors.email}
                </HelperText>
              )}
              <TextInput
                mode="outlined"
                placeholder="Password"
                label="Password"
                left={<TextInput.Icon icon="lock" />}
                secureTextEntry={!showPass}
                right={
                  <TextInput.Icon
                    icon={showPass ? "eye" : "eye-off"}
                    onPress={() => setShowPass(!showPass)}
                  />
                }
                style={{ marginTop: 10 }}
                value={values.password}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                error={errors.password && touched.password}
                onFocus={() => setTouched({ password: true }, false)}
              />
              {errors.password && touched.password && (
                <HelperText type="error" visible={errors.password}>
                  {errors.password}
                </HelperText>
              )}
              <ClickableText
                onPress={handleForgotPasswordPress}
                text="Forgot Password"
              />
              <Card.Actions>
                <Button
                  disabled={isSubmitting}
                  onPress={() => navigation.navigate("SignupForm")}
                  icon="account-plus"
                  mode="contained"
                  style={{ marginTop: 10 }}
                >
                  Register
                </Button>
                <Button
                  loading={isSubmitting}
                  disabled={isSubmitting}
                  onPress={handleSubmit}
                  icon="login"
                  mode="contained"
                  style={{ marginTop: 10 }}
                >
                  Login
                </Button>
              </Card.Actions>
            </View>
          );
        }}
      </Formik>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textTitle: {
    fontSize: 32,
    fontWeight: "bold",
  },
});
