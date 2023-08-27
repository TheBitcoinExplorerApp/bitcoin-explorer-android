import { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Block from "./components/Block/Block";
import { BlockInfoType } from "./types";
import { initialStateBlocks } from "src/mocks/initialStates";
import { BlockType } from "./components/Block/type";
import { getBlocks } from "src/api/getData";
import { convertBytesToMegabytes, formatDate } from "src/utils/formatBlockInfo";

type BlocksInfoProps = {
  qtdBlocksToRender?: number;
}

export default function BlocksInfo(props: BlocksInfoProps) {

  const { qtdBlocksToRender } = props;
  const [blocks, setBlocks] = useState<BlockType[]>(initialStateBlocks);

  const blocksToRender = qtdBlocksToRender ? blocks.slice(0, qtdBlocksToRender) : blocks;

  useEffect(() => {
    const getBlocksInfo = async () => {
      const data = await getBlocks();

      const blockFormattedData: BlockType[] = data.map((block) => {
        const formattedDate = formatDate(block.timestamp);

        const formatedBlockData = {
          blockHash: block.id,
          blockHeight: block.height,
          satPerVbyte: block.extras.medianFee.toFixed(1),
          size: convertBytesToMegabytes(block.size),
          transactions: block.tx_count,
          timeAgo: formattedDate,
          extras: block.extras,
        };

        return formatedBlockData;
      });

      setBlocks(blockFormattedData);
    };
    getBlocksInfo();
  }, []);

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
