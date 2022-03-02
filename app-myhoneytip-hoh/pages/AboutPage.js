import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function AboutPage({ navigation, route }) {
  const aboutImage =
    "https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2FaboutImage.png?alt=media&token=13e1c4f6-b802-4975-9773-e305fc7475c4";

  useEffect(() => {
    navigation.setOptions({
      title: "소개 페이지",
      headerStyle: {
        backgroundColor: "#00498c",
        shadowColor: "#1F266A",
      },
      headerTintColor: "#fff",
    });
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.title}>이것은 타이틀입니다 여러분!!</Text>

      <View style={styles.middle_container}>
        <Image style={styles.middle_img} source={{ uri: aboutImage }} />
        <Text style={styles.mid_text1}>이것은 텍스트입니다 여러분!!</Text>
        <Text style={styles.mid_text2}>두번째 텍스트입니다 여러분!!</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.button_text}>여러분의 인스타계정</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00498c",
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    marginTop: 70,
    width: 400,
    color: "white",
    fontWeight: "600",
  },
  middle_container: {
    width: 350,
    height: 540,
    alignSelf: "center",
    backgroundColor: "white",
    marginTop: 60,
    borderRadius: 30,
  },
  middle_img: {
    width: 170,
    height: 170,
    alignSelf: "center",
    borderRadius: 30,
    marginTop: 70,
  },
  mid_text1: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
    paddingTop: 10,
  },
  mid_text2: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 15,
    fontWeight: "700",
  },
  button: {
    backgroundColor: "orange",
    alignSelf: "center",
    width: 180,
    height: 65,
    borderRadius: 20,
    padding: 20,
    marginTop: 20,
  },
  button_text: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },
});
