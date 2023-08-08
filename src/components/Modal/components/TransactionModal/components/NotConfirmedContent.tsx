import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import BoxContainerWithText from 'src/components/BoxContainerWithText/BoxContainerWithText';

type NotConfirmedContentProps = {
  size: number;
  fee: number;
};

export default function NotConfirmedContent(props: NotConfirmedContentProps) {
  const { fee, size } = props;

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}
      >
        <BoxContainerWithText
          firstText="Não confirmada"
          secondText=""
          width="auto"
        />
      </View>

      <View>
        <BoxContainerWithText
          firstText="Data/Hora"
          secondText="Aguardando confirmação"
          borderStyles={{
            borderBottomEndRadius: 0,
            borderBottomStartRadius: 0,
            borderBottomColor: '#D9D9D9',
          }}
        />
        <BoxContainerWithText
          firstText="Tamanho"
          secondText={`${size} B`}
          borderStyles={{
            borderBottomEndRadius: 0,
            borderBottomStartRadius: 0,
            borderTopEndRadius: 0,
            borderTopStartRadius: 0,
            borderBottomColor: '#D9D9D9',
          }}
        />
        <BoxContainerWithText
          firstText="Taxa"
          secondText={`${(fee / 100000000).toString()} BTC`}
          borderStyles={{
            borderTopEndRadius: 0,
            borderTopStartRadius: 0,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
});
