/* eslint-disable react/require-default-props */
/* eslint-disable import/no-extraneous-dependencies */
import { I18n } from "i18n-js";
import { View, Text, StyleSheet } from "react-native";
import Block from "./components/Block/Block";
import { BlockType } from "./components/Block/type";

type BlocksInfoProps = {
  blocks: BlockType[];
  qtdBlocksToRender?: number;
  localization: I18n;
};

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

export default function BlocksInfo(props: BlocksInfoProps) {
  const { qtdBlocksToRender, blocks, localization } = props;

  const blocksToRender = qtdBlocksToRender
    ? blocks.slice(0, qtdBlocksToRender)
    : blocks;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{localization.t("blocks")}</Text>

      <Block blocks={blocksToRender} />
    </View>
  );
}
