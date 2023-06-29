import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Transaction from './component/Transaction';

export default function TransactionsInfo() {
  return (
    <View style={styles.container} >
      <Text style={styles.title} >Transações</Text>

      <Transaction
        transactions={[
          {
            transactionId: '123',
            value: 100,
            tax: 10,
          },
          {
            transactionId: '1234',
            value: 100,
            tax: 10,
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        gap: 15,
    },
    title: {
        fontSize: 15,
        fontWeight: '600',
        color: 'white'
    }
})