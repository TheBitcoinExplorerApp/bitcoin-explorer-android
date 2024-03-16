import { useQuery } from "@tanstack/react-query";
import { getTaxes } from "./getData";

const feesQuery = () => {
  const {
    isLoading: feesIsLoading,
    data: feesData,
    error: feesError,
  } = useQuery({
    queryKey: ["feesQuery"],
    queryFn: getTaxes,
  });

  return { feesData, feesIsLoading, feesError };
};

export default feesQuery;
