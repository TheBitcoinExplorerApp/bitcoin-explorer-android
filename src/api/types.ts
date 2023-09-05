type ConfirmedSumOfTransactionsOnAddressType = {
  spent_txo_sum: number;
  funded_txo_sum: number;
};

type AddressDataType = {
  address: string;
  chain_stats: ConfirmedSumOfTransactionsOnAddressType;
};
