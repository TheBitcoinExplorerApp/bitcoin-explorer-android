import { View, Text, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import Transaction from './component/Transaction';
import { getTransactions } from 'src/api/getData';

export default function TransactionsInfo() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getTransactions();
      const formatedData = response.map((basicInfoTransaction) => {
        return {
          transactionId: basicInfoTransaction.txid,
          value: basicInfoTransaction.value,
          fee: basicInfoTransaction.fee,
        };
      });

      setData(formatedData);
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transações</Text>

      <Transaction
        transactions={data}
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
    color: 'white',
  },
});
