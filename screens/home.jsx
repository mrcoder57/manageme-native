import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "../utils/SupabaseClient";
import TodoCard from "../components/card";

const List = ({ navigation }) => {
  const [todos, setTodos] = useState([]);

  async function getAllTodos() {
    let { data, error } = await supabase.from("todos").select("*");

    if (error) console.log("Error fetching data: ", error);
    else console.log("Fetched data: ", data);

    return data;
  }

  useEffect(() => {
    getAllTodos().then((data) => setTodos(data));
  }, []);

  const renderItem = ({ item }) => (
    <TodoCard
      id={item.id}
      title={item.title}
      description={item.description}
      dueDate={item.dueDate}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="Working"
          onPress={() => navigation.navigate("Working")}
          style={styles.button}
        />
        <Button
          title="Finish"
          onPress={() => navigation.navigate("Finish")}
          style={styles.button}
        />
        <Button
          title="Add New"
          onPress={() => navigation.navigate("AddNew")}
          style={styles.button}
        />
      </View>

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#3498db", // Aesthetic blue color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  description: {
    fontSize: 16,
    color: "#666",
  },
  dueDate: {
    fontSize: 16,
    color: "#666",
  },
});
