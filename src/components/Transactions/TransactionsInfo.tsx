import { View, Text, StyleSheet } from "react-native";
import Transaction from "./component/Transaction";
import useAppDataStore from "src/context/DataProvider";

export default function TransactionsInfo() {
  const { transactions, i18n } = useAppDataStore();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{i18n.t("transactions")}</Text>

      <Transaction transactions={transactions} />
    </View>
  );
}

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
