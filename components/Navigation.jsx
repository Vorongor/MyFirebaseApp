import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import "react-native-gesture-handler";

import RegistrationScreen from "../screens/RegistrationScreen";
import LoginScreen from "../screens/LoginScreen";
import PostsScreen from "../screens/PostsScreen";
import NewPostsScreen from "../screens/NewPostScreen";
import UserBlock from "../screens/UserScreen";

const MainStack = createStackNavigator();

const Navigator = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName={isLoggedIn ? "Home" : "Login"}>
        {isLoggedIn ? (
          <>
            <MainStack.Screen name="Home" component={PostsScreen} />
            <MainStack.Screen name="NewPost" component={NewPostsScreen} />
            <MainStack.Screen name="User" component={UserBlock} />
          </>
        ) : (
          <>
            <MainStack.Screen name="Login" component={LoginScreen} />
            <MainStack.Screen name="Register" component={RegistrationScreen} />
          </>
        )}
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
