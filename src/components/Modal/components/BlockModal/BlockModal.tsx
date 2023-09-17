import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import ModalHeader from "../ModalHeader/ModalHeader";
import BoxContainerWithText from "src/components/BoxContainerWithText/BoxContainerWithText";
import { BlockModalProps } from "../../types";
import AllTransactionsInTransactionModal from "./components/AllTransactionsInBlockModal";
import ModalServices from "src/services/ModalServices";
import { ActivityIndicator } from "react-native";

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
    blockTransactions,
  } = props;

  const { pool } = extras;

  const showLoading = () => <ActivityIndicator color="#FFF" />;

  const showAllTransactions = () =>
    blockTransactions.map((transaction) => (
      <AllTransactionsInTransactionModal
        key={transaction.transactionId}
        data={transaction}
      />
    ));

  return (
    <Modal animationType="slide" visible={isVisible} transparent>
      <ScrollView
        contentContainerStyle={{
          marginTop: "38%",
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
                onPress={() => ModalServices.copyToClipboard(blockHash)}
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
              {blockTransactions.length != 0
                ? showAllTransactions()
                : showLoading()}
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
    height: "100%",
  },
});
