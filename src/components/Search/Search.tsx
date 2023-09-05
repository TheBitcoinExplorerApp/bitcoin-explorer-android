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

export default function Search() {
  const onlyLettersAndNumbers = /^[a-zA-Z0-9]*$/;
  const maxAddressSize = 62;

  const [searchContent, setSearchContent] = useState("");
  const [modalVisibility, setModalVisibility] = useState({
    addressModal: false,
    transactionModal: false,
    blockModal: false,
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
  };

  const handleAddressModalClose = () => {
    setModalVisibility({
      ...modalVisibility,
      addressModal: false,
    });
    setSearchContent("");
  };

  const handleEnterPress = () => {
    if (searchContent.length > maxAddressSize) {
      setModalVisibility({
        ...modalVisibility,
        transactionModal: true,
      });
    }

    setModalVisibility({
      ...modalVisibility,
      addressModal: true,
    });
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
        keyForSearch={searchContent}
        isVisible={modalVisibility.transactionModal}
        handleModalClose={handleTransactionModalClose}
      />

      <Modal
        modalType="Address"
        keyForSearch={searchContent}
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
