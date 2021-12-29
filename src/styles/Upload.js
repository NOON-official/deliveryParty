import {StyleSheet, Dimensions} from "react-native";
const {width: SCREEN_WIDTH} = Dimensions.get("window");
const {height: SCREEN_HEIGHT} = Dimensions.get("window");
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'start',
        backgroundColor: "white"
    },
    top: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        flex: 2
    },
    cancelPopup: {
        flex: 3,
        paddingLeft: 10
    },
    participantText: {
        flex: 12,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    button: {
        flex: 4,
        borderRadius: 50,
        backgroundColor: "#FF480E",
        marginRight: 15
    },
    textIputTitle: {
        width: SCREEN_WIDTH * 0.9,
        margin: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#777777',
        borderBottomColor: '#777777',
        borderBottomWidth: 1,
        padding: 10
    },
    textIputDescription: {
        width: SCREEN_WIDTH * 0.9,
        margin: 5,
        fontSize: 15,
        fontWeight: 'normal',
        color: '#777777',
        padding: 10
    },
    description: {
        flex: 15,
        borderBottomColor: '#777777',
        borderBottomWidth: 1
    },
    image: {
        flex: 1.5,
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
        width: SCREEN_WIDTH,
        paddingLeft: 30,
        paddingTop: 20
    }

})