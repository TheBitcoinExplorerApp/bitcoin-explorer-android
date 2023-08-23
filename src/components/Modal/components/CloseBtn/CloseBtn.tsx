import { TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Image } from "react-native";

type CloseBtnProps = {
  handleModalClose: () => void;
};

export default function CloseBtn(props: CloseBtnProps) {
  const { handleModalClose } = props;

  return (
    <TouchableOpacity
      style={styles.closeButton}
      onPress={() => {
        handleModalClose();
      }}
    >
      <Image source={require("../../../../../assets/xIcon.png")} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  closeButton: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    padding: 5,
    backgroundColor: "#D9D9D9",
    position: "absolute",
    right: 0,
  },
});
