import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const TodoCard = ({ id, title, description, dueDate, onDelete, onEdit }) => {
  const handleDelete = async () => {
    let { data, error } = await supabase
      .from("todos")
      .delete()
      .match({ id: id });

    if (error) console.log("Error deleting todo: ", error);
    else console.log("Deleted todo: ", data);
    return data;
  };
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.dueDate}>Due Date: {dueDate}</Text>

      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#e74c3c" }]}
        onPress={() => handleDelete(id)}
      >
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
  button: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default TodoCard;
