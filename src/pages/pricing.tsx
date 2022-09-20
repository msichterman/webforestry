import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/future/image";
import React from "react";
import Page from "../layouts/Page";
import PricingTable from "../components/PricingTable";

const About: NextPage = () => {
  const faqs = [
    {
      id: 1,
      question: "What's the best thing about Switzerland?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    // More questions...
  ];

  return (
    <Page isTightFooter>
      <Head>
        <title>Web Forestry – Pricing</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Pricing section */}
        <section className="relative bg-emerald-600">
          {/* Overlapping background */}
          <div
            aria-hidden="true"
            className="hidden absolute bg-gray-50 w-full h-6 bottom-0 lg:block"
          />

          <div className="relative max-w-2xl mx-auto pt-16 px-4 text-center sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8">
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
        <section className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5 relative w-full h-full">
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 h-12 relative">
              <Image
                src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                alt="Tuple"
                className="object-contain"
                sizes="100vw"
                fill
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 h-12 relative">
              <Image
                src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
                alt="Mirage"
                className="object-contain"
                sizes="100vw"
                fill
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 h-12 relative">
              <Image
                src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                alt="StaticKit"
                className="object-contain"
                sizes="100vw"
                fill
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1 h-12 relative">
              <Image
                src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                alt="Transistor"
                className="object-contain"
                sizes="100vw"
                fill
              />
            </div>
            <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1 relative">
              <Image
                src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                alt="Workcation"
                className="object-contain"
                sizes="100vw"
                fill
              />
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section aria-labelledby="faq-heading" className="bg-gray-900">
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="max-w-2xl lg:mx-auto lg:text-center">
              <h2
                id="faq-heading"
                className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
              >
                Frequently asked questions
              </h2>
              <p className="mt-4 text-gray-400">
                Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
                Malesuada adipiscing sagittis vel nulla nec. Urna, sed a lectus
                elementum blandit et.
              </p>
            </div>
            <div className="mt-20">
              <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
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
    </Page>
  );
};

export default About;