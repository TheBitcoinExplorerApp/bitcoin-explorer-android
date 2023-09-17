import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import SmallBoxInfo from "../SmallBoxInfo/SmallBoxInfo";
import { DataContext } from "src/context/DataProvider";

export default function PrioritiesTax() {
  const { fees } = useContext(DataContext);

  return (
    <>
      <View style={styles.taxContainerPrioritiesTaxText}>
        <Text style={styles.taxPrioritiesTaxText}>Baixa Prioridade</Text>
        <Text style={styles.taxPrioritiesTaxText}>Média Prioridade</Text>
        <Text style={styles.taxPrioritiesTaxText}>Alta Prioridade</Text>
      </View>
      <SmallBoxInfo boxesInfos={fees} />
    </>
  );
}

const styles = StyleSheet.create({
  taxContainerPrioritiesTaxText: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#1d2133",
    padding: 16,
    borderRadius: 8,
  },
  taxPrioritiesTaxText: {
    color: "#FFF",
    fontSize: 12,
  },
});
