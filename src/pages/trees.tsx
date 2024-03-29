import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import PageLayout from "../layouts/PageLayout";
import { CameraIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import ExternalLink from "@/components/utils/ExternalLink";

const Trees: NextPage = () => {
  return (
    <PageLayout isTightFooter>
      <Head>
        <title>Web Forestry – Trees</title>
        <meta
          name="description"
          content="Web Forestry has teamed up with Team Trees"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="overflow-hidden">
          <div className="relative mx-auto max-w-7xl py-24 px-4 sm:px-6 lg:px-8">
            <div className="absolute top-0 bottom-0 left-3/4 hidden w-screen bg-neutral-100 dark:bg-zinc-900 lg:block" />
            <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
              <div>
                <div>
                  <span className="rounded border border-emerald-600 bg-emerald-50 px-2.5 py-1 text-tiny font-semibold uppercase tracking-wide text-emerald-700 dark:bg-emerald-800/60 dark:text-caramel-100">
                    Let&apos;s grow together
                  </span>
                </div>
                <h1 className="mt-4 text-3xl font-extrabold leading-8 tracking-tight text-zinc-900  dark:text-caramel-100 sm:text-4xl">
                  Web Forestry has teamed up with Team Trees
                </h1>
              </div>
            </div>
            <div className="mt-12 lg:grid lg:grid-cols-2 lg:gap-10">
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
                        className="text-zinc-200"
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
                <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
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
                    <figcaption className="mt-3 flex text-sm ">
                      <CameraIcon
                        className="h-5 w-5 flex-none text-zinc-400"
                        aria-hidden="true"
                      />
                      <span className="ml-2">Photograph by Luca Bravo</span>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div className="prose-zinc prose dark:prose-invert">
                <div className="mx-auto max-w-prose text-base lg:max-w-none">
                  <p className="text-lg ">
                    So what is the deal with all these dang trees? Well,
                    we&apos;re committed to not only building you beautiful
                    websites that will grow with your business but also to
                    making the world a better place. Our clients span all types
                    of domains, serving customers and making impacts on the
                    world in their own ways.
                  </p>
                  <p className="text-lg ">
                    We deliver value to our clients digitally to help them
                    change the world, but we also want to do our part to
                    directly help the physical world. To do so, a portion of our
                    revenue goes towards planting trees with the team over at{" "}
                    <ExternalLink
                      href="https://teamtrees.org/"
                      className="text-emerald-600 hover:text-emerald-700"
                    >
                      #teamtrees
                    </ExternalLink>
                    ! Contributions made to Team Trees are sent directly to the
                    Arbor Day Foundation to fund tree-planting worldwide.
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

export default Trees;
