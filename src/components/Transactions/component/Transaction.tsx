import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';

type transaction = {
  transactionId: string;
  value: number;
  tax: number;
};

type TransactionProps = {
  transactions: transaction[];
};

export default function Transaction(props: TransactionProps) {
  const { transactions } = props;

  return (
    <FlatList
      data={transactions}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <View style={styles.transactionInfoContainer}>
            <Text style={styles.transactionInfoLabel}>ID transação</Text>
            <Text style={styles.transactionId}>{item.transactionId}</Text>
          </View>

          <View style={styles.transactionInfoContainer}>
            <Text style={styles.transactionInfoLabel}>Valor</Text>
            <Text style={styles.transactionInfoValue}>{item.value}</Text>
          </View>
          <View style={styles.transactionInfoContainer}>
            <Text style={styles.transactionInfoLabel}>Taxa</Text>
            <Text style={styles.transactionInfoValue}>{item.tax}</Text>
          </View>
        </View>
      )}
      keyExtractor={(item) => item.transactionId}
      ItemSeparatorComponent={() => <View style={{ height: 18 }} />}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#1d2133',
    borderRadius: 7,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  transactionInfoContainer: {
    alignItems: 'center',
  },
  transactionId: {
    color: '#DF7800',
    fontWeight: '500',
  },
  transactionInfoLabel: {
    color: 'white',
    fontSize: 13,
    fontWeight: '500',
  },
  transactionInfoValue: {
    color: 'white',
    fontWeight: '500',
  },
});
