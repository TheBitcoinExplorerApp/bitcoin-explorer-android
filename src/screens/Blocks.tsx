import { View, Text } from "react-native";
import React from "react";
import Main from "src/components/templates/Main";

type BlocksProps = {
  navigation: any;
};

export default function Blocks(props: BlocksProps) {
  const { navigation } = props;

  return (
    <Main navigation={navigation} actualScreen="Blocks">
      <Text>Blocks</Text>
    </Main>
  );
}
