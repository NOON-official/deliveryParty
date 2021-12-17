import React from "react";
import useState from "react";
import { Text, View, Button, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import NickNameData from "./NickNameData.json";
import DropDownPicker from "react-native-dropdown-picker";
import { WithLocalSvg } from "react-native-svg";
import Logo from "../../logoImage/smile(red).svg";

const randomName = (NickNameData) => {
  return (
    NickNameData.determiners[
      Math.floor(Math.random() * NickNameData.determiners.length)
    ] +
    " " +
    NickNameData.animals[
      Math.floor(Math.random() * NickNameData.animals.length)
    ]
  );
};

export default function Login({ navigation }) {
  const [dong, setDong] = React.useState("A");
  const [floor, setFloor] = React.useState(1);
  const [nickName, setNickName] = React.useState(randomName(NickNameData));
  const changeRandomNickName = () => {
    setNickName(randomName(NickNameData));
  };

  return (
    <View>
      <StatusBar style="auto" />
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Logo/>
      </View>

      <View style={{ alignItems: "center" }}>
        <View style={{ marginTop: 80, flexDirection: "row" }}>
          <View>
            <Text>{nickName}</Text>
          </View>
          <View style={{ paddingLeft: 20 }}>
            <Button
              title="이름 새로고침"
              onPress={() => changeRandomNickName()}
            />
          </View>
        </View>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <DropDownPicker
            items={[
              { label: "A동", value: "A" },
              { label: "B동", value: "B" },
              { label: "C동", value: "C" },
              { label: "D동", value: "D" },
              { label: "E동", value: "E" },
            ]}
            defaultIndex={0}
            containerStyle={{ height: 40 }}
            onChangeItem={(item) => setDong(item.value)}
          />
          <DropDownPicker
            items={[
              { label: "1층", value: 1 },
              { label: "2층", value: 2 },
              { label: "3층", value: 3 },
              { label: "4층", value: 4 },
              { label: "5층", value: 5 },
              { label: "6층", value: 6 },
              { label: "7층", value: 7 },
              { label: "8층", value: 8 },
              { label: "9층", value: 9 },
              { label: "10층", value: 10 },
              { label: "11층", value: 11 },
            ]}
            defaultIndex={0}
            containerStyle={{ height: 40 }}
            onChangeItem={(item) => setFloor(item.value)}
          />
        </View>
      </View>
      <View style={{ padding: 60, marginTop: 100 }}>
        <Button
          title="본인인증 및 로그인"
          onPress={() => navigation.navigate("PhoneAuth")}
        ></Button>
      </View>
    </View>
  );
}
