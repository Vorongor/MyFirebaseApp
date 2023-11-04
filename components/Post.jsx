import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import avatarUrl from "../img/Rectangle.jpg";
import { useState } from "react";
import { useEffect } from "react";
import { getDataFromFirestore } from "../db/data";

const Post = () => {
  const [data, setData] = useState(null);
  const id = "gIMgFA1d1SipeTipt2GQ";

  return <View style={styles.userContainer}></View>;
};
const styles = StyleSheet.create({
  userContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    color: "#212121",
    fontSize: 13,
    fontWeight: 700,
  },
  email: {
    color: "#21212180",
    fontSize: 11,
    fontWeight: 400,
  },
  photo: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
});

export default Post;
