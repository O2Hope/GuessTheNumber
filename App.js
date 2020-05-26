import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/header";
import StartGame from "./views/start-game.view"

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Guess a number" />
      <StartGame/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
