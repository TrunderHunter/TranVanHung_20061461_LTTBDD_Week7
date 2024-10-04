import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

interface User {
  name: string;
  age: string;
  id: string;
}

const FlatListItem = ({
  user,
  fetchData,
  setUserIdUpdate,
  setName,
  setAge,
  userIsUpdate,
}: {
  user: User;
  fetchData: () => Promise<void>;
  setUserIdUpdate: React.Dispatch<React.SetStateAction<string>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setAge: React.Dispatch<React.SetStateAction<string>>;
  userIsUpdate: string;
}) => {
  const deleteUserApi = async (id: string) => {
    const response = await fetch(
      `https://66ff37f82b9aac9c997e8e03.mockapi.io/user/${id}`,
      {
        method: "DELETE",
      }
    );

    try {
      const data = await response.json();
    } catch (error) {
      console.error(error);
    } finally {
      fetchData();
      alert("User deleted successfully");
    }
  };

  const handleChooseUserUpdate = () => {
    setUserIdUpdate(user.id);
    setName(user.name);
    setAge(user.age);
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "gray",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "blue",
          width: "50%",
        }}
      >
        {user.name}
      </Text>
      <Text
        style={{
          fontSize: 15,
          color: "red",
        }}
      >
        {user.age}
      </Text>
      <TouchableOpacity
        onPress={() => {
          deleteUserApi(user.id);
        }}
        style={{
          backgroundColor: "red",
          padding: 5,
          borderRadius: 5,
        }}
      >
        <Text style={{ color: "white" }}>Delete</Text>
      </TouchableOpacity>
      {userIsUpdate === user.id ? (
        <TouchableOpacity
          onPress={() => {
            setUserIdUpdate("");
            setName("");
            setAge("");
          }}
          style={{
            backgroundColor: "red",
            padding: 5,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white" }}>Cancel</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => handleChooseUserUpdate()}
          style={{
            backgroundColor: "green",
            padding: 5,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white" }}>Update</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default FlatListItem;

const styles = StyleSheet.create({});
