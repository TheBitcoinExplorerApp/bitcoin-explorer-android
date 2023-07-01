type PoolInfoType = {
  name: string;
};

type ExtrasBlockInfoType = {
  medianFee: number;
  pool: PoolInfoType;
};

export type BlockInfoType = {
  id: string;
  height: number;
  tx_count: number;
  size: number;
  timestamp: number;
  extras: ExtrasBlockInfoType;
};
