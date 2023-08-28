import { BlockType } from "src/components/BlocksInfo/components/Block/type";
import { TransactionType } from "src/components/Modal/types";
import crypto from "crypto";

const timeAgoInitialState = {
  hour: 0,
  minutes: 0,
  day: 0,
  month: 0,
  year: 0,
};

export const initialStateBlocks: BlockType[] = [
  {
    blockHash: "",
    blockHeight: 1,
    satPerVbyte: "1",
    size: "1",
    transactions: 1,
    timeAgo: timeAgoInitialState,
    extras: {
      medianFee: 1,
      pool: {
        name: " ",
      },
    },
  },
  {
    blockHash: "",
    blockHeight: 2,
    satPerVbyte: "1",
    size: "1",
    transactions: 1,
    timeAgo: timeAgoInitialState,
    extras: {
      medianFee: 1,
      pool: {
        name: " ",
      },
    },
  },
  {
    blockHash: "",
    blockHeight: 3,
    satPerVbyte: "1",
    size: "1",
    transactions: 1,
    timeAgo: timeAgoInitialState,
    extras: {
      medianFee: 1,
      pool: {
        name: " ",
      },
    },
  },
  {
    blockHash: "",
    blockHeight: 4,
    satPerVbyte: "1",
    size: "1",
    transactions: 1,
    timeAgo: timeAgoInitialState,

    extras: {
      medianFee: 1,
      pool: {
        name: " ",
      },
    },
  },
];

export const initialStateTransaction: TransactionType = {
  transactionId: `${Math.random()}`,
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

export const initialStateFormattedTransactions = [
  {
    transactionId: "0",
    value: 0,
    fee: 0,
  },
  {
    transactionId: "1",
    value: 0,
    fee: 0,
  },
];
