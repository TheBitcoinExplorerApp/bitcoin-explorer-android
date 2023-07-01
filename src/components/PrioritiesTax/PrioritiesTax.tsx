import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import SmallBoxInfo, { SmallBox } from '../SmallBoxInfo/SmallBoxInfo';
import { useState, useEffect } from 'react';
import { getTaxes } from 'src/api/getData';
import { FeesType } from './types';

export default function PrioritiesTax() {
  const initialState = [
    { title: '0', value: '0' },
    { title: '0', value: '0' },
    { title: '0', value: '0' },
  ];

  const [taxes, setTaxes] = useState<SmallBox[]>(initialState);

  useEffect(() => {
    const getTaxesData = async () => {
      const data = await getTaxes();
      const { minimumFee, hourFee, fastestFee } = data;

      const taxesData: SmallBox[] = [
        { title: `${minimumFee}`, value: '0' },
        { title: `${hourFee}`, value: '0' },
        { title: `${fastestFee}`, value: '0' },
      ];

      console.log(data);

      setTaxes(taxesData);
    };
    getTaxesData();
  });

  return (
    <>
      <View style={styles.taxContainerPrioritiesTaxText}>
        <Text style={styles.taxPrioritiesTaxText}>Baixa Prioridade</Text>
        <Text style={styles.taxPrioritiesTaxText}>Média Prioridade</Text>
        <Text style={styles.taxPrioritiesTaxText}>Alta Prioridade</Text>
      </View>
      <SmallBoxInfo boxesInfos={taxes} />
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
