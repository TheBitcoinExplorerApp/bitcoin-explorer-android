// eslint-disable-next-line import/no-extraneous-dependencies
import { useQuery } from "@tanstack/react-query";
import { getTaxes } from "./getData";

const useFeesQuery = () => {
  const {
    isLoading: feesIsLoading,
    data: feesData,
    error: feesError,
    refetch: refetchFees,
  } = useQuery({
    queryKey: ["feesQuery"],
    queryFn: getTaxes,
  });

  return { feesData, feesIsLoading, feesError, refetchFees };
};

export default useFeesQuery;
