import { StatusBar } from 'expo-status-bar';
import React, {useState,Component} from 'react';
import { Button,StyleSheet, Text, View,Dimensions,ScrollView,Image, Pressable,SafeAreaView, TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const {height: SCREEN_HEIGHT } = Dimensions.get("window");
const {width: SCREEN_WIDTH } = Dimensions.get("window");


export default function Popup ({navigation}){
    
      
    const [listData,setlistDate] = useState([
        {
            icon:<AntDesign name="meh" size={24} color="black" />,
          participant:1,
          totalParticipant:5,
          Title:"떡볶이 시키실 분?",
          description:"떡복이 떡볶이",
          name:"A동 귀여운 호랑이",
          time:"17:00",
          store:"미파닭",
          menu:"떡볶이",
          key:'1'
        }
      ]);
    return(
        <View style={styles.container}>
             {listData.map((item)=>{
        return(
            <View style={styles.PopUpChat} key={item.key}>
             <View style={styles.Top}>
            <TouchableOpacity  style={styles.Button} title="exit" color='white' onPress={()=>navigation.goBack()}>
            <Feather name="x-circle" size={24} color="#C4C4C4" />
            </TouchableOpacity>
             </View>
             <View style={styles.Bottom}>
              <View style={{...styles.title,marginBottom:15}}>
              <Text style={{fontSize:30, marginTop:5}}> {item.Title}</Text>
              </View>
              <View style={styles.store}>
                  <Text style={{flex:1, fontSize:15, marginLeft:10,color:'#a8b5ac'}}>가게</Text>
              <Text style={{flex:6,fontSize:15}}> {item.store}</Text>
              </View>
              <View style={{...styles.menu}}>
              <Text style={{flex:1, fontSize:15, marginLeft:10,color:'#a8b5ac'}}>메뉴</Text>
                  <Text style={{flex:6,fontSize:15}}>{item.menu}</Text>
              </View>
              <View style={{...styles.description,marginTop:15}}>
                  <Text style={{flex:1.3,fontSize:15,marginLeft:10,color:'#a8b5ac'}}>상세설명</Text>
                  <Text style={{flex:3, fontSize:15,marginLeft:10}}>{item.description}</Text>
              </View>
              <View style={styles.bottomButton}>
                  <TouchableOpacity style={{flex:1, alignItems:'center',flexDirection:'row',justifyContent:'center'}}>
                      <View style={{alignItems:'center',justifyContent:'center'}}>{item.icon}</View>
                      <Text style={{fontFamily:'Noto Sans KR',fontWeight:'700',marginLeft:5}}>{item.participant}/{item.totalParticipant}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{flex:1, alignItems:'center',flexDirection:'row'}}>
                  <FontAwesome name="send" size={24} color="black" />
                      <Text style={{fontFamily:'Noto Sans KR',fontWeight:'700',marginLeft:5}}>채팅방 참여하기</Text>
                  </TouchableOpacity>
              </View>
              <View style={{flex:5}}></View>
             </View>
            </View>
       
        )})}
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
    PopUpChat:{
        height:SCREEN_HEIGHT/1.8,
        backgroundColor:'white',
        width:SCREEN_WIDTH/1.2,
        borderColor:'#bfc9c2',
      borderWidth:1,
      borderRadius:30
        
    },
    Top:{
        flex:1,
        backgroundColor:'white',
        alignItems:'flex-end'
    },
      Bottom:{
          flex:8,
          backgroundColor:'white'
      },
      Button:{
          flex:1,
          backgroundColor:'white',
          position:'relative',
          width:50,
         justifyContent:'center'
          
      },
      title:{
          flex:1.5
      },
      store:{
          flex:1.2,
          flexDirection:'row'
      },
      menu:{
          flex:1.2,
          flexDirection:'row'
      },
      description:{
       flex:3
      },
      bottomButton:{
          flex:1.5,
          flexDirection:'row'
      },



})