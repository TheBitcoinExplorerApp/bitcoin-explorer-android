import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import Block from "./components/Block/Block";

import { DataContext } from "src/context/DataProvider";

type BlocksInfoProps = {
  qtdBlocksToRender?: number;
};

export default function BlocksInfo(props: BlocksInfoProps) {
  const { qtdBlocksToRender } = props;
  const { blocks } = useContext(DataContext);

  const blocksToRender = qtdBlocksToRender
    ? blocks.slice(0, qtdBlocksToRender)
    : blocks;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Blocos</Text>

      <Block blocks={blocksToRender} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 15,
  },
  title: {
    color: "white",
    fontSize: 17,
    fontWeight: "500",
  },
});
