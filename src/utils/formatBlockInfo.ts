import { BlockType } from "src/components/BlocksInfo/components/Block/type";
import { BlockInfoType } from "src/components/BlocksInfo/types";

export const formatDate = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  const test = new Date(timestamp * 1000);

  const day = date.getDate();
  const hour = date.getHours();
  const year = date.getFullYear();
  const minutes = date.getMinutes();
  const month = date.getMonth() + 1;

  const dayWithTwoDigits = day < 10 ? parseInt(`0${day}`) : day;
  const hourWithTwoDigits = hour < 10 ? parseInt(`0${hour}`) : hour;
  const monthWithTwoDigits = month < 10 ? parseInt(`0${month}`) : month;
  const minutesWithTwoDigits = minutes < 10 ? parseInt(`0${minutes}`) : minutes;

  return {
    day: dayWithTwoDigits,
    month: monthWithTwoDigits,
    year,
    hour: hourWithTwoDigits,
    minutes: minutesWithTwoDigits,
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
