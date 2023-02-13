import { useState, createContext,useContext,useEffect } from "react";
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Alert,
    ToastAndroid,
  } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage"
const AuthContext = createContext();

export const AuthProvider = ({children,navigation})=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({});
    const login=(email, password) => {
        // setIsloading(true)
        // const req = {
        //     formData:{ 
        //     user_email:email,
        //     user_password:password,
        //     type_of_account:"individual",
        //     device_token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjM4MywiaWF0IjoxNjU1ODc2MjkzLCJleHAiOjE2ODc0MTIyOTMsImF1ZCI6IiIsImlzcyI6InNjcmVlbml0YXBpIiwianRpIjoiNjg3NDQxZDQtNjcxYy00NWZkLTk5MTAtNzFjMjk4M2YzMTFlIn0.166HMtTVF8wuGBHsdL6dZxOgdc8ItlgSJ8z3yluSFno"
        //     }}
        // try {
        //     axios('https://demo.screenit.io/api/login', req).then(res => {
        //         //let auth = res.data.auth;
        //         console.log(res.data)
        //         let userData = res.data.userdetail;
        //         let token = res.data.userdetail.password_access_token;
        //         if (res.data.message === "Success") {
        //             AsyncStorage.setItem("Token", token);
        //             AsyncStorage.setItem("userID", JSON.stringify(userData.user_id));
        //             setUser(userData)
        //             setIsLoggedIn(true)
        //             Alert('success');

        //         } else if (res.data.message === "Invalid Password"){
        //             setIsLoggedIn(false)
        //             Alert.alert("Email and password does not match");
        //             }
        //         else if(res.data.message === "Invalid EmailID"){
        //             setIsLoggedIn(false)
        //             Alert.alert("User Doesnot exist please sign up");
        //             navigation.navigate("RegisterScreen")
        //         }
        //     })
        // } catch (err) {
        //     console.log("Error : ", err);
        //     setIsLoggedIn(false)
        // }
        if (email && password) {

            const req = {
                formData:{
                user_email:email,
                user_password:password,
                type_of_account:"individual",
                device_token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjM4MywiaWF0IjoxNjU1ODc2MjkzLCJleHAiOjE2ODc0MTIyOTMsImF1ZCI6IiIsImlzcyI6InNjcmVlbml0YXBpIiwianRpIjoiNjg3NDQxZDQtNjcxYy00NWZkLTk5MTAtNzFjMjk4M2YzMTFlIn0.166HMtTVF8wuGBHsdL6dZxOgdc8ItlgSJ8z3yluSFno"
                }
            };
      
           
      
          axios.post('https://demo.screenit.io/api/login', req).then(
              (response) => {
                //console.log(response)
                if (response.data.message === "Success") {
                  ToastAndroid.showWithGravity(
                    "Login successful",
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER
                  );
                  const accessToken = response.data.userdetail.token
                  console.log("accessToken", accessToken)
                  const userData = response.data.userdetail
                  console.log("user data", userData)
                  const userId = response.data.userdetail._id
                  console.log("User Id", userId)
                   AsyncStorage.setItem("Token", accessToken);
                   AsyncStorage.setItem("userID", JSON.stringify(userId));
                   AsyncStorage.setItem("userData", JSON.stringify(userData));
                  setUser(response.data.userdetail);
                  setIsLoggedIn(true);
      
                  // Alert.alert("Login successful", response.message);
                   //do something
                  //  setEmail({ ...email, value:"" })
                  //  setPassword({ ...password, value:"" })
                  //  setUserId(response.data.userdetail._id)
      
               navigation.navigate("Home")
              //   navigation.reset({
              //   index: 0,
              //   routes: [{ name: 'Home' }],
              // })
                }
                else if (response.data.message === "Invalid Password"){
                  Alert.alert("Email and password does not match");
                }
                else if(response.data.message === "Invalid EmailID"){
                  Alert.alert("User Doesnot exist please sign up");
                  navigation.navigate("RegisterScreen")
                }
              },
      
              (err) => {
                Alert.alert('Could not establish connection',err.message);
              },
      
            );
      
          }

    }
    const getUserData = async () => {
        try {
          const userDetails = await AsyncStorage.getItem("userData");
          setUser(userDetails);
        } catch (err) {
            setUser({});
        }
      };

      useEffect(() => {
        getUserData();
        console.log("the user data object is",user);
      }, []);

    return(
        <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn,
            user,
            setUser,login
           }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;