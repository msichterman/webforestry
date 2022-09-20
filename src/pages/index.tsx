import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/future/image";
import { trpc } from "../utils/trpc";
import { StarIcon } from "@heroicons/react/20/solid";
import ExternalLink from "../components/utils/ExternalLink";
import PricingTable from "../components/PricingTable";
import DevIllustration from "../../public/img/DevIllustration.png";
import Ryan from "../../public/img/Ryan.png";
import Amex from "../components/svgs/Amex";
import Page from "../layouts/Page";

const stats = [
  { label: "Founded", value: "2022" },
  { label: "Websites Shipped", value: "3" },
  { label: "Trees Planted", value: "60" },
  { label: "Websites in Progress", value: "1" },
];

const Home: NextPage = () => (
  /* const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);*/
  <Page>
    <Head>
      <title>Create T3 App</title>
      <meta name="description" content="Generated by create-t3-app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      {/* Hero section */}
      <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48 z-0">
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
          <div>
            <div className="mt-12">
              <div>
                <span className="rounded bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-500 tracking-wide uppercase">
                  Welcome to the jungle
                </span>
              </div>
              <div className="mt-6 sm:max-w-xl">
                <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                  Website development for growing businesses
                </h1>
                <p className="mt-6 text-xl text-gray-500">
                  Creating, managing, planting, conserving, and repairing your
                  websites so you don&apos;t have to.
                </p>
              </div>
              <form action="#" className="mt-12 sm:max-w-lg sm:w-full sm:flex">
                <div className="min-w-0 flex-1">
                  <label htmlFor="hero-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="hero-email"
                    type="email"
                    className="block w-full border-2 border-gray-300 rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-smb focus:outline-none focus:border-emerald-500 focus:ring-emerald-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-3">
                  <button
                    type="submit"
                    className="block w-full rounded-md border border-transparent px-5 py-3 bg-emerald-500 text-base font-medium text-white shadow hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 sm:px-10"
                  >
                    Let&apos;s get started
                  </button>
                </div>
              </form>
              <div className="mt-6">
                <div className="inline-flex items-center divide-x divide-gray-300">
                  <div className="flex-shrink-0 flex pr-5">
                    <StarIcon
                      className="h-5 w-5 text-yellow-400"
                      aria-hidden="true"
                    />
                    <StarIcon
                      className="h-5 w-5 text-yellow-400"
                      aria-hidden="true"
                    />
                    <StarIcon
                      className="h-5 w-5 text-yellow-400"
                      aria-hidden="true"
                    />
                    <StarIcon
                      className="h-5 w-5 text-yellow-400"
                      aria-hidden="true"
                    />
                    <StarIcon
                      className="h-5 w-5 text-yellow-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="min-w-0 flex-1 pl-5 py-1 text-sm text-gray-500 sm:py-3">
                    <span className="font-medium text-gray-900">
                      Rated 5 stars
                    </span>{" "}
                    by our clients
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
          <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div className="hidden sm:block">
              <div className="absolute inset-y-0 left-1/2 w-screen bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full" />
              <svg
                className="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="837c3e70-6c3a-44e6-8854-cc48c737b659"
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
                  height={392}
                  fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
                />
              </svg>
            </div>
            <div className="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full">
              <Image
                className="w-full rounded-md lg:h-full lg:w-auto lg:max-w-none"
                src={DevIllustration}
                alt="Illuistration of developers creating a website."
              />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial/stats section */}
      <div className="relative mt-20">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div className="relative sm:py-16 lg:py-0">
            <div
              aria-hidden="true"
              className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
            >
              <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72" />
              <svg
                className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
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
                  height={392}
                  fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
                />
              </svg>
            </div>
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
              {/* Testimonial card*/}
              <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                <Image
                  className="absolute inset-0 h-full w-full object-cover grayscale"
                  src={Ryan}
                  alt=""
                />
                <div className="absolute inset-0 bg-emerald-500 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-600 via-emerald-600 opacity-70" />
                <div className="relative px-8">
                  <div className="h-12">
                    <Amex />
                  </div>
                  <blockquote className="mt-8">
                    <div className="relative text-lg font-medium text-white md:flex-grow">
                      <svg
                        className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-emerald-400"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="relative">
                        Web Forestry&apos;s attention to detail and ability to
                        translate our ideas into implementations makes them a
                        joy to work with. If you are looking to grow your
                        business, then you need to call Web Forestry.
                      </p>
                    </div>

                    <footer className="mt-4">
                      <p className="text-base font-semibold text-emerald-200">
                        Ryan Le,{" "}
                        <span className="font-normal">
                          Software Engineer at American Express
                        </span>
                      </p>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
                Grow your business and make the world a better place
              </h2>
              <div className="mt-6 text-gray-500 space-y-6">
                <div className="text-base leading-7">
                  At Web Forestry, we believe that the best way for you to grow
                  your business is to build an online presence without:
                  <ul className="list-disc list-inside my-2 text-sm">
                    <li>Sacrificing your producivity, or</li>
                    <li>
                      Distracting you from adding value to the lives of your
                      customers.
                    </li>
                  </ul>
                  That&apos;s why we take the reigns, and remain by your side as
                  long as you want us on your team. We&apos;ll design, develop,
                  manage, and update you website – a{" "}
                  <span className="italic">software-team-as-a-service</span> if
                  you will.
                </div>
                <p className="text-base leading-7">
                  So what is the deal with all these dang trees? Well,
                  we&apos;re committed to not only building you beautiful
                  websites that will grow with your business but also to making
                  the world a better place. Our clients span all types of
                  domains, serving customers and making impacts on the world in
                  their own ways.
                </p>
                <p className="text-base leading-7">
                  We deliver value to our clients digitally to help them change
                  the world, but we also want to do our part to directly help
                  the physical world. To do so, a portion of our revenue goes
                  towards planting trees with the team over at{" "}
                  <ExternalLink
                    to="https://teamtrees.org/"
                    className="text-emerald-500 hover:text-emerald-700"
                  >
                    #teamtrees
                  </ExternalLink>
                  ! Contributions made to Team Trees are sent directly to the
                  Arbor Day Foundation to fund tree-planting worldwide.
                </p>
              </div>
            </div>

            {/* Stats section */}
            <div className="mt-10">
              <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="border-t-2 border-gray-100 pt-6"
                  >
                    <dt className="text-base font-medium text-gray-500">
                      {stat.label}
                    </dt>
                    <dd className="text-3xl font-extrabold tracking-tight text-gray-900">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-10">
                <Link href="trees">
                  <a className="text-base font-medium text-emerald-500">
                    Together we will actually plant trees? See how &nbsp;&rarr;
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PricingTable />

      {/* CTA section */}
      <div className="relative mt-24 sm:mt-32 sm:py-16">
        <div aria-hidden="true" className="hidden sm:block">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-3xl" />
          <svg
            className="absolute top-8 left-1/2 -ml-3"
            width={404}
            height={392}
            fill="none"
            viewBox="0 0 404 392"
          >
            <defs>
              <pattern
                id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
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
              height={392}
              fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
            />
          </svg>
        </div>
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="relative rounded-2xl px-6 py-10 bg-emerald-500 overflow-hidden shadow-xl sm:px-12 sm:py-20">
            <div
              aria-hidden="true"
              className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
            >
              <svg
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 1463 360"
              >
                <path
                  className="text-emerald-400 text-opacity-40"
                  fill="currentColor"
                  d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                />
                <path
                  className="text-emerald-600 text-opacity-40"
                  fill="currentColor"
                  d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                />
              </svg>
            </div>
            <div className="relative">
              <div className="sm:text-center">
                <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                  Not convinced to start building with us today?
                </h2>
                <p className="mt-6 mx-auto max-w-2xl text-lg text-emerald-100">
                  Drop us your email and we&apos;ll folow up with additional
                  information.
                </p>
              </div>
              <form action="#" className="mt-12 sm:mx-auto sm:max-w-lg sm:flex">
                <div className="min-w-0 flex-1">
                  <label htmlFor="cta-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="cta-email"
                    type="email"
                    className="block w-full border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-3">
                  <button
                    type="submit"
                    className="block w-full rounded-md border border-transparent px-5 py-3 bg-gray-900 text-base font-medium text-white shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-500 sm:px-10"
                  >
                    Let&apos;s talk soon
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  </Page>
);

export default Home;
