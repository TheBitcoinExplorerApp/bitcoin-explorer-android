import { I18n } from "i18n-js";
import { createContext } from "react";
import translations from "translations/translations";
import { getLocales } from "expo-localization";

const i18n = new I18n(translations);
i18n.locale = getLocales()[0].languageCode;
i18n.enableFallback = true;
i18n.defaultLocale = "en";

const I18nContext = createContext(i18n);

const LocaleProvider = ({ children }: { children: React.ReactNode }) => {
  return <I18nContext.Provider value={i18n}>{children}</I18nContext.Provider>;
};

export { i18n, I18nContext, LocaleProvider };
