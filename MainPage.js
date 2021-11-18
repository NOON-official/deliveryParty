import { StatusBar } from 'expo-status-bar';
import React, {useState, Component} from 'react';
import { StyleSheet, Text, View,Dimensions,ScrollView,Image, Pressable,SafeAreaView, TouchableOpacity} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const {width: SCREEN_WIDTH } = Dimensions.get("window");
const {height: SCREEN_HEIGHT } = Dimensions.get("window");


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
    }
  ]);
  


  return (
    <View style={styles.container}>

      <View style={styles.mainTop}>
        <Text style={{fontSize: 30,textAlign:'left',paddingLeft:30,paddingTop:25,fontStyle:'normal',fontWeight:'bold'}}>오늘의 파티</Text>
      </View>

      <SafeAreaView style={styles.mainMiddle}>
      {listData.map((item)=>{
        return(
     <ScrollView style={{flex:1}}  key={item.key}>
      <TouchableOpacity onPress={()=>navigation.navigate('Popup')} style={styles.list}>
      <View style={{flex:1,marginBottom:30,marginTop:30}}>
      <View style={{flex:2,alignItems:'center',justifyContent:'center'}}>{item.icon}</View> 
      <Text style={{flex:1,textAlign:'center',marginTop:5}}> 1/5</Text> 
      </View>
      
      <View style={{flex:3,marginTop:30,marginBottom:30,marginLeft:10}}>
      <Text style={{flex:1,fontSize:20}}>{item.Title}</Text>  
      <Text style={{flex:1, fontSize:15,color:'#777777'}}>{item.description}</Text>
      <View style={{flexDirection:'row',flex:1,}}>
      <Text style={{fontSize:15,borderRightColor:'black',borderRightWidth:1,color:'#777777'}}>{item.name}</Text>
      <Text style={{fontSize:15, marginLeft:5,color:'#777777'}}>{item.time}</Text>
      </View>
      </View>
      </TouchableOpacity>

     

      </ScrollView>
      
      )})}
      </SafeAreaView>
      <View style={styles.mainBottom}>
      <Pressable style={{flex:1,justifyContent:'center', alignItems:'center',marginBottom:20}}>
      
      <Entypo  name="home"  size={35} color="#C4C4C4" /> 
      <Text style={{color:'#C4C4C4'}}>home</Text>
      
     </Pressable>
     <Pressable onPress={()=>navigation.navigate('Upload')} style={{flex:1,justifyContent:'center', alignItems:'center',marginBottom:20}}>
     
     <MaterialCommunityIcons name="progress-upload" size={35} color="#C4C4C4" />
     <Text  style={{color:'#C4C4C4'}}>upload</Text>
     </Pressable>
     <Pressable style={{flex:1,justifyContent:'center', alignItems:'center',marginBottom:20}}>
      
     <Entypo name="back-in-time" size={35} color="#C4C4C4" />
     <Text  style={{color:'#C4C4C4'}}>recent</Text>
     
     </Pressable>
     <Pressable style={{flex:1,justifyContent:'center', alignItems:'center',marginBottom:20}}>
      
     <Octicons name="person" size={35} color="#C4C4C4" />
     <Text style={{color:'#C4C4C4'}}>mypage</Text>
     
     </Pressable>
      </View>
     
      <StatusBar style="auto" />
      
    </View>
  );
        };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "black"
  },
  mainTop: {
    flex:2,
    backgroundColor: "white",
    justifyContent: 'center',
    width: SCREEN_WIDTH
  },
  mainMiddle: {
    flex:9 ,
    backgroundColor: "white",
    width: SCREEN_WIDTH
  },

  mainBottom :{
    flex: 1.5,
    backgroundColor:'white',
    width: SCREEN_WIDTH,
    borderStyle:'solid',
    borderWidth:1,
    flexDirection:'row'
  },

  list:{
      
      height: SCREEN_HEIGHT/6.5,
      width: SCREEN_WIDTH-20,
      alignItems: "center",
      alignItems: "flex-start",
      paddingHorizontal: 20,
      backgroundColor:'white',
      marginLeft: 10,
      marginRight: 10,
      marginTop:5,
      marginBottom:10,
      flexDirection:'row',
      borderBottomColor: 'black',
      borderBottomWidth:1
  },
  listImage:{
  flex:1,
  color:"white",
  
  },
  left:{
flex:1,
alignItems:'center'
  },
  right:{
    flex: 3,
  alignItems:'center'},

  listImageText:{
    flex:1
  },
  listTitle:{
    fontSize:20,
    flex:1,
    textAlign:'left',
    color:'black'
  },
  listDescription:{
    fontSize:15,
    flex:1,
    textAlign:'left',
    color:'black'
  },
  listName:{
    fontSize:15,
    flex:1,
    textAlign:'left',
    color:'black'
  },
  listTime:{
    fontSize:15,
    flex:1,
    textAlign:'left',
    color:'black'
  }
});
