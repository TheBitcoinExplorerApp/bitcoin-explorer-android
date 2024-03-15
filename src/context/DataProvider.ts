import { getLocales } from "expo-localization";
import { I18n } from "i18n-js";
import { BlockType } from "src/components/BlocksInfo/components/Block/type";
import { SmallBox } from "src/components/SmallBoxInfo/SmallBoxInfo";
import { TransactionState } from "src/components/Transactions/types";
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
};

const i18n = new I18n(translations);
i18n.locale = getLocales()[0].languageCode;
i18n.enableFallback = true;
i18n.defaultLocale = "en";

const useAppDataStore = create<AppDataStoreType>()((set) => {
  const returnObj: AppDataStoreType = {
    isLoading: true,
    blocks: initialStateBlocks,
    transactions: initialStateFormattedTransactions,
    fees: [] as SmallBox[],
    setBlocks: (blocks: BlockType[]) => set({ blocks }),
    setTransactions: (transactions: TransactionState[]) =>
      set({ transactions }),
    setFees: (fees: SmallBox[]) => set({ fees }),
    setIsLoading: (isLoading: boolean) => set({ isLoading }),
    i18n,
  };

  return returnObj;
});

export default useAppDataStore;
