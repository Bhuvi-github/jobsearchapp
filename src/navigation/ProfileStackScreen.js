import React,{useState,useEffect,useContext} from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, RegisterScreen,StartScreen } from "../screens";
import ProfileScreen from "../screens/ProfileScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import AuthContext from "../context/Authprovider";
import {firebase,db} from "../config"


const ProfileStack = createStackNavigator();
const ProfileStackScreen = ({ navigation }) => {
const {user,isLoggedIn} = useContext(AuthContext)
  
  // if (user) {
    return(
    <ProfileStack.Navigator
    >
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown:false}}
      />
      <ProfileStack.Screen
          name="EditProfile"
          component={EditProfileScreen}
          options={{headerShown:false}}
        />
    </ProfileStack.Navigator>
    )
    // }
    // else{
    //   return(
    //     <ProfileStack.Navigator>
    //   <ProfileStack.Screen
    //   name="StartScreen"
    //   component={StartScreen}
    //   options={{headerShown:false}}
    // />
    // <ProfileStack.Screen
    //   name="LoginScreen"
    //   component={LoginScreen}
    //   options={{headerShown:false}}
    // />
    //  <ProfileStack.Screen
    //   name="RegisterScreen"
    //   component={RegisterScreen}
    //   options={{headerShown:false}}
    // />
    // </ProfileStack.Navigator>
    //   )
    // }
  };
  
  export default ProfileStackScreen




  //Firebase code

   /* const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
  
    // Handle user state changes
    function onAuthStateChanged(user) {
      setUser(user);
      if (initializing) setInitializing(false);
    }
  
    useEffect(() => {
      const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber; // unsubscribe on unmount
    }, []);
  
    if (initializing) return null;
    if (user) {
    return(
    <ProfileStack.Navigator
    >
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown:false}}
      />
      <ProfileStack.Screen
          name="EditProfile"
          component={EditProfileScreen}
          options={{headerShown:false}}
        />
    </ProfileStack.Navigator>
    )
    }
    else{
      return(
        <ProfileStack.Navigator>
      <ProfileStack.Screen
      name="StartScreen"
      component={StartScreen}
      options={{headerShown:false}}
    />
    <ProfileStack.Screen
      name="LoginScreen"
      component={LoginScreen}
      options={{headerShown:false}}
    />
     <ProfileStack.Screen
      name="RegisterScreen"
      component={RegisterScreen}
      options={{headerShown:false}}
    />
    </ProfileStack.Navigator>
      )
    }*/