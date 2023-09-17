import { AddressInfoType } from "src/components/Modal/types";

const formatAddressInfo = (data: AddressDataType): AddressInfoType => {
  const actualBalance =
    data.chain_stats.funded_txo_sum - data.chain_stats.spent_txo_sum;

  const formattedAddress: AddressInfoType = {
    address: data.address,
    balance: actualBalance,
    totalAmountReceived: data.chain_stats.funded_txo_sum,
    totalAmountSent: data.chain_stats.spent_txo_sum,
  };

  return formattedAddress;
};

export default formatAddressInfo;
