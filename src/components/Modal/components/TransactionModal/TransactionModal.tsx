import {
  View,
  Modal,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { TransactionModalProps } from "../../types";
import BoxContainerWithText from "src/components/BoxContainerWithText/BoxContainerWithText";
import NotConfirmedContent from "./components/NotConfirmedContent";
import AllTransactionsInTransactionModal from "./components/AllTransactionsInTransactionModal";
import ModalHeader from "../ModalHeader/ModalHeader";
import ModalServices from "src/services/ModalServices";
import ConfirmedContent from "./components/ConfirmedContent";
import { I18nContext } from "src/context/LocaleProvider";
import { useContext } from "react";

export default function TransactionModal(props: TransactionModalProps) {
  const { isVisible, handleModalClose, transactionInfo, transactionHash } =
    props;

  const i18nContext = useContext(I18nContext);

  const transactionDataIsLoading = Object.values(transactionInfo).length === 0;
  const transactionIsConfirmed = transactionInfo.statusTransaction?.blockHeight;

  const showConfirmedContent = () => (
    <ConfirmedContent
      fee={transactionInfo.fee}
      size={transactionInfo.size}
      statusTransaction={transactionInfo.statusTransaction}
    />
  );

  const showNotConfirmedContent = () => (
    <NotConfirmedContent
      fee={transactionInfo.fee}
      size={transactionInfo.size}
    />
  );

  const showContent = () => (
    <>
      {transactionIsConfirmed
        ? showConfirmedContent()
        : showNotConfirmedContent()}

      <AllTransactionsInTransactionModal
        inputTransactions={transactionInfo.inputTransactions}
        outputTransactions={transactionInfo.outputTransactions}
      />
    </>
  );

  const showLoading = () => <ActivityIndicator size="large" color="#fff" />;

  return (
    <Modal
      animationType="slide"
      visible={isVisible}
      style={styles.modal}
      transparent
    >
      <ScrollView
        contentContainerStyle={{
          marginTop: "38%",
          paddingBottom: "40%",
          height: transactionDataIsLoading ? "100%" : "auto",
          backgroundColor: "#101427",
        }}
      >
        <View style={styles.container}>
          <ModalHeader
            title={i18nContext.t("transaction")}
            handleModalClose={() => {
              handleModalClose();
            }}
          />

          <View style={styles.contentContainer}>
            <TouchableOpacity
              onPress={() => ModalServices.copyToClipboard(transactionHash)}
            >
              <BoxContainerWithText
                firstText={i18nContext.t("hash")}
                secondText={transactionHash.slice(0, 18).concat("...")}
              />
            </TouchableOpacity>

            <View style={styles.transactionsContainer}>
              {transactionDataIsLoading ? showLoading() : showContent()}
            </View>
          </View>
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
    paddingVertical: 17,
    paddingHorizontal: 10,
  },
  contentContainer: {
    paddingHorizontal: 8,
    marginTop: 35,
    gap: 16,
  },
  transactionsContainer: {
    gap: 16,
  },
});
