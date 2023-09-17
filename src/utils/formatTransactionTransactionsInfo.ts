import { TransactionType } from "src/components/Modal/types";
import { TransactionsData } from "src/components/Transactions/types";

const formatTransactionsInfo = (
  transaction: TransactionsData
): TransactionType => ({
  transactionId: transaction.txid,
  size: transaction.size,
  fee: transaction.fee,
  inputTransactions: transaction.vin,
  outputTransactions: transaction.vout,
  statusTransaction: {
    confirmed: transaction.status.confirmed,
    blockHeight: transaction.status.block_height,
    blockHash: transaction.status.block_hash,
    blockTime: transaction.status.block_time,
  },
});

export default formatTransactionsInfo;
