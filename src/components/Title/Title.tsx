import { StyleSheet, Text, View } from "react-native";
import BitcoinLogo from "../../assets/bitcoinLogo.svg";
import { useState } from "react";
import Modal from "../Modal/Modal";

export default function Title() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <BitcoinLogo
        width={28}
        height={28}
        onPress={() => {
          console.log("pressed!");
        }}
      />

      <Text style={styles.title}>Bitcoin Block Explorer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 26,
  },
  title: {
    color: "#DF7800",
    fontSize: 20,
    fontWeight: "600",
  },
  brand: {
    color: "#DF7800",
    fontSize: 28,
    fontWeight: "bold",
  },
});
