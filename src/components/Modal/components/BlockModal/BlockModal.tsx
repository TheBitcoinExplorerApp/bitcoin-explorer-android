import { View, Text, Modal, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import ModalHeader from "../ModalHeader/ModalHeader";
import BoxContainerWithText from "src/components/BoxContainerWithText/BoxContainerWithText";
import { BlockModalProps } from "../../types";
import * as Clipboard from "expo-clipboard";

export default function BlockModal(props: BlockModalProps) {
  const {
    isVisible,
    handleModalClose,
    blockHash,
    blockHeight,
    satPerVbyte,
    size,
    timeAgo,
    transactions,
  } = props;

  const copyToClipboard = async (text: string) => {
    await Clipboard.setStringAsync(text);
  };

  return (
    <Modal animationType="slide" visible={isVisible} transparent>
      <View style={{ width: "100%", height: "20%" }}></View>
      <View style={styles.container}>
        <ModalHeader handleModalClose={handleModalClose} title="Bloco" />

        <View style={styles.contentContainer}>
          <BoxContainerWithText
            firstText="Bloco"
            secondText="123456"
            secondTextWhite
            width="42%"
          />

          <TouchableOpacity
            onPress={() => {
              copyToClipboard(blockHash);
            }}
          >
            <BoxContainerWithText
              firstText="Hash"
              secondText={`${blockHash.substring(0, 24)}...`}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    flexDirection: "row",
  },
  container: {
    backgroundColor: "#101427",
    height: "80%",
    paddingVertical: 17,
    paddingHorizontal: 10,
  },
  contentContainer: {
    paddingHorizontal: 8,
    marginTop: 35,
    gap: 20,
  },
});
