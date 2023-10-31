import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { createStackNavigator } from "@react-navigation/stack";
import { store, persistor } from "./redux/store";

import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";

import RegistrationScreen from "./screens/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen";
import PostsScreen from "./screens/PostsScreen";
import NewPostsScreen from "./screens/NewPostScreen";
import UserBlock from "./screens/UserScreen";

const MainStack = createStackNavigator();

export default function App() {
  const isLoggedIn = "home";

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <MainStack.Navigator>
            <MainStack.Screen
              name="Register"
              component={RegistrationScreen}
              options={{
                headerShown: false,
              }}
            />
            <MainStack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                headerShown: false,
              }}
            />
            <MainStack.Screen
              name="Home"
              component={PostsScreen}
              options={{
                headerShown: false,
              }}
            />
            <MainStack.Screen
              name="NewPost"
              component={NewPostsScreen}
              options={{
                headerShown: false,
              }}
            />
            <MainStack.Screen
              name="User"
              component={UserBlock}
              options={{
                headerShown: false,
              }}
            />
          </MainStack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
