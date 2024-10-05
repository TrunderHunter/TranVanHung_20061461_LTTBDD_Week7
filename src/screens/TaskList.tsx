import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import Manager from "../components/Manager";
import TaskItem from "../components/TaskItem";

const TaskList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="arrowleft" size={24} color="black" />
        <View
          style={{
            width: "60%",
          }}
        >
          <Manager />
        </View>
      </View>
      <View style={styles.textInputContainer}>
        <FontAwesome name="search" size={24} color="black" />
        <TextInput
          placeholder="Search"
          style={{
            marginLeft: 10,
            fontSize: 16,
          }}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",

          width: "80%",
          height: "53%",
        }}
      >
        <FlatList
          style={styles.taskList}
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
          }}
          showsVerticalScrollIndicator={false}
          data={[
            { key: "Task 1" },
            { key: "Task 2" },
            { key: "Task 3" },
            { key: "Task 4" },
            { key: "Task 5" },
            { key: "Task 6" },
            { key: "Task 7" },
            { key: "Task 8" },
            { key: "Task 9" },
            { key: "Task 10" },
          ]}
          renderItem={({ item }) => <TaskItem title={item.key} />}
        />
      </View>
    </View>
  );
};

export default TaskList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    paddingBottom: 10,
  },
  textInputContainer: {
    width: "90%",
    marginTop: 20,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 10,
    paddingVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#9095A0",
  },
  taskList: {
    width: "90%",
    marginTop: 30,
    alignContent: "center",
  },
});
