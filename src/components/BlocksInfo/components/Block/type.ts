export type BlockType = {
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
  };
  
 export  type BlockProps = {
    blocks: BlockType[];
  };
  