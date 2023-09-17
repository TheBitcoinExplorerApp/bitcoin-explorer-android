import { addressInfo } from "./../../env/apiLinks";
import { BlockType } from "../BlocksInfo/components/Block/type";
import { AddressInfoType, TransactionType } from "../Modal/types";

export type DataSearchType = {
  transactionInfo: TransactionType;
  addressInfo: {
    address: string;
    addressData: AddressInfoType;
  };
};
