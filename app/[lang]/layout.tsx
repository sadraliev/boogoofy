import { Montserrat } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { i18n, Locale } from "@/i18n.config";
import "@/app/globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function Root({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <body className={`${montserrat.className}} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
