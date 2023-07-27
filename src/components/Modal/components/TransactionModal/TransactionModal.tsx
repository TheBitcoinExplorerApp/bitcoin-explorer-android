import {
  View,
  Text,
  Modal,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import { TransactionModalProps, TransactionType } from "../../types";
import { getTransactionInfo } from "src/api/getData";
import BoxContainerWithText from "src/components/BoxContainerWithText/BoxContainerWithText";
import { initialStateTransaction } from "src/mocks/initialStates";
import { Image } from "react-native";
import NotConfirmedContent from "./components/NotConfirmedContent";
import AllTransactionsInTransactionModal from "./components/AllTransactionsInTransactionModal";

export default function TransactionModal(props: TransactionModalProps) {
  const { keyForSearch, isVisible, handleModalClose } = props;

  const [data, setData] = useState<TransactionType>(initialStateTransaction);

  const shouldRenderBlockInfo = (blockHeight: number) => (
    <BoxContainerWithText
      firstText="Bloco"
      secondText={`${blockHeight}`}
      width="20px"
    />
  );

  return (
    <Modal
      animationType="slide"
      visible={isVisible}
      transparent
      style={styles.modal}
      onShow={() => {
        const fetchData = async () => {
          const response = await getTransactionInfo(keyForSearch);
          const formattedData: TransactionType = {
            transactionId: response.txid,
            size: response.size,
            fee: response.fee,
            inputTransactions: response.vin,
            outputTransactions: response.vout,
            statusTransaction: {
              confirmed: response.status.confirmed,
              blockHeight: response.status.block_height,
              blockHash: response.status.block_hash,
              blockTime: response.status.block_time,
            },
          };
          setData(formattedData);
        };
        fetchData();
      }}
    >
      <View style={{ width: "100%", height: "20%" }}></View>

      <View style={styles.container}>
        <View style={styles.headerModal}>
          <Text style={styles.title}>Transação</Text>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => {
              handleModalClose();
              setData({ ...initialStateTransaction });
            }}
          >
            <Image source={require("../../../../../assets/xIcon.png")} />
          </TouchableOpacity>
        </View>

        <View style={styles.contentContainer}>
          <BoxContainerWithText
            firstText="Transação"
            secondText={data.transactionId.slice(0, 18).concat("...")}
          />

          <NotConfirmedContent fee={data.fee} size={data.size} />

         <AllTransactionsInTransactionModal 
          data={data}
         />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    flexDirection: "row",
  },
  container: {
    backgroundColor: "#101427",
    height: "80%",
    paddingVertical: 17,
    paddingHorizontal: 10,
  },
  title: {
    color: "#fff",
    fontSize: 18,
  },
  contentContainer: {
    paddingHorizontal: 8,
    marginTop: 35,
    gap: 20,
  },
  headerModal: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  closeButton: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    padding: 5,
    backgroundColor: "#D9D9D9",
    position: "absolute",
    right: 0,
  },
});
