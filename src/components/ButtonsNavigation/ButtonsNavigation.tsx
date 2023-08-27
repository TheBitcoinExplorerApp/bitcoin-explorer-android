import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import HouseIcon from "../../../assets/house.svg";
import BlocksIcon from "../../../assets/blocks.svg";
import TransactionsIcon from "../../../assets/transactions.svg";

type ButtonsNavigationProps = {
  navigation: any;
  actualScreen: "Home" | "Blocks" | "Transactions";
};

export default function ButtonsNavigation(props: ButtonsNavigationProps) {
  const { navigation, actualScreen } = props;

  const homeColor = actualScreen === "Home" ? "#DF7800" : "#D6D6D6";
  const blocksColor = actualScreen === "Blocks" ? "#DF7800" : "#D6D6D6";
  const transactionsColor =
    actualScreen === "Transactions" ? "#DF7800" : "#D6D6D6";

  console.log('ActualScreen: ', actualScreen)

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <View style={styles.buttonContainer}>
          <HouseIcon style={{ color: homeColor }} />
          <Text
            style={{
              color: homeColor,
            }}
          >
            Home
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Blocks");
        }}
      >
        <View style={styles.buttonContainer}>
          <BlocksIcon style={{ color: blocksColor }} />
          <Text
            style={{
              color: blocksColor,
            }}
          >
            Blocos
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Transactions");
        }}
      >
        <View style={styles.buttonContainer}>
          <TransactionsIcon style={{ color: transactionsColor }} />
          <Text
            style={{
              color: transactionsColor,
            }}
          >
            Transações
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#111428",
    alignItems: "center",
    flexDirection: "row",
    height: 60,
    justifyContent: "space-around",
  },
  buttonContainer: {
    height: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
});
