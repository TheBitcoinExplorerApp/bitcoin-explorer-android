// eslint-disable-next-line import/no-extraneous-dependencies
import { useQuery } from "@tanstack/react-query";
import { getPrices } from "./getData";

const usePricesQuery = () => {
  const {
    isLoading: pricesIsLoading,
    data: pricesData,
    error: pricesError,
    refetch: refetchPrices,
  } = useQuery({
    queryKey: ["pricesQuery"],
    queryFn: getPrices,
    enabled: false,
  });

  return { pricesData, pricesIsLoading, pricesError, refetchPrices };
};

export default usePricesQuery;
