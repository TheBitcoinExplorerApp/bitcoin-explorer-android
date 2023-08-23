import { BlockType } from "../BlocksInfo/components/Block/type";
import { inputTransactions, outputTransactions } from "../Transactions/types";

type BasicModalProps = {
  modalType: "Transaction" | "Block";
  isVisible: boolean;
  handleModalClose: () => void;
};
export type BlockModalProps = {
  isVisible: boolean;
  handleModalClose: () => void;
} & BlockType;

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

export type ModalProps =
  | (BasicModalProps & BlockModalProps)
  | (BasicModalProps & TransactionModalProps);
