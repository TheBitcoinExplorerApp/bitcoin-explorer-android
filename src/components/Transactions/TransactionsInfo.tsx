import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import Transaction from "./component/Transaction";
import useAppDataStore from "src/context/DataProvider";
import { I18nContext } from "src/context/LocaleProvider";

export default function TransactionsInfo() {
    const { transactions } = useAppDataStore();
    const i18nContext = useContext(I18nContext);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>{i18nContext.t('transactions')}</Text>

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
