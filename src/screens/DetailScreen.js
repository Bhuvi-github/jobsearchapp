import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  SafeAreaView,
  FlatList,
  StatusBar,
  Platform,
  Image,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Tab, TabView, Card } from "@rneui/themed";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { RFValue } from "react-native-responsive-fontsize";
import BackButton from "../components/BackButton";
import Unorderedlist from "react-native-unordered-list";
import users from "../data";

const TopTab = createMaterialTopTabNavigator();

// const TopTabNavigator = (data) => {
//   return (
//     <TopTab.Navigator
//       screenOptions={{
//         tabBarActiveTintColor: "#000",
//         tabBarIndicatorStyle: { color: "orange" },
//         tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" },
//         tabBarStyle: { backgroundColor: "#e0dfdb" },
//         tabBarScrollEnabled: true,
//       }}
//     >
//       <TopTab.Screen name="Job Details" component={Jobdetails} />
//       <TopTab.Screen name="About Company" component={Jobdetails} />
//       <TopTab.Screen name="Reviews" component={Jobdetails} />
//       <TopTab.Screen name="Benifits" component={Jobdetails} />
//     </TopTab.Navigator>
//   );
// };

const DetailScreen = ({ navigation, route }) => {
  const [index, setIndex] = React.useState(0);
  const data = route.params;
  //console.log(navigation)

  const Jobdetails = () => {
    return (
      <View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: "5%" }}
        >
          <Card
            containerStyle={{ borderRadius: 10 }}
            wrapperStyle={{
              width: RFValue(250),
              //height: RFValue(90),
              flexGrow: 1,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Ionicons
                name="briefcase-outline"
                size={RFValue(12)}
                color="#c9c3c3"
                style={styles.icons}
              />
              <Text style={{ marginLeft: RFValue(5) }}>
                {data.experience} Years
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Ionicons
                name="people-sharp"
                size={RFValue(12)}
                color="#c9c3c3"
                style={styles.icons}
              />
              <Text style={{ marginLeft: RFValue(5) }}>
                {data.opening} opening
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Ionicons
                name="location-outline"
                size={RFValue(12)}
                color="#c9c3c3"
                style={styles.icons}
              />
              <Text style={{ marginLeft: RFValue(5) }}>{data.location} </Text>
            </View>
            <Text style={{ color: "#c9c3c3" }}>Must have key skills</Text>
            <Text>{data.skills}</Text>
          </Card>
          <Text
            style={{
              fontSize: RFValue(15),
              fontWeight: "bold",
              marginLeft: RFValue(17),
              marginTop: RFValue(10),
            }}
          >
            Job Description
          </Text>
          <Card
            containerStyle={{ borderRadius: 10 }}
            wrapperStyle={{
              width: RFValue(250),

              flexGrow: 1,
            }}
          >
            <Unorderedlist bulletUnicode={0x2023}>
              <Text style={{ fontSize: RFValue(13), textAlign: "left" }}>
                Hands-on experience in building apps and web applications using
                ReactJS and React-Native (1+ Years)
              </Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2023}>
              <Text style={{ fontSize: RFValue(13), textAlign: "left" }}>
                Ensuring the best performance and user experience of the
                application
              </Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2023}>
              <Text style={{ fontSize: RFValue(13), textAlign: "left" }}>
                Cooperating with back-end developers, designers, and the rest of
                the team to deliver well-architected and high-quality solutions.
              </Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2023}>
              <Text style={{ fontSize: RFValue(13), textAlign: "left" }}>
                Knowledge on native android and iOS development would be an
                added advantage.
              </Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2023}>
              <Text style={{ fontSize: RFValue(13), textAlign: "left" }}>
                In-depth understanding of software development methods and
                terminologies
              </Text>
            </Unorderedlist>
          </Card>
        </ScrollView>
      </View>
    );
  };

  const AboutCompany = () => {
    return (
      <View>
        <Text
          style={{
            fontSize: RFValue(15),
            fontWeight: "bold",
            marginLeft: RFValue(17),
            marginTop: RFValue(10),
          }}
        >
          About Company
        </Text>
        <Card
          containerStyle={{ borderRadius: 10 }}
          wrapperStyle={{
            flexGrow: 1,
          }}
        >
          <Text>
            Truetech solutions is a Chennai, India-based technical staffing &
            recruitment services company.With a strong emphasis on the IT
            sector, we deliver a broad range of recruitment solutions and
            services to our customers. We aspire to achieve the role of Trusted
            partner with all our clients through our dedicated & reliable
            service. Our business focus is on achieving the rising requirements
            for recruitment.
          </Text>
          <View style={{ flexDirection: "row", marginTop: "10%" }}>
            <Text style={{ color: "#726f6f" }}>Company</Text>
            <Text style={{ marginHorizontal: RFValue(20) }}>
              {data.company}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "#726f6f" }}>Website</Text>
            <Text style={{ marginHorizontal: RFValue(30) }}>
              {data.website}
            </Text>
          </View>
        </Card>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.droidSafeArea} />
      {/* <ScrollView showsVerticalScrollIndicator={false}>*/}
      <BackButton goBack={navigation.goBack} />
      {/* {console.log(data)} */}
      <Image source={{ uri: data.url }} style={{ width: 100, height: 100 }} />
      <Text style={styles.jobname}>{data.job}</Text>
      <Text style={{ marginTop: RFValue(3) }}>{data.company}</Text>
      <View style={{ flexDirection: "row", marginTop: RFValue(3) }}>
        <Ionicons
          name="star"
          size={RFValue(12)}
          color="#f7bd4a"
          style={styles.icons}
        />
        <Text style={styles.rating}>{data.rating}</Text>
        <Text style={styles.review}>({data.review} Reviews)</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: RFValue(3),
        }}
      >
        <Text>{data.applicants} applicants</Text>
        <Text>Posted {data.postDays} days ago</Text>
      </View>
      {/* </ScrollView> */}
      {/* <TopTabNavigator /> */}
      <TopTab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#000",
          tabBarIndicatorStyle: { color: "orange" },
          tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" },
          tabBarStyle: { backgroundColor: "#e0dfdb" },
          tabBarScrollEnabled: true,
        }}
      >
        <TopTab.Screen name="Job Details" component={Jobdetails} />
        <TopTab.Screen name="About Company" component={AboutCompany} />
        <TopTab.Screen name="Reviews" component={Jobdetails} />
        <TopTab.Screen name="Benifits" component={Jobdetails} />
      </TopTab.Navigator>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: "5%",
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  tabItemTitleStyle: {
    fontSize: 12,
    color: "black",
  },
  icons: {
    width: RFValue(15),
    height: RFValue(15),
    paddingTop: RFValue(1.5),
    // marginTop:RFValue(2)
  },
  rating: {
    // marginLeft:RFValue(1),
    fontSize: RFValue(12),
    color: "#000",
  },
  review: {
    marginHorizontal: RFValue(12),
    fontSize: RFValue(12),
    color: "#097af2",
  },
  jobname: {
    fontSize: RFValue(20),
    fontWeight: "bold",
    marginTop: RFValue(3),
  },
});
