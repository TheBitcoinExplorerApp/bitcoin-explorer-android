// #TODO: REFACTOR THIS FILE
/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line import/no-extraneous-dependencies
import { useEffect } from "react";
import blocksQuery from "src/api/blocksQuery";
import feesQuery from "src/api/feesQuery";
import transactionsQuery from "src/api/transactionsQuery";
import { formatBlocksData } from "src/utils/formatBlockInfo";
import formatTransactionsData from "src/utils/formatTransactionsData";
import formatFees from "src/utils/formatFees";
import useAppDataStore from "./DataProvider";

type QueriesContainerProps = {
  children: React.ReactNode;
};

function QueriesContainer(props: QueriesContainerProps) {
  const {
    blocks,
    transactions,
    fees,
    setBlocks,
    setTransactions,
    setFees,
    setIsLoading,
    isRefreshing,
    setIsRefreshing,
    refreshRequestScreen,
    setRequestScreen,
  } = useAppDataStore();

  const { blocksData, blocksIsLoading, refetchBlocks } = blocksQuery();
  const { transactionsData, transactionsIsLoading, refetchTransactions } =
    transactionsQuery();
  const { feesData, feesIsLoading, refetchFees } = feesQuery();

  // first load
  useEffect(() => {
    if (blocksData) {
      const formattedBlocks = formatBlocksData(blocksData);
      setBlocks(formattedBlocks);
    }

    if (transactionsData)
      setTransactions(formatTransactionsData(transactionsData));

    if (feesData) setFees(formatFees(feesData));

    if (!blocksIsLoading && !transactionsIsLoading && !feesIsLoading)
      setIsLoading(false);
  }, [blocksIsLoading, transactionsIsLoading, feesIsLoading]);

  // lead with refresh
  useEffect(() => {
    if (refreshRequestScreen === "Home") {
      refetchBlocks();
      refetchTransactions();
      refetchFees();
      setIsRefreshing(false);
      setRequestScreen(null);
    }

    if (refreshRequestScreen === "Blocks") {
      refetchBlocks();
      setIsRefreshing(false);
      setRequestScreen(null);
    }

    if (refreshRequestScreen === "Transactions") {
      refetchTransactions();
      setIsRefreshing(false);
      setRequestScreen(null);
    }
  }, [refreshRequestScreen, isRefreshing]);

  // leads when refresh has happened
  useEffect(() => {
    if (blocks[0].blockHash) {
      setBlocks(formatBlocksData(blocksData));
    }

    if (transactions[0].fee) {
      setTransactions(formatTransactionsData(transactionsData));
    }

    if (fees.length) {
      setFees(formatFees(feesData));
    }
  }, [blocksData, transactionsData, feesData]);

  return props.children;
}

export default QueriesContainer;
