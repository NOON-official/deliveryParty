import { StyleSheet, Dimensions } from "react-native";
const { width: SCREEN_WIDTH } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  mainTop: {
    flex: 3,
    backgroundColor: "white",
    justifyContent: "center",
    width: SCREEN_WIDTH,
  },
  mainMiddle: {
    flex: 9,
    backgroundColor: "black",
    width: SCREEN_WIDTH,
  },

  mainBottom: {
    flex: 1,
    backgroundColor: "white",
    width: SCREEN_WIDTH,
  },
  text: {
    color: "red",
    alignItems: "center",
  },
  list: {
    flex: 10,
    width: SCREEN_WIDTH - 20,
    alignItems: "center",
    alignItems: "flex-start",
    paddingHorizontal: 20,
    backgroundColor: "red",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 10,
  },
});
