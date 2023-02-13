import React, { useEffect, useState, useContext } from "react";
import {
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  Alert,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "react-native-paper";
import { Avatar, Title, Caption } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AuthContext from "../context/Authprovider";
import axios from "axios";

const ProfileScreen = ({ navigation, route }) => {
  // const [image, setImage] = useState(
  //   "https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?b=1&k=20&m=476085198&s=170667a&w=0&h=Ct4e1kIOdCOrEgvsQg4A1qeuQv944pPFORUQcaGw4oI="
  // );
  const { user, isLoggedIn } = useContext(AuthContext);
  console.log(user);
  const signOut = (userid, usertoken) => {
    axios
      .get(`https://demo.screenit.io/api/logout/${userid}`, {
        headers: { Authorization: "Bearer " + usertoken },
      })
      .then(
        (response) => {
          console.log(response);
        },
        (err) => {
          Alert.alert("Could not establish connection", err.message);
        }
      );
  };
  return (
    <View>
      <SafeAreaView style={styles.droidSafeArea} />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10%",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
          <Avatar.Image source={user.profile_picture} size={100} />
        </TouchableOpacity>
        <Title
          style={[
            styles.title,
            {
              marginTop: 15,
              marginBottom: 5,
            },
          ]}
        >
          {user.first_name}
        </Title>
        <Caption style={styles.caption}>{user.email}</Caption>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>Location</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>
            {user.mobile_number}
          </Text>
          <View style={{ marginTop: "10%" }}>
            <Button
              title="logout"
              onPress={() => {
                // firebase.auth().signOut()
                signOut(user._id, user.token);
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === "android"
        ? StatusBar.currentHeight + RFValue(15)
        : RFValue(35),
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
});

export default ProfileScreen;

// const [user] = userData();
// const previewImage = JSON.stringify(user.profilePic)
// const [image,setImage] = useState({value:previewImage})
// const [userEmail, setUserEmail] = useState(firebase.auth().currentUser.email)
// useEffect(()=>{
//   db.collection("users").doc(userEmail).get().then(snapshot => {
//     snapshot.forEach(doc => {
//     var data = doc.data()
//      setImage(data.profilePicture)
//     });
//   })
//   console.log(image)
// })

// React.useEffect(() => {
//   if (route.params?.imageUrl) {
//     console.log(imageUrl)
//   }
// }, [route.params?.imageUrl]);
//  console.log(previewImage)
//console.log(image.value)
