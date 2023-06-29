import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import PrioritiesTaxValuesBox from '../components/PrioritiesTax/PrioritiesTax';
import Main from 'src/components/templates/Main';
import BlocksInfo from 'src/components/BlocksInfo/BlocksInfo';
import TransactionsInfo from 'src/components/Transactions/TransactionsInfo';


export default function Home() {
  return (
    <Main>
      <Text style={styles.title}>Taxas de Transação</Text>

      <PrioritiesTaxValuesBox />

      <BlocksInfo />

      <TransactionsInfo />
    </Main>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 17,
    color: '#FFF',
    textAlign: 'center',
  },
});
