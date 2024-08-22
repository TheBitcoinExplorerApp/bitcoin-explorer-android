// eslint-disable-next-line import/no-extraneous-dependencies
import { useQuery } from "@tanstack/react-query";
import { getTransactions } from "./getData";

const useTransactionsQuery = () => {
  const {
    data: transactionsData,
    isLoading: transactionsIsLoading,
    error: transactionsError,
    refetch: refetchTransactions,
  } = useQuery({
    queryKey: ["transactionsQuery"],
    queryFn: getTransactions,
    enabled: false,
  });

  return {
    transactionsData,
    transactionsIsLoading,
    transactionsError,
    refetchTransactions,
  };
};

export default useTransactionsQuery;
