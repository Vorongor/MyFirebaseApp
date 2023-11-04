import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Svg, Path } from "react-native-svg";
import avatarUrl from "../assets/img/Rectangle.jpg";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { getDataFromFirestore } from "../db/data";
import { FlatList } from "react-native";

const PostsScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const user = useSelector((state) => state.user.newUser);

  useEffect(() => {
    // Викликаємо функцію getDataFromFirestore під час рендеру компонента
    const fetchData = async () => {
      try {
        const result = await getDataFromFirestore(); // Отримуємо дані з Firestore
        setData(result); // Оновлюємо стан з отриманими даними
      } catch (error) {
        console.error("Помилка при отриманні даних з Firestore:", error);
      }
    };

    fetchData(); // Викликаємо функцію для отримання даних
  }, []); // Порожній масив відслідковуваних залежностей вказує, що ефект має бути запущений лише після першого рендеру

  console.log(data);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Публікації</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.logOut}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
              >
                <Path
                  d="M10 22H5C3.89543 22 3 21.1046 3 20V4C3 2.89543 3.89543 2 5 2H10"
                  stroke="#BDBDBD"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M17 16L21 12L17 8"
                  stroke="#BDBDBD"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M21 12H9"
                  stroke="#BDBDBD"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate("User")}
        >
          <Image source={avatarUrl} style={styles.photo} />
          <View style={styles.textBox}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.email}>{user.email}</Text>
          </View>
        </TouchableOpacity>
        <View>
          <Text
            style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}
          >
            Пости
          </Text>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View
                style={{
                  backgroundColor: "#f0f0f0",
                  padding: 10,
                  margin: 10,
                  borderRadius: 8,
                }}
              >
                <Image
                  source={{ uri: item.data.image }}
                  style={{ width: 200, height: 200, borderRadius: 8 }}
                />
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  {item.data.title}
                </Text>
                <Text style={{ fontSize: 16, color: "gray" }}>
                  {item.data.location}
                </Text>
              </View>
            )}
          />
        </View>
        <View style={styles.footer}>
          <TouchableOpacity>
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
          <TouchableOpacity onPress={() => navigation.navigate("NewPost")}>
            <Text style={styles.addNew}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("User")}>
            <Text>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <Path
                  d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21"
                  stroke="#212121"
                  stroke-opacity="0.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <Path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                  stroke="#212121"
                  stroke-opacity="0.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </Svg>
            </Text>
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
  logOut: {
    position: "absolute",
    top: -20,
    right: 20,
  },
  box: {
    padding: 12,
    flex: 1,
    borderTopColor: "#BDBDBD",
    borderTopWidth: 1,
    borderBottomColor: "#BDBDBD",
    borderBottomWidth: 1,
    flexDirection: "row",
    gap: 12,
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
  addNew: {
    textAlign: "center",
    padding: 0,
    fontSize: 30,
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FF6C00",
    color: "#fff",
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
    width: 60,
    height: 60,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: "#323232",
  },
});

export default PostsScreen;
