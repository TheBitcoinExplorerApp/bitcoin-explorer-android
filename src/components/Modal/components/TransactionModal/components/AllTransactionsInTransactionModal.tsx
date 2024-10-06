/* eslint-disable camelcase */
/* eslint-disable import/no-extraneous-dependencies */
import { nanoid } from "nanoid";
import { useShallow } from "zustand/react/shallow";
import useAppStore from "src/stores/App/useAppStore";
import { View, Text, StyleSheet } from "react-native";
import { TransactionType } from "src/components/Transactions/types";

type AllTransactionsInTransactionModalProps = {
  inputTransactions: TransactionType["inputTransactions"];
  outputTransactions: TransactionType["outputTransactions"];
};

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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    maxWidth: "100%",
  },
  inputTransactionsContainer: {
    gap: 5,
    alignItems: "center",
  },
  outputTransactionsContainer: {
    gap: 5,
    alignItems: "center",
  },
  eachTransactionOutputContainer: {
    width: "100%",
    alignItems: "center",
  },
  transactionContentContainer: {
    alignItems: "center",
    width: "100%",
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

// #TODO: VERIFY THE TYPES TO CONFIRM IF CAN HAPPEN NULL INCOME

export default function AllTransactionsInTransactionModal(
  props: AllTransactionsInTransactionModalProps,
) {
  const { inputTransactions, outputTransactions } = props;
  const localization = useAppStore(useShallow((state) => state.localization));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{localization.t("inputs_and_outputs")}</Text>

      <View style={styles.transactionContainer}>
        <View style={styles.inputTransactionsContainer}>
          {inputTransactions.map((inputTransaction) => {
            const { prevout } = inputTransaction;

            return (
              <View
                style={styles.transactionContentContainer}
                key={`${nanoid()}`}
              >
                <Text style={styles.transactionAddress}>
                  {(prevout?.scriptpubkey_address ?? "")
                    .toString()
                    .slice(0, 14)
                    .concat("...")}
                </Text>

                <Text style={styles.text}>
                  {((prevout?.value ?? 0) / 100000000).toString()} BTC
                </Text>
              </View>
            );
          })}
        </View>

        <Text style={styles.destinationTransactionSeparator}>{">"}</Text>

        <View style={styles.outputTransactionsContainer}>
          {outputTransactions.map((outputTransaction) => {
            const { value, scriptpubkey_address } = outputTransaction; // #TODO: outputTransactions CHANGE TYPE TO CAMEL CASE

            return (
              <View
                key={`${nanoid()}`}
                style={styles.eachTransactionOutputContainer}
              >
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
