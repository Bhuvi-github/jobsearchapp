import React, { useState } from "react";
import Background from "../components/Background";
import BackButton from "../components/BackButton";
import Logo from "../components/Logo";
import Header from "../components/Header";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { emailValidator } from "../helpers/emailValidator";
import axios from "axios";

const ResetPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState({ value: "", error: "" });

  const sendResetPasswordEmail = (email) => {
    const emailError = emailValidator(email);
    if (emailError) {
      setEmail({ ...email, error: emailError });
      return;
    }

    const req = {
      formData: {
        user_email: email,
        type_of_account: "individual",
      },
    };

    axios
      .post(
        "https://demo.screenit.io/api//email/update/user/using/email/mobile_new",
        req
      )
      .then(
        (response) => {
          console.log(response);
          console.log(response.data.userdetail.user_email);
          console.log(response.data.userdetail._id);
          console.log(response.data.userdetail.password_access_token);
          if (response.data.message === "Success") {
            navigation.navigate("ChangePassword", {
              user_email: response.data.userdetail.user_email,
              user_id: response.data.userdetail._id,
              password_access_token:
                response.data.userdetail.password_access_token,
              old_password: response.data.userdetail.user_password,
            });
          }
        },

        (err) => {
          Alert.alert("Could not establish connection", err.message);
        }
      );
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Restore Password</Header>
      <TextInput
        label="E-mail address"
        returnKeyType="done"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        description="You will receive email with password reset link."
      />
      <Button
        mode="contained"
        onPress={() => {
          sendResetPasswordEmail(email.value);
        }}
        style={{ marginTop: 16 }}
      >
        Send
      </Button>
    </Background>
  );
};

export default ResetPasswordScreen;
