import React, { useState,useContext } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Button } from "react-native";
import AuthContext from "../context/Authprovider";

const HomeScreen = ({ navigation }) => {
    const { setIsLoggedIn, setUser, user, login } = useContext(AuthContext);
  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          justifyContent: "center",
          alignSelf: "center",
          marginTop: "50%",
        }}
      >Hi!!! {user.first_name.toUpperCase()}
        Job Search Screen
      </Text>
      <Button
        title="Go to job list"
        onPress={() => navigation.navigate("JobList")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
