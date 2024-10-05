import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

interface TaskItemProps {
  title: string;
}

const TaskItem: React.FC<TaskItemProps> = ({ title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <AntDesign name="checksquareo" size={24} color="green" />
        <Text style={styles.title}>{title}</Text>
      </View>
      <AntDesign name="edit" size={24} color="red" />
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ccc",
    width: "90%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});
