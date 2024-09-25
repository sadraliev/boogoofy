export const i18n = {
  defaultLocale: "kg",
  locales: ["en", "ru", "kg"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
