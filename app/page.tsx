import Link from "next/link";
import { Button } from "@/components/ui/button";

import { Mail, MessageSquare, Calendar, BarChart } from "lucide-react";
import { ServiceConnectionRequest } from "@/components/landing";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b bg-white shadow-sm">
        <Link className="flex items-center justify-center" href="/">
          <MessageSquare className="h-6 w-6 text-gray-600" />
          <span className="ml-2 text-2xl font-bold text-gray-800">
            LMNEDATE
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            href="/#features"
          >
            Features
          </Link>

          <Link
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            href="/#how-it-works"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            href="/#dashboard"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-6 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900">
                  Streamline Your Communications with LMNEDATE
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Effortlessly manage and send notifications to your clients and
                  team across multiple platforms.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/#dashboard">
                  <Button className="bg-gray-900 text-white hover:bg-gray-800">
                    Get Started
                  </Button>
                </Link>

                <Button
                  variant="outline"
                  className="text-gray-900 border-gray-200 hover:bg-gray-200"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-gray-900">
              Key Features
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 p-6 rounded-lg bg-white shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
                <Mail className="h-12 w-12 mb-2 text-gray-600" />
                <h3 className="text-xl font-bold text-gray-900">
                  Multi-Channel Notifications
                </h3>
                <p className="text-sm text-gray-500 text-center">
                  Send messages via SMS, Telegram, WhatsApp, Viber, and Email.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-6 rounded-lg bg-white shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
                <MessageSquare className="h-12 w-12 mb-2 text-gray-600" />
                <h3 className="text-xl font-bold text-gray-900">
                  Customizable Templates
                </h3>
                <p className="text-sm text-gray-500 text-center">
                  Create and save message templates for quick and consistent
                  communication.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-6 rounded-lg bg-white shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
                <Calendar className="h-12 w-12 mb-2 text-gray-600" />
                <h3 className="text-xl font-bold text-gray-900">
                  Scheduled Delivery
                </h3>
                <p className="text-sm text-gray-500 text-center">
                  Set specific dates and times for your messages to be sent
                  automatically.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-gray-900">
              How It Works
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 p-6 rounded-lg bg-white shadow-md transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
                <div className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 mb-2">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Create Template
                </h3>
                <p className="text-sm text-gray-500 text-center">
                  Design your message template with personalized content.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-6 rounded-lg bg-white shadow-md transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
                <div className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 mb-2">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900">Schedule</h3>
                <p className="text-sm text-gray-500 text-center">
                  Choose the date and time for your message to be sent.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-6 rounded-lg bg-white shadow-md transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
                <div className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 mb-2">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900">Notify</h3>
                <p className="text-sm text-gray-500 text-center">
                  Your message is automatically sent to recipients via their
                  preferred channel.
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
                Comprehensive Dashboard
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get real-time insights into your communication campaigns with
                our powerful dashboard.
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
                    Delivery Status Reports
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
                  <span className="text-gray-700">Open Rate Analytics</span>
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
                  <span className="text-gray-700">Click-through Rates</span>
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
                  <span className="text-gray-700">Campaign Performance</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl mt-4 font-bold tracking-tighter sm:text-5xl text-gray-900">
                Private Dashboard
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Access your personalized dashboard to manage all your
                communication needs and view detailed reports.
              </p>
            </div>
            <ServiceConnectionRequest />
          </div>
        </section>
      </main>
      <footer className="py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <div className="container flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">
            © 2024 LMNEDATE. All rights reserved.
          </p>
          <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
            <Link
              className="text-xs text-gray-500 hover:underline underline-offset-4"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs text-gray-500 hover:underline underline-offset-4"
              href="#"
            >
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
