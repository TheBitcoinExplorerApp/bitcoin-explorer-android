import { BlockType } from "../BlocksInfo/components/Block/type";
import { inputTransactions, outputTransactions } from "../Transactions/types";

type BasicModalProps = {
  modalType: "Transaction" | "Block" | "Address" | "Information";
  isVisible: boolean;
  handleModalClose: () => void;
};

export type InformationModalProps = BasicModalProps & {
  modalType: "Information";
};

export type BlockModalProps = BasicModalProps & {
  modalType: "Block";
  blockTransactions: TransactionType[];
} & BlockType;

export type TransactionModalProps = BasicModalProps & {
  modalType: "Transaction";
  transactionInfo: TransactionType;
  transactionHash: string;
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

export type AddressInfoType = {
  address: string;
  totalAmountReceived: number;
  totalAmountSent: number;
  balance: number;
};

export type AddressModalProps = BasicModalProps & {
  modalType: "Address";
  addressInfo: {
    address: string;
    addressData: AddressInfoType;
  };
  addressTransactions: TransactionType[];
};

export type ModalProps =
  | BlockModalProps
  | TransactionModalProps
  | AddressModalProps;
