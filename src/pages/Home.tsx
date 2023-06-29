import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import PrioritiesTaxValuesBox from '../components/PrioritiesTax/PrioritiesTax';
import Main from 'src/components/templates/Main';
import BlocksInfo from 'src/components/BlocksInfo/BlocksInfo';


export default function Home() {
  return (
    <Main>
      <Text style={styles.title}>Taxas de Transação</Text>

      <PrioritiesTaxValuesBox />

      <BlocksInfo />
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
