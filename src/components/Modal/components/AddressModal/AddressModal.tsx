import { View, Modal, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";

import BoxContainerWithText from "src/components/BoxContainerWithText/BoxContainerWithText";
import * as Clipboard from "expo-clipboard";
import ModalHeader from "../ModalHeader/ModalHeader";
import { AddressInfoType, AddressModalProps } from "../../types";
import { initialStateAddress } from "src/mocks/initialStates";
import { getAddressInfo } from "src/api/getData";

export default function AddressModal(props: AddressModalProps) {
  const { keyForSearch, isVisible, handleModalClose } = props;

  const [addressInfo, setAddressInfo] =
    useState<AddressInfoType>(initialStateAddress);

  const copyToClipboard = async (text: string) => {
    await Clipboard.setStringAsync(text);
  };

  return (
    <Modal
      animationType="slide"
      visible={isVisible}
      transparent
      style={styles.modal}
      onShow={async () => {
        const response = await getAddressInfo(keyForSearch);

        const actualBalance =
          response.chain_stats.funded_txo_sum -
          response.chain_stats.spent_txo_sum;

        const formattedAddress: AddressInfoType = {
          address: response.address,
          balance: actualBalance,
          totalAmountReceived: response.chain_stats.funded_txo_sum,
          totalAmountSent: response.chain_stats.spent_txo_sum,
        };

        setAddressInfo(formattedAddress);
      }}
    >
      <View style={{ width: "100%", height: "20%" }}></View>

      <View style={styles.container}>
        <ModalHeader
          title="Endereço"
          handleModalClose={() => {
            handleModalClose();
          }}
        />

        <View style={styles.contentContainer}>
          <TouchableOpacity
            onPress={() => {
              copyToClipboard(keyForSearch);
            }}
          >
            <BoxContainerWithText
              firstText="Endereço"
              secondText={`${addressInfo.address.slice(0, 18)}...`}
            />
          </TouchableOpacity>

          <View>
            <BoxContainerWithText
              firstText="Total Recebido"
              secondText={`${addressInfo.totalAmountReceived / 100000000} BTC`}
              borderStyles={{
                borderBottomEndRadius: 0,
                borderBottomStartRadius: 0,
              }}
            />
            <BoxContainerWithText
              firstText="Total Enviado"
              secondText={`${addressInfo.totalAmountSent / 100000000} BTC`}
              borderStyles={{
                borderTopEndRadius: 0,
                borderTopStartRadius: 0,
                borderBottomEndRadius: 0,
                borderBottomStartRadius: 0,
              }}
            />
            <BoxContainerWithText
              firstText="Saldo"
              secondText={`${addressInfo.balance / 100000000} BTC`}
              borderStyles={{
                borderTopEndRadius: 0,
                borderTopStartRadius: 0,
              }}
            />
          </View>
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
  contentContainer: {
    paddingHorizontal: 8,
    marginTop: 35,
    gap: 20,
  },
});
