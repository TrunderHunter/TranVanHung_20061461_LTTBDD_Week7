import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import FlatListItem from "./src/Components/FlatListItem";

interface User {
  name: string;
  age: string;
  id: string;
  fetchData: () => Promise<void>;
}

export default function App() {
  const [dataList, setDataList] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [userIdUpdate, setUserIdUpdate] = useState("");

  // Get api from https://66ff37f82b9aac9c997e8e03.mockapi.io/user
  const fetchData = async () => {
    const response = await fetch(
      "https://66ff37f82b9aac9c997e8e03.mockapi.io/user"
    );
    const data = await response.json();
    setDataList(data);
  };

  const createUserApi = async (name: string, age: string) => {
    const response = await fetch(
      "https://66ff37f82b9aac9c997e8e03.mockapi.io/user",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          age: age,
        }),
      }
    );

    try {
      const data = await response.json();
    } catch (error) {
      console.error(error);
    } finally {
      fetchData();
    }
  };

  const updateUserApi = async (id: string, name: string, age: string) => {
    const response = await fetch(
      `https://66ff37f82b9aac9c997e8e03.mockapi.io/user/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          age: age,
        }),
      }
    );

    try {
      const data = await response.json();
    } catch (error) {
      console.error(error);
    } finally {
      fetchData();
    }
  };

  const handleAdd = () => {
    createUserApi(name, age);
    setName("");
    setAge("");
  };

  const handleUpdate = () => {
    updateUserApi(userIdUpdate, name, age);
    setName("");
    setAge("");
    setUserIdUpdate("");
    alert("User updated successfully");
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="Enter your name"
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            width: "50%",
            margin: 10,
            padding: 10,
            borderRadius: 5,
          }}
          onChangeText={(text) => setName(text)}
          value={name}
        />
        <TextInput
          placeholder="Enter your age"
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            width: "30%",
            margin: 10,
            padding: 10,
            borderRadius: 5,
          }}
          onChangeText={(text) => setAge(text)}
          value={age}
        />
      </View>

      <View
        style={{
          height: 20,
        }}
      ></View>

      {userIdUpdate ? (
        <TouchableOpacity
          onPress={() => handleUpdate()}
          style={{
            backgroundColor: "green",
            padding: 10,
            borderRadius: 5,
            width: "80%",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white" }}>Update</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={handleAdd}
          style={{
            backgroundColor: "blue",
            padding: 10,
            borderRadius: 5,
            width: "80%",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white" }}>Add</Text>
        </TouchableOpacity>
      )}

      <View
        style={{
          height: 30,
        }}
      ></View>

      <FlatList
        data={dataList}
        renderItem={({ item }: { item: User }) => (
          <FlatListItem
            user={item}
            fetchData={fetchData}
            setUserIdUpdate={setUserIdUpdate}
            setName={setName}
            setAge={setAge}
            userIsUpdate={userIdUpdate}
          />
        )}
        style={{ width: "100%" }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
