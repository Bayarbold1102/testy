import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FlexBoxScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "#3944F7",
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "stretch",
        }}
      >
        <View style={{ backgroundColor: "#8D3DAF", width: 100 }}></View>
        <View style={{ backgroundColor: "#FF6666", width: 100 }}></View>
        <View style={{ backgroundColor: "#1B98F5", width: 100 }}></View>
      </View>

      <View
        style={{
          backgroundColor: "#3944F7",
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "stretch",
        }}
      >
        <View style={{ backgroundColor: "#8D3DAF", width: 100 }}></View>
        <View style={{ backgroundColor: "#FF6666", width: 100 }}></View>
        <View style={{ backgroundColor: "#1B98F5", width: 100 }}></View>
      </View>
    </View>
  );
};

export default FlexBoxScreen;

const styles = StyleSheet.create({});
