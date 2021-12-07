import { StatusBar } from 'expo-status-bar';
import React, {useState, Component} from 'react';
import {Text, View,ScrollView, Pressable,SafeAreaView, TouchableOpacity} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import {styles} from '../styles/MainPageStyles';



 export default function MainPage({navigation}){


  const [listData,setlistDate] = useState([
    {
      icon:<AntDesign name="meh" size={40} color="black" />,
      participant:1,
      totalParticipant:5,
      Title:"떡볶이 시키실 분?",
      description:"떡복이 떡볶이",
      name:"A동 귀여운 호랑이",
      time:"17:00",
      store:"미파닭",
      menu:"떡볶이",
      key:'1'
    },
    

  ]);
  


  return (
    <View style={styles.container}>

      <View style={styles.mainTop}>
        <Text style={styles.mainTopText}>오늘의 파티</Text>
      </View>

      <SafeAreaView style={styles.mainMiddle}>
      <ScrollView style={{flex:1}} >
      {listData.map((item)=>{
        return(
    
     <TouchableOpacity  key={item.key} onPress={()=>navigation.navigate('Popup')} style={styles.list}>
      <View style={styles.mainMiddleView1}>
      <View style={styles.mainMiddleIcon}>{item.icon}</View> 
      <Text style={styles.mainMiddleText1}> 1/5</Text> 
      </View>
      
      <View style={styles.mainMiddleView2}>
      <Text style={styles.mainMiddleTitle}>{item.Title}</Text>  
      <Text style={styles.mainMiddleDescription}>{item.description}</Text>
      <View style={styles.mainMiddleView3}>
      <Text style={styles.mainMiddleName}>{item.name}</Text>
      <Text style={styles.mainMiddleTime}>{item.time}</Text>
      </View>
      </View>
      </TouchableOpacity>

     
      )})}
      </ScrollView>
      
     
      </SafeAreaView>
      <View style={styles.mainBottom}>
      <Pressable style={styles.mainBottomButtons}>
      
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
     <Pressable style={styles.mainBottomButtons}>
      
     <Octicons name="person" size={35} color="#C4C4C4" />
     <Text style={styles.mainBottomText}>mypage</Text>
     
     </Pressable>
      </View>
     
      <StatusBar style="auto" />
      
    </View>
  );
        };

