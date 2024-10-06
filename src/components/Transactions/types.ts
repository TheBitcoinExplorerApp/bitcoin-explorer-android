export type TransactionType = {
  transactionId: string;
  size: number;
  fee: number;
  inputTransactions: inputTransactions[];
  outputTransactions: outputTransactions[];
  statusTransaction: {
    confirmed: boolean;
    blockHeight?: number;
    blockHash?: string;
    blockTime?: number;
  };
};

export type TransactionState = {
  transactionId: string;
  fee: number;
  value: number;
};

export type BasicTransactionInfo = {
  txid: string;
  fee: number;
  value: number;
};

type PreviousOutput = {
  scriptpubkey_address: string;
  value: number;
};

export type inputTransactions = {
  prevout?: PreviousOutput;
};

export type outputTransactions = {
  scriptpubkey_address?: string;
  value: number;
};

export type StatusTransaction = {
  confirmed: boolean;
  block_height: number;
  block_hash: string;
  block_time: number;
};

export type TransactionsData = {
  txid: string;
  size: number;
  fee: number;
  vin: inputTransactions[];
  vout: outputTransactions[];
  status: StatusTransaction;
};

export type TransactionInfo = {
  transactionHash: string;
  transactionData: TransactionType;
  lastBlockHeight: number;
};
