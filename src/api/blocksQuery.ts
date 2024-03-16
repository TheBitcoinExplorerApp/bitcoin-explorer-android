import { useQuery } from "@tanstack/react-query";
import { getBlocks } from "./getData";

const blocksQuery = () => {
  const {
    data: blocksData,
    isLoading: blocksIsLoading,
    error: blocksError,
    refetch: refetchBlocks,
  } = useQuery({
    queryKey: ["blocksQuery"],
  queryFn: getBlocks,
  });

  return { blocksData, blocksIsLoading, blocksError, refetchBlocks };
};

export default blocksQuery;
