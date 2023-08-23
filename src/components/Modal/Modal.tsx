import { View, Text } from "react-native";
import React from "react";
import { BlockModalProps, ModalProps, TransactionModalProps } from "./types";
import TransactionModal from "./components/TransactionModal/TransactionModal";
import BlockModal from "./components/BlockModal/BlockModal";

export default function Modal(props: ModalProps) {
  const { modalType } = props;

  if (modalType === "Transaction") {
    return <TransactionModal {...(props as TransactionModalProps)} />;
  }

  return <BlockModal {...(props as BlockModalProps)} />;
}
