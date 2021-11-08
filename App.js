import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Dimensions,ScrollView,Image,useState} from 'react-native';
const {width: SCREEN_WIDTH } = Dimensions.get("window");
const {height: SCREEN_HEIGHT } = Dimensions.get("window");


export default function App() {
 
  return (
    <View style={styles.container}>
      <View style={styles.mainTop}>
        <Text style={{fontSize: 35,textAlign:'left',paddingLeft:30,paddingTop:25}}>오늘의 파티</Text>
      </View>
      <View style={styles.mainMiddle}>
      
      <ScrollView contentContainerStyle={{flex:1}}>
      <View  style={styles.list}>
      <View style={{flex:1,marginBottom:30,marginTop:30}}>
      <Image style={{flex:3}} source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',}}/>   
      <Text style={{flex:1,}}> 여기는 숫자</Text> 
      </View>
      <View style={{flex:3,marginTop:30,marginBottom:30,marginLeft:10}}>
      <Text style={{flex:1,fontSize:20}}>떡볶이 시키실 분?</Text>  
      <Text style={{flex:1, fontSize:15}}>떡볶이 떡볶이</Text>
      <View style={{flexDirection:'row',flex:1,}}>
      <Text style={{fontSize:15,borderStyle:'solid',borderRightWidth:10,}}>A동 귀여운 호랑이</Text>
      <Text style={{fontSize:15}}>17:00</Text>
      </View>
      </View>
      </View>
      



      </ScrollView>
      </View>
       
      <View style={styles.mainBottom}>
        <Text></Text>
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
    width: SCREEN_WIDTH
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
      backgroundColor:"red",
      marginLeft: 10,
      marginRight: 10,
      marginTop:5,
      marginBottom:10,
      flexDirection:'row'
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
