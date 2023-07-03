import { BlockInfoType } from 'src/components/BlocksInfo/types';
import { FeesType } from 'src/components/PrioritiesTax/types';
import { BasicTransactionInfo } from 'src/components/Transactions/types';
import {
  taxTransactions,
  blocksInfo,
  lastTenTransactions,
} from 'src/env/apiLinks';

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
