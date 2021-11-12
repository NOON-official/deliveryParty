
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import 'react-native-gesture-handler';
import Main from'../MainPage';
import Popup from'../Popup';



const screens={
    Main:{
        screen: Main
    },
    Popup:{
        screen:Popup
    }
} 
const MainStack =createStackNavigator(screens)
export default createAppContainer(MainStack);
 