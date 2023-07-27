import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native';
import { useState } from 'react';
import Modal from 'src/components/Modal/Modal';

type transaction = {
  transactionId: string;
  value: number;
  fee: number;
};

type TransactionProps = {
  transactions: transaction[];
};

export default function Transaction(props: TransactionProps) {
  const { transactions } = props;
  const [modal, setModal] = useState({
    isVisible: false,
    keyForSearch: '',
  });

  return (
    <>
      <FlatList
        data={transactions}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              const newData = {
                isVisible: true,
                keyForSearch: item.transactionId,
              };
              setModal({ ...newData });
            }}
          >
            <View style={styles.container}>
              <View style={styles.transactionInfoContainer}>
                <Text style={styles.transactionInfoLabel}>ID transação</Text>
                <Text style={styles.transactionId}>
                  {item.transactionId.slice(0, 14).concat('...')}
                </Text>
              </View>

              <View style={styles.transactionInfoContainer}>
                <Text style={styles.transactionInfoLabel}>Valor</Text>
                <Text style={styles.transactionInfoValue}>
                  {item.value / 100000000} BTC
                </Text>
              </View>
              <View style={styles.transactionInfoContainer}>
                <Text style={styles.transactionInfoLabel}>Taxa</Text>
                <Text style={styles.transactionInfoValue}>
                  {item.fee.toLocaleString()} sats
                </Text>
              </View>
            </View>
          </Pressable>
        )}
        keyExtractor={(item) => item.transactionId}
        ItemSeparatorComponent={() => <View style={{ height: 18 }} />}
      />

      <Modal
        isVisible={modal.isVisible}
        modalType="Transaction"
        keyForSearch={modal.keyForSearch}
        handleModalClose={() => setModal({ isVisible: false, keyForSearch: '' })}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#1d2133',
    borderRadius: 7,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  transactionInfoContainer: {
    alignItems: 'center',
    gap: 8,
  },
  transactionId: {
    color: '#DF7800',
    fontWeight: '500',
  },
  transactionInfoLabel: {
    color: 'white',
    fontSize: 13,
    fontWeight: '500',
  },
  transactionInfoValue: {
    color: 'white',
    fontWeight: '500',
  },
});
