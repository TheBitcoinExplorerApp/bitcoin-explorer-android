import { View, Text, StyleSheet, FlatList } from 'react-native';
import React from 'react';

type Block = {
  blockHeight: number;
  satPerVbyte: number;
  size: number;
  transactions: number;
  timeAgo: string;
};

type BlockProps = {
  blocks: Block[];
};

export default function Block(props: BlockProps) {
  const { blocks } = props;

  return (
    <FlatList
      data={blocks}
      keyExtractor={(blockInfo) => blockInfo.blockHeight.toString()}
      numColumns={2}
      contentContainerStyle={{ alignItems: 'center', flexGrow: 1 }}
      ItemSeparatorComponent={() => {
        return <View style={{ height: 25 }} />;
      }}
      renderItem={({ item, index }) => {
        const itemLeft = index % 2 === 0 ? 0 : 25;

        return (
          <View
            key={item.blockHeight}
            style={{ ...styles.blockContainer, marginLeft: itemLeft }}
          >
            <Text style={styles.textPrimary}>{item.blockHeight}</Text>
            <Text style={styles.text}>{item.satPerVbyte} sat/vB</Text>
            <Text style={styles.text}>{item.size} MB</Text>
            <Text style={styles.text}>{item.transactions} transações</Text>
            <Text style={styles.text}>{item.timeAgo} minutos atrás</Text>
          </View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  blockContainer: {
    alignItems: 'center',
    width: 160,
    height: 110,
    backgroundColor: '#1d2133',
    borderRadius: 7
  },
  textPrimary: {
    color: '#DF7800',
    fontSize: 15,
  },
  text: {
    color: '#FFF',
    fontSize: 12,
  },
});