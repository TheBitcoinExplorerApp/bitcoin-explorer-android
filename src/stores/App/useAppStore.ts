/* eslint-disable import/no-extraneous-dependencies */
import { create } from "zustand";
import { I18n } from "i18n-js";
import translations from "translations/translations";
import { getLocales } from "expo-localization";
import { useAppStoreStateTypes } from "./useAppStore.types";

const i18n = new I18n(translations);
i18n.defaultLocale = "en";
i18n.locale = getLocales()[0].languageCode;
i18n.enableFallback = true;

const useAppStore = create<useAppStoreStateTypes>()((set) => ({
  fees: null,
  blocks: null,
  isLoading: true,
  isRefreshing: false,
  transactions: null,
  localization: i18n,

  setFees: (fees) => set({ fees }),
  setBlocks: (blocks) => set({ blocks }),
  setIsLoading: (isLoading) => set({ isLoading }),
  setIsRefreshing: (isRefreshing) => set({ isRefreshing }),
  setTransactions: (transactions) => set({ transactions }),
}));

export default useAppStore;
