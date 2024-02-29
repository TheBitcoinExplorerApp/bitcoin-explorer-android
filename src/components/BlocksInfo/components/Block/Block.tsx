import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect } from "react";
import { BlockProps, BlockType } from "./type";
import Modal from "src/components/Modal/Modal";
import { useState } from "react";
import { initialStateBlocks } from "src/mocks/initialStates";
import ModalServices from "src/services/ModalServices";
import { TransactionType } from "src/components/Modal/types";
import { I18nContext } from "src/context/LocaleProvider";

export default function Block(props: BlockProps) {
  const { blocks } = props;
  const i18nContext = useContext(I18nContext);

  const [modalVisible, setModalVisible] = useState(false);
  const [blockData, setBlockData] = useState<BlockType>(initialStateBlocks[0]);
  const [blockTransactions, setBlockTransactions] = useState<TransactionType[]>(
    []
  );
  const getTransactionsFromBlock = async (blockHash: string) => {
    const data = await ModalServices.getBlockTransactions(blockHash);

    setBlockTransactions(data);
  };

  return (
    <View style={styles.blocksContainer}>
      {blocks.map((block) => {
        return (
          <View key={block.blockHeight}>
            <TouchableOpacity
              onPress={() => {
                getTransactionsFromBlock(block.blockHash);
                setBlockData(block);
                setModalVisible(true);
              }}
            >
              <View
                key={block.blockHeight}
                style={{ ...styles.blockContainer }}
              >
                <Text style={styles.textPrimary}>{block.blockHeight}</Text>
                <Text style={styles.text}>{block.satPerVbyte} sat/vB</Text>
                <Text style={styles.text}>{block.size} MB</Text>
                <Text style={styles.text}>
                  {block.transactions}{" "}
                  {i18nContext.t("transactions").toLowerCase()}
                </Text>
                <Text style={styles.text}>
                  {block.timeAgo.hour}:{block.timeAgo.minutes}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        );
      })}

      <Modal
        isVisible={modalVisible}
        handleModalClose={() => {
          setModalVisible(false);
          setBlockTransactions([]);
        }}
        modalType="Block"
        blockHash={blockData.blockHash}
        blockHeight={blockData.blockHeight}
        satPerVbyte={blockData.satPerVbyte}
        size={blockData.size}
        timeAgo={blockData.timeAgo}
        transactions={blockData.transactions}
        extras={blockData.extras}
        blockTransactions={blockTransactions}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  blocksContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 18,
  },
  blockContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 160,
    height: 110,
    backgroundColor: "#1d2133",
    borderRadius: 7,
  },
  textPrimary: {
    color: "#DF7800",
    fontSize: 15,
  },
  text: {
    color: "#FFF",
    fontSize: 12,
  },
});
