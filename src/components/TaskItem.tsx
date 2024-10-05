import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { NavigationProp } from "@react-navigation/native";

interface Task {
  task: string;
  id: number;
}

interface TaskItemProps {
  task: Task;
  name: string;
  navigation: NavigationProp<any>;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, navigation, name }) => {
  const handleEditJob = () => {
    console.log("Edit job", task);
    navigation.navigate("AddJob", { task, name });
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <AntDesign name="checksquareo" size={24} color="green" />
        <Text style={styles.title}>{task.task}</Text>
      </View>
      <AntDesign name="edit" size={24} color="red" onPress={handleEditJob} />
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
    width: "80%",
  },
});
