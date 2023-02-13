import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import Joblist from "../screens/JoblistScreen";
import ProfileScreen from "../screens/ProfileScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import BottomTabNavigator from "./TabNavigator";
import StackNavigation from "./StackNavigation";
import { TouchableOpacity } from "react-native-gesture-handler";
import { createStackNavigator } from '@react-navigation/stack';
import ProfileStackScreen from "./ProfileStackScreen";
import InboxScreen from "../screens/InboxScreen";
const Drawer = createDrawerNavigator();
// const HomeStack = createStackNavigator();
// const ProfileStack = createStackNavigator();

// const HomeStackScreen = ({ navigation }) => (
//   <HomeStack.Navigator
//   >
//     <HomeStack.Screen
//       name="Home"
//       component={BottomTabNavigator}
//       // options={{
//       //   headerLeft: () => (
//       //     <Icon.Button
//       //       name="ios-menu"
//       //       size={25}
//       //       backgroundColor="#009387"
//       //       onPress={() => navigation.toggleDrawer()}
//       //     ></Icon.Button>
//       //   ),
//       // }}
//     />
//   </HomeStack.Navigator>
// );
// const ProfileStackScreen = ({ navigation }) => (
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
// );



const DrawerNavigation = ({ navigation }) => {
  return (
    <Drawer.Navigator initialRouteName="Drawer" screenOptions={{headerShown:false}}>
      <Drawer.Screen
        name="Drawer"
        component={StackNavigation}
      />
      <Drawer.Screen name="Joblist" component={Joblist} />
      <Drawer.Screen name="Inbox" component={InboxScreen} />
      <Drawer.Screen name="Profile" component={ProfileStackScreen} />
      
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
