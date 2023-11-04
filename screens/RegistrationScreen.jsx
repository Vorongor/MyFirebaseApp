import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import PhotoBG from "../assets/img/PhotoBGFull.png";
import { Svg, Path } from "react-native-svg";
import ButtonComp from "../components/Button";
import { useDispatch } from "react-redux";
import { submit } from "../redux/userSlice";
import { registerDB, updateUserProfile } from "../db/auth";
import { auth } from "../db/config";

const RegistrationScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [photo, setPhoto] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCleanPhoto = () => {
    setPhoto(null);
  };

  const handleChoosePhoto = async () => {
    const options = {
      title: "Виберіть фото",
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
    };

    let result = await ImagePicker.launchImageLibraryAsync(options, {
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setPhoto(result.uri);
      console.log(result);
    }
  };

  const handleSubmit = async () => {
    if (login !== "" && email !== "" && password !== "") {
      await registerDB({ email, password });
      await updateUserProfile({ displayName: login });
      const user = await auth.currentUser;
      dispatch(
        submit({ name: user.displayName, email: user.email, uid: user.uid })
      );

      setEmail("");
      setLogin("");
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
          <View style={styles.imgBox}>
            <Image source={{ uri: photo }} style={styles.photo} />

            {photo ? (
              <TouchableOpacity onPress={handleCleanPhoto}>
                <Svg
                  width="30"
                  height="30"
                  viewBox="0 0 1024 1024"
                  style={styles.delete}
                >
                  <Path d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
                  <Path d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z" />
                </Svg>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={handleChoosePhoto}>
                <Svg
                  width="30"
                  height="30"
                  viewBox="0 0 1024 1024"
                  style={styles.icon}
                >
                  <Path d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z" />
                  <Path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
                </Svg>
              </TouchableOpacity>
            )}
          </View>
          <Text style={styles.text}>Реєстрація</Text>
          <TextInput
            placeholder="Логін"
            style={styles.input}
            value={login}
            onChangeText={(text) => setLogin(text)}
          />
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
          <ButtonComp text={"Зареєструватися"} onPress={handleSubmit} />
          <Text
            style={styles.link}
            onPress={() => navigation.navigate("Login")}
          >
            Вже є акаунт? Увійти
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
  button: {
    marginTop: 20,
    width: 343,
    padding: 16,
    paddingLeft: 32,
    paddingRight: 32,
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  link: {
    paddingTop: 12,
    color: "#1B4371",
  },
  imgBox: {
    width: 132,
    height: 120,
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "row",
    position: "relative",
    top: 0,
  },
  photo: {
    width: "80%",
    height: "100%",
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
  },
  icon: {
    position: "absolute",
    fill: "#FF6C00",
    bottom: 15,
    right: -15,
  },
  delete: {
    position: "absolute",
    bottom: 15,
    right: -15,
    fill: "#BDBDBD",
  },
  showPasswordButtonText: {
    position: "absolute",
    top: -45,
    right: 20,
  },
});

export default RegistrationScreen;
