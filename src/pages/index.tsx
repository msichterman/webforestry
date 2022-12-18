import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/future/image";
import { StarIcon } from "@heroicons/react/20/solid";
import ExternalLink from "../components/utils/ExternalLink";
import PricingTable from "../components/PricingTable";
import DevIllustration from "../../public/img/DevIllustration.png";
import BeefJurgy from "../../public/img/BeefJurgy.jpeg";
import BeefJurgySvg from "../components/svgs/BeefJurgy";
import PageLayout from "../layouts/PageLayout";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import ResultBadge from "@/components/ResultBadge";
import clsx from "clsx";
import { GET_STARTED, TALK_SOON } from "@/utils/constants";
import LogoCloud from "@/components/LogoCloud";

const stats = [
  { label: "Founded", value: "2022" },
  { label: "Websites Shipped", value: "3" },
  { label: "Trees Planted", value: "60" },
  { label: "Websites in Progress", value: "1" },
];

const Home: NextPage = () => {
  const router = useRouter();

  const FormSchema = z.object({
    email: z.string().email(),
  });

  type FormSchemaType = z.infer<typeof FormSchema>;

  const getStartedForm = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
  });

  const onGetStartedSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    getStartedForm.clearErrors();
    const email = btoa(data.email);
    router.push(
      { pathname: "/contact", query: { email, flow: GET_STARTED } },
      "contact"
    );
  };

  const talkSoonForm = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
  });

  const onTalkSoonSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    talkSoonForm.clearErrors();
    const email = btoa(data.email);
    router.push(
      { pathname: "/contact", query: { email, flow: TALK_SOON } },
      "contact"
    );
  };

  return (
    <PageLayout>
      <Head>
        <title>Web Forestry – Home</title>
        <meta
          name="description"
          content="Website development for growing businesses"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Hero section */}
        <div className="z-0 overflow-hidden pt-8 sm:pt-12 lg:relative lg:py-24">
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div>
              <div className="mt-12">
                <div>
                  <span className="rounded border border-emerald-600 bg-emerald-50 px-2.5 py-1 text-tiny font-semibold uppercase tracking-wide text-emerald-700 dark:bg-emerald-800/60 dark:text-caramel-100">
                    Welcome to the jungle
                  </span>
                </div>
                <div className="mt-6">
                  <h1 className="text-3xl font-bold text-zinc-900  dark:text-caramel-100 sm:text-4xl lg:text-5xl lg:font-extrabold">
                    Website development for growing businesses
                  </h1>
                  <p className="mt-6 text-xl dark:text-caramel-200">
                    Creating, managing, planting, conserving, and repairing your
                    websites so you don&apos;t have to.
                  </p>
                </div>
                <form
                  onSubmit={getStartedForm.handleSubmit(onGetStartedSubmit)}
                  className="mt-12"
                >
                  <div className="sm:flex">
                    <div className="min-w-0 flex-1">
                      <label htmlFor="email" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        {...getStartedForm.register("email")}
                        className={clsx(
                          getStartedForm.formState.errors.email
                            ? "error-input"
                            : "input",
                          "h-full"
                        )}
                        placeholder="Email address"
                        disabled={getStartedForm.formState.isSubmitting}
                      />
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-3">
                      <button
                        type="submit"
                        className="block w-full rounded-md border border-transparent bg-emerald-600 px-5 py-3 text-base font-medium text-zinc-50 shadow hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 sm:px-10"
                        disabled={getStartedForm.formState.isSubmitting}
                      >
                        Let&apos;s get started
                      </button>
                    </div>
                  </div>
                  <ResultBadge
                    isError={Boolean(getStartedForm.formState.errors?.email)}
                    errorMessage="Please enter a valid email."
                    className="mt-2"
                  />
                </form>
                <div className="mt-6">
                  <div className="inline-flex items-center divide-x divide-zinc-300">
                    <div className="flex flex-shrink-0 pr-5">
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
                    <div className="min-w-0 flex-1 py-1 pl-5 text-sm dark:text-caramel-200 sm:py-3">
                      <span className="font-medium text-zinc-900  dark:text-caramel-100">
                        Rated 5 stars
                      </span>{" "}
                      by our clients
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden sm:mx-auto sm:max-w-3xl sm:px-6 lg:block">
            <div className="pt-12 sm:relative sm:mt-12 sm:pt-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <div>
                <div className="absolute inset-y-0 left-1/2 w-screen rounded-l-3xl bg-zinc-50 dark:bg-zinc-900/50 lg:left-80 lg:right-0 lg:w-full" />
                <svg
                  className="absolute top-8 right-1/2 -mr-3 lg:left-0 lg:m-0"
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
                        className="text-zinc-200"
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
              <div className="relative -mr-40 hidden pl-4 sm:mx-auto sm:max-w-3xl sm:px-0 lg:block lg:h-[560px] lg:max-w-none">
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
        <div className="relative my-20">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
            <div className="relative sm:py-16 lg:py-0">
              <div
                aria-hidden="true"
                className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
              >
                <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-zinc-50 dark:bg-zinc-900/50 lg:right-72" />
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
                        className="text-zinc-200"
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
              <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
                {/* Testimonial card*/}
                <div className="relative overflow-hidden rounded-3xl pt-64">
                  <Image
                    className="absolute inset-0 h-full w-full object-cover grayscale"
                    src={BeefJurgy}
                    alt=""
                  />
                  <div className="absolute inset-0 bg-emerald-600 mix-blend-multiply" />
                  <div className="bg-gradient-to-t absolute inset-0 from-emerald-700 via-emerald-700 opacity-50" />
                  <div className="relative bg-zinc-900/50 px-8 py-5 backdrop-blur-sm">
                    <div className="w-36">
                      <BeefJurgySvg className="h-full w-full drop-shadow-2xl" />
                    </div>
                    <blockquote className="mt-8">
                      <div className="relative text-lg font-medium text-zinc-50 md:flex-grow">
                        <svg
                          className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-emerald-700"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                        >
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                        <p className="relative">
                          Web Forestry&apos;s attention to detail and ability to
                          turn our ideas into reality makes them a joy to work
                          with. If you want to grow your business, then you need
                          to call Web Forestry.
                        </p>
                      </div>

                      <footer className="mt-4">
                        <p className="text-base font-semibold text-emerald-200">
                          Cameron Jurgens,{" "}
                          <span className="text-xs font-normal">
                            Founder of{" "}
                            <ExternalLink
                              href="https://beefjurgy.com/"
                              className="font-bold"
                            >
                              Beef Jurgy
                            </ExternalLink>{" "}
                            & Center for the Philadephia Eagles
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
                <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900  dark:text-caramel-100 sm:text-4xl">
                  Grow your business and make the world a better place
                </h2>
                <div className="mt-6 space-y-6 text-base leading-7 dark:text-caramel-200">
                  At Web Forestry, we believe that the best way for you to grow
                  your business is to build an online presence without:
                  <ul className="my-4 list-inside list-disc text-sm">
                    <li>Sacrificing your producivity, or</li>
                    <li>
                      Distracting you from adding value to the lives of your
                      customers.
                    </li>
                  </ul>
                  That&apos;s why we take the reigns, and remain by your side as
                  long as you want us on your team.
                </div>
              </div>

              {/* Stats section */}
              <div className="mt-10">
                <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="border-t-2 border-zinc-500/10 pt-6 dark:border-caramel-200/10"
                    >
                      <dt className="text-base font-medium dark:text-caramel-50">
                        {stat.label}
                      </dt>
                      <dd className="text-3xl font-extrabold tracking-tight text-zinc-900  dark:text-caramel-100">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-10">
                  <Link href="trees">
                    <span className="text-base font-medium text-emerald-600 dark:text-cyan-400">
                      Together we will actually plant trees? See how
                      &nbsp;&rarr;
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <LogoCloud />

        <PricingTable firstHeadingComponent="h2" secondHeadingComponent="h3" />

        {/* CTA section */}
        <div className="relative mt-24 sm:mt-32 sm:py-16">
          <div aria-hidden="true" className="hidden sm:block">
            <div className="absolute inset-y-0 left-0 w-1/2 rounded-r-3xl bg-zinc-50 dark:bg-zinc-900/50" />
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
                    className="text-zinc-200"
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
            <div className="relative overflow-hidden rounded-3xl bg-emerald-600 px-6 py-10 shadow-xl sm:px-12 sm:py-20">
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
                    className="text-emerald-700 text-opacity-40"
                    fill="currentColor"
                    d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                  />
                </svg>
              </div>
              <div className="relative">
                <div className="sm:text-center">
                  <h2 className="text-3xl font-extrabold tracking-tight text-zinc-50 sm:text-4xl">
                    Not convinced to start building with us today?
                  </h2>
                  <p className="mx-auto mt-6 max-w-2xl text-lg text-emerald-100">
                    Drop us your info and we&apos;ll folow up with additional
                    information.
                  </p>
                </div>
                <form
                  onSubmit={talkSoonForm.handleSubmit(onTalkSoonSubmit)}
                  className="mt-12 sm:mx-auto sm:max-w-lg"
                >
                  <div className="sm:flex">
                    <div className="min-w-0 flex-1">
                      <label htmlFor="talk-soon-email" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="talk-soon-email"
                        type="email"
                        autoComplete="email"
                        {...talkSoonForm.register("email")}
                        className={clsx(
                          talkSoonForm.formState.errors.email
                            ? "error-input"
                            : "input",
                          "h-full"
                        )}
                        placeholder="Email address"
                        disabled={talkSoonForm.formState.isSubmitting}
                      />
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-3">
                      <button
                        type="submit"
                        className="block w-full rounded-md border border-transparent bg-zinc-900 px-5 py-3 text-base font-medium text-zinc-50 shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-zinc-50 focus:ring-offset-2 focus:ring-offset-emerald-600 sm:px-10"
                      >
                        Let&apos;s talk soon
                      </button>
                    </div>
                  </div>
                  <ResultBadge
                    isError={Boolean(talkSoonForm.formState.errors?.email)}
                    errorMessage="Please enter a valid email."
                    className="mt-2"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  );
};

export default Home;
