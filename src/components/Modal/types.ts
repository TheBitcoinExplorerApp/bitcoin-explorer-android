import { inputTransactions, outputTransactions } from '../Transactions/types';

export type ModalProps = {
  modalType: 'Transaction' | 'Block';
  keyForSearch: string;
  isVisible: boolean;
  handleModalClose: () => void;
};

export type TransactionModalProps = {
  keyForSearch: string;
  isVisible: boolean;
  handleModalClose: () => void;
};

export type TransactionType = {
  transactionId: string;
  size: number;
  fee: number;
  inputTransactions: inputTransactions[];
  outputTransactions: outputTransactions[];
  statusTransaction: {
    confirmed: boolean;
    blockHeight?: number;
    blockHash?: string;
    blockTime?: number;
  };
};
