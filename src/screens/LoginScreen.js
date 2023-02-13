import React, { useState, useEffect, useContext } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
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
import AuthContext from "../context/Authprovider";
import { firebase, db } from "../config";
import auth from "@react-native-firebase/auth";
import axios from "axios";
// if (firebase.apps.length === 0) {
//   firebase.initializeApp(firebaseConfig);
// } else {
//   firebase.app()
// }

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const { setIsLoggedIn, setUser, user, login } = useContext(AuthContext);
 // const [loading, setLoading] = useState(true);
  
  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(user => {
  //     if (user) {
  //       navigation.replace("JobList")
  //     }
  //   })

  //   return unsubscribe
  // }, [])

  const onLoginPressed = async (email, password) => {
    const emailError = emailValidator(email);
    const passwordError = passwordValidator(password);
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    /* firebase.auth()
    .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        //Alert.alert('Logged in with:', user.email);
        // navigation.reset({
        //   index: 0,
        //   routes: [{ name: 'JobList' }],
        // })
      })
      .catch(error => alert(error.message))*/

    ///login axios
   /* if (email && password) {

      const req = {
          formData:{
          user_email:email,
          user_password:password,
          type_of_account:"individual",
          device_token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjM4MywiaWF0IjoxNjU1ODc2MjkzLCJleHAiOjE2ODc0MTIyOTMsImF1ZCI6IiIsImlzcyI6InNjcmVlbml0YXBpIiwianRpIjoiNjg3NDQxZDQtNjcxYy00NWZkLTk5MTAtNzFjMjk4M2YzMTFlIn0.166HMtTVF8wuGBHsdL6dZxOgdc8ItlgSJ8z3yluSFno"
          }
      };

     setLoading(true)

     await axios.post('https://demo.screenit.io/api/login', req).then(
        (response) => {
          setLoading(false);
          //console.log(response)
          if (response.data.message === "Success") {
            ToastAndroid.showWithGravity(
              "Login successful",
              ToastAndroid.SHORT,
              ToastAndroid.CENTER
            );
            const accessToken = response.data.userdetail.password_access_token
            const userEmail = response.data.userdetail.user_email
            const userId = response.data.userdetail._id
            setUser(response.data.userdetail);
            setIsLoggedIn(true);

            // Alert.alert("Login successful", response.message);
             //do something
            //  setEmail({ ...email, value:"" })
            //  setPassword({ ...password, value:"" })
            //  setUserId(response.data.userdetail._id)

         navigation.navigate("Home")
        //   navigation.reset({
        //   index: 0,
        //   routes: [{ name: 'Home' }],
        // })
          }
          else if (response.data.message === "Invalid Password"){
            Alert.alert("Email and password does not match");
          }
          else if(response.data.message === "Invalid EmailID"){
            Alert.alert("User Doesnot exist please sign up");
            navigation.navigate("RegisterScreen")
          }
        },

        (err) => {
          setLoading(false)

          Alert.alert('Could not establish connection',err.message);
        },

      );

    }*/
  };

  // const getUserdetails=async (userId)=>{
  //   await axios.get("https://demo.screenit.io/api/profile/get_profile_details/"+userId)
  //     .then(function (response) {
  //         console.log(response);
  //     })
  //     .catch(function (error) {
  //         console.log(error);
  //     })
  // }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Welcome back.</Header>
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
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ResetPasswordScreen")}
        >
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Button
        mode="contained"
        onPress={
          () => {
            onLoginPressed(email.value, password.value);
            login(email.value, password.value);
          }
          //getUserdetails(userId)
        }
      >
        Login
      </Button>
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace("RegisterScreen")}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 24,
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
});
