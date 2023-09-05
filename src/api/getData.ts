import { TransactionsData } from "./../components/Transactions/types";
import { BlockInfoType } from "src/components/BlocksInfo/types";
import { FeesType } from "src/components/PrioritiesTax/types";
import { BasicTransactionInfo } from "src/components/Transactions/types";
import {
  taxTransactions,
  blocksInfo,
  lastTenTransactions,
  transactionInfo,
  blocksTransaction,
  addressInfo,
} from "src/env/apiLinks";

export const getTaxes = async () => {
  const response = await fetch(taxTransactions);
  const data: FeesType = await response.json();
  return data;
};

export const getBlocks = async () => {
  const response = await fetch(blocksInfo);
  const data: BlockInfoType[] = await response.json();
  return data;
};

export const getTransactions = async () => {
  const response = await fetch(lastTenTransactions);
  const data: BasicTransactionInfo[] = await response.json();
  return data;
};

export const getTransactionInfo = async (hash: string) => {
  const response = await fetch(`${transactionInfo}/${hash}`);
  const data: TransactionsData = await response.json();

  return data;
};

export const getBlockTransactions = async (hash: string) => {
  const url = blocksTransaction.replace("block_hash", hash);
  // endpoint is with problem that return all transactions when we don't specify the starting index
  const response = await fetch(`${url}/0`);
  const data: TransactionsData[] = await response.json();

  return data;
};

export const getAddressInfo = async (address: string) => {
  const url = `${addressInfo}/${address}`;
  const response = await fetch(url);
  const data: AddressDataType = await response.json();

  return data;
};
