import { TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Image } from "react-native";
import CloseIcon from "../../../../assets/xIcon.svg";

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
      accessibilityLabel="Close Modal"
    >
      <CloseIcon width={20} height={20} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  closeButton: {
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    padding: 5,
    backgroundColor: "#D9D9D9",
    position: "absolute",
    right: 0,
  },
});
