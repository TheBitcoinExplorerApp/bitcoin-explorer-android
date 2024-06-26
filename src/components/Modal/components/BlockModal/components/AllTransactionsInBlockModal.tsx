import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { TransactionType } from "src/components/Modal/types";
import { formatDate } from "src/utils/formatBlockInfo";
import {
  inputTransactions,
  outputTransactions,
} from "src/components/Transactions/types";
import uuid from "react-native-uuid";
import ModalServices from "src/services/ModalServices";

type AllTransactionsInTransactionModalProps = {
  data: TransactionType;
};

export default function AllTransactionsInTransactionModal(
  props: AllTransactionsInTransactionModalProps
) {
  const { data } = props;
  const {
    transactionId,
    statusTransaction,
    inputTransactions,
    outputTransactions,
  } = data;

  const formattedDate = formatDate(statusTransaction.blockTime);

  const coinBaseTransaction = () => (
    <Text key={`${uuid.v4()}`} style={styles.textStyles}>
      Coinbase
    </Text>
  );

  const normalTransaction = (transaction: inputTransactions) => {
    return (
      <View key={`${uuid.v4()}`}>
        <Text style={styles.textStyles}>
          {transaction.prevout.scriptpubkey_address.substring(0, 16)}...
        </Text>
        <Text style={styles.textStyles}>
          {transaction.prevout.value / 100000000} BTC
        </Text>
      </View>
    );
  };

  const opReturnOutput = () => {
    return (
      <View key={`${uuid.v4()}`}>
        <Text style={styles.textStyles}>OP_RETURN</Text>
        <Text style={styles.textStyles}>0.00000000 BTC</Text>
      </View>
    );
  };

  const normalOutput = (outputTransaction: outputTransactions) => {
    return (
      <View key={`${uuid.v4()}`}>
        <Text style={styles.textStyles}>
          {outputTransaction.scriptpubkey_address.substring(0, 16)}...
        </Text>
        <Text style={styles.textStyles}>
          {outputTransaction.value / 100000000} BTC
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.transactionHeaderContainer}>
        <TouchableOpacity
          onPress={() => ModalServices.copyToClipboard(transactionId)}
        >
          <View style={styles.transactionHeaderHashAndDateHour}>
            <Text style={styles.transactionHash}>
              {transactionId.substring(0, 24)}...
            </Text>
            <Text style={styles.transactionHeaderDateHour}>
              {`${formattedDate.day}/${formattedDate.month}/${formattedDate.year} ${formattedDate.hour}h${formattedDate.minutes}`}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.transactionContainer}>
        <View style={styles.transactionInputContainer}>
          {inputTransactions.map((inputTransaction) => {
            if (!inputTransaction.prevout?.scriptpubkey_address) {
              return coinBaseTransaction();
            }

            return normalTransaction(inputTransaction);
          })}
        </View>

        <Text style={styles.destinationTransactionSeparator}>{">"}</Text>

        <View style={styles.transactionOutputContainer}>
          {outputTransactions.map((outputTransaction) => {
            if (!outputTransaction.scriptpubkey_address) {
              return opReturnOutput();
            }

            return normalOutput(outputTransaction);
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 6,
  },
  transactionHeaderContainer: {
    backgroundColor: "#1d2133",
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  transactionHeaderHashAndDateHour: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 5,
  },
  transactionHash: {
    color: "#DF7800",
    fontSize: 14,
  },
  transactionHeaderDateHour: {
    color: "#C6C6C6",
    fontSize: 14,
  },
  transactionContainer: {
    backgroundColor: "#1d2133",
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 5,
    overflow: "hidden",
  },
  transactionInputContainer: {
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  destinationTransactionSeparator: {
    color: "#D9D9D9",
    fontSize: 28,
    fontWeight: "800",
  },
  transactionOutputContainer: {
    gap: 8,
  },
  textStyles: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 14,
  },
});
