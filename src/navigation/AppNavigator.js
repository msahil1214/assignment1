import React, { useContext } from "react";
import firebase from "firebase/app";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthContext } from "../provider/AuthProvider";

// Main
import Home from "../screens/Home";
import SecondScreen from "../screens/SecondScreen";

// Auth screens
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";
import ForgetPassword from "../screens/auth/ForgetPassword";

import Loading from "../screens/utils/Loading";

const firebaseConfig = {
  apiKey: "AIzaSyBTyLxDLe0iBqORPJlbgyReSo2Zsyc5M18",
  authDomain: "mid-term-fa19-bcs-100.firebaseapp.com",
  databaseURL: "https://mid-term-fa19-bcs-100-default-rtdb.firebaseio.com",
  projectId: "mid-term-fa19-bcs-100",
  storageBucket: "mid-term-fa19-bcs-100.appspot.com",
  messagingSenderId: "617514441218",
  appId: "1:617514441218:web:6439f10d0d57a45300e51b",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const AuthStack = createStackNavigator();

const Auth = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
      <AuthStack.Screen name="ForgetPassword" component={ForgetPassword} />
    </AuthStack.Navigator>
  );
};

const MainStack = createStackNavigator();

const Main = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen name="SecondScreen" component={SecondScreen} />
    </MainStack.Navigator>
  );
};

export default () => {
  const auth = useContext(AuthContext);
  const user = auth.user;
  return (
    <NavigationContainer>
      {user == null && <Loading />}
      {user == false && <Auth />}
      {user == true && <Main />}
    </NavigationContainer>
  );
};
