import React,{useState,useEffect} from "react";
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { RFValue } from "react-native-responsive-fontsize";
// import EditProfileScreen from "../screens/EditProfileScreen";
// import ProfileScreen from "../screens/ProfileScreen";
// import StackNavigation from "./StackNavigation";
import ApplyScreen from "../screens/ApplyScreen";
// import { LoginScreen, RegisterScreen,StartScreen } from "../screens";
// import Joblist from "../screens/JoblistScreen";
// import DetailScreen from "../screens/DetailScreen";
import {firebase,db} from "../config";
import HomeStackScreen from "./HomeStackScreen";
import ProfileStackScreen from "./ProfileStackScreen";
import InboxScreen from "../screens/InboxScreen";
// const ProfileStack = createStackNavigator();
// const HomeStack = createStackNavigator();

// const HomeStackScreen = ({ navigation }) => {
  
// //   firebase.auth().onAuthStateChanged((user) => {
// //     if (user) {
// //       console.log('user logged')
// //     }
// //  });
// // const user = firebase.auth().currentUser;
// const [initializing, setInitializing] = useState(true);
//   const [user, setUser] = useState();

//   // Handle user state changes
//   function onAuthStateChanged(user) {
//     setUser(user);
//     if (initializing) setInitializing(false);
//   }

//   useEffect(() => {
//     const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber; // unsubscribe on unmount
//   }, []);

//   if (initializing) return null;
//   if (user) {
//     return(
//       <HomeStack.Navigator>
//       <HomeStack.Screen
//         name="Joblist"
//         component={Joblist}
//         options={{headerShown:false}}
//       />
//       <HomeStack.Screen
//         name="DetailScreen"
//         component={DetailScreen}
//         options={{headerShown:false}}
//       />
//     </HomeStack.Navigator>
//       )
//   }
//   else{
//     return(
//       <HomeStack.Navigator>
//     <HomeStack.Screen
//     name="StartScreen"
//     component={StartScreen}
//     options={{headerShown:false}}
//   />
//   <HomeStack.Screen
//     name="LoginScreen"
//     component={LoginScreen}
//     options={{headerShown:false}}
//   />
//    <HomeStack.Screen
//     name="RegisterScreen"
//     component={RegisterScreen}
//     options={{headerShown:false}}
//   />
//   </HomeStack.Navigator>
//     )
//   } 
// };


// const ProfileStackScreen = ({ navigation }) => {
//   const [initializing, setInitializing] = useState(true);
//   const [user, setUser] = useState();

//   // Handle user state changes
//   function onAuthStateChanged(user) {
//     setUser(user);
//     if (initializing) setInitializing(false);
//   }

//   useEffect(() => {
//     const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber; // unsubscribe on unmount
//   }, []);

//   if (initializing) return null;
//   if (user) {
//   return(
//   <ProfileStack.Navigator
//   >
//     <ProfileStack.Screen
//       name="Profile"
//       component={ProfileScreen}
//       options={{headerShown:false}}
//     />
//     <ProfileStack.Screen
//         name="EditProfile"
//         component={EditProfileScreen}
//         options={{headerShown:false}}
//       />
//   </ProfileStack.Navigator>
//   )
//   }
//   else{
//     return(
//       <ProfileStack.Navigator>
//     <ProfileStack.Screen
//     name="StartScreen"
//     component={StartScreen}
//     options={{headerShown:false}}
//   />
//   <ProfileStack.Screen
//     name="LoginScreen"
//     component={LoginScreen}
//     options={{headerShown:false}}
//   />
//    <ProfileStack.Screen
//     name="RegisterScreen"
//     component={RegisterScreen}
//     options={{headerShown:false}}
//   />
//   </ProfileStack.Navigator>
//     )
//   }
// };



const Tab = createMaterialBottomTabNavigator();
const BottomTabNavigator = () => {
    return (
      <Tab.Navigator
        labeled={false}
        barStyle={styles.bottomTabStyle}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            }else if (route.name === "Apply") {
              iconName = focused ? "navigate" : "navigate-outline";
            } 
            else if (route.name === "Inbox") {
              iconName = focused ? "ios-chatbox-ellipses" : "ios-chatbox-ellipses-outline";
            } 
            else if (route.name === "ProfileStack") {
                iconName = focused ? "person-circle" : "person-circle-outline";
              }
            return (
              <Ionicons
                name={iconName}
                size={RFValue(25)}
                color={color}
                style={styles.icons}
              />
            );
          }
        })}
        activeColor={"#751a93"}
        inactiveColor={"gray"}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Apply" component={ApplyScreen} />
        <Tab.Screen name="Inbox" component={InboxScreen} />
        <Tab.Screen name="ProfileStack" component={ProfileStackScreen} />
      </Tab.Navigator>
    );
  };




  const styles = StyleSheet.create({
    bottomTabStyle: {
      backgroundColor: "#ffffff",
      height: "8%",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      overflow: "hidden",
      position: "absolute"
    },
    icons: {
      width: RFValue(30),
      height: RFValue(30)
    }
  });
  
  export default BottomTabNavigator;