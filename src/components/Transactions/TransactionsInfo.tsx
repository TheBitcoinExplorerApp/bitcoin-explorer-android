import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import Transaction from "./component/Transaction";
import { DataContext } from "src/context/DataProvider";

export default function TransactionsInfo() {
  const { transactions } = useContext(DataContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transações</Text>

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
