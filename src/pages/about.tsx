import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import PageLayout from "../layouts/PageLayout";
import { CameraIcon } from "@heroicons/react/20/solid";
import Image from "next/future/image";

const About: NextPage = () => {
  return (
    <PageLayout>
      <Head>
        <title>Web Forestry – About</title>
        <meta name="description" content="Learn more about Web Forestry" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="overflow-hidden">
          <div className="relative mx-auto max-w-7xl py-24 px-4 sm:px-6 lg:px-8">
            <div className="absolute top-0 bottom-0 left-3/4 hidden w-screen bg-gray-50 lg:block" />
            <div className="mx-auto text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-3">
              <div>
                <div>
                  <span className="rounded bg-emerald-50 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-500">
                    Our origin story
                  </span>
                </div>
                <h2 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                  Web Forestry lets you focus on growing your business
                </h2>
              </div>
            </div>
            <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-6">
              <div className="relative lg:col-start-2 lg:row-start-1">
                <svg
                  className="absolute top-0 right-0 -mt-20 -mr-20 hidden lg:block"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
                  />
                </svg>
                <div className="relative mx-auto text-base lg:max-w-none">
                  <figure>
                    <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                      <Image
                        className="rounded-lg object-cover object-center shadow-lg"
                        src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-1.2.1&auto=format&fit=crop&crop=focalpoint&fp-x=.735&fp-y=.55&w=1184&h=1376&q=80"
                        alt="Whitney leaning against a railing on a downtown street"
                        width={1184}
                        height={1376}
                      />
                    </div>
                    <figcaption className="mt-3 flex text-sm text-gray-500">
                      <CameraIcon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="ml-2">Photograph by Luca Bravo</span>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div className="mt-8 lg:mt-0">
                <div className="mx-auto text-base lg:max-w-none">
                  <p className="text-lg text-gray-500">
                    In the summer of 2020, Dinklage Feed Yards was in dire need
                    of a website developer when the Wordpress website powering
                    their business went down suddenly. Their existing website
                    provider was unable to assist them, and the company was
                    stuck.
                  </p>
                </div>
                <div className="mx-auto mt-5 text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
                  <p>
                    After debugging through the site, the problem was quickly
                    resolved and Dinklage Feed Yards was back in business. With
                    a quick look at the functioning site, it was clear that
                    there was other low hanging fruit that would improve the
                    website – not only for Dinklage Feed Yards customers but
                    also for employees at Dinklage managing the site.
                  </p>
                  <br />
                  <p>
                    Fast forward to the spring of 2022. Dinklage continued to
                    request one-off website maintenance over the years, but this
                    time they needed more than maintenance. Their site was down
                    completely, and they were
                    <i> having trouble communicating</i> with the developer that
                    built the site. After finally hearing back from the
                    developer, a website hosting misunderstanding resulted in
                    Dinklage Feed Yards back at square zero with their website.
                  </p>
                  <br />
                  <p>That&apos;s where we came in.</p>
                  <br />
                  <p>
                    Within 30 days, we completely rebuilt the Dinklage Feed
                    Yards website from the ground up, using cutting-edge
                    technologies that are capable of growing with Dinklage.
                    Within 60 days, the new website boasted feature parity of
                    the original website, and also added a new web-based job
                    application form allowing Dinklage to accept applications
                    for their job postings online. We also enabled Dinklage with
                    custom content management features so that they can edit
                    their website content, manage job postings, maintain feed
                    yard contacts, and more.
                  </p>
                  <br />
                  <p>
                    Through working with Dinklage Feed Yards, our eyes were
                    opened to this one point:{" "}
                    <strong>
                      Your business deserves a website and developers that grow
                      with you.
                    </strong>
                  </p>
                  <br />
                  <p>
                    Here at Web Forestry, we are committed to helping businesses
                    like Dinklage Feed Yards – so that you can focus on your
                    business and know we&apos;ll never leave you hanging.
                    We&apos;ll take the reigns of your website, and remain by
                    your side as long as you want us on your team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  );
};

export default About;
