import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native";
import PhotoBG from "../assets/img/PhotoBGFull.png";

import ButtonComp from "../components/Button";
import { loginDB } from "../db/auth";
import { submit } from "../redux/userSlice";
import { useDispatch } from "react-redux";
import { auth } from "../db/config";

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    if (email !== "" && password !== "") {
      await loginDB({ email, password });
      const user = await auth.currentUser;
      dispatch(
        submit({ name: user.displayName, email: user.email, uid: user.uid })
      );

      setEmail("");
      setPassword("");
      navigation.navigate("Home");
    } else {
      alert("There are empty fields");
    }
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={PhotoBG} resizeMode="cover" style={styles.image}>
        <View style={styles.form}>
          <Text style={styles.text}>Увійти</Text>
          <TextInput
            placeholder="Адреса електронної пошти"
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <View>
            <TextInput
              placeholder="Пароль"
              secureTextEntry={!showPassword}
              style={styles.input}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={styles.showPasswordButton}
            >
              <Text style={styles.showPasswordButtonText}>
                {showPassword ? "Приховати" : "Показати"}
              </Text>
            </TouchableOpacity>
          </View>
          <ButtonComp text={"Увійти"} onPress={handleSubmit} />
          <Text
            style={styles.link}
            onPress={() => navigation.navigate("Register")}
          >
            Немає акаунту? Зареєструватися
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: { width: "100%", height: "100%" },
  form: {
    position: "absolute",
    bottom: -25,
    backgroundColor: "#fff",
    width: "100%",
    height: "67%",
    padding: 20,
    paddingBottom: 180,
    display: "flex",
    borderRadius: 30,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#212121",
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: "bold",
  },
  input: {
    height: 50,
    width: 343,
    borderColor: "gray",
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },
  link: {
    paddingTop: 12,
    color: "#1B4371",
  },
  showPasswordButtonText: {
    position: "absolute",
    top: -45,
    right: 20,
  },
});

export default LoginScreen;
