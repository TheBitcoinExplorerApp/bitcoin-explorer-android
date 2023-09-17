import {
  View,
  Modal,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import BoxContainerWithText from "src/components/BoxContainerWithText/BoxContainerWithText";
import ModalHeader from "../ModalHeader/ModalHeader";
import ModalServices from "src/services/ModalServices";
import { AddressModalProps } from "../../types";
import AllTransactionsInTransactionModal from "../TransactionModal/components/AllTransactionsInTransactionModal";
import uuid from "react-native-uuid";

export default function AddressModal(props: AddressModalProps) {
  const { addressInfo, addressTransactions, isVisible, handleModalClose } =
    props;
  const { address, addressData } = addressInfo;
  const isLoading = Object.values(addressData).length === 0;

  const showLoading = () => <ActivityIndicator color="#FFF" size="large" />;

  const showContent = () => (
    <View style={styles.contentContainer}>
      <TouchableOpacity
        onPress={() => {
          ModalServices.copyToClipboard(address);
        }}
      >
        <BoxContainerWithText
          firstText="Endereço"
          secondText={`${address.slice(0, 18)}...`}
        />
      </TouchableOpacity>

      <View>
        <BoxContainerWithText
          firstText="Total Recebido"
          secondText={`${addressData.totalAmountReceived / 100000000} BTC`}
          borderStyles={{
            borderBottomEndRadius: 0,
            borderBottomStartRadius: 0,
          }}
        />
        <BoxContainerWithText
          firstText="Total Enviado"
          secondText={`${addressData.totalAmountSent / 100000000} BTC`}
          borderStyles={{
            borderTopEndRadius: 0,
            borderTopStartRadius: 0,
            borderBottomEndRadius: 0,
            borderBottomStartRadius: 0,
          }}
        />
        <BoxContainerWithText
          firstText="Saldo"
          secondText={`${addressData.balance / 100000000} BTC`}
          borderStyles={{
            borderTopEndRadius: 0,
            borderTopStartRadius: 0,
          }}
        />
      </View>

      <View>
        {addressTransactions.map((transaction) => (
          <AllTransactionsInTransactionModal
            inputTransactions={transaction.inputTransactions}
            outputTransactions={transaction.outputTransactions}
            key={`${uuid.v4()}`}
          />
        ))}
      </View>
    </View>
  );

  return (
    <Modal
      animationType="slide"
      visible={isVisible}
      transparent
      style={styles.modal}
    >
      <ScrollView
        contentContainerStyle={{
          marginTop: "38%",
          paddingBottom: "40%",
          height: isLoading ? "100%" : "auto",
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <ModalHeader
            title="Endereço"
            handleModalClose={() => {
              handleModalClose();
            }}
          />

          {isLoading ? showLoading() : showContent()}
        </View>
      </ScrollView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    flexDirection: "row",
  },
  container: {
    backgroundColor: "#101427",
    height: "100%",
    paddingVertical: 17,
    paddingHorizontal: 10,
  },
  contentContainer: {
    paddingHorizontal: 8,
    marginTop: 35,
    gap: 20,
    height: "100%",
  },
});
