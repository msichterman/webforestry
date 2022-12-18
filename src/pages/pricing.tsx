import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import PageLayout from "@/layouts/PageLayout";
import PricingTable from "@/components/PricingTable";
import LogoCloud from "@/components/LogoCloud";

const Pricing: NextPage = () => {
  const faqs = [
    {
      id: 1,
      question: "How long will the website take to build?",
      answer:
        "This varies based on the size and complexity of the project, and is mostly dependent on number of pages and integrations. We launch incrementally, and should be able to ship your company's new website in 30-60 days.",
    },
    // {
    //   id: 2,
    //   question: "What happens if we need to cancel our website membership?",
    //   answer:
    //     "At any point if you are not 100% satisfied with your site, you are welcome to cancel your plan. We will temporarily take down your website, with the ability to reactivate it again at any time.",
    // },
    {
      id: 3,
      question: "Can you update and manage my company's existing website(s)?",
      answer:
        "Absolutely! We are here to help manage, conserve, and repair your websites so you don't have to. Prices may vary for this service.",
    },
    {
      id: 4,
      question: "Will a new website interfere with my custom email server?",
      answer:
        "Nope, we won't mess with your email or file server. If you don't have a professional email set up we can get you going with a Google Workspace account, just drop us a message!",
    },
    {
      id: 5,
      question: "What software do you use to build your websites?",
      answer:
        "We use cutting edge, enterprise grade technologies to make your business shine. This includes Next.js, React, tRPC, TypeScript, Prisma, Planetscale, NextAuth, Tailwind CSS and more. We also excel in many other technology stacks, and are happy to dive into your businesses current tech if needed.",
    },
    // {
    //   id: 6,
    //   question: "Can I buy out my companies website?",
    //   answer:
    //     "Businesses grow, teams change, but good websites are forever. You always have the option to buy out your website at any time, even if you started on a montly or yearly plan. Just message us! When you buy out the website, we will transfer the ownership of all assets to your team. Your business will then become responsible for all hosting, domain, and security infrastructure. Web Forestry will still be available for support billed at $75/hour.",
    // },
    // {
    //   id: 7,
    //   question: "How do we update the website after it's launched?",
    //   answer:
    //     "This is where our monthly and yearly memberships thrive. The Web Forestry Team is always here to make any updates or changes to your website, contact us with your ideas and updates! Most updates will be completed within a week.",
    // },
    // More questions...
  ];

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
        <PricingTable />

        {/* Logo cloud */}
        <LogoCloud />

        {/* FAQs */}
        <section aria-labelledby="faq-heading" className="bg-zinc-900">
          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="max-w-2xl lg:mx-auto lg:text-center">
              <h2
                id="faq-heading"
                className="text-3xl font-extrabold tracking-tight text-zinc-50 sm:text-4xl"
              >
                Frequently asked questions
              </h2>
              <p className="mt-4 text-zinc-400">
                If you&apos;re new to Web Forestry or looking to compare with
                other agencies, this guide will help you learn more about the
                platform, its features, and what you should expect as a paying
                customer.
              </p>
            </div>
            <div className="mt-20">
              <dl className="space-y-10 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10 lg:space-y-0">
                {faqs.map((faq) => (
                  <div key={faq.id}>
                    <dt className="font-semibold text-zinc-50">
                      {faq.question}
                    </dt>
                    <dd className="mt-3 text-zinc-400">{faq.answer}</dd>
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
