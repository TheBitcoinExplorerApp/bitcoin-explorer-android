import { BlockType } from "../BlocksInfo/components/Block/type";
import { AddressInfoType } from "../Modal/types";
import { TransactionType } from "../Transactions/types";

export type DataSearchType = {
  transactionInfo: TransactionType;
  lastBlockHeight: number;
  addressInfo: {
    address: string;
    addressData: AddressInfoType;
    addressTransactions: TransactionType[];
  };
  blockInfo: {
    basicBlockInfo: BlockType;
    blockTransactions: TransactionType[];
  };
};
