import Modal from "../Modal/Modal";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from "react-native";
import { DataSearchType } from "./types";
import { AddressInfoType, TransactionType } from "../Modal/types";
import ModalServices from "src/services/ModalServices";

export default function Search() {
  const onlyLettersAndNumbers = /^[a-zA-Z0-9]*$/;
  const maxAddressSize = 62;

  const [searchContent, setSearchContent] = useState("");
  const [modalVisibility, setModalVisibility] = useState({
    addressModal: false,
    transactionModal: false,
    blockModal: false,
  });
  const [data, setData] = useState<DataSearchType>({
    transactionInfo: {} as TransactionType,
    addressInfo: {
      address: "",
      addressData: {} as AddressInfoType,
    },
  });

  const handleInputChange = (text: string) => {
    if (onlyLettersAndNumbers.test(text)) {
      setSearchContent(text);
    }
  };

  const handleTransactionModalClose = () => {
    setModalVisibility({
      ...modalVisibility,
      transactionModal: false,
    });
    setSearchContent("");
    setData({
      ...data,
      transactionInfo: {} as TransactionType,
    });
  };

  const handleAddressModalClose = () => {
    setModalVisibility({
      ...modalVisibility,
      addressModal: false,
    });
    setSearchContent("");
    setData({
      ...data,
      addressInfo: {
        address: "",
        addressData: {} as AddressInfoType,
      },
    });
  };

  const getTransactionInfo = async () => {
    const transactionInfo = await ModalServices.getTransactionTransactionsInfo(
      searchContent
    );

    setData({
      ...data,
      transactionInfo,
    });
  };

  const getAddressInfo = async () => {
    const addressData = await ModalServices.getAddressInfos(searchContent);

    setData({
      ...data,
      addressInfo: {
        address: searchContent,
        addressData,
      },
    });
  };

  const handleEnterPress = () => {
    if (searchContent.length > maxAddressSize) {
      setModalVisibility({
        ...modalVisibility,
        transactionModal: true,
      });

      getTransactionInfo();
      return;
    }

    setModalVisibility({
      ...modalVisibility,
      addressModal: true,
    });

    getAddressInfo();
  };

  return (
    <>
      <View style={styles.container}>
        <TextInput
          placeholder="Pesquisar"
          style={styles.input}
          placeholderTextColor="#8d8d9a"
          value={searchContent}
          onChangeText={handleInputChange}
          onSubmitEditing={handleEnterPress}
        />
      </View>

      <Modal
        modalType="Transaction"
        transactionInfo={data.transactionInfo}
        transactionHash={searchContent}
        isVisible={modalVisibility.transactionModal}
        handleModalClose={handleTransactionModalClose}
      />

      <Modal
        modalType="Address"
        addressInfo={data.addressInfo}
        isVisible={modalVisibility.addressModal}
        handleModalClose={handleAddressModalClose}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  input: {
    backgroundColor: "#1d2133",
    borderRadius: 5,
    padding: 12,
    width: "100%",
    fontSize: 18,
    color: "#FFF",
  },
});
