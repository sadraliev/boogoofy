import { Locale } from "@/i18n.config";
import "server-only";

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  kg: () => import("./kg.json").then((module) => module.default),
  en: () => import("./en.json").then((module) => module.default),
  ru: () => import("./ru.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.kg();
