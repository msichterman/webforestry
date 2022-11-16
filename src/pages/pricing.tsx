import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/future/image";
import React from "react";
import PageLayout from "@/layouts/PageLayout";
import PricingTable from "@/components/PricingTable";
import DinklageLogo from "../../public/img/dinklage-gray.png";
import BeefJurgyLogo from "../../public/img/beef-jurgy-gray.png";
import { faqs } from "@/lib/data/faqs";

const Pricing: NextPage = () => {
  return (
    <PageLayout isTightFooter>
      <Head>
        <title>Web Forestry – Pricing</title>
        <meta
          name="description"
          content="Pick a pricing plan that best suits your business"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Pricing section */}
        <section className="relative bg-emerald-600">
          {/* Overlapping background */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 hidden h-6 w-full bg-gray-50 lg:block"
          />

          <div className="relative mx-auto max-w-2xl px-4 pt-16 text-center sm:px-6 sm:pt-32 lg:max-w-7xl lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
              Pick a plan that best suits your business
            </h1>
            <p className="mt-4 text-xl text-emerald-100">
              Fast turnaround. No contracts or surprises. Cancel or pause
              anytime.
            </p>
          </div>

          <h2 className="sr-only">Plans</h2>

          <PricingTable isTight />
        </section>

        {/* Logo cloud */}
        <section className="mx-auto max-w-2xl py-12 px-4 sm:px-6 lg:py-32 lg:px-8">
          <div className="relative grid h-full w-full grid-cols-2 gap-8">
            <div className="relative col-span-1 flex h-16 justify-center md:h-24">
              <Image
                src={DinklageLogo}
                alt="Dinklage Feed Yards"
                className="object-contain"
                sizes="100vw"
                fill
              />
            </div>
            <div className="relative col-span-1 flex justify-center">
              <Image
                src={BeefJurgyLogo}
                alt="Beef Jurgy"
                className="object-contain"
                sizes="100vw"
                fill
              />
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section aria-labelledby="faq-heading" className="bg-gray-900">
          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="max-w-2xl lg:mx-auto lg:text-center">
              <h2
                id="faq-heading"
                className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
              >
                Frequently asked questions
              </h2>
              <p className="mt-4 text-gray-400">
                If you&apos;re new to Web Forestry or looking to compare with
                other agencies, this guide will help you learn more about the
                platform, it&apos;s features, and what you should expect as a
                paying customer.
              </p>
            </div>
            <div className="mt-20">
              <dl className="space-y-10 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10 lg:space-y-0">
                {faqs.map((faq) => (
                  <div key={faq.id}>
                    <dt className="font-semibold text-white">{faq.question}</dt>
                    <dd className="mt-3 text-gray-400">{faq.answer}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
};

export default Pricing;
