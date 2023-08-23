import { TransactionType } from "src/components/Modal/types";

const timeAgoInitialState = {
  hour: 0,
  minutes: 0,
  day: 0,
  month: 0,
  year: 0,
};

export const initialStateBlocks = [
  {
    blockHeight: 1,
    satPerVbyte: "1",
    size: "1",
    transactions: 1,
    timeAgo: timeAgoInitialState,
  },
  {
    blockHeight: 2,
    satPerVbyte: "1",
    size: "1",
    transactions: 1,
    timeAgo: timeAgoInitialState,
  },
  {
    blockHeight: 3,
    satPerVbyte: "1",
    size: "1",
    transactions: 1,
    timeAgo: timeAgoInitialState,
  },
  {
    blockHeight: 4,
    satPerVbyte: "1",
    size: "1",
    transactions: 1,
    timeAgo: timeAgoInitialState,
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
