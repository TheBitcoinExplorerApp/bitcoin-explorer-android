/* eslint-disable import/no-extraneous-dependencies */
import { useState } from "react";
import Modal from "src/components/Modal/Modal";
import ModalServices from "src/services/ModalServices";
import useAppDataStore from "src/context/DataProvider";
import { TransactionType } from "src/components/Modal/types";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { TransactionInfo } from "../types";

type transaction = {
  transactionId: string;
  value: number;
  fee: number;
};

type TransactionProps = {
  transactions: transaction[];
};

const styles = StyleSheet.create({
  transactionsContainer: {
    gap: 16,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#1d2133",
    borderRadius: 7,
    paddingVertical: 10,
  },
  transactionInfoContainer: {
    alignItems: "center",
    gap: 8,
  },
  transactionId: {
    color: "#DF7800",
    fontWeight: "500",
  },
  transactionInfoLabel: {
    color: "white",
    fontSize: 13,
    fontWeight: "500",
  },
  transactionInfoValue: {
    color: "white",
    fontWeight: "500",
  },
});

export default function Transaction(props: TransactionProps) {
  const { transactions } = props;
  const { i18n } = useAppDataStore();
  const [modalVisible, setModalVisible] = useState(false);
  const [transactionInfo, setTransactionInfo] = useState<TransactionInfo>({
    transactionData: {} as TransactionType,
    transactionHash: "",
  });

  const getTransactionInfo = async (transactionHash: string) => {
    const result =
      await ModalServices.getTransactionTransactionsInfo(transactionHash);

    setTransactionInfo({
      transactionHash: result.transactionId,
      transactionData: result,
    });
  };

  return (
    <>
      <View style={styles.transactionsContainer}>
        {transactions.map((transaction) => {
          const { transactionId, fee, value } = transaction;

          return (
            <Pressable
              onPress={() => {
                setTransactionInfo({
                  ...transactionInfo,
                  transactionHash: transactionId,
                });
                getTransactionInfo(transactionId);
                setModalVisible(true);
              }}
              key={transactionId}
            >
              <View style={styles.container}>
                <View style={styles.transactionInfoContainer}>
                  <Text style={styles.transactionInfoLabel}>
                    {i18n.t("transaction_id")}
                  </Text>
                  <Text style={styles.transactionId}>
                    {transactionId.slice(0, 14).concat("...")}
                  </Text>
                </View>

                <View style={styles.transactionInfoContainer}>
                  <Text style={styles.transactionInfoLabel}>
                    {i18n.t("amount")}
                  </Text>
                  <Text style={styles.transactionInfoValue}>
                    {value / 100000000} BTC
                  </Text>
                </View>
                <View style={styles.transactionInfoContainer}>
                  <Text style={styles.transactionInfoLabel}>
                    {i18n.t("fee")}
                  </Text>
                  <Text style={styles.transactionInfoValue}>
                    {fee.toLocaleString()} sats
                  </Text>
                </View>
              </View>
            </Pressable>
          );
        })}
      </View>

      <Modal
        isVisible={modalVisible}
        modalType="Transaction"
        transactionHash={transactionInfo.transactionHash}
        transactionInfo={transactionInfo.transactionData}
        handleModalClose={() => {
          setModalVisible(false);
          setTransactionInfo({
            ...transactionInfo,
            transactionData: {} as TransactionType,
            transactionHash: "",
          });
        }}
      />
    </>
  );
}
