import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';
import {styles} from '../../styles/Popup';

export default function Popup({navigation}) {

    const [listData, setlistDate] = useState([
        {
            icon: <AntDesign name="meh" size={24} color="black"/>,
            participant: 1,
            totalParticipant: 5,
            Title: "떡볶이 시키실 분?",
            description: "떡복이 떡볶이",
            name: "A동 귀여운 호랑이",
            time: "17:00",
            store: "미파닭",
            menu: "떡볶이",
            key: '1'
        }
    ]);
    return (
        <View style={styles.container}>
            {
                listData.map((item) => {
                    return (
                        <View style={styles.PopUpChat} key={item.key}>
                            <View style={styles.Top}>
                                <TouchableOpacity
                                    style={styles.Button}
                                    title="exit"
                                    color='white'
                                    onPress={() => navigation.navigate('MainPage')}>
                                    <Feather name="x-circle" size={24} color="#C4C4C4"/>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.Bottom}>
                                <View style={styles.title}>
                                    <Text style={styles.titleText}>
                                        {item.Title}</Text>
                                </View>
                                <View style={styles.store}>
                                    <Text style={styles.storeText1}>가게</Text>
                                    <Text style={styles.storeText2}>
                                        {item.store}</Text>
                                </View>
                                <View style={styles.menu}>
                                 <Text style={styles.menuText1}>메뉴</Text>
                                    <Text style={styles.menuText2}>{item.menu}</Text>
                                </View>
                                <View style={styles.description}>
                                    <Text style={styles.descriptionText1}>상세설명</Text>
                                    <Text style={styles.descriptionText2}>{item.description}</Text>
                                </View>
                                <View style={styles.bottomButton}>
                                    <TouchableOpacity style={styles.bottomButtonTouch}>
                                        <View style={styles.icon}>{item.icon}</View>
                                        <Text style={styles.participant}>{item.participant}/{item.totalParticipant}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.bottomButtonTouch2}>
                                        <FontAwesome
                                            name="send"
                                            size={24}
                                            color="white"
                                            style={{
                                                marginLeft: 15
                                            }}/>
                                        <Text style={styles.chat}>채팅방 참여하기</Text>
                                    </TouchableOpacity>
                                </View>
                                <View
                                    style={{
                                        flex: 5
                                    }}></View>
                            </View>
                        </View>

                    )
                })
            }
            <StatusBar style="auto"/>
        </View>

    )
};
