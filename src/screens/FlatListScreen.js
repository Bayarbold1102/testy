import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import { randomHex } from "randomize-hex";

import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";
import ModalConfirmDelete from "../components/ModalConfirmDelete";

const FlatListScreen = () => {
  const [item, setItem] = useState("");
  const [showModal, setshowModal] = useState(false);
  const [text, setText] = useState("");
  const [persons, setPersons] = useState([
    { name: "Bayar", color: "#E83A59" },
    { name: "Bold", color: "#12B0E8" },
    { name: "Odko", color: "#50DBB4" },
    { name: "Amgaa", color: "#F4CE6A" },
    { name: "Shaggy", color: "#8D3DAF" },
  ]);
  const handleClick = (name) => {
    //let sum = 0;

    //persons.forEach((el) => {
    // sum = sum + el.name.length;
    //});
    setItem(name);
    setshowModal(true);
  };
  const deleteItem = () => {
    setPersons((oldPersons) => oldPersons.filter((el) => el.name !== item));
    setshowModal(false);
  };

  const addNewItem = () => {
    setPersons((persons) => [...persons, { name: text, color: randomHex() }]);
  };

  return (
    <View>
      <ModalConfirmDelete
        item={item}
        deleteItem={deleteItem}
        visible={showModal}
        cancel={() => setshowModal(false)}
      />
      <View style={css.addContainer}>
        <MyInput
          style={css.addInput}
          onChangeText={(newText) => setText(newText)}
        />
        <MyButton title="Input" onPress={addNewItem} />
      </View>

      <FlatList
        keyExtractor={(person) => person.color}
        data={persons}
        renderItem={(element) => (
          <TouchableOpacity onPress={() => handleClick(element.item.name)}>
            <View
              style={{
                backgroundColor: element.item.color,
                padding: 20,
                marginHorizontal: 10,
              }}
            >
              <Text>{element.item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default FlatListScreen;

const css = StyleSheet.create({
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
