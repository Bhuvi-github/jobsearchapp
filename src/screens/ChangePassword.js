import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ToastAndroid,
} from "react-native";
import { passwordValidator } from "../helpers/passwordValidator";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import axios from "axios";

const ChangePassword = ({ route, navigation }) => {
  const [password, setPassword] = useState({ value: "", error: "" });
  // const userEmail = navigation.getParam("user_email");
  // const userId = navigation.getParam("user_id");
  // const password_access_token=navigation.getParam("password_access_token");
  // const oldpassword = navigation.getParam("old_password")
  const { user_email, user_id, password_access_token, old_password } =
    route.params;
  // console.log(navigation)
  console.log(user_email);
  const setNewPassowrd = (password) => {
    const passwordError = passwordValidator(password);
    if (passwordError) {
      setPassword({ ...password, error: passwordError });
      return;
    }

    const req = {
      formData: {
        userEmail: user_email,
        password: password,
        userToken: password_access_token,
        oldpassword: old_password,
      },
    };
    axios.post("https://demo.screenit.io/api/profile/setPassword", req).then(
      (response) => {
        if (response.data.message == "Success") {
          console.log(response);
          ToastAndroid.showWithGravity(
            "Password changed Successfully",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
          );
          //alert("Registration successful", response.data.message);
          navigation.navigate("LoginScreen");
          //do something
          //  setName({ ...name, value:"" })
          //  setEmail({ ...email, value:"" })
          //  setPassword({ ...password, value:"" })
          //  setPhonenum({ ...phonenum, value:"" })
        }
      },

      (err) => {
        Alert.alert("Could not establish connection", err.message);
      }
    );
  };

  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          justifyContent: "center",
          alignSelf: "center",
          marginTop: "50%",
        }}
      >
        Change Password
      </Text>
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ ...password, value: text })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <Button
        mode="contained"
        onPress={() => {
          setNewPassowrd(password.value);
        }}
        style={{ marginTop: 16 }}
      >
        Change Password
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ChangePassword;
