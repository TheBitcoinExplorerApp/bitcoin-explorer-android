import { BasicTransactionInfo } from "src/components/Transactions/types";

export const formatTransactionsData = (
  transactions: BasicTransactionInfo[]
) => {
  const formattedData = transactions.map((basicInfoTransaction) => {
    return {
      transactionId: basicInfoTransaction.txid,
      value: basicInfoTransaction.value,
      fee: basicInfoTransaction.fee,
    };
  });

  return formattedData;
};
