import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useState } from "react";
import React from "react";
import ModalHeader from "../ModalHeader/ModalHeader";
import BoxContainerWithText from "src/components/BoxContainerWithText/BoxContainerWithText";
import { BlockModalProps, TransactionType } from "../../types";
import * as Clipboard from "expo-clipboard";
import { getBlockTransactions } from "src/api/getData";
import AllTransactionsInTransactionModal from "./components/AllTransactionsInBlockModal";

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
    extras,
  } = props;

  const { pool } = extras;

  const [transactionsData, setTransactionsData] = useState<TransactionType[]>(
    []
  );

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const copyToClipboard = async (text: string) => {
    await Clipboard.setStringAsync(text);
  };

  return (
    <Modal
      animationType="slide"
      visible={isVisible}
      transparent
      onShow={() => {
        setIsLoading(true);
        const fetchData = async () => {
          const response = await getBlockTransactions(blockHash);
          const formattedData: TransactionType[] = response.map(
            (transaction) => ({
              transactionId: transaction.txid,
              size: transaction.size,
              fee: transaction.fee,
              inputTransactions: transaction.vin,
              outputTransactions: transaction.vout,
              statusTransaction: {
                confirmed: transaction.status.confirmed,
                blockHeight: transaction.status.block_height,
                blockHash: transaction.status.block_hash,
                blockTime: transaction.status.block_time,
              },
            })
          );

          setTransactionsData(formattedData);
          setIsLoading(false);
        };
        fetchData();
      }}
    >
      <ScrollView
        contentContainerStyle={{
          marginTop: "60%",
          paddingBottom: "60%",
        }}
      >
        <View style={styles.container}>
          <ModalHeader handleModalClose={handleModalClose} title="Bloco" />

          <View style={styles.contentContainer}>
            <BoxContainerWithText
              firstText="Bloco"
              secondText={`${blockHeight}`}
              secondTextWhite
              width="42%"
            />

            <View>
              <TouchableOpacity
                onPress={() => {
                  copyToClipboard(blockHash);
                }}
              >
                <BoxContainerWithText
                  firstText="Hash"
                  secondText={`${blockHash.substring(0, 24)}...`}
                  borderStyles={{
                    borderBottomEndRadius: 0,
                    borderBottomStartRadius: 0,
                  }}
                />
              </TouchableOpacity>

              <BoxContainerWithText
                firstText="Data/Hora"
                secondText={`${timeAgo.day}/${timeAgo.month}/${timeAgo.year} ${timeAgo.hour}:${timeAgo.minutes}`}
                secondTextWhite
                borderStyles={{
                  borderTopEndRadius: 0,
                  borderTopStartRadius: 0,
                  borderBottomEndRadius: 0,
                  borderBottomStartRadius: 0,
                }}
              />

              <BoxContainerWithText
                firstText="Tamanho"
                secondText={`${size} MB`}
                secondTextWhite
                borderStyles={{
                  borderTopEndRadius: 0,
                  borderTopStartRadius: 0,
                  borderBottomEndRadius: 0,
                  borderBottomStartRadius: 0,
                }}
              />

              <BoxContainerWithText
                firstText="Taxa mediana"
                secondText={`~${satPerVbyte} sat/vB`}
                secondTextWhite
                borderStyles={{
                  borderTopEndRadius: 0,
                  borderTopStartRadius: 0,
                  borderBottomEndRadius: 0,
                  borderBottomStartRadius: 0,
                }}
              />

              <BoxContainerWithText
                firstText="Minerador"
                secondText={pool.name}
                secondTextWhite
                borderStyles={{
                  borderTopEndRadius: 0,
                  borderTopStartRadius: 0,
                }}
              />
            </View>

            <Text style={styles.titleTransactionBlock}>
              {transactions} transações
            </Text>

            <View style={styles.transactionContainer}>
              {isLoading ? (
                <Text>Carregando...</Text>
              ) : (
                transactionsData.map((transaction) => (
                  <AllTransactionsInTransactionModal
                    key={transaction.transactionId}
                    data={transaction}
                  />
                ))
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    flexDirection: "row",
  },
  container: {
    backgroundColor: "#101427",
    paddingVertical: 17,
    paddingHorizontal: 10,
  },
  contentContainer: {
    paddingHorizontal: 8,
    marginTop: 35,
    gap: 20,
  },
  titleTransactionBlock: {
    color: "#FFF",
    fontSize: 15,
  },
  transactionContainer: {
    gap: 15,
  },
});
