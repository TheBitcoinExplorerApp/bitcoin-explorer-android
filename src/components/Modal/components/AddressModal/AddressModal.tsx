/* eslint-disable import/no-extraneous-dependencies */
import { nanoid } from "nanoid";
import {
  View,
  Modal,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import BoxContainerWithText from "src/components/BoxContainerWithText/BoxContainerWithText";
import useAppDataStore from "src/context/DataProvider";
import ModalServices from "src/services/ModalServices";
import ModalHeader from "../ModalHeader/ModalHeader";
import { AddressModalProps } from "../../types";
import AllTransactionsInTransactionModal from "../TransactionModal/components/AllTransactionsInTransactionModal";

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

export default function AddressModal(props: AddressModalProps) {
  const { addressInfo, addressTransactions, isVisible, handleModalClose } =
    props;
  const { address, addressData } = addressInfo;
  const { i18n } = useAppDataStore();

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
          firstText={i18n.t("address")}
          secondText={`${address.slice(0, 18)}...`}
        />
      </TouchableOpacity>

      <View>
        <BoxContainerWithText
          firstText={i18n.t("total_received")}
          secondText={`${addressData.totalAmountReceived / 100000000} BTC`}
          borderStyles={{
            borderBottomEndRadius: 0,
            borderBottomStartRadius: 0,
          }}
        />
        <BoxContainerWithText
          firstText={i18n.t("total_sent")}
          secondText={`${addressData.totalAmountSent / 100000000} BTC`}
          borderStyles={{
            borderTopEndRadius: 0,
            borderTopStartRadius: 0,
            borderBottomEndRadius: 0,
            borderBottomStartRadius: 0,
          }}
        />
        <BoxContainerWithText
          firstText={i18n.t("balance")}
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
            key={`${nanoid()}`}
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
            title={i18n.t("address")}
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
