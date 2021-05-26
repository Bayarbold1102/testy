import React from "react";
import { StyleSheet, Text, View } from "react-native";

const PositionScreen = () => {
  return (
    <View style={CSS.parent}>
      <View style={css.view1}></View>
      <View style={css.view2}></View>
      <View style={css.view3}></View>
    </View>
  );
};

export default PositionScreen;

const css = StyleSheet.create({
  parent: {
    borderWidth: 3,
    borderColor: "black",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  view1: {
    position: "absolute",
    height: 70,
    width: 70,
    borderColor: "red",
    borderWidth: 3,
  },
  view2: {
    height: 70,
    width: 70,
    borderColor: "blue",
    borderWidth: 3,
  },
  view3: {
    height: 70,
    width: 70,
    borderColor: "yellow",
    borderWidth: 3,
  },
});
