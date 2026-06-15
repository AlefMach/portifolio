import { createContext } from "react";

import { type Language, type TranslationDictionary } from "./translations";

export type I18nContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: TranslationDictionary;
};

export const I18nContext = createContext({} as I18nContextType);
