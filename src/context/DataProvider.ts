import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { getLocales } from "expo-localization";
import { I18n } from "i18n-js";
import { BlockType } from "src/components/BlocksInfo/components/Block/type";
import { BlockInfoType } from "src/components/BlocksInfo/types";
import { FeesType } from "src/components/PrioritiesTax/types";
import { SmallBox } from "src/components/SmallBoxInfo/SmallBoxInfo";
import { BasicTransactionInfo, TransactionState } from "src/components/Transactions/types";
import {
  initialStateBlocks,
  initialStateFormattedTransactions,
} from "src/mocks/initialStates";
import translations from "translations/translations";
import { create } from "zustand";

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
i18n.locale = getLocales()[0].languageCode;
i18n.enableFallback = true;
i18n.defaultLocale = "en";

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
