import React from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function MainPage() {
  return (
    <View style={styles.container}>
      <View style={styles.mainTop}></View>
      <View style={styles.mainMiddle}>
        <ScrollView contentContainerStyle={{ flex: 1 }}>
          <View style={styles.list}></View>
          <View style={styles.list}>
            <Text>Hello</Text>
          </View>
          <View style={styles.list}>
            <Text>Hello</Text>
          </View>
          <View style={styles.list}>
            <Text>Hello</Text>
          </View>
        </ScrollView>
      </View>
      <View style={styles.mainBottom}>
        <Text></Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
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
