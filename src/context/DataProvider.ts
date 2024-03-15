import { BlockType } from "src/components/BlocksInfo/components/Block/type";
import { SmallBox } from "src/components/SmallBoxInfo/SmallBoxInfo";
import {
  BasicTransactionInfo,
  TransactionState,
} from "src/components/Transactions/types";
import {
  initialStateBlocks,
  initialStateFormattedTransactions,
} from "src/mocks/initialStates";
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
};

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
  };

  return returnObj;
});

export default useAppDataStore;
