import React, { useState } from "react";

import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import { SearchBar } from "@rneui/themed";
import TextInput from "../components/TextInput";
import { ScrollView } from "react-native-gesture-handler";

export default function StartScreen({ navigation }) {
  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };
  return (
    <View>
      <SafeAreaView style={styles.droidView} />
      <KeyboardAvoidingView behavior="padding">
        <ScrollView>
          {/* <View style={{flexDirection:"row",width:"75%",height:"15%",backgroundColor:"#e5e3e3",marginHorizontal:50,borderRadius:30}}>
      <Ionicons
         name="search-outline"
          size={RFValue(35)}
          color="#726f6f"
          //style={[styles.icons,{marginTop:2}]}
           />
           <Text style={{alignSelf:"center",fontWeight:"bold",color:"#726f6f"}}>Search Jobs</Text>
      </View> */}
          <SearchBar
            placeholder="Search jobs Here..."
            onChangeText={updateSearch}
            value={search}
            round
            lightTheme
            containerStyle={{
              width: "85%",
              marginLeft: RFValue(40),
              borderWidth: 0,
              borderRadius: 80,
            }}
            inputContainerStyle={{ backgroundColor: "white", borderRadius: 60 }}
          />
          <View style={{ backgroundColor: "#fff" }}>
            <View
              style={{
                flexDirection: "row",
                marginHorizontal: RFValue(30),
                marginTop: 20,
              }}
            >
              <Ionicons
                name="star"
                size={RFValue(25)}
                color="#f7bd4a"
                //style={[styles.icons,{marginTop:2}]}
              />
              <Text
                style={{
                  alignSelf: "center",
                  fontWeight: "bold",
                  color: "#000",
                  fontSize: RFValue(12),
                }}
              >
                Get Discovered directly by Recruiters
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginHorizontal: RFValue(30),
                marginTop: 20,
              }}
            >
              <Ionicons
                name="star"
                size={RFValue(25)}
                color="#f7bd4a"
                //style={[styles.icons,{marginTop:2}]}
              />
              <Text
                style={{
                  alignSelf: "center",
                  fontWeight: "bold",
                  color: "#000",
                  fontSize: RFValue(12),
                }}
              >
                Find relevantjob recommendations
              </Text>
            </View>

            <View style={{ flexDirection: "row", marginVertical: RFValue(40) }}>
              <TouchableOpacity
                style={styles.buttonstyle1}
                onPress={() => navigation.navigate("LoginScreen")}
              >
                <Text style={styles.text}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonstyle1}
                onPress={() => navigation.navigate("RegisterScreen")}
              >
                <Text style={styles.text}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{ backgroundColor: "#fff", marginVertical: RFValue(10) }}
          >
            <Image
              source={require("../assets/logo.png")}
              style={{
                justifyContent: "center",
                alignSelf: "center",
                width: 100,
                height: 100,
              }}
            />
            <Text style={styles.text2}>Find your Dream Job</Text>
            <View style={{ marginHorizontal: "10%" }}>
              <TextInput
                label="Enter Skills,Designations, Companies"

                // returnKeyType="done"
                //value={password.value}
                //onChangeText={(text) => setPassword({ ...password, value: text })}
                //error={!!password.error}
                //errorText={password.error}
                //secureTextEntry
              />
              <TextInput label="Enter Location" />
            </View>
            <TouchableOpacity
              style={styles.buttonstyle2}
              // onPress={() => navigation.navigate('RegisterScreen')}
            >
              <Text style={styles.text}>Search</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    fontSize: RFValue(15),
    color: "white",
    justifyContent: "center",
    alignSelf: "center",
  },
  text2: {
    fontWeight: "bold",
    fontSize: RFValue(18),
    color: "#000",
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonstyle1: {
    width: "30%",
    height: RFValue(50),
    borderRadius: 50,
    backgroundColor: "#751a93",
    justifyContent: "center",
    marginHorizontal: RFValue(30),
  },

  buttonstyle2: {
    width: RFValue(100),
    height: RFValue(30),
    borderRadius: 50,
    backgroundColor: "#751a93",
    justifyContent: "center",
    alignSelf: "center",
  },
  droidView: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
