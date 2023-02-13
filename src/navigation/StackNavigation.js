import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import {LoginScreen, RegisterScreen,Dashboard,ResetPasswordScreen, StartScreen} from "../screens"
import Joblist from "../screens/JoblistScreen";
import BottomTabNavigator from "./TabNavigator"
import DetailScreen from "../screens/DetailScreen";


const Stack = createStackNavigator()

const StackNavigation=()=>{
    return(
        <Stack.Navigator
          initialRouteName="BottomTab"
          screenOptions={{
            headerShown: false,
          }}
        >
          {/* <Stack.Screen name="Tab" component={BottomTabNavigator} /> */}
          <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
          <Stack.Screen name="JobList" component={Joblist} />
          <Stack.Screen name="DetailScreen" component={DetailScreen} />
        </Stack.Navigator>
    )
}


export default StackNavigation;
