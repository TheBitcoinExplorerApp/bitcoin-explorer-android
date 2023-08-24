import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import React from "react";
import { BlockProps } from "./type";
import Modal from "src/components/Modal/Modal";
import { useState } from "react";

export default function Block(props: BlockProps) {
  const { blocks } = props;

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <FlatList
      data={blocks}
      keyExtractor={(blockInfo) => blockInfo.blockHeight.toString()}
      numColumns={2}
      contentContainerStyle={{ alignItems: "center", flexGrow: 1 }}
      ItemSeparatorComponent={() => {
        return <View style={{ height: 25 }} />;
      }}
      renderItem={({ item, index }) => {
        const itemLeft = index % 2 === 0 ? 0 : 25;

        return (
          <>
            <Pressable
              onPress={() => {
                setModalVisible(true);
              }}
            >
              <View
                key={item.blockHeight}
                style={{ ...styles.blockContainer, marginLeft: itemLeft }}
              >
                <Text style={styles.textPrimary}>{item.blockHeight}</Text>
                <Text style={styles.text}>{item.satPerVbyte} sat/vB</Text>
                <Text style={styles.text}>{item.size} MB</Text>
                <Text style={styles.text}>{item.transactions} transações</Text>
                <Text style={styles.text}>
                  {item.timeAgo.hour}:{item.timeAgo.minutes}
                </Text>
              </View>
            </Pressable>

            <Modal
              isVisible={modalVisible}
              handleModalClose={() => {
                setModalVisible(false);
              }}
              modalType="Block"
              blockHash={item.blockHash}
              blockHeight={item.blockHeight}
              satPerVbyte={item.satPerVbyte}
              size={item.size}
              timeAgo={item.timeAgo}
              transactions={item.transactions}
              extras={item.extras}
            />
          </>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
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
