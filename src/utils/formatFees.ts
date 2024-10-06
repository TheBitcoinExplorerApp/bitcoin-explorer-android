import { CurrencyOptions } from "src/api/types";
import { FeesType } from "src/components/PrioritiesTax/types";
import { SmallBox } from "src/components/SmallBoxInfo/SmallBoxInfo";
import { useAppStoreStateTypes } from "src/stores/App/useAppStore.types";
import { currencyProps } from "./dropDownOptions";

export const calcFeesOnCurrency = (
  actualFee: number,
  selectedCurrency: CurrencyOptions,
  bitcoinPrices: useAppStoreStateTypes["bitcoinPrice"],
): number => {
  const mediumTransactionSize = 140;
  const { mempool, blockchainInfo } = bitcoinPrices;

  const price =
    (mempool && mempool[selectedCurrency]) ||
    (blockchainInfo && blockchainInfo[selectedCurrency].buy);

  return (price / 100000000) * (actualFee * mediumTransactionSize);
};

const formatFees = (
  fees: FeesType,
  selectedCurrency: CurrencyOptions,
  bitcoinPrices: useAppStoreStateTypes["bitcoinPrice"],
  locale: string,
): SmallBox[] => {
  const currencyOption = currencyProps.find(
    (currencyProp) => currencyProp.currency === selectedCurrency,
  );

  const hourFeeCurrencyPrice = calcFeesOnCurrency(
    fees.hourFee,
    selectedCurrency,
    bitcoinPrices,
  );
  const halfHourFeeCurrencyPrice = calcFeesOnCurrency(
    fees.halfHourFee,
    selectedCurrency,
    bitcoinPrices,
  );
  const fastestFeeCurrencyPrice = calcFeesOnCurrency(
    fees.fastestFee,
    selectedCurrency,
    bitcoinPrices,
  );

  return [
    {
      title: `${fees.hourFee}`,
      value: ` ${currencyOption?.currencySign} ${hourFeeCurrencyPrice.toLocaleString(
        locale,
        {
          maximumFractionDigits: 2,
        },
      )}`,
    },
    {
      title: `${fees.halfHourFee}`,
      value: ` ${currencyOption?.currencySign} ${halfHourFeeCurrencyPrice.toLocaleString(
        locale,
        {
          maximumFractionDigits: 2,
        },
      )}`,
    },
    {
      title: `${fees.fastestFee}`,
      value: ` ${currencyOption?.currencySign} ${fastestFeeCurrencyPrice.toLocaleString(
        locale,
        {
          maximumFractionDigits: 2,
        },
      )}`,
    },
  ];
};

export default formatFees;
