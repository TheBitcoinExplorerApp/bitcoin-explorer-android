export type BlockType = {
    blockHeight: number;
    satPerVbyte: string;
    size: string;
    transactions: number;
    timeAgo: string;
  };
  
 export  type BlockProps = {
    blocks: BlockType[];
  };
  