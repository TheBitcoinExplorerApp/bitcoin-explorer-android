import { useQuery } from "@tanstack/react-query";
import { getBlocks } from "./getData";

const blocksQuery = () => {
  const {
    data: blocksData,
    isLoading: blocksIsLoading,
    error: blocksError,
  } = useQuery({
    queryKey: ["blocksQuery"],
    queryFn: getBlocks,
  });

  return { blocksData, blocksIsLoading, blocksError };
};

export default blocksQuery;
