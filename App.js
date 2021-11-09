import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View,Dimensions,ScrollView,Image, Pressable} from 'react-native';
const {width: SCREEN_WIDTH } = Dimensions.get("window");
const {height: SCREEN_HEIGHT } = Dimensions.get("window");


export default function App() {
 const [listData,setlistDate] = useState([
   {
     icon:'https://raw.githubusercontent.com/NOON-official/deliveryParty/main/assets/icon.png',
     participant:1,
     Title:"떡볶이 시키실 ",
     description:"떡복이 떡볶이",
     name:"A동 귀여운 호랑이",
     time:"17:00",
     key:'1'
   }
 ]);
  return (
    <View style={styles.container}>
      <View style={styles.mainTop}>
        <Text style={{fontSize: 35,textAlign:'left',paddingLeft:30,paddingTop:25}}>오늘의 파티</Text>
      </View>
      <View style={styles.mainMiddle}>
      {listData.map((item)=>{
        return(
     <ScrollView contentContainerStyle={{flex:1}}  key={item.key}>
      <View  style={styles.list}>
      <Pressable style={{flex:1,marginBottom:30,marginTop:30}}>
      <Image style={{flex:3}} source={{uri:'https://raw.githubusercontent.com/NOON-official/deliveryParty/main/assets/icon.png',}}/>   
      <Text style={{flex:1,textAlign:'center',marginTop:5}}> 1/5</Text> 
      </Pressable>
      <Pressable style={{flex:3,marginTop:30,marginBottom:30,marginLeft:10}}>
      <Text style={{flex:1,fontSize:20}}>{item.Title}</Text>  
      <Text style={{flex:1, fontSize:15}}>{item.description}</Text>
      <View style={{flexDirection:'row',flex:1,}}>
      <Text style={{fontSize:15,borderRightColor:'black',borderRightWidth:1}}>{item.name}</Text>
      <Text style={{fontSize:15, marginLeft:5}}>{item.time}</Text>
      </View>
      </Pressable>
      </View>
      </ScrollView>
      
      )})}
      </View>
      <StatusBar style="auto" />
      
    </View>
  );
}

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
    flex: 1,
    backgroundColor: "white",
    width: SCREEN_WIDTH,
    borderStyle:'solid',
    borderWidth:1,
    flexDirection:'row'
  },
  text :{
color : "red",
alignItems: 'center'
  },
  list:{
      
      height: SCREEN_HEIGHT/6.5,
      width: SCREEN_WIDTH-20,
      alignItems: "center",
      alignItems: "flex-start",
      paddingHorizontal: 20,
      backgroundColor:"white",
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
