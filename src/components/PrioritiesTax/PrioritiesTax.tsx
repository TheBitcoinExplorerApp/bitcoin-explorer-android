import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import SmallBoxInfo from '../SmallBoxInfo/SmallBoxInfo';

export default function PrioritiesTax() {
  return (
    <>
      <View style={styles.taxContainerPrioritiesTaxText}>
        <Text style={styles.taxPrioritiesTaxText}>Baixa Prioridade</Text>
        <Text style={styles.taxPrioritiesTaxText}>Média Prioridade</Text>
        <Text style={styles.taxPrioritiesTaxText}>Alta Prioridade</Text>
      </View>
      <SmallBoxInfo
        boxesInfos={[
          { title: '40', value: '5,00' },
          { title: '40', value: '5,00' },
          { title: '40', value: '5,00' },
        ]}
      />
    </>
  );
}

const styles = StyleSheet.create({
  taxContainerPrioritiesTaxText: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#1d2133',
    padding: 16,
    borderRadius: 8,
  },
  taxPrioritiesTaxText: {
    color: '#FFF',
    fontSize: 12,
  },
});
