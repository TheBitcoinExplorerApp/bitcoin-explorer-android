import { Text, StyleSheet } from "react-native";
import React from "react";
import PrioritiesTaxValuesBox from "../components/PrioritiesTax/PrioritiesTax";
import Main from "src/components/templates/Main";
import BlocksInfo from "src/components/BlocksInfo/BlocksInfo";
import TransactionsInfo from "src/components/Transactions/TransactionsInfo";

type HomeProps = {
  navigation: any;
};

export default function Home(props: HomeProps) {
  const { navigation } = props;

  return (
    <Main navigation={navigation} actualScreen="Home" >
      <Text style={styles.title}>Taxas de Transação</Text>

      <PrioritiesTaxValuesBox />

      <BlocksInfo qtdBlocksToRender={4} />

      <TransactionsInfo />
    </Main>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 17,
    color: "#FFF",
    textAlign: "center",
  },
});
