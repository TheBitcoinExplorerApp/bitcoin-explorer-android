import { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Block from './components/Block/Block';
import { BlockInfoType } from './types';
import { initialStateBlocks } from 'src/mocks/initialStates';
import { BlockType } from './components/Block/type';
import { getBlocks } from 'src/api/getData';
import { convertBytesToMegabytes, formatDate } from 'src/utils/formatBlockInfo';

export default function BlocksInfo() {
  const [blocks, setBlocks] = useState<BlockType[]>(initialStateBlocks);

  useEffect(() => {
    const getBlocksInfo = async () => {
      const data = await getBlocks();

      const blockFormattedData: BlockType[] = data.map((block) => {
        const formattedDate = formatDate(block.timestamp);

        return {
          blockHeight: block.height,
          satPerVbyte: block.extras.medianFee.toFixed(1),
          size: convertBytesToMegabytes(block.size),
          transactions: block.tx_count,
          timeAgo: `${formattedDate.hour}:${formattedDate.minutes}`,
        };
      });

      setBlocks(blockFormattedData);
    };
    getBlocksInfo();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Blocos</Text>

      <Block blocks={blocks.slice(0, 4)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 15,
  },
  title: {
    color: 'white',
    fontSize: 17,
    fontWeight: '500',
  },
});
