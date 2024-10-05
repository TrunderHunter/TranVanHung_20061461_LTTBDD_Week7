import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

const HomeScreen = () => {
  return (
    <View style={styles.homeScreenContainer}>
      <Image
        source={require("../assets/imgs/Image95.png")}
        style={styles.homeScreenImage}
      />
      <Text style={styles.homeScreenText}>Manage your task</Text>
      <View style={styles.inputContainer}>
        <FontAwesome
          name="envelope-o"
          size={24}
          color="black"
          style={styles.inputIcon}
        />
        <TextInput
          placeholder="Enter your name"
          style={styles.textInputStyle}
        />
      </View>
      <TouchableOpacity style={styles.getStartButton}>
        <Text
          style={styles.buttonText}
          onPress={() => console.log("Get Started")}
        >
          Get Started
        </Text>
        <AntDesign name="arrowright" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeScreenContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 82,
  },
  homeScreenImage: {
    width: 271,
    height: 271,
  },
  homeScreenText: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 42,
    textAlign: "center",
    color: "#8353E2",
    textTransform: "uppercase",
    paddingHorizontal: 100,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 20,
    marginTop: 60,
    marginHorizontal: 28,
  },
  inputIcon: {
    marginRight: 10,
  },
  textInputStyle: {
    height: 40,
    width: 300,
  },
  getStartButton: {
    backgroundColor: "#00BDD6",
    padding: 10,
    borderRadius: 12,
    width: 190,
    height: 44,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 110,
    marginHorizontal: 100,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    textTransform: "uppercase",
    marginRight: 4,
  },
});
