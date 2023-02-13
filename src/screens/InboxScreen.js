import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Button } from "react-native";
import axios from "axios";

// "formData":
//         {
//                 "user_id":491,
//                 "sort":7,
//                 "startdate":"2020-01-01",
//                 "enddate":"2020-03-30",
//                 "search":"",
// "bookmark":"no",
// "skip":0
//         }
// }

const getPost = () => {
  axios
    .get("https://demo.screenit.io/api/dashboard/get_company_list", {
      headers: {
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjM5OCwiaWF0IjoxNjU2NDg2MzcyLCJleHAiOjE2ODgwMjIzNzIsImF1ZCI6IiIsImlzcyI6InNjcmVlbml0YXBpIiwianRpIjoiYzliODZlOGMtYzg5Zi00OGQ3LTlhNDYtYzQ5NmZiYWFlM2EyIn0.lB0VP9Zk1D-jZIjgt1N-ER5jyR9Ls2--Z9UHzgIKIQE",
      },
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

const InboxScreen = () => {
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
        Inbox Screen
      </Text>
      <Button title="display" onPress={getPost()} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default InboxScreen;
