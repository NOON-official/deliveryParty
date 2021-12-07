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
      <Stack.Screen name="MainPage" component={MainPage} />
      <Stack.Screen name="Popup" component={Popup} />
      <Stack.Screen name="Upload" component={Upload} />
      <Stack.Screen name="UploadCancelPopup" component={UploadCancelPopup}/>
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
