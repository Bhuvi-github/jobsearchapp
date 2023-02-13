import React,{useState,useEffect, useContext} from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, RegisterScreen,StartScreen} from "../screens";
import VerifyOtp from "../screens/OtpVerification";
import ChangePassword from "../screens/ChangePassword";
import ResetPasswordScreen  from "../screens/ResetPasswordScreen";
import HomeScreen from "../screens/HomeScreen";
import Joblist from "../screens/JoblistScreen";
import DetailScreen from "../screens/DetailScreen";
import {firebase,db} from "../config"
import AuthContext from "../context/Authprovider";

const HomeStack = createStackNavigator();

const HomeStackScreen = ({ navigation }) => {
  const {user,isLoggedIn} = useContext(AuthContext)
     
        if(isLoggedIn){
          return(
          <HomeStack.Navigator>
        <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown:false}}
      />
          </HomeStack.Navigator>
          )
        }

        else{
          return(
        <HomeStack.Navigator>
        <HomeStack.Screen
        name="StartScreen"
        component={StartScreen}
        options={{headerShown:false}}
      />
      <HomeStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown:false}}
      />
      <HomeStack.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
        options={{headerShown:false}}
      />
       <HomeStack.Screen
        name="VerifyOtp"
        component={VerifyOtp}
        options={{headerShown:false}}
      />
       <HomeStack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{headerShown:false}}
      />
      
       <HomeStack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{headerShown:false}}
      />
      
        {/* <HomeStack.Screen
          name="JobList"
          component={Joblist}
          options={{headerShown:false}}
        />
        <HomeStack.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={{headerShown:false}}
        /> */}
        
      </HomeStack.Navigator>
      )
        }
    };
    
export default HomeStackScreen




//Firebase code
    /*const [initializing, setInitializing] = useState(true);
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
          <HomeStack.Navigator>
          <HomeStack.Screen
            name="Joblist"
            component={Joblist}
            options={{headerShown:false}}
          />
          <HomeStack.Screen
            name="DetailScreen"
            component={DetailScreen}
            options={{headerShown:false}}
          />
        </HomeStack.Navigator>
          )
      }
      else{
        return(
          <HomeStack.Navigator>
        <HomeStack.Screen
        name="StartScreen"
        component={StartScreen}
        options={{headerShown:false}}
      />
      <HomeStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown:false}}
      />
       <HomeStack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{headerShown:false}}
      />
      </HomeStack.Navigator>
        )
      } */