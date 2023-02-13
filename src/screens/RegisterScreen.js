import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ToastAndroid,
} from "react-native";
import { Text } from "react-native-paper";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";
import { theme } from "../core/theme";
import { emailValidator } from "../helpers/emailValidator";
import { passwordValidator } from "../helpers/passwordValidator";
import { nameValidator } from "../helpers/nameValidator";
import { mobilenumberValidator } from "../helpers/mobileValidator";
import { firebase, db } from "../config";
import auth from "@react-native-firebase/auth";
import axios from "axios";

// if (firebase.apps.length === 0) {
//   firebase.initializeApp(firebaseConfig);
// } else {
//   firebase.app()
// }

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [phonenum, setPhonenum] = useState({ value: "", error: "" });
  const [loading, setLoading] = useState(true);

  const onSignUpPressed = (email, password, name, phonenum) => {
    const nameError = nameValidator(name);
    const emailError = emailValidator(email);
    const passwordError = passwordValidator(password);
    const phonenumError = mobilenumberValidator(phonenum);
    if (emailError || passwordError || nameError || phonenumError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      setPhonenum({ ...phonenum, error: phonenumError });
      return;
    }
    //   firebase.auth()
    //   .createUserWithEmailAndPassword(email, password)
    //   .then(userCredentials => {
    //     const user = userCredentials.user;
    //     console.log(user)
    //     alert('Registered Succesfully');

    //     var uid = firebase.auth().currentUser.uid;

    //   if(uid !=null){
    //   db.collection("users").doc(user.email).set({
    //     owner_uid: uid,
    //     username: name,
    //     email: email,
    //     phone:phonenum,
    //     profilePic:"https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?b=1&k=20&m=476085198&s=170667a&w=0&h=Ct4e1kIOdCOrEgvsQg4A1qeuQv944pPFORUQcaGw4oI="
    //   });
    //  }

    //     navigation.reset({
    //       index: 0,
    //       routes: [{ name: 'LoginScreen' }],
    //     })
    //   })
    //   .catch(error => alert(error.message))

    if (email && password) {
      const req = {
        formData: {
          user_email: email,
          mobile_number: phonenum,
          organizationStatus: "individual",
          mobile_number_country_code: "91",
          firstName: name,
          lastName: "",
          user_password: password,
          device_token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjM4MywiaWF0IjoxNjU1ODc2MjkzLCJleHAiOjE2ODc0MTIyOTMsImF1ZCI6IiIsImlzcyI6InNjcmVlbml0YXBpIiwianRpIjoiNjg3NDQxZDQtNjcxYy00NWZkLTk5MTAtNzFjMjk4M2YzMTFlIn0.166HMtTVF8wuGBHsdL6dZxOgdc8ItlgSJ8z3yluSFno",
        },

        //  user_email:email,
        //  user_password:password,
        //  type_of_account:"individual",
        //  device_token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjM4MywiaWF0IjoxNjU1ODc2MjkzLCJleHAiOjE2ODc0MTIyOTMsImF1ZCI6IiIsImlzcyI6InNjcmVlbml0YXBpIiwianRpIjoiNjg3NDQxZDQtNjcxYy00NWZkLTk5MTAtNzFjMjk4M2YzMTFlIn0.166HMtTVF8wuGBHsdL6dZxOgdc8ItlgSJ8z3yluSFno"
      };

      setLoading(true);

      axios
        .post(
          "https://demo.screenit.io/api/email/create/user/using/email/mobile",
          req
        )
        .then(
          (response) => {
            setLoading(false);

            if (response.data.message == "Success") {
              console.log(response);
              ToastAndroid.showWithGravity(
                "Registration successful",
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
              );
              //alert("Registration successful", response.data.message);
              navigation.navigate("JobList");
              //do something
              //  setName({ ...name, value:"" })
              //  setEmail({ ...email, value:"" })
              //  setPassword({ ...password, value:"" })
              //  setPhonenum({ ...phonenum, value:"" })
            } else if (response.data.message == "Email already exists") {
              Alert.alert("Email already Exist");
            }
          },

          (err) => {
            setLoading(false);

            Alert.alert("Could not establish connection", err.message);
          }
        );
    } else {
      alert("Please complete registration");
    }
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Create Account</Header>
      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ ...name, value: text })}
        error={!!name.error}
        errorText={name.error}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ ...email, value: text })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ ...password, value: text })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <TextInput
        label="Mobile Number"
        returnKeyType="done"
        value={phonenum.value}
        onChangeText={(text) => setPhonenum({ ...phonenum, value: text })}
        error={!!phonenum.error}
        errorText={phonenum.error}
        keyboardType="numeric"
      />
      <Button
        mode="contained"
        onPress={() => {
          onSignUpPressed(
            email.value,
            password.value,
            name.value,
            phonenum.value
          );
        }}
        style={{ marginTop: 24 }}
      >
        Sign Up
      </Button>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace("LoginScreen")}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
});
