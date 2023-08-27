import { createContext, useState, useEffect } from "react";
import {
  initialStateBlocks,
  initialStateFormattedTransactions,
} from "../mocks/initialStates";
import { DataProviderProps } from "./types";
import { getBlocks, getTransactions } from "src/api/getData";
import { formatBlocksData } from "src/utils/formatBlockInfo";
import { formatTransactionsData } from "src/utils/formatTransactionsInfo";

export const DataContext = createContext({
  blocks: initialStateBlocks,
  transactions: initialStateFormattedTransactions,
});

export function DataProvider(props: DataProviderProps) {
  const { children } = props;
  const [blocks, setBlocks] = useState(initialStateBlocks);
  const [transactions, setTransactions] = useState(
    initialStateFormattedTransactions
  );

  useEffect(() => {
    Promise.all([getBlocks(), getTransactions()]).then((data) => {
      const blocksData = formatBlocksData(data[0]);
      const transactionsData = formatTransactionsData(data[1]);

      setBlocks(blocksData);
      setTransactions(transactionsData);
    });
  }, []);

  return (
    <DataContext.Provider
      value={{
        blocks,
        transactions,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
