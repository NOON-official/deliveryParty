import { StyleSheet, Dimensions } from "react-native";
const {width: SCREEN_WIDTH } = Dimensions.get("window");
const {height: SCREEN_HEIGHT } = Dimensions.get("window");
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
      },
      mainTop: {
        flex:5,
        backgroundColor:'white',
        justifyContent: 'center',
        width: SCREEN_WIDTH
      },
      mainMiddle: {
        flex:6 ,
        backgroundColor: "white",
        width: SCREEN_WIDTH
      },
      mainBottom :{
        flex: 1.5,
        backgroundColor:'white',
        width: SCREEN_WIDTH,
        borderStyle:'solid',
        borderWidth:1,
        flexDirection:'row',
        borderColor:'#C4C4C4'
      },
      mainBottomButtons:{
        flex:1,
        justifyContent:'center', 
        alignItems:'center',
        marginBottom:20
  },
  mainBottomText:{
      color:'#C4C4C4'
  }
})