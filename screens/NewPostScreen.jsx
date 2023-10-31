import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Svg, Path } from "react-native-svg";
import * as ImagePicker from "expo-image-picker";

const NewPostsScreen = ({ navigation }) => {
  const [image, setImage] = useState(null);

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
      setImage(result.uri);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Створити публікацію</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text style={styles.arrowBack}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <Path
                  d="M20 12H4"
                  stroke="#212121"
                  stroke-opacity="0.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <Path
                  d="M10 18L4 12L10 6"
                  stroke="#212121"
                  stroke-opacity="0.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </Svg>
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <View>
            <TouchableOpacity style={styles.upload} onPress={handleChoosePhoto}>
              <View style={styles.circle}>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <Path
                    d="M11.9998 15.2C13.7671 15.2 15.1998 13.7673 15.1998 12C15.1998 10.2327 13.7671 8.79999 11.9998 8.79999C10.2325 8.79999 8.7998 10.2327 8.7998 12C8.7998 13.7673 10.2325 15.2 11.9998 15.2Z"
                    fill="#BDBDBD"
                  />
                  <Path
                    d="M9 2L7.17 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4H16.83L15 2H9ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17Z"
                    fill="#BDBDBD"
                  />
                </Svg>
              </View>
            </TouchableOpacity>
            <Text style={{ color: "#BDBDBD", paddingLeft: 6 }}>
              Завантажте фото
            </Text>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <TextInput
                placeholder="Назва..."
                style={styles.input}
                //   onChangeText={(text) => setEmail(text)}
              />
            </KeyboardAvoidingView>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <View>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={styles.loc}
                >
                  <Path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20 10.3636C20 16.0909 12 21 12 21C12 21 4 16.0909 4 10.3636C4 6.29681 7.58172 3 12 3C16.4183 3 20 6.29681 20 10.3636V10.3636Z"
                    stroke="#BDBDBD"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <Path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z"
                    stroke="#BDBDBD"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </Svg>
                <TextInput
                  placeholder="Місцевість..."
                  style={styles.inputLoc}
                  // paddingLeft='24'
                  //   onChangeText={(text) => setEmail(text)}
                />
              </View>
            </KeyboardAvoidingView>
            <TouchableOpacity style={styles.public}>
              <Text>Опублікувати</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.delete}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <Path
                d="M3 6H5H21"
                stroke="#BDBDBD"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M19.5 6C19.5 5.72386 19.2761 5.5 19 5.5C18.7239 5.5 18.5 5.72386 18.5 6H19.5ZM5.5 6C5.5 5.72386 5.27614 5.5 5 5.5C4.72386 5.5 4.5 5.72386 4.5 6H5.5ZM7.5 6C7.5 6.27614 7.72386 6.5 8 6.5C8.27614 6.5 8.5 6.27614 8.5 6H7.5ZM15.5 6C15.5 6.27614 15.7239 6.5 16 6.5C16.2761 6.5 16.5 6.27614 16.5 6H15.5ZM18.5 6V20H19.5V6H18.5ZM18.5 20C18.5 20.8284 17.8284 21.5 17 21.5V22.5C18.3807 22.5 19.5 21.3807 19.5 20H18.5ZM17 21.5H7V22.5H17V21.5ZM7 21.5C6.17157 21.5 5.5 20.8284 5.5 20H4.5C4.5 21.3807 5.61929 22.5 7 22.5V21.5ZM5.5 20V6H4.5V20H5.5ZM8.5 6V4H7.5V6H8.5ZM8.5 4C8.5 3.17157 9.17157 2.5 10 2.5V1.5C8.61929 1.5 7.5 2.61929 7.5 4H8.5ZM10 2.5H14V1.5H10V2.5ZM14 2.5C14.8284 2.5 15.5 3.17157 15.5 4H16.5C16.5 2.61929 15.3807 1.5 14 1.5V2.5ZM15.5 4V6H16.5V4H15.5Z"
                stroke="#BDBDBD"
              />
              <Path
                d="M10 11V17"
                stroke="#BDBDBD"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M14 11V17"
                stroke="#BDBDBD"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </Svg>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  header: {
    height: "10%",
  },
  title: {
    paddingTop: 20,
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
    color: "#000",
  },
  arrowBack: {
    position: "absolute",
    top: -20,
    left: 20,
  },
  box: {
    padding: 8,
    flex: 1,
    borderTopColor: "#BDBDBD",
    borderTopWidth: 1,
    borderBottomColor: "#BDBDBD",
    borderBottomWidth: 1,
    flexDirection: "row",
    gap: 12,
  },
  upload: {
    width: 343,
    height: 240,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: "#BDBDBD40",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    width: 60,
    height: 60,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderColor: "#BDBDBD",
    borderWidth: 1,
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    padding: 16,
    color: "#BDBDBD",
    borderBottomColor: "#BDBDBD",
    borderBottomWidth: 1,
  },
  loc: {
    position: "absolute",
    top: 16,
    left: 16,
  },
  inputLoc: {
    padding: 16,
    paddingLeft: 48,
    color: "#BDBDBD",
    borderBottomColor: "#BDBDBD",
    borderBottomWidth: 1,
  },
  public: {
    marginTop: 48,
    width: 343,
    height: 50,
    padding: 16,
    textAlign: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "#BDBDBD40",
    boxSizing: "border-box",
  },
  footer: {
    height: "12%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 35,
  },
  delete: {
    textAlign: "center",
    padding: 0,
    fontSize: 30,
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#BDBDBD40",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default NewPostsScreen;
