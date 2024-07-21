/* eslint-disable import/no-extraneous-dependencies */
import { I18n } from "i18n-js";
import { create } from "zustand";
import { getLocales } from "expo-localization";
import translations from "translations/translations";
import { SmallBox } from "src/components/SmallBoxInfo/SmallBoxInfo";
import { TransactionState } from "src/components/Transactions/types";
import { BlockType } from "src/components/BlocksInfo/components/Block/type";
import {
  initialStateBlocks,
  initialStateFormattedTransactions,
} from "src/__mocks__/initialStates";

type AppDataStoreType = {
  isLoading: boolean;
  blocks: BlockType[];
  transactions: TransactionState[];
  fees: SmallBox[];
  setBlocks: (blocks: BlockType[]) => void;
  setTransactions: (transactions: TransactionState[]) => void;
  setFees: (fees: SmallBox[]) => void;
  setIsLoading: (isLoading: boolean) => void;
  i18n: I18n;
  isRefreshing: boolean;
  setIsRefreshing: (isRefreshing: boolean) => void;
  refreshRequestScreen: "Home" | "Blocks" | "Transactions" | null;
  setRequestScreen: (screen: "Home" | "Blocks" | "Transactions" | null) => void;
};

const i18n = new I18n(translations);
i18n.defaultLocale = "en";
i18n.locale = getLocales()[0].languageCode;
i18n.enableFallback = true;

const useAppDataStore = create<AppDataStoreType>()((set) => {
  const returnObj: AppDataStoreType = {
    i18n,
    isLoading: true,
    setIsLoading: (isLoading: boolean) => set({ isLoading }),
    blocks: initialStateBlocks,
    setBlocks: (blocks: BlockType[]) => set({ blocks }),
    transactions: initialStateFormattedTransactions,
    setTransactions: (transactions: TransactionState[]) =>
      set({ transactions }),
    fees: [] as SmallBox[],
    setFees: (fees: SmallBox[]) => set({ fees }),
    isRefreshing: false,
    setIsRefreshing: (isRefreshing: boolean) => set({ isRefreshing }),
    refreshRequestScreen: null,
    setRequestScreen: (screen: "Home" | "Blocks" | "Transactions" | null) =>
      set({ refreshRequestScreen: screen }),
  };

  return returnObj;
});

export default useAppDataStore;
