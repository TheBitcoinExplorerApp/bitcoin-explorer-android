import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CloseBtn from "../CloseBtn/CloseBtn";

type ModalHeaderProps = {
  handleModalClose: () => void;
  title: string;
};

export default function ModalHeader(props: ModalHeaderProps) {
  const { handleModalClose, title } = props;

  return (
    <View style={styles.headerModal}>
      <Text style={styles.title}>{title}</Text>
      <CloseBtn handleModalClose={handleModalClose} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "#fff",
    fontSize: 18,
  },
  headerModal: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
