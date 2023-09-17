import { createContext, useState, useEffect } from "react";
import {
  initialStateBlocks,
  initialStateFormattedTransactions,
} from "../mocks/initialStates";
import { DataProviderProps } from "./types";
import { getBlocks, getTaxes, getTransactions } from "src/api/getData";
import { formatBlocksData } from "src/utils/formatBlockInfo";
import { formatTransactionsData } from "src/utils/formatTransactionsData";
import { SmallBox } from "src/components/SmallBoxInfo/SmallBoxInfo";
import formatFees from "src/utils/formatFees";

export const DataContext = createContext({
  blocks: initialStateBlocks,
  transactions: initialStateFormattedTransactions,
  fees: [] as SmallBox[],
});

export function DataProvider(props: DataProviderProps) {
  const { children } = props;
  const [blocks, setBlocks] = useState(initialStateBlocks);
  const [transactions, setTransactions] = useState(
    initialStateFormattedTransactions
  );
  const [feesInfos, setFeesInfos] = useState<SmallBox[]>([]);

  useEffect(() => {
    Promise.all([getBlocks(), getTransactions(), getTaxes()]).then((data) => {
      const blocksData = formatBlocksData(data[0]);
      const transactionsData = formatTransactionsData(data[1]);
      const feesData = formatFees(data[2]);

      setBlocks(blocksData);
      setTransactions(transactionsData);
      setFeesInfos(feesData);
    });
  }, []);

  return (
    <DataContext.Provider
      value={{
        blocks,
        transactions,
        fees: feesInfos,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
