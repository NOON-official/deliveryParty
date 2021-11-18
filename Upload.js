import { StatusBar } from 'expo-status-bar';
import React, {useState,Component} from 'react';
import { Button,StyleSheet, Text, View,Dimensions,SafeAreaView, TouchableOpacity,TextInput} from 'react-native';
import 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'; 



const {height: SCREEN_HEIGHT } = Dimensions.get("window");
const {width: SCREEN_WIDTH } = Dimensions.get("window");
let textTitle='';
let textDescription='';

export default function Upload({navigation})
{
    
    const [valueTitle, onChangeTextTitle] = useState("제목")
    const [valueDescription, onChangeTextDescription] = useState("내용을 입력하세요")
     function textTitleChangeHandler(event){
     onChangeTextTitle(event.target.value)
     textTitle = event.target.value;
    }
    function textDescriptionChangeHandler(event){
        onChangeTextDescription(event.target.value)
        textDescription = event.target.value;
       }
    return(
        <View style={styles.container}>
          <View style={{...styles.top,alignItems:'center',justifyContent:'center'}}>
              <TouchableOpacity onPress={()=>navigation.navigate('UploadCancelPopup')} style={{flex:3,paddingLeft:10}}> 
              <Feather name="x" size={30} color="#FF480E" />
              </TouchableOpacity>
              <Text style={{flex:12, textAlign:'center',fontSize:20,fontWeight:'bold'}}>파티원 모집하기</Text>
              <TouchableOpacity style={{flex:4, borderRadius:50, backgroundColor:"#FF480E", marginRight:15}}> 
              <Button  title='완료' color='white' ></Button>
              </TouchableOpacity>
          </View>
           <View style={styles.title}>
           <TextInput style={{width:SCREEN_WIDTH*0.9, margin:10,fontSize:20, fontWeight:'bold',color: '#777777',borderBottomColor:'#777777',borderBottomWidth:1,padding:10}}  onChange={textTitleChangeHandler} value = {valueTitle} > </TextInput>
           </View>
         <View style={styles.description}>
         <TextInput style={{width:SCREEN_WIDTH*0.9, height:styles.description.height,margin:5,fontSize:15, fontWeight:'normal',color: '#777777',padding:10}}  onChange={textDescriptionChangeHandler} value = {valueDescription}> </TextInput>
         </View>
         <TouchableOpacity style={styles.image}>
         <Feather name="camera" size={25} color="#C4C4C4" />
         </TouchableOpacity>
        <StatusBar style="auto" />
        </View>
    )

}
//사진 업로드를 어떻게 해걀할까????

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'start',
      backgroundColor: "white",
      
    },
    top :{
flex:2,
flexDirection:'row'
    },
    title:{
flex:2
    },
    description:{
flex:15,
borderBottomColor:'#777777',
borderBottomWidth:1,
    },
    image:{
        flex:1.5,
        alignContent:'flex-start',
        justifyContent:'flex-start',
        width:SCREEN_WIDTH,
        paddingLeft:30,
        paddingTop:20
    }
});