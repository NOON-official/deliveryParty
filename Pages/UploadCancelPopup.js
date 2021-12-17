import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import "react-native-gesture-handler";
import { styles } from "../styles/UploadCancelPopupStyle";
import { SvgCssUri } from "react-native-svg";
import SadLogo from "../logoImage/sad.svg"

export default function UploadCancelPopup({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.View1}>
        <SadLogo />
      </View>
      <View style={styles.view2}>
        <Text style={styles.text1}>뒤로 가시겠습니까?</Text>
        <Text style={styles.text2}>글 작성을 중지하시겠습니까?</Text>
        <Text style={styles.text3}>
          작성 중인 내용이 저장되지 않고 사라집니다.
        </Text>
      </View>
      <View style={styles.view3}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Upload")}
          style={styles.touch1}
        >
          <Text
            style={{
              color: "white",
            }}
          >
            취소
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("MainPage")}
          style={styles.touch2}
        >
          <Text style={styles.text4}>확인</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
