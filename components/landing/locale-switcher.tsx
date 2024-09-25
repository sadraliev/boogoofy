"use client";

import { usePathname, useRouter } from "next/navigation";
import { i18n, Locale } from "@/i18n.config";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

export default function LocaleSwitcher() {
  const pathname = (usePathname().split("/")[1] ?? "kg") as Locale;

  const [currentLanguage] = useState<Locale>(pathname);
  const { replace } = useRouter();

  const changeHandler = (lang: string) => {
    replace("/" + lang);
  };

  return (
    <Tabs value={currentLanguage} onValueChange={changeHandler}>
      <TabsList>
        {i18n.locales.map((lang) => (
          <TabsTrigger
            className="data-[state=active]:bg-white"
            key={lang}
            value={lang}
          >
            {lang}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
