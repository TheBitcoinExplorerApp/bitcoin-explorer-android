/* eslint-disable import/no-extraneous-dependencies */
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import LogoIcons from "../../assets/iconsLogo.svg";
import Modal from "../Modal/Modal";

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

export default function Title() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <LogoIcons
        height={32}
        onPress={() => {
          setModalVisible(true);
        }}
      />

      <Modal
        modalType="Information"
        isVisible={modalVisible}
        handleModalClose={() => {
          setModalVisible(false);
        }}
      />
    </View>
  );
}
