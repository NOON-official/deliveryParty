import {StatusBar} from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import {
    Button,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Image,
    Keyboard,
    Alert
} from 'react-native';
import 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons';
import {styles} from '../styles/UploadStyle';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Upload({navigation}) {
    const [texts, setTexts] = useState({});
    const [valueTitle, onChangeTextTitle] = useState();
    const onChangeTitle = (title) => onChangeTextTitle(title);
    const [valueStore, onChangeTextStore] = useState();
    const onChangeStore = (store) => onChangeTextStore(store);
    const [valueMenu, onChangeTextMenu] = useState();
    const onChangeMenu = (menu) => onChangeTextMenu(menu);
    const [valueDescription, onChangeTextDescription] = useState();
    const onChangeDescription = (description) => onChangeTextDescription(
        description
    );
    const [ImagePick, setImage] = useState();

    const addDatas = (
        icons,
        participants,
        totalparticipants,
        Titles,
        descriptions,
        names,
        times,
        stores,
        menus,
        keys
    ) => {
        return (Object.assign(texts, {
            icon: icons,
            participant: participants,
            totalParticipant: totalparticipants,
            Title: Titles,
            description: descriptions,
            name: names,
            time: times,
            store: stores,
            menu: menus,
            key: keys
        }));

    };
    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [
                4, 3
            ],
            quality: 1
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };
    function yes() {
        addDatas(
            null,
            3,
            5,
            valueTitle,
            valueDescription,
            "name",
            Date.now(),
            valueStore,
            valueMenu,
            Date.now()
        );
        setData(texts);
        navigation.navigate('MainPage');

    };

    const setData = async (Data) => {
        try {
            const JData = JSON.stringify(Data);
            await AsyncStorage.setItem('Data:Date.now()', JData);
            console.log("setData", JData)
        } catch (error) {
            // Error saving data
        }
    };
    const addText = () => {
        if (valueTitle && valueStore && valueMenu && valueDescription) {
            Keyboard.dismiss();
            if (ImagePick == null) {
                Alert.alert('사진없이 업로드 하시겠습니까?', '', [
                    {
                        text: '예',
                        onPress: () => yes()

                    }, {
                        text: '아니오',
                        onPress: () => console.log("no"),
                        style: 'cancel'
                    }
                ]);
            } else {
                yes()
            }
        } else {
            alert("제목, 가게이름, 메뉴, 설명은 필수 입력사항입니다.")
        }

    }

    return (
        <View style={styles.container}>
            <View style={styles.top
}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('UploadCancelPopup')}
                    style={styles.cancelPopup}>
                    <Feather name="x" size={30} color="#FF480E"/>
                </TouchableOpacity>
                <Text style={styles.participantText}>파티원 모집하기</Text>
                <TouchableOpacity style={styles.button}>
                    <Button onPress={addText} title='완료' color='white'></Button>
                </TouchableOpacity>
            </View>
            <View style={styles.title}>
                <TextInput
                    style={styles.textIputTitle}
                    onChangeText={onChangeTitle}
                    returnKeyType="done"
                    placeholder="제목"
                    value={valueTitle}></TextInput>
            </View>
            <View style={styles.description}>
                <TextInput
                    style={styles.textIputDescription}
                    onChangeText={onChangeStore}
                    returnKeyType="done"
                    placeholder="가게이름을 입력해주세요"
                    value={valueStore}></TextInput>
                <TextInput
                    style={styles.textIputDescription}
                    onChangeText={onChangeMenu}
                    returnKeyType="done"
                    placeholder="메뉴를 입력해주세요"
                    value={valueMenu}></TextInput>

                <TextInput
                    style={styles.textIputDescription}
                    onChangeText={onChangeDescription}
                    multiline="multiline"
                    placeholder="설명을 입력해주세요"
                    value={valueDescription}></TextInput>
            </View>
            <View>
                <Image
                    source={{
                        uri: ImagePick
                    }}
                    style={{
                        width: 200,
                        height: 200
                    }}/>
            </View>
            <TouchableOpacity onPress={pickImage} style={styles.image}>
                <Feather name="camera" size={25} color="#C4C4C4"/>
            </TouchableOpacity>
            <StatusBar style="auto"/>
        </View>
    )

}
