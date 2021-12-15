import React from "react";
import { Text, View, Dimensions, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles/Styles";

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