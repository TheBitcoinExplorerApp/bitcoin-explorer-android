/* eslint-disable import/no-extraneous-dependencies */
import { I18n } from "i18n-js";
import {
  BlockchainInfoCoinsPriceType,
  CurrencyOptions,
  MempoolCoinsPriceType,
} from "src/api/types";
import { BlockType } from "src/components/BlocksInfo/components/Block/type";
import { SmallBox } from "src/components/SmallBoxInfo/SmallBoxInfo";
import { TransactionState } from "src/components/Transactions/types";

export type ScreenOptions = "Home" | "Blocks" | "Transactions" | "Settings";
export type LanguageOptions = "en" | "pt";

export type useAppStoreStateTypes = {
  localization: I18n;
  isLoading: boolean;
  isRefreshing: boolean;
  fees: SmallBox[] | null;
  blocks: BlockType[] | null;
  transactions: TransactionState[] | null;
  bitcoinPrice: {
    mempool: MempoolCoinsPriceType | null;
    blockchainInfo: BlockchainInfoCoinsPriceType | null;
  };
  selectedCurrency: CurrencyOptions;

  setFees: (fees: SmallBox[]) => void;
  setBlocks: (blocks: BlockType[]) => void;
  setIsLoading: (isLoading: boolean) => void;
  setIsRefreshing: (isRefreshing: boolean) => void;
  setTransactions: (transactions: TransactionState[]) => void;
  setActualLanguage: (language: LanguageOptions) => void;
  setBitcoinPrice: (bitcoinPrice: {
    mempool: MempoolCoinsPriceType;
    blockchainInfo: BlockchainInfoCoinsPriceType;
  }) => void;
  setSelectedCurrency: (currency: CurrencyOptions) => void;
};
