import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from './Pages/MainPage';
import Popup from './Pages/Popup';
import Upload from './Pages/Upload';
import UploadCancelPopup from './Pages/UploadCancelPopup'



const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainPage" component={MainPage} options={{title: "메인페이지"}} />
      <Stack.Screen name="Popup" component={Popup} options={{title: "상세보기"}} />
      <Stack.Screen name="Upload" component={Upload} options={{title: "업로드 페이지"}} />
      <Stack.Screen name="UploadCancelPopup" component={UploadCancelPopup} options={{title: "업로드 삭제"}}/>
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
