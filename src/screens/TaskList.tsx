import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import Manager from "../components/Manager";
import TaskItem from "../components/TaskItem";
import { NavigationProp } from "@react-navigation/native";

interface TaskListProps {
  navigation: NavigationProp<any>;
  route: any;
}

interface Task {
  task: string;
  id: number;
}

const TaskList: React.FC<TaskListProps> = ({ navigation, route }) => {
  const { name } = route.params;

  const [taskList, setTaskList] = useState<Task[]>([]);

  // Get api data from https://66ff37f82b9aac9c997e8e03.mockapi.io/TaskList
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://66ff37f82b9aac9c997e8e03.mockapi.io/TaskList"
      );
      const data = await response.json();
      setTaskList(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [{}]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign
          name="arrowleft"
          size={24}
          color="black"
          onPress={() => navigation.navigate("Home")}
        />
        <View
          style={{
            width: "60%",
          }}
        >
          <Manager name={name} />
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
          data={taskList.length === 0 ? [] : taskList}
          renderItem={({ item }) => (
            <TaskItem task={item} navigation={navigation} name={name} />
          )}
        />
      </View>
      <TouchableOpacity
        style={styles.buttonAddTask}
        onPress={() => navigation.navigate("AddJob", { name })}
      >
        <AntDesign name="plus" size={32} color="white" />
      </TouchableOpacity>
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
  buttonAddTask: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#00BDD6",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 28,
  },
});
