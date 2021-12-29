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
    View1:{
        flex: 4,
        flexDirection: 'column-reverse'
    },
    image:{
        width: 150,
        height: 150
    },
    view2:{
        flex: 2,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    text1:{
        color: '#1C1C1C',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text2:{
        color: '#777777',
        fontSize: 18,
        marginTop: 20
    },
    text3:{
        color: '#777777',
        fontSize: 18,
        marginTop: 5
    },
    view3:{
        flex: 3,
        flexDirection: 'row'
    },
    touch1:{
        backgroundColor: '#C4C4C4',
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 20,
        borderColor: '#C4C4C4',
        borderWidth: 1,
        marginRight: 5,
        marginLeft: 20,
        marginBottom: 200
    },
    touch2:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 20,
        backgroundColor: '#FF480E',
        marginRight: 20,
        marginLeft: 5,
        marginBottom: 200
    },
    text4:{
        fontWeight: '700',
        paddingLeft: 10,
        color: 'white'
    }
})