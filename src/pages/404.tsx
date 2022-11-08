import { REPORT_ERROR } from "@/utils/constants";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import PageLayout from "../layouts/PageLayout";

const Error: NextPage = () => {
  const router = useRouter();
  return (
    <PageLayout>
      <Head>
        <title>Web Forestry – Error</title>
        <meta name="description" content="An error occured" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="overflow-hidden">
          <div className="relative mx-auto max-w-7xl py-24 px-4 sm:px-6 lg:px-8">
            <div className="min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
              <div className="mx-auto max-w-max">
                <main className="sm:flex">
                  <p className="text-4xl font-bold tracking-tight text-emerald-600 sm:text-5xl">
                    404
                  </p>
                  <div className="sm:ml-6">
                    <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Page not found
                      </h1>
                      <p className="mt-1 text-base text-gray-500">
                        Please check the URL in the address bar and try again.
                      </p>
                    </div>
                    <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                      <Link href="/">
                        <span className="inline-flex items-center rounded-md border border-transparent bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
                          Go back home
                        </span>
                      </Link>
                      <button
                        onClick={() =>
                          router.push(
                            {
                              pathname: "/contact",
                              query: { flow: REPORT_ERROR },
                            },
                            "contact"
                          )
                        }
                        className="inline-flex items-center rounded-md border border-transparent bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700 hover:bg-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                      >
                        Contact support
                      </button>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  );
};

export default Error;
