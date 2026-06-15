import { useEffect, useMemo, useState } from "react";

import { I18nContext } from "./i18nContext";
import { type Language, translations } from "./translations";

const STORAGE_KEY = "portfolio-language";

const getInitialLanguage = (): Language => {
  if (typeof window === "undefined") {
    return "pt";
  }

  const storedLanguage = window.localStorage.getItem(STORAGE_KEY);

  if (storedLanguage === "pt" || storedLanguage === "en") {
    return storedLanguage;
  }

  return window.navigator.language.toLowerCase().startsWith("en") ? "en" : "pt";
};

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
  };

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
