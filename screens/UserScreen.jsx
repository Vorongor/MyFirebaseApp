import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import PhotoBG from "../assets/img/PhotoBGFull.png";
import avatarUrl from "../assets/img/Rectangle.jpg";
import { useSelector } from "react-redux";
import { Path, Svg } from "react-native-svg";

const UserBlock = ({ navigation }) => {
  const user = useSelector((state) => state.user.newUser);
  return (
    <View style={styles.userContainer}>
      <ImageBackground source={PhotoBG} resizeMode="cover" style={styles.image}>
        <View style={styles.box}>
          <Image source={avatarUrl} style={styles.photo} />
          <View style={styles.textBox}>
            <Text style={styles.name}>{user.login}</Text>
            <Text style={styles.email}>{user.email}</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3 3H10V10H3V3Z"
                stroke="#212121"
                stroke-opacity="0.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14 3H21V10H14V3Z"
                stroke="#212121"
                stroke-opacity="0.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14 14H21V21H14V14Z"
                stroke="#212121"
                stroke-opacity="0.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3 14H10V21H3V14Z"
                stroke="#212121"
                stroke-opacity="0.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </Svg>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          width="70px"
          onPress={() => navigation.navigate("User")}
          style={styles.active}
        >
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
          >
            <Path
              d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21"
              stroke="#fff"
              stroke-opacity="0.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <Path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
              stroke="#fff"
              stroke-opacity="0.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </Svg>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("NewPost")}>
          <Text style={styles.plus}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  userContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: "transparent",
  },
  image: { width: "100%", height: "100%" },
  box: {
    position: "absolute",
    bottom: -25,
    backgroundColor: "#fff",
    width: "100%",
    height: "80%",
    paddingBottom: 180,
    display: "flex",
    borderRadius: 30,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  textBox: {
    paddingTop: 12,
    display: "flex",
    flexDirection: "column",
  },
  name: {
    color: "#212121",
    fontSize: 13,
    fontWeight: "bold",
  },
  email: {
    color: "#21212180",
    fontSize: 11,
    fontWeight: "400",
  },
  photo: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: "#323232",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    height: "12%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 35,
  },
  active: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    fontSize: 30,
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FF6C00",
  },
  plus: {
    fontSize: 30,
  },
});

export default UserBlock;
