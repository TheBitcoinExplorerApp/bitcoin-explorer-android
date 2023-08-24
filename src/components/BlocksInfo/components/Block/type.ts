import { ExtrasBlockInfoType } from "../../types";

export type BlockType = {
  blockHash: string;
  blockHeight: number;
  satPerVbyte: string;
  size: string;
  transactions: number;
  timeAgo: {
    day: number;
    month: number;
    year: number;
    hour: number;
    minutes: number;
  };
  extras: ExtrasBlockInfoType;
};

export type BlockProps = {
  blocks: BlockType[];
};
