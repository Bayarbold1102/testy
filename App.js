import React from "react";
import HomeScreen from "./src/screens/Home";
import LoginScreen from "./src/screens/Login";
import FlexBoxScreen from "./src/screens/FlexBoxScreen";
import FlatListScreen from "./src/screens/FlatListScreen";
import CustomListScreen from "./src/screens/CustomListScreen";
import PositionScreen from "./src/screens/PositionScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="FlexBox" component={FlexBoxScreen} />
        <Stack.Screen name="List" component={FlatListScreen} />
        <Stack.Screen name="CustomList" component={CustomListScreen} />
        <Stack.Screen name="Postition" component={PositionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
