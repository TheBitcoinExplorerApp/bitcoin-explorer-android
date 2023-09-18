import { View, Text } from "react-native";
import React from "react";
import {
  AddressModalProps,
  BlockModalProps,
  ModalProps,
  TransactionModalProps,
} from "./types";
import TransactionModal from "./components/TransactionModal/TransactionModal";
import BlockModal from "./components/BlockModal/BlockModal";
import AddressModal from "./components/AddressModal/AddressModal";
import InformationModal from "./components/InformationModal/InformationModal";

export default function Modal(props: ModalProps) {
  const { modalType } = props;

  if (modalType === "Transaction") {
    return <TransactionModal {...props} />;
  }

  if (modalType === "Address") {
    return <AddressModal {...props} />;
  }

  if(modalType === "Information")
  {
    return <InformationModal {...props} />
  }

  return <BlockModal {...props} />;
}
