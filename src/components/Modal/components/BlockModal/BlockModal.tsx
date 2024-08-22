/* eslint-disable import/no-extraneous-dependencies */
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import CustomActivityIndicator from "src/components/CustomActivityIndicator/CustomActivityIndicator";
import { useShallow } from "zustand/react/shallow";
import ModalServices from "src/services/ModalServices";
import BoxContainerWithText from "src/components/BoxContainerWithText/BoxContainerWithText";
import useAppStore from "src/stores/App/useAppStore";
import { BlockModalProps } from "../../types";
import ModalHeader from "../ModalHeader/ModalHeader";
import AllTransactionsInTransactionModal from "./components/AllTransactionsInBlockModal";

const styles = StyleSheet.create({
  modal: {
    flexDirection: "row",
  },
  container: {
    backgroundColor: "#101427",
    paddingVertical: 17,
    paddingHorizontal: 10,
    height: "100%",
  },
  contentContainer: {
    paddingHorizontal: 8,
    marginTop: 35,
    gap: 20,
    height: "100%",
  },
  titleTransactionBlock: {
    color: "#FFF",
    fontSize: 15,
  },
  transactionContainer: {
    gap: 15,
    height: "100%",
  },
});

export default function BlockModal(props: BlockModalProps) {
  const {
    isVisible,
    handleModalClose,
    blockHash,
    blockHeight,
    satPerVbyte,
    size,
    timeAgo,
    transactions,
    extras,
    blockTransactions,
  } = props;
  const { pool } = extras;

  const localization = useAppStore(useShallow((state) => state.localization));

  const dataIsLoading = !blockHash || blockTransactions.length === 0;
  const showLoading = <CustomActivityIndicator />;

  const showAllTransactions = () =>
    blockTransactions.map((transaction) => (
      <AllTransactionsInTransactionModal
        key={transaction.transactionId}
        data={transaction}
      />
    ));

  const showContent = () => (
    <>
      <BoxContainerWithText
        firstText={localization.t("block")}
        secondText={`${blockHeight}`}
        secondTextWhite
        width="42%"
      />

      <View>
        <TouchableOpacity
          onPress={() => ModalServices.copyToClipboard(blockHash)}
        >
          <BoxContainerWithText
            firstText="Hash"
            secondText={`${blockHash.substring(0, 24)}...`}
            borderStyles={{
              borderBottomEndRadius: 0,
              borderBottomStartRadius: 0,
            }}
          />
        </TouchableOpacity>

        <BoxContainerWithText
          firstText={localization.t("date_time")}
          secondText={`${timeAgo.day}/${timeAgo.month}/${timeAgo.year} ${timeAgo.hour}:${timeAgo.minutes}`}
          secondTextWhite
          borderStyles={{
            borderTopEndRadius: 0,
            borderTopStartRadius: 0,
            borderBottomEndRadius: 0,
            borderBottomStartRadius: 0,
          }}
        />

        <BoxContainerWithText
          firstText={localization.t("size")}
          secondText={`${size} MB`}
          secondTextWhite
          borderStyles={{
            borderTopEndRadius: 0,
            borderTopStartRadius: 0,
            borderBottomEndRadius: 0,
            borderBottomStartRadius: 0,
          }}
        />

        <BoxContainerWithText
          firstText={localization.t("median_fee")}
          secondText={`~${satPerVbyte} sat/vB`}
          secondTextWhite
          borderStyles={{
            borderTopEndRadius: 0,
            borderTopStartRadius: 0,
            borderBottomEndRadius: 0,
            borderBottomStartRadius: 0,
          }}
        />

        <BoxContainerWithText
          firstText={localization.t("miner")}
          secondText={pool.name}
          secondTextWhite
          borderStyles={{
            borderTopEndRadius: 0,
            borderTopStartRadius: 0,
          }}
        />
      </View>

      <Text style={styles.titleTransactionBlock}>
        {transactions} {localization.t("transactions").toLocaleLowerCase()}
      </Text>

      <View style={styles.transactionContainer}>
        {blockTransactions.length !== 0 ? showAllTransactions() : showLoading}
      </View>
    </>
  );

  return (
    <Modal animationType="slide" visible={isVisible} transparent>
      <ScrollView
        contentContainerStyle={{
          marginTop: "38%",
          paddingBottom: "40%",
          height: dataIsLoading ? "100%" : "auto",
          backgroundColor: "#101427",
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <ModalHeader
            handleModalClose={handleModalClose}
            title={localization.t("block")}
          />

          <View style={styles.contentContainer}>
            {dataIsLoading ? showLoading : showContent()}
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
}
