import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import MyButton from "../components/MyButton";

const Home = ({ navigation }) => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View>
      <Text style={{ textAlign: "center", marginVertical: 20 }}>Arrow</Text>
      <MyButton onPress={() => navigation.navigate("Login")} title="Login" />

      <MyButton
        onPress={() => navigation.navigate("FlexBox")}
        title="FlexBox"
      />
      <MyButton onPress={() => navigation.navigate("List")} title="FlatList " />
      <MyButton
        onPress={() => navigation.navigate("CustomList")}
        title="CustomList"
      />
      <MyButton
        onPress={() => navigation.navigate("Position")}
        title="Position"
      />
    </View>
  );
};

export default Home;
