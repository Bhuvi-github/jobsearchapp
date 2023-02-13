import React, { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { Card } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import { SearchBar } from "@rneui/themed";
import users from "../data";
import AuthContext from "../context/Authprovider";
//import userData from '../userData';
import { firebase, db } from "../config";

const Joblist = ({ navigation }) => {
  const { user } = useContext(AuthContext);
  const [search, setSearch] = useState("");
  const updateSearch = (search) => {
    setSearch(search);
  };
  console.log(user);

  return (
    <View>
      {/* <SafeAreaView style={styles.droidView}/> */}
      <SearchBar
        placeholder="Search jobs Here..."
        onChangeText={updateSearch}
        value={search}
        round
        lightTheme
        containerStyle={{
          width: "90%",
          marginLeft: RFValue(20),
          borderWidth: 0,
          borderRadius: 80,
        }}
        inputContainerStyle={{ backgroundColor: "white", borderRadius: 60 }}
      />
      {/* <View style={{flexDirection:"row",marginLeft:20,backgroundColor:"#e5e0e0",borderRadius:20}}>
                                <Ionicons
                                    name="search"
                                    size={RFValue(30)}
                                    color="#000000"
                                    style={{paddingTop:5,}}
                                />
            <Text style={{fontSize:30,color:"#751a93",paddingHorizontal:10,fontWeight:"bold"}}>Job Search</Text>
            </View> */}
      <View>
        <FlatList
          style={{ marginBottom: "40%" }}
          data={users}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("DetailScreen", item);
                }}
              >
                <Card style={styles.cardStyle}>
                  <View
                    key={index}
                    style={{
                      marginHorizontal: 10,
                      marginVertical: 15,
                      justifyContent: "space-evenly",
                    }}
                  >
                    <Text style={styles.job}>{item.job}</Text>
                    <Text style={styles.company}>{item.company}</Text>
                    <View style={{ flexDirection: "row", marginTop: 3 }}>
                      <Ionicons
                        name="star"
                        size={RFValue(10)}
                        color="#f7bd4a"
                        style={styles.icons}
                      />
                      <Text style={styles.rating}>{item.rating}</Text>
                      <Text style={styles.review}>({item.review} Reviews)</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 3 }}>
                      <Ionicons
                        name="location-outline"
                        size={RFValue(10)}
                        color="#726f6f"
                        style={[styles.icons, { marginTop: 2 }]}
                      />
                      <Text style={styles.sub}>{item.location}</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 3 }}>
                      <Ionicons
                        name="briefcase-outline"
                        size={RFValue(10)}
                        color="#726f6f"
                        style={[styles.icons, { marginTop: 2 }]}
                      />
                      <Text style={styles.sub}>{item.experience}</Text>
                    </View>
                    <Text style={styles.sub2}>{item.skills}</Text>
                    <Text style={styles.sub2}>{item.postDays} days ago</Text>
                  </View>
                </Card>
              </TouchableOpacity>
            );
          }}
          // keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    marginTop: 5,
    marginHorizontal: 30,
    borderRadius: 15,
  },
  droidView: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  job: {
    fontSize: 15,
  },
  company: {
    fontSize: 12,
    marginVertical: 3,
  },
  rating: {
    paddingHorizontal: 2,
    fontSize: 10,
    color: "#a39e9e",
  },
  review: {
    paddingHorizontal: 2,
    fontSize: 10,
    color: "#a39e9e",
  },
  sub: {
    fontSize: 12,
    paddingHorizontal: 2,
    color: "#726f6f",
  },
  sub2: {
    fontSize: 10,
    paddingHorizontal: 2,
    color: "#726f6f",
    marginTop: 2,
  },
  icons: {
    width: RFValue(10),
    height: RFValue(10),
  },
});

export default Joblist;
