import { TransactionType } from "src/components/Modal/types";

export const initialStateBlocks = [
  {
    blockHeight: 1,
    satPerVbyte: "1",
    size: "1",
    transactions: 1,
    timeAgo: "1",
  },
  {
    blockHeight: 2,
    satPerVbyte: "1",
    size: "1",
    transactions: 1,
    timeAgo: "1",
  },
  {
    blockHeight: 3,
    satPerVbyte: "1",
    size: "1",
    transactions: 1,
    timeAgo: "1",
  },
  {
    blockHeight: 4,
    satPerVbyte: "1",
    size: "1",
    transactions: 1,
    timeAgo: "1",
  },
];

export const initialStateTransaction: TransactionType = {
  transactionId: " ",
  size: 0,
  fee: 0,
  inputTransactions: [
    {
      prevout: {
        scriptpubkey_address: " ",
        value: 0,
      },
    },
  ],
  outputTransactions: [
    {
      scriptpubkey_address: " ",
      value: 0,
    },
  ],
  statusTransaction: undefined,
};
