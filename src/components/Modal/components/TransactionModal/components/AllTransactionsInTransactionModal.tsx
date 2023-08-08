import { View, Text, StyleSheet, ScrollView } from "react-native";
import { TransactionType } from "src/components/Modal/types";

type AllTransactionsInTransactionModalProps = {
  data: TransactionType;
};

export default function AllTransactionsInTransactionModal(
  props: AllTransactionsInTransactionModalProps
) {
  const { data } = props;
  const { inputTransactions, outputTransactions } = data;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entradas e Saídas</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.transactionContainer}>
          {inputTransactions.map((inputTransaction) => {
            const { prevout } = inputTransaction;
            const { scriptpubkey_address, value } = prevout;

            return (
              <>
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
                      {(prevout?.value / 100000000)
                        .toString()}
                      BTC
                    </Text>
                  </View>
                </View>

                <Text style={styles.destinationTransaction}>{">"}</Text>

                <View style={styles.outputTransactionsContainer} >
                  {outputTransactions.map((outputTransaction) => {
                    const { value, scriptpubkey_address } = outputTransaction;

                    return (
                      <View>
                        <Text style={styles.transactionAddress}>
                          {scriptpubkey_address
                            .toString()
                            .slice(0, 14)
                            .concat("...")}
                        </Text>
                        <Text style={styles.text}>{value / 100000000} BTC</Text>
                      </View>
                    );
                  })}
                </View>
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
    justifyContent: "space-between",
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
  destinationTransaction: {
    color: "#D9D9D9",
    fontSize: 28,
    fontWeight: "800",
  },
  outputTransactionsContainer: {
    gap: 5,
  }
});
