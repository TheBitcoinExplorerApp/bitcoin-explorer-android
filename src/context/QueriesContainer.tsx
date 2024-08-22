/* eslint-disable import/no-extraneous-dependencies */
import { useEffect } from "react";
import feesQuery from "src/api/feesQuery";
import blocksQuery from "src/api/blocksQuery";
import formatFees from "src/utils/formatFees";
import useAppStore from "src/stores/App/useAppStore";
import transactionsQuery from "src/api/transactionsQuery";
import { formatBlocksData } from "src/utils/formatBlockInfo";
import formatTransactionsData from "src/utils/formatTransactionsData";

type QueriesContainerProps = {
  children: React.ReactNode;
};

function QueriesContainer(props: QueriesContainerProps) {
  const { setFees, setBlocks, setIsLoading, setTransactions } = useAppStore();

  const { feesData, feesIsLoading, refetchFees } = feesQuery();
  const { blocksData, blocksIsLoading, refetchBlocks } = blocksQuery();
  const { transactionsData, transactionsIsLoading, refetchTransactions } =
    transactionsQuery();

  const queryHaveData = feesData && blocksData && transactionsData;
  const isLoading = feesIsLoading || blocksIsLoading || transactionsIsLoading;

  useEffect(() => {
    if (!queryHaveData) {
      console.log("🤯", "inside useEffect");
      console.log("🤯", "fetching data");
      refetchFees();
      refetchBlocks();
      refetchTransactions();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log("🙁", "inside useEffect");
    if (feesData) setFees(formatFees(feesData));
    if (blocksData) setBlocks(formatBlocksData(blocksData));
    if (transactionsData)
      setTransactions(formatTransactionsData(transactionsData));

    if (queryHaveData && !isLoading) setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [feesIsLoading, blocksIsLoading, transactionsIsLoading]);

  return props.children;
}

export default QueriesContainer;
