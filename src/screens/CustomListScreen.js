import React, { useState } from "react";
import { Alert, StyleSheet, Text, View, ScrollView } from "react-native";
import { randomHex } from "randomize-hex";
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";

const CustomList = () => {
  const [text, setText] = useState("");
  const [persons, setPersons] = useState([
    { name: "Bayar", color: "#E83A59" },
    { name: "Bold", color: "#12B0E8" },
    { name: "Odko", color: "#50DBB4" },
    { name: "Amgaa", color: "#F4CE6A" },
    { name: "Shaggy", color: "#8D3DAF" },
  ]);
  const handleClick = (name) => {
    Alert.alert("Hello : " + element.item.name);
  };
  const addNewItem = () => {
    setPersons((persons) => [...persons, { name: text, color: randomHex() }]);
  };
  return (
    <View>
      <View style={css.addContainer}>
        <MyInput
          style={css.addInput}
          onChangeText={(newText) => setText(newText)}
        />
        <MyButton title="Input" onPress={addNewItem} />
      </View>

      <ScrollView style={css.myList}>
        {persons.map((el, index) => (
          <View
            key={index}
            style={{ ...css.listItem, backgroundColor: el.color }}
          >
            <Text>
              {index + 1}){el.name}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
export default CustomList;

const css = StyleSheet.create({
  listItem: { padding: 10 },
  myList: {
    marginHorizontal: 20,
  },
  addContainer: {
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  addInput: {
    width: "70%",
  },
});
