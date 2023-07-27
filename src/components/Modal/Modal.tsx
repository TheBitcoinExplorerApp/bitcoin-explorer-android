import { View, Text } from 'react-native';
import React from 'react';
import { ModalProps } from './types';
import TransactionModal from './components/TransactionModal/TransactionModal';
import BlockModal from './components/BlockModal';

export default function Modal(props: ModalProps) {
  const { keyForSearch, modalType, isVisible, handleModalClose } = props;

  return modalType === 'Transaction' ? (
    <TransactionModal
      keyForSearch={keyForSearch}
      isVisible={isVisible}
      handleModalClose={handleModalClose}
    />
  ) : (
    <BlockModal />
  );
}
