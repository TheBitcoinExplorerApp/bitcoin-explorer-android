import { BlockType } from "src/components/BlocksInfo/components/Block/type";
import { AddressInfoType } from "src/components/Modal/types";
import { SmallBox } from "src/components/SmallBoxInfo/SmallBoxInfo";
import { TransactionType } from "src/components/Transactions/types";

const timeAgoInitialState = {
  hour: 0,
  minutes: 0,
  day: 0,
  month: 0,
  year: 0,
};

export const initialStateFees: SmallBox[] = [
  {
    title: " ",
    value: " ",
  },
  {
    title: " ",
    value: " ",
  },
  {
    title: " ",
    value: " ",
  },
];

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

export const initialStateAddress: AddressInfoType = {
  address: "",
  balance: 0,
  totalAmountReceived: 0,
  totalAmountSent: 0,
};
