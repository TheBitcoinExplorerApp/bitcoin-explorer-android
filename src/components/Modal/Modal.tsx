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

export default function Modal(props: ModalProps) {
  const { modalType } = props;

  if (modalType === "Transaction") {
    return <TransactionModal {...(props as TransactionModalProps)} />;
  }

  if (modalType === "Address") {
    return <AddressModal {...(props as AddressModalProps)} />;
  }

  return <BlockModal {...(props as BlockModalProps)} />;
}
