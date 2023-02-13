//react native elements tab view for details screen
{
  /* <View style={{marginTop:RFValue(3)}}> */
}
{
  /* <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false}> */
}
<Tab
  value={index}
  onChange={(e) => setIndex(e)}
  variant="default"
  indicatorStyle={{
    backgroundColor: "orange",
    height: 2,
  }}
  containerStyle={{
    backgroundColor: "#e0dfdb",
    borderRadius: 10,
    marginTop: RFValue(3),
  }}
  scrollable={true}
>
  <Tab.Item title="Job Details" titleStyle={styles.tabItemTitleStyle} />
  <Tab.Item title="About Company" titleStyle={styles.tabItemTitleStyle} />
  <Tab.Item title="Reviews" titleStyle={styles.tabItemTitleStyle} />
  <Tab.Item title="Benefits" titleStyle={styles.tabItemTitleStyle} />
</Tab>;
{
  /* </ScrollView> */
}

<TabView value={index} onChange={setIndex} animationType="spring">
  <TabView.Item>{/* Job details card*/}</TabView.Item>

  <TabView.Item>
    <Text style={{ fontWeight: "bold", fontSize: RFValue(20) }}>
      Job Description
    </Text>
  </TabView.Item>
  <TabView.Item>
    <Text h1>Cart</Text>
  </TabView.Item>
</TabView>;


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

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const { setIsLoggedIn, setUser, user, login } = useContext(AuthContext);
  const onLoginPressed = async (email, password) => {
    const emailError = emailValidator(email);
    const passwordError = passwordValidator(password);
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }
  }
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
