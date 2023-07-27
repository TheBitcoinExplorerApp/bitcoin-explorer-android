import { View, Text, StyleSheet, ScrollView } from "react-native";
import { TransactionType } from "src/components/Modal/types";

type AllTransactionsInTransactionModalProps = {
  data: TransactionType;
};

export default function AllTransactionsInTransactionModal(
  props: AllTransactionsInTransactionModalProps
) {
  const { data } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entradas e Saídas</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.transactionContainer}>
          {data.inputTransactions.map(inputTransaction => {
            return (
              <>
                <View>
                  <View>
                    <Text style={styles.transactionAddress}>
                      {(inputTransaction.prevout?.scriptpubkey_address)
                        .toString()
                        .slice(0, 18)
                        .concat("...")}
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.text}>
                      {(inputTransaction.prevout?.value / 100000000)
                        .toString()
                        .replace(".", ",")}
                    </Text>
                  </View>
                </View>
                <Text>{">"}</Text>
                { data.outputTransactions.map(outputTransaction => {
                  <View>
                  <Text style={styles.transactionAddress}>
                    {data.outputTransactions[0].scriptpubkey_address
                      .toString()
                      .slice(0, 18)
                      .concat("...")}
                  </Text>
                  <Text style={styles.text}>
                    {data.outputTransactions[0].value / 100000000}
                  </Text>
                </View>
                })}
              </>
            );
          })}
        </View>
      </ScrollView>
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
  },
  transactionContainer: {
    backgroundColor: "#1d2133",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 8,
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
});
