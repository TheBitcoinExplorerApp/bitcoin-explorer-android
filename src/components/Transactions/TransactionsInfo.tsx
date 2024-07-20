import { View, Text, StyleSheet } from "react-native";
import useAppDataStore from "src/context/DataProvider";
import Transaction from "./component/Transaction";

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

export default function TransactionsInfo() {
  const { transactions, i18n } = useAppDataStore();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{i18n.t("transactions")}</Text>

      <Transaction transactions={transactions} />
    </View>
  );
}
