import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Manager = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/imgs/avatar.png")}
        style={styles.avatar}
      />
      <View style={styles.info}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Manager
        </Text>
        <Text
          style={{
            color: "gray",
            fontWeight: "bold",
          }}
        >
          Have agrate day a head!
        </Text>
      </View>
    </View>
  );
};

export default Manager;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  info: {
    marginLeft: 10,
  },
});
