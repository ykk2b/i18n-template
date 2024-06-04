import "server-only";
import type { Locale } from "./i18n-config";

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  ge: () => import("./dictionaries/ge.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.en();
