import { CurrencyOptions } from "src/api/types";
import { LanguageOptions } from "src/stores/App/useAppStore.types";

type DropdownLanguageOptions = {
  label: string;
  value: LanguageOptions;
};

type DropdownCurrencyOptions = {
  label: string;
  value: CurrencyOptions;
};

type CountryFlagsType = {
  flag: string;
  currencySign: string;
  currency: CurrencyOptions;
};

export const dropDownLanguageOptions: DropdownLanguageOptions[] = [
  { label: "🇺🇸 English", value: "en" },
  { label: "🇧🇷 Português", value: "pt" },
];

export const dropdownCurrencyOptions: DropdownCurrencyOptions[] = [
  { label: "🇺🇸 USD", value: "USD" },
  { label: "🇧🇷 BRL", value: "BRL" },
  { label: "🇪🇺 EUR", value: "EUR" },
  { label: "🇯🇵 JPY", value: "JPY" },
];

export const currencyProps: CountryFlagsType[] = [
  { flag: "🇺🇸", currencySign: "$", currency: "USD" },
  { flag: "🇧🇷", currencySign: "R$", currency: "BRL" },
  { flag: "🇪🇺", currencySign: "€", currency: "EUR" },
  { flag: "🇯🇵", currencySign: "¥", currency: "JPY" },
];
