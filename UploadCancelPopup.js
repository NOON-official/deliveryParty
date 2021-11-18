import { StatusBar } from 'expo-status-bar';
import React, {useState,Component} from 'react';
import { Button,StyleSheet, Text, View,Dimensions,ScrollView,Image, Pressable,SafeAreaView, TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';





const {height: SCREEN_HEIGHT } = Dimensions.get("window");
const {width: SCREEN_WIDTH } = Dimensions.get("window");


export default function UploadCancelPopup ({navigation}){
    
    return(
        <View style={styles.container}>
           <View style={{flex:4, flexDirection:'column-reverse'}}>  
              <Image style={{width:150,height:150}} source={require('./logoImage/sad.png')}/>
           </View>
           <View style={{flex:2,alignItems:'center', justifyContent:'flex-start'}}>
             <Text style={{color:'#1C1C1C', fontSize:30,fontWeight:'bold'}}>뒤로 가시겠습니까?</Text>
             <Text style={{color:'#777777', fontSize:18,marginTop:20}}>글 작성을 중지하시겠습니까?</Text>
             <Text style={{color:'#777777', fontSize:18, marginTop:5}}>작성 중인 내용이 저장되지 않고 사라집니다.</Text>
           </View>
           <View style={{flex:3,flexDirection:'row'}}>
           <TouchableOpacity onPress={()=>navigation.navigate("Upload")} style={{backgroundColor:'#C4C4C4',flex:1, alignItems:'center',flexDirection:'row',justifyContent:'center',borderRadius:20, borderColor:'#C4C4C4',borderWidth:1,marginRight:5,marginLeft:20,marginBottom:200}}>
                      <Text style={{color:"white"}}>취소</Text>
                     
                  </TouchableOpacity>
                  <TouchableOpacity  onPress={()=>navigation.navigate('MainPage')} style={{flex:1, justifyContent:'center',alignItems:'center',flexDirection:'row',borderRadius:20, backgroundColor:'#FF480E',marginRight:20, marginLeft:5,marginBottom:200}}>
                 
                      <Text style={{fontWeight:'700',paddingLeft:10, color:'white'}}> 확인</Text>
                  </TouchableOpacity>
           </View>
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