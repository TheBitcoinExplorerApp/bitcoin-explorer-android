import { View, Text } from "react-native";
import React from "react";
import Main from "src/components/templates/Main";
import TransactionsInfo from "src/components/Transactions/TransactionsInfo";

type TransactionsProps = {
  navigation: any;
};

export default function Transactions(props: TransactionsProps) {
  const { navigation } = props;

  return (
    <Main navigation={navigation} actualScreen="Transactions">
      <TransactionsInfo />
    </Main>
  );
}
