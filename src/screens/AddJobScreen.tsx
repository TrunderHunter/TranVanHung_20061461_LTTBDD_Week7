import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";
import Manager from "../components/Manager";

interface AddJobScreenProps {
  navigation: any;
  route: any;
}

const AddJobScreen: React.FC<AddJobScreenProps> = ({ navigation, route }) => {
  const { name, task } = route.params;
  const [job, setJob] = useState("");

  const addJobApi = async () => {
    try {
      const response = await fetch(
        "https://66ff37f82b9aac9c997e8e03.mockapi.io/TaskList",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            task: job,
          }),
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const editJobApi = async (id: any, task: any) => {
    try {
      const response = await fetch(
        `https://66ff37f82b9aac9c997e8e03.mockapi.io/TaskList/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            task,
          }),
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (task) {
      setJob(task.task);
    }
  }, [route.params?.task]);

  const handleEditJob = () => {
    if (job === "") {
      return;
    }
    alert("Job edited successfully!");
    editJobApi(task.id, job);
    setJob("");
    navigation.navigate("TaskList", { name });
  };

  const handleAddJob = () => {
    if (job === "") {
      return;
    }
    alert("Job added successfully!");
    addJobApi();
    setJob("");
    navigation.navigate("TaskList", { name });
  };

  const handleFinish = () => {
    if (task) {
      handleEditJob();
    } else {
      handleAddJob();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            width: "60%",
          }}
        >
          <Manager name={name} />
        </View>
        <AntDesign
          name="arrowleft"
          size={24}
          color="black"
          onPress={() => navigation.navigate("TaskList", { name })}
        />
      </View>
      <Text style={styles.headingText}>
        {task ? "Edit your Job" : "Add your Job"}
      </Text>
      <View style={styles.inputContainer}>
        <Entypo
          name="text-document"
          size={24}
          color="green"
          style={styles.inputIcon}
        />
        <TextInput
          placeholder="Input your job"
          style={styles.textInputStyle}
          value={job}
          onChangeText={(job) => setJob(job)}
        />
      </View>
      <TouchableOpacity style={styles.getFinishButton} onPress={handleFinish}>
        <Text style={styles.buttonText}>Finish</Text>
        <AntDesign name="arrowright" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default AddJobScreen;

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
    marginBottom: 30,
  },
  headingText: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 20,
    textTransform: "uppercase",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
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
  getFinishButton: {
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
