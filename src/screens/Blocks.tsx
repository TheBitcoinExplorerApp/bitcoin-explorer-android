import { View, Text } from "react-native";
import React from "react";
import Main from "src/components/templates/Main";
import BlocksInfo from "src/components/BlocksInfo/BlocksInfo";

type BlocksProps = {
  navigation: any;
};

export default function Blocks(props: BlocksProps) {
  const { navigation } = props;

  return (
    <Main navigation={navigation} actualScreen="Blocks">
      <BlocksInfo />
    </Main>
  );
}
