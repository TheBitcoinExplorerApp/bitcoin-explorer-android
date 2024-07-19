import { BasicTransactionInfo } from "src/components/Transactions/types";

const formatTransactionsData = (transactions: BasicTransactionInfo[]) => {
  const formattedData = transactions.map((basicInfoTransaction) => {
    return {
      transactionId: basicInfoTransaction.txid,
      value: basicInfoTransaction.value,
      fee: basicInfoTransaction.fee,
    };
  });

  return formattedData;
};

export default formatTransactionsData;
