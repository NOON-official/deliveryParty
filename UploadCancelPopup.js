import { StatusBar } from 'expo-status-bar';
import React, {useState,Component} from 'react';
import { Button,StyleSheet, Text, View,Dimensions,ScrollView,Image, Pressable,SafeAreaView, TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';





const {height: SCREEN_HEIGHT } = Dimensions.get("window");
const {width: SCREEN_WIDTH } = Dimensions.get("window");


export default function UploadCancelPopup ({navigation}){
    
    return(
        <View style={styles.container}>
           <View> 
             <Image source={require("C:\Users\왕규하\Documents\GitHub\deliveryParty\logoImage\sad.png")}></Image>  
           </View>
           <View></View>
           <View></View>
         <StatusBar style="auto" />
        </View>

    )
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "white",
      
    },
   
})