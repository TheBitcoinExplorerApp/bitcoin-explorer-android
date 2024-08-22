/* eslint-disable import/no-extraneous-dependencies */
import { I18n } from "i18n-js";
import { View, Text, StyleSheet } from "react-native";
import Transaction from "./component/Transaction";
import { TransactionState } from "./types";

type TransactionInfoProps = {
  localization: I18n;
  transactions: TransactionState[];
};

const styles = StyleSheet.create({
  container: {
    gap: 15,
  },
  title: {
    fontSize: 15,
    fontWeight: "600",
    color: "white",
  },
});

export default function TransactionsInfo(props: TransactionInfoProps) {
  const { transactions, localization } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{localization.t("transactions")}</Text>

      <Transaction transactions={transactions} localization={localization} />
    </View>
  );
}
