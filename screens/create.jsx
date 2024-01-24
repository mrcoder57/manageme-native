import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { supabase } from "../utils/SupabaseClient";
import { DatePickerInput } from "react-native-paper-dates";

const AddTodo = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  async function handleSubmit(event) {
    event.preventDefault();

    let { data, error } = await supabase
      .from("todos")
      .insert([
        {
          title: title,
          description: description,
          status: false,
          dueDate: dueDate,
        },
      ]);

    if (error) console.log("Error creating todo: ", error);
    else {
      console.log("Inserted data: ", data);
      navigation.goBack();
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.description}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Due Date"
        value={dueDate}
        onChangeText={setDueDate}
      />
      <Button title="Add Todo" onPress={handleSubmit} />
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  description: {
    height: 60,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});
