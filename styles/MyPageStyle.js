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
      mainTopIcon:{
        flex:5,
        alignItems:'center',
        justifyContent:"flex-end", marginBottom:20
      },
      mainTopName:{
        flex:3, alignItems:"center",justifyContent:"flex-start"
      },
      mainMiddle: {
        flex:6 ,
        backgroundColor: "white",
        width: SCREEN_WIDTH
      },
      mainMiddle2:{
        flex:1, alignItems:'baseline', justifyContent:'center', marginLeft:30, marginTop:30,borderBottomColor:'#ECECEC', borderBottomWidth:2, marginRight:30, marginBottom:15
      },
      mainMiddleText1:{fontSize:25, fontWeight:'bold'},
     mainMiddle3:{flex:3.5, marginLeft:30},
     mainMiddleText2:{color:'#777777', fontWeight:"400", fontSize:17},

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