import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { BlockProps, BlockType } from "./type";
import Modal from "src/components/Modal/Modal";
import { useState } from "react";
import { initialStateBlocks } from "src/mocks/initialStates";

export default function Block(props: BlockProps) {
  const { blocks } = props;

  const [modalVisible, setModalVisible] = useState(false);
  const [blockData, setBlockData] = useState<BlockType>(initialStateBlocks[0]);

  return (
    <View style={styles.blocksContainer}>
      {blocks.map((block) => {
        return (
          <View key={block.blockHeight}>
            <TouchableOpacity
              onPress={() => {
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
                <Text style={styles.text}>{block.transactions} transações</Text>
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
        }}
        modalType="Block"
        blockHash={blockData.blockHash}
        blockHeight={blockData.blockHeight}
        satPerVbyte={blockData.satPerVbyte}
        size={blockData.size}
        timeAgo={blockData.timeAgo}
        transactions={blockData.transactions}
        extras={blockData.extras}
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
