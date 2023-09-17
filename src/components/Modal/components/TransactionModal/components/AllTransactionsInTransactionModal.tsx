import uuid from "react-native-uuid";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { TransactionType } from "src/components/Modal/types";

type AllTransactionsInTransactionModalProps = {
  inputTransactions: TransactionType["inputTransactions"];
  outputTransactions: TransactionType["outputTransactions"];
};

export default function AllTransactionsInTransactionModal(
  props: AllTransactionsInTransactionModalProps
) {
  const { inputTransactions, outputTransactions } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entradas e Saídas</Text>

      <View style={styles.transactionContainer}>
        <View style={styles.inputTransactionsContainer}>
          {inputTransactions.map((inputTransaction) => {
            const { prevout } = inputTransaction;

            return (
              <View
                style={styles.transactionContentContainer}
                key={`${uuid.v4()}`}
              >
                <View>
                  <View>
                    <Text style={styles.transactionAddress}>
                      {(prevout?.scriptpubkey_address)
                        .toString()
                        .slice(0, 14)
                        .concat("...")}
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.text}>
                      {(prevout?.value / 100000000).toString()}
                      BTC
                    </Text>
                  </View>
                </View>
              </View>
            );
          })}
        </View>

        <Text style={styles.destinationTransactionSeparator}>{">"}</Text>

        <View style={styles.outputTransactionsContainer}>
          {outputTransactions.map((outputTransaction) => {
            const { value, scriptpubkey_address } = outputTransaction;

            return (
              <View key={`${uuid.v4()}`}>
                <Text style={styles.transactionAddress}>
                  {scriptpubkey_address.toString().slice(0, 14).concat("...")}
                </Text>
                <Text style={styles.text}>{value / 100000000} BTC</Text>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "600",
  },
  container: {
    gap: 16,
    height: "100%",
    backgroundColor: "#101427",
  },
  transactionContainer: {
    backgroundColor: "#1d2133",
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputTransactionsContainer: {
    gap: 5,
    alignItems: "center",
  },
  outputTransactionsContainer: {
    gap: 5,
    alignItems: "center",
  },
  transactionContentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  transactionAddress: {
    color: "#DF7800",
    fontSize: 16,
  },
  text: {
    color: "#FFF",
    fontSize: 13,
    textAlign: "right",
  },
  destinationTransactionSeparator: {
    color: "#D9D9D9",
    fontSize: 28,
    fontWeight: "800",
  },
});
