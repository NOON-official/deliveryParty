import {StatusBar} from 'expo-status-bar';
import React, {useState, Component, useEffect} from 'react';
import {
    Text,
    View,
    ScrollView,
    Pressable,
    SafeAreaView,
    TouchableOpacity,
    RefreshControl,
    ActivityIndicator,
    Alert
} from 'react-native';
import {Entypo} from '@expo/vector-icons';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {Octicons} from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';
import {styles} from '../styles/MainPageStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function MainPage({navigation}) {
    const [Datas, setDatas] = useState([]);

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(1000).then(() => setRefreshing(false));
        getData();
    }, []);
    var isNew= true;
    const addDatas = object => 
    {  
        Datas.map((item)=>
        {if(item.key==object.key)
         {  
             return isNew=false;   
         }});
         if(isNew==true)
         {  
        
            Datas.push(object);
         }
         else{
             isNew=true;
            return Alert.alert("새로운 데이터가 없습니다."); 
         }

    }
      
       
    
    const getData = async () => {
        AsyncStorage.getItem('Data:Date.now()', (err, result) => {
            const UserInfo = JSON.parse(result);
            console.log("This is getData data", UserInfo);
            addDatas(UserInfo);
            console.log("Datas배열 현황", Datas);
            return UserInfo;
        })
    }

    return (
        <View style={styles.container}>

            <View style={styles.mainTop}>
                <Text style={styles.mainTopText}>오늘의 파티</Text>
            </View>

            <SafeAreaView style={styles.mainMiddle}>
                <ScrollView
                    style={{
                        flex: 1
                    }}
                    refreshControl={//TodoList 부분
                    < RefreshControl
                    refreshing = {
                        refreshing
                    }
                    onRefresh = {
                        onRefresh
                    }
                    />}>

                    {
                        Datas.map((item) => { //TodoListItme 부분
                            return (

                                <TouchableOpacity
                                    key={item.key}
                                    onPress={() => navigation.navigate('Popup')}
                                    style={styles.list}>
                                    <View style={styles.mainMiddleView1}>
                                        <View style={styles.mainMiddleIcon}>{item.icon}</View>
                                        <Text style={styles.mainMiddleText1}>
                                            {item.participant}/{item.totalParticipant}</Text>
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

                            )
                        })
                    }
                </ScrollView>

            </SafeAreaView>
            <View style={styles.mainBottom}>
                <Pressable
                    onPress={() => navigation.navigate('MainPage')}
                    style={styles.mainBottomButtons}>

                    <Entypo name="home" size={35} color="#FF480E"/>
                    <Text style={styles.mainBottomText}>home</Text>

                </Pressable>
                <Pressable
                    onPress={() => navigation.navigate('Upload')}
                    style={styles.mainBottomButtons}>

                    <MaterialCommunityIcons name="progress-upload" size={35} color="#C4C4C4"/>
                    <Text style={styles.mainBottomText}>upload</Text>
                </Pressable>
                <Pressable style={styles.mainBottomButtons}>

                    <Entypo name="back-in-time" size={35} color="#C4C4C4"/>
                    <Text style={styles.mainBottomText}>recent</Text>

                </Pressable>
                <Pressable
                    onPress={() => navigation.navigate('MyPage')}
                    style={styles.mainBottomButtons}>

                    <Octicons name="person" size={35} color="#C4C4C4"/>
                    <Text style={styles.mainBottomText}>mypage</Text>

                </Pressable>
            </View>

            <StatusBar style="auto"/>

        </View>
    );
};
