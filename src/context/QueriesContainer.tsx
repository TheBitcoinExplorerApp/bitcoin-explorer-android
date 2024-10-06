/* eslint-disable import/no-extraneous-dependencies */
import { useEffect } from "react";
import feesQuery from "src/api/feesQuery";
import blocksQuery from "src/api/blocksQuery";
import formatFees from "src/utils/formatFees";
import useAppStore from "src/stores/App/useAppStore";
import transactionsQuery from "src/api/transactionsQuery";
import { formatBlocksData } from "src/utils/formatBlockInfo";
import formatTransactionsData from "src/utils/formatTransactionsData";
import usePricesQuery from "src/api/priceQuery";

type QueriesContainerProps = {
  children: React.ReactNode;
};

function QueriesContainer(props: QueriesContainerProps) {
  const {
    setFees,
    setBlocks,
    localization,
    bitcoinPrice,
    setIsLoading,
    setTransactions,
    setBitcoinPrice,
    selectedCurrency,
  } = useAppStore();

  const { feesData, feesIsLoading, refetchFees } = feesQuery();
  const { blocksData, blocksIsLoading, refetchBlocks } = blocksQuery();
  const { transactionsData, transactionsIsLoading, refetchTransactions } =
    transactionsQuery();
  const { pricesData, pricesIsLoading, refetchPrices } = usePricesQuery();

  const isLoading =
    feesIsLoading ||
    blocksIsLoading ||
    transactionsIsLoading ||
    pricesIsLoading;

  const queriesHaveData =
    feesData && blocksData && transactionsData && pricesData;

  useEffect(() => {
    if (feesData)
      setFees(
        formatFees(
          feesData,
          selectedCurrency,
          bitcoinPrice,
          localization.locale,
        ),
      );

    if (pricesData) setBitcoinPrice(pricesData);
    if (blocksData) setBlocks(formatBlocksData(blocksData));
    if (transactionsData)
      setTransactions(formatTransactionsData(transactionsData));

    // if it's not loading, and we don't have the data, we refetch
    if (!isLoading && !queriesHaveData) {
      if (!feesData) refetchFees();
      if (!blocksData) refetchBlocks();
      if (!transactionsData) refetchTransactions();
      if (!pricesData) refetchPrices();
    }

    // if we have all the data, we set isLoading to false
    if (queriesHaveData) setIsLoading(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    feesData,
    isLoading,
    blocksData,
    pricesData,
    queriesHaveData,
    transactionsData,
  ]);

  return props.children;
}

export default QueriesContainer;
