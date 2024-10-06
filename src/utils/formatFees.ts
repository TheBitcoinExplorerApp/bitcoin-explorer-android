import { CurrencyOptions } from "src/api/types";
import { FeesType } from "src/components/PrioritiesTax/types";
import { SmallBox } from "src/components/SmallBoxInfo/SmallBoxInfo";
import { useAppStoreStateTypes } from "src/stores/App/useAppStore.types";
import { currencyProps } from "./dropDownOptions";

const formatFees = (
  fees: FeesType,
  selectedCurrency: CurrencyOptions,
  bitcoinPrices: useAppStoreStateTypes["bitcoinPrice"],
  locale: string,
): SmallBox[] => {
  const mediumTransactionSize = 140;
  const { mempool, blockchainInfo } = bitcoinPrices;

  const currencyOption = currencyProps.find(
    (currencyProp) => currencyProp.currency === selectedCurrency,
  );
  const price =
    (mempool && mempool[selectedCurrency]) ||
    (blockchainInfo && blockchainInfo[selectedCurrency].buy);

  const hourFeeCurrencyPrice =
    (price / 100000000) * (fees.hourFee * mediumTransactionSize);
  const halfHourFeeCurrencyPrice =
    (price / 100000000) * (fees.halfHourFee * mediumTransactionSize);
  const fastestFeeCurrencyPrice =
    (price / 100000000) * (fees.fastestFee * mediumTransactionSize);

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
