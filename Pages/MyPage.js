import { StatusBar } from 'expo-status-bar';
import React, {useState, Component} from 'react';
import {Text, View,ScrollView, Pressable,SafeAreaView, TouchableOpacity} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import {styles} from '../styles/MyPageStyle';
import { EvilIcons } from '@expo/vector-icons'; 

export default function MyPage({navigation}){
    

    return(
        <View style={styles.container}>
            
            <View style={styles.mainTop}>
            <View style={styles.mainTopIcon}>
            <AntDesign name="meh" size={80} color="black" />
            </View> 
            <View style={styles.mainTopName}>
             <Text style={{fontSize:20}}>삐딱한 삐딱구리</Text>
             <Text style={{fontSize:17,justifyContent:'space-between'}}><EvilIcons name="location" size={18} color="black" />B동 25층</Text>
            </View>

            </View>
            <View style={{flex:0.3,backgroundColor:'#ECECEC' }}>
            </View>
            <SafeAreaView style={styles.mainMiddle}>
            <View style={styles.mainMiddle2}>
            <Text style={styles.mainMiddleText1} >마이페이지</Text>
            </View>
            <View style={styles.mainMiddle3}>
            <Text style={styles.mainMiddleText2}>회원정보 수정 <AntDesign name="right" size={17} color="#C4C4C4" /></Text>
            </View>
            </SafeAreaView>
            
  
            <View style={styles.mainBottom}>
      <Pressable onPress={()=>navigation.navigate('MainPage')} style={styles.mainBottomButtons}>
      
      <Entypo  name="home"  size={35} color="#C4C4C4" /> 
      <Text style={styles.mainBottomText}>home</Text>
      
     </Pressable>
     <Pressable onPress={()=>navigation.navigate('Upload')} style={styles.mainBottomButtons}>
     
     <MaterialCommunityIcons name="progress-upload" size={35} color="#C4C4C4" />
     <Text  style={styles.mainBottomText}>upload</Text>
     </Pressable>
     <Pressable style={styles.mainBottomButtons}>
      
     <Entypo name="back-in-time" size={35} color="#C4C4C4" />
     <Text  style={styles.mainBottomText}>recent</Text>
     
     </Pressable>
     <Pressable onPress={()=>navigation.navigate('MyPage')} style={styles.mainBottomButtons}>
      
     <Octicons name="person" size={35} color="#FF480E" />
     <Text style={styles.mainBottomText}>mypage</Text>
     
     </Pressable>
      </View>
        
      <StatusBar style="auto" />
         
        </View>
        
    );

};