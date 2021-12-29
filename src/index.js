import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainPage from "./screens/Main/MainPage";
import Popup from "./screens/Main/Popup";
import Upload from "./screens/Upload/Upload";
import UploadCancelPopup from "./screens/Upload/UploadCancelPopup";
import MyPage from "./screens/Mypage/MyPage";
import Login from "./screens/Splash/Login";
import PhoneAuth from "./screens/Splash/PhoneAuth";

const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginPage"
        component={Login}
        options={{ title: "로그인페이지" }}
      />
      <Stack.Screen
        name="PhoneAuth"
        component={PhoneAuth}
        options={{ title: "핸드폰 인증" }}
      />
      {/* <Stack.Screen
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
      /> */}
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

export default App;