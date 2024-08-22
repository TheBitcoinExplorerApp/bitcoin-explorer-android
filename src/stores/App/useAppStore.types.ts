/* eslint-disable import/no-extraneous-dependencies */
import { I18n } from "i18n-js";
import { BlockType } from "src/components/BlocksInfo/components/Block/type";
import { SmallBox } from "src/components/SmallBoxInfo/SmallBoxInfo";
import { TransactionState } from "src/components/Transactions/types";

export type ScreenOptions = "Home" | "Blocks" | "Transactions";

export type useAppStoreStateTypes = {
  localization: I18n;
  isLoading: boolean;
  isRefreshing: boolean;
  fees: SmallBox[] | null;
  blocks: BlockType[] | null;
  transactions: TransactionState[] | null;

  setFees: (fees: SmallBox[]) => void;
  setBlocks: (blocks: BlockType[]) => void;
  setIsLoading: (isLoading: boolean) => void;
  setIsRefreshing: (isRefreshing: boolean) => void;
  setTransactions: (transactions: TransactionState[]) => void;
};
