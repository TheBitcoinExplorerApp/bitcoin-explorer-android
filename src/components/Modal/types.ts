import { BlockType } from "../BlocksInfo/components/Block/type";
import { inputTransactions, outputTransactions } from "../Transactions/types";

type BasicModalProps = {
  modalType: "Transaction" | "Block" | "Address";
  isVisible: boolean;
  handleModalClose: () => void;
};
export type BlockModalProps = {
  isVisible: boolean;
  handleModalClose: () => void;
  blockTransactions: TransactionType[];
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

export type AddressInfoType = {
  address: string;
  totalAmountReceived: number;
  totalAmountSent: number;
  balance: number;
};

export type AddressModalProps = Omit<BasicModalProps, "modalType"> &
  Pick<TransactionModalProps, "keyForSearch">;

export type ModalProps =
  | (BasicModalProps & BlockModalProps)
  | (BasicModalProps & TransactionModalProps)
  | (BasicModalProps & AddressModalProps);
