import en from "./locales/en.json";
import pt from "./locales/pt.json";

export const translations = {
  en,
  pt,
} as const;

export type Language = keyof typeof translations;
export type TranslationDictionary = typeof pt;
