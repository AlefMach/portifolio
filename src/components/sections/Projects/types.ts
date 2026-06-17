import type { TranslationDictionary } from "../../../i18n/translations";

export type Project = TranslationDictionary["home"]["projectCards"][number];

export type ProjectCaseField = {
  label: string;
  text: string;
};
