import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainPage from "./Pages/MainPage";
import Popup from "./Pages/Popup";
import Upload from "./Pages/Upload";
import UploadCancelPopup from "./Pages/UploadCancelPopup";
import MyPage from "./Pages/MyPage";
import Login from "./components/Login/Login";
import PhoneAuth from "./components/Login/PhoneAuth";

const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: "첫 화면 페이지" }}
      /> */}
      <Stack.Screen
        name="PhoneAuth"
        component={PhoneAuth}
        options={{ title: "신원 인증 페이지" }}
      />
      <Stack.Screen
        name="MainPage"
        component={MainPage}
        options={{ title: "메인페이지" }}
      />
      <Stack.Screen
        name="Popup"
        component={Popup}
        options={{ title: "상세보기" }}
      />
      <Stack.Screen
        name="Upload"
        component={Upload}
        options={{ title: "업로드 페이지" }}
      />
      <Stack.Screen
        name="UploadCancelPopup"
        component={UploadCancelPopup}
        options={{ title: "업로드 삭제" }}
      />
      <Stack.Screen
        name="MyPage"
        component={MyPage}
        options={{ title: "마이페이지" }}
      />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
