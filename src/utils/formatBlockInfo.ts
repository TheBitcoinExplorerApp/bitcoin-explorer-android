import { BlockType } from "src/components/BlocksInfo/components/Block/type";
import { BlockInfoType } from "src/components/BlocksInfo/types";

export const formatDate = (timestamp: number) => {
  const date = new Date(timestamp * 1000);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hour = date.getHours();
  const minutes = date.getMinutes();

  return {
    day,
    month,
    year,
    hour,
    minutes,
  };
};

export const convertBytesToMegabytes = (bytes: number) => {
  return (bytes / 1024 / 1024).toFixed(2);
};

export const formatBlocksData = (blocks: BlockInfoType[]) => {
  const blockFormattedData: BlockType[] = blocks.map((block) => {
    const formattedDate = formatDate(block.timestamp);

    const formattedBlockData = {
      blockHash: block.id,
      blockHeight: block.height,
      satPerVbyte: block.extras.medianFee.toFixed(1),
      size: convertBytesToMegabytes(block.size),
      transactions: block.tx_count,
      timeAgo: formattedDate,
      extras: block.extras,
    };

    return formattedBlockData;
  });

  return blockFormattedData;
};
