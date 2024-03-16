import { useQuery } from "@tanstack/react-query";
import { getTransactions } from "./getData";

const transactionsQuery = () => {
  const {
    data: transactionsData,
    isLoading: transactionsIsLoading,
    error: transactionsError,
    refetch: refetchTransactions,
  } = useQuery({
    queryKey: ["transactionsQuery"],
    queryFn: getTransactions,
  });

  return {
    transactionsData,
    transactionsIsLoading,
    transactionsError,
    refetchTransactions,
  };
};

export default transactionsQuery;
