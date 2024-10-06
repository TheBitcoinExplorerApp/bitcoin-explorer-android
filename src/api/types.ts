export type CurrencyOptions = "USD" | "BRL" | "EUR" | "JPY";

export type MempoolCoinsPriceType = {
  time: string;
} & {
  [key in CurrencyOptions]: number;
};

export type BlockchainInfoCoinsPriceType = {
  [key in CurrencyOptions]: {
    "15m": number;
    last: number;
    buy: number;
    sell: number;
    symbol: string;
  };
};
