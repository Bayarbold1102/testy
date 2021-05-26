import React from "react";
import { StyleSheet, Text, View, Modal, SafeAreaView } from "react-native";
import MyButton from "./MyButton";

const ModalConfirmDelete = ({ visible, cancel, deleteItem, item }) => {
  return (
    <Modal visible={visible} animationType="fade">
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 16 }}>
          <Text style={{ color: "red" }}>{item} </Text> Do u wanna delete this
          shit?
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            justifyContent: "space-between",
          }}
        >
          <MyButton style={css.button} title="Esc" onPress={cancel} />
          <MyButton style={css.button} title="Ok" onPress={deleteItem} />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default ModalConfirmDelete;

const css = StyleSheet.create({
  button: { width: "40%" },
});
