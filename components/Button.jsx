import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ButtonComp = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 343,
    height: 50,
    padding: 16,
    textAlign: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    boxSizing: 'border-box'
  },
  title: {
    textAlign: "center",
    fontSize: 16,
    color: '#fff'
  },
});

export default ButtonComp;
