import {StyleSheet, Dimensions} from "react-native";
const {width: SCREEN_WIDTH} = Dimensions.get("window");
const {height: SCREEN_HEIGHT} = Dimensions.get("window");
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "white"
    },
    PopUpChat: {
        height: SCREEN_HEIGHT / 1.8,
        backgroundColor: 'white',
        width: SCREEN_WIDTH / 1.2,
        borderColor: '#bfc9c2',
        borderWidth: 1,
        borderRadius: 20

    },
    Top: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'flex-end'
    },
    Bottom: {
        flex: 8,
        backgroundColor: 'white'
    },
    Button: {
        flex: 1,
        backgroundColor: 'white',
        position: 'relative',
        width: 50,
        justifyContent: 'center'

    },
    title: {
        flex: 1.5,
        marginBottom: 15
    },
    titleText: {
        fontSize: 30,
        marginTop: 5
    },
    store: {
        flex: 1.2,
        flexDirection: 'row'
    },
    storeText1: {
        flex: 1,
        fontSize: 15,
        marginLeft: 10,
        color: '#a8b5ac'
    },
    storeText2: {
        flex: 6,
        fontSize: 15
    },
    menu: {
        flex: 1.2,
        flexDirection: 'row'
    },
    menuText1: {
        flex: 1,
        fontSize: 15,
        marginLeft: 10,
        color: '#a8b5ac'
    },
    menuText2: {
        flex: 6,
        fontSize: 15
    },
    description: {
        flex: 3,
        marginTop: 15
    },
    descriptionText1: {
        flex: 1.3,
        fontSize: 15,
        marginLeft: 10,
        color: '#a8b5ac'
    },
    descriptionText2: {
        flex: 3,
        fontSize: 15,
        marginLeft: 10
    },
    bottomButton: {
        flex: 1.5,
        flexDirection: 'row'
    },
    bottomButtonTouch: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 20,
        borderColor: 'a8b5ac',
        borderWidth: 1,
        marginRight: 10,
        marginLeft: 20
    },
    icon: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    participant: {
        fontWeight: '700',
        marginLeft: 5
    },
    bottomButtonTouch2: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 20,
        backgroundColor: '#FF480E',
        marginRight: 20
    },
    chat: {
        fontWeight: '700',
        paddingLeft: 10,
        color: 'white'
    }
})