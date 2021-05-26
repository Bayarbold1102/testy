import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
} from "react-native";

import MyButton from "../components/MyButton";
import MyInput from "../components/MyInput";
import MyInputArea from "../components/MyInputArea";

export default ({ navigation }) => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    Alert.alert("Your Phone numebr is : ${phone}, password : ${password}");
  };
  return (
    <View>
      <Image
        style={{ width: "100%", height: "60%" }}
        source={require("../../assets/img/sa.png")}
      />
      <Text style={{ textAlign: "center", fontSize: 20 }}>
        {phone}-{password}
      </Text>
      <TextInput children="HAHAHAHA" />

      <MyInput
        keyboardType="number-pad"
        placeholder="Phone numebr pls?!"
        onChangeText={setPhone}
      />
      <MyInput
        secureTextEntry={true}
        placeholder="Password pls?!"
        onChangeText={setPassword}
      />

      <MyButton title="Enter" onPress={loginHandler} />

      <MyButton title="Back" onPress={() => navigation.pop()} />
    </View>
  );
};
const css = StyleSheet.create({
  inputField: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
  },
  button: {
    marginVertical: 5,
  },
});
