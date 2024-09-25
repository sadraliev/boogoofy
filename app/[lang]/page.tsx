import Link from "next/link";
import { Button } from "@/components/ui/button";

import { Mail, MessageSquare, Calendar, BarChart, Phone } from "lucide-react";
import { ServiceConnectionRequest } from "@/components/landing";
import { Metadata } from "next";
import LocaleSwitcher from "@/components/landing/locale-switcher";
import { getDictionary } from "@/dictionaries/get-dictionary";
import { Locale } from "@/i18n.config";

export async function generateMetadata({
  params,
}: {
  params: {
    lang: Locale;
  };
}): Promise<Metadata> {
  const dictionary = await getDictionary(params.lang);

  return {
    title: dictionary.Title,
    description: dictionary.Subtitle,
  };
}

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b bg-white shadow-sm">
        <Link className="flex items-center justify-center" href="/">
          <MessageSquare className="h-6 w-6 text-gray-600" />
          <span className="ml-2 text-2xl font-bold text-gray-800">
            {dictionary.Name}
          </span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6 ">
          <Link
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            href={`/${lang}#features`}
          >
            {dictionary.Footer.Links.Features}
          </Link>

          <Link
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            href={`/${lang}#how-it-works`}
          >
            {dictionary.Footer.Links.About}
          </Link>
          <Link
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            href={`/${lang}#dashboard`}
          >
            {dictionary.Footer.Links.Contact}
          </Link>
        </nav>
        <div className="px-4">
          <LocaleSwitcher />
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-6 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900">
                  {dictionary.Title}
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  {dictionary.Subtitle}
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/#dashboard">
                  <Button className="bg-gray-900 text-white hover:bg-gray-800">
                    {dictionary.Button}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-gray-900">
              {dictionary.Footer.Links.Features}
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 p-6 rounded-lg bg-white shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
                <Mail className="h-12 w-12 mb-2 text-gray-600" />
                <h3 className="text-xl font-bold text-gray-900">
                  {dictionary.KeyFeatures.Feature1.Title}
                </h3>
                <p className="text-sm text-gray-500 text-center">
                  {dictionary.KeyFeatures.Feature1.Description}
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-6 rounded-lg bg-white shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
                <MessageSquare className="h-12 w-12 mb-2 text-gray-600" />
                <h3 className="text-xl font-bold text-gray-900">
                  {dictionary.KeyFeatures.Feature2.Title}
                </h3>
                <p className="text-sm text-gray-500 text-center">
                  {dictionary.KeyFeatures.Feature2.Description}
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-6 rounded-lg bg-white shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
                <Calendar className="h-12 w-12 mb-2 text-gray-600" />
                <h3 className="text-xl font-bold text-gray-900">
                  {dictionary.KeyFeatures.Feature3.Title}
                </h3>
                <p className="text-sm text-gray-500 text-center">
                  {dictionary.KeyFeatures.Feature3.Description}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-gray-900">
              {dictionary.HowItWorksTitle}
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 p-6 rounded-lg bg-white shadow-md transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
                <div className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 mb-2">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {dictionary.HowItWorks.Step1.Title}
                </h3>
                <p className="text-sm text-gray-500 text-center">
                  {dictionary.HowItWorks.Step1.Description}
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-6 rounded-lg bg-white shadow-md transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
                <div className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 mb-2">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {" "}
                  {dictionary.HowItWorks.Step2.Title}
                </h3>
                <p className="text-sm text-gray-500 text-center">
                  {dictionary.HowItWorks.Step2.Description}
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-6 rounded-lg bg-white shadow-md transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
                <div className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 mb-2">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {" "}
                  {dictionary.HowItWorks.Step3.Title}
                </h3>
                <p className="text-sm text-gray-500 text-center">
                  {dictionary.HowItWorks.Step3.Description}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <BarChart className="h-16 w-16 text-gray-600 rounded-lg bg-white shadow-md transition-all duration-200 hover:shadow-lg hover:-translate-y-1" />
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                {dictionary.Dashboard.Title}
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {dictionary.Dashboard.Description}
              </p>
              <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-left mt-8">
                <li className="flex items-center space-x-2 rounded-lg p-3 bg-white shadow-md transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <span className="text-gray-700 ">
                    {dictionary.Dashboard.Details.DeliveryStatus}
                  </span>
                </li>
                <li className="flex items-center space-x-2 rounded-lg p-3 bg-white shadow-md transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <span className="text-gray-700">
                    {dictionary.Dashboard.Details.OpenRate}
                  </span>
                </li>
                <li className="flex items-center space-x-2 rounded-lg p-3 bg-white shadow-md transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <span className="text-gray-700">
                    {dictionary.Dashboard.Details.ClickThroughRate}
                  </span>
                </li>
                <li className="flex items-center space-x-2 rounded-lg p-3 bg-white shadow-md transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <span className="text-gray-700">
                    {dictionary.Dashboard.Details.CampaignPerformance}
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl mt-4 font-bold tracking-tighter sm:text-5xl text-gray-900">
                {dictionary.PrivateDashboard.Title}
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {dictionary.PrivateDashboard.Description}
              </p>
            </div>
            <ServiceConnectionRequest
              vocabulary={{
                title: dictionary.CTA.Title,
                description: dictionary.CTA.Description,
                button: dictionary.CTA.Button,
                placeholder: dictionary.CTA.Placeholder,
                toaster: {
                  title: dictionary.CTA.Toaster.title,
                  subtitle: dictionary.CTA.Toaster.subtitle,
                },
              }}
            />
          </div>
        </section>
      </main>
      <footer className="py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <div className="container flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">{dictionary.Footer.Copyright}</p>
          <div className="flex flex-col sm:flex-row items-center mt-4 sm:mt-0">
            <a
              href="mailto:example@email.com"
              className="flex items-center text-sm text-gray-600 hover:text-gray-900 mb-2 sm:mb-0 sm:mr-4"
            >
              <Mail className="w-4 h-4 mr-2" />
              info@lmnedate.com
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center text-sm text-gray-600 hover:text-gray-900"
            >
              <Phone className="w-4 h-4 mr-2" />
              +996553033300
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
