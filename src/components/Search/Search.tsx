/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import ModalServices from "src/services/ModalServices";
import { initialStateBlocks } from "src/__mocks__/initialStates";
import useAppDataStore from "src/context/DataProvider";
import { AddressInfoType, TransactionType } from "../Modal/types";
import { DataSearchType } from "./types";
import Modal from "../Modal/Modal";

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

export default function Search() {
  const { i18n } = useAppDataStore();
  const onlyLettersAndNumbers = /^[a-zA-Z0-9]*$/;
  const maxAddressSize = 62;

  const [searchContent, setSearchContent] = useState("");
  const [modalVisibility, setModalVisibility] = useState({
    addressModal: false,
    transactionModal: false,
    blockModalWithHeight: false,
    blockModalWithHash: false,
  });
  const [data, setData] = useState<DataSearchType>({
    transactionInfo: {} as TransactionType,
    addressInfo: {
      address: "",
      addressData: {} as AddressInfoType,
      addressTransactions: [] as TransactionType[],
    },
    blockInfo: {
      basicBlockInfo: initialStateBlocks[0],
      blockTransactions: [] as TransactionType[],
    },
  });

  const blockHeightRange =
    searchContent.length >= 1 && searchContent.length <= 7;
  const blockHashRange =
    searchContent.length === 64 && searchContent.includes("000");
  const transactionRange = searchContent.length > maxAddressSize;
  const addressRange =
    searchContent.length >= 27 && searchContent.length <= maxAddressSize;

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
        addressTransactions: [] as TransactionType[],
      },
    });
  };

  const handleBlockModalClose = () => {
    setModalVisibility({
      ...modalVisibility,
      blockModalWithHeight: false,
    });
    setSearchContent("");
    setData({
      ...data,
      blockInfo: {
        basicBlockInfo: initialStateBlocks[0],
        blockTransactions: [] as TransactionType[],
      },
    });
  };

  const handleBlockModalWithHashClose = () => {
    setModalVisibility({
      ...modalVisibility,
      blockModalWithHash: false,
    });
    setSearchContent("");
    setData({
      ...data,
      blockInfo: {
        basicBlockInfo: initialStateBlocks[0],
        blockTransactions: [] as TransactionType[],
      },
    });
  };

  const getTransactionInfo = async () => {
    const transactionInfo =
      await ModalServices.getTransactionTransactionsInfo(searchContent);

    setData({
      ...data,
      transactionInfo,
    });
  };

  const getAddressInfo = () => {
    Promise.all([
      ModalServices.getAddressInfos(searchContent),
      ModalServices.getAddressTransactions(searchContent),
    ]).then((values) => {
      setData({
        ...data,
        addressInfo: {
          address: searchContent,
          addressData: values[0],
          addressTransactions: values[1],
        },
      });
    });
  };

  const getBlockInfosWithHeight = async () => {
    const blockHash = await ModalServices.getBlockHash(searchContent);

    const blockBasicInfo = await ModalServices.getBlockBasicInfo(blockHash);
    const blockTransactions =
      await ModalServices.getBlockTransactions(blockHash);

    setData({
      ...data,
      blockInfo: {
        basicBlockInfo: blockBasicInfo[0],
        blockTransactions,
      },
    });
  };

  const getBlockInfosWithHash = () => {
    Promise.all([
      ModalServices.getBlockBasicInfo(searchContent),
      ModalServices.getBlockTransactions(searchContent),
    ]).then((values) => {
      setData({
        ...data,
        blockInfo: {
          basicBlockInfo: values[0][0],
          blockTransactions: values[1],
        },
      });
    });
  };

  const handleEnterPress = () => {
    if (blockHeightRange) {
      setModalVisibility({
        ...modalVisibility,
        blockModalWithHeight: true,
      });

      getBlockInfosWithHeight();
      return;
    }

    if (blockHashRange) {
      setModalVisibility({
        ...modalVisibility,
        blockModalWithHash: true,
      });

      getBlockInfosWithHash();
      return;
    }

    if (transactionRange) {
      setModalVisibility({
        ...modalVisibility,
        transactionModal: true,
      });

      getTransactionInfo();
      return;
    }

    if (addressRange) {
      setModalVisibility({
        ...modalVisibility,
        addressModal: true,
      });

      getAddressInfo();
    }
  };

  return (
    <>
      <View style={styles.container}>
        <TextInput
          placeholder={i18n.t("search")}
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
        addressTransactions={data.addressInfo.addressTransactions}
        isVisible={modalVisibility.addressModal}
        handleModalClose={handleAddressModalClose}
      />

      <Modal
        modalType="Block"
        blockHash={searchContent}
        isVisible={modalVisibility.blockModalWithHeight}
        handleModalClose={handleBlockModalClose}
        blockTransactions={data.blockInfo.blockTransactions}
        {...data.blockInfo.basicBlockInfo}
      />

      <Modal
        modalType="Block"
        blockHash={searchContent}
        isVisible={modalVisibility.blockModalWithHash}
        handleModalClose={handleBlockModalWithHashClose}
        blockTransactions={data.blockInfo.blockTransactions}
        {...data.blockInfo.basicBlockInfo}
      />
    </>
  );
}
