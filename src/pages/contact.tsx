import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import PageLayout from "../layouts/PageLayout";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ExternalLink from "../components/utils/ExternalLink";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { pickBy } from "../lib/utils/objectUtils";
import { trpc } from "@/lib/utils/trpc";
import ResultBadge from "@/components/ResultBadge";
import { useRouter } from "next/router";
import { GET_STARTED, REPORT_ERROR, TALK_SOON } from "@/lib/utils/constants";

const Contact: NextPage = () => {
  const FormSchema = z.object({
    firstName: z.string().min(2).max(32),
    lastName: z.string().min(2).max(32),
    email: z.string().email(),
    phone: z.string().min(10).max(20).optional().or(z.literal("")),
    subject: z.string().min(2).max(120),
    message: z.string().min(2).max(500),
  });

  type FormSchemaType = z.infer<typeof FormSchema>;

  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
  });

  const contact = trpc.message.contactForm.useMutation({
    onSuccess() {
      reset();
    },
  });

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    clearErrors();
    const sanitizedData = pickBy<FormSchemaType>(
      data,
      (value) => typeof value === "string" && value.length > 0
    );
    contact.mutate(sanitizedData);
  };

  const { query } = useRouter();
  const { flow, email } = query;

  switch (flow) {
    case GET_STARTED:
      setValue("email", Buffer.from(email as string, "base64").toString());
      setValue("subject", "I am ready to get started!");
      setValue(
        "message",
        "Hello! I am ready to get started. Please send me the next steps in the process."
      );
      break;
    case TALK_SOON:
      setValue("email", Buffer.from(email as string, "base64").toString());
      setValue("subject", "I would like to hear more about Web Forestry!");
      setValue(
        "message",
        "Hello! I am not yet ready to get started, but would love to hear more about what Web Forestry can do for my business."
      );
      break;
    case REPORT_ERROR:
      setValue("subject", "An error occurred that I would like to report.");
      setValue(
        "message",
        "Hello! While using Web Forestry, an error that I did not expect occurred. A description of the error is..."
      );
      break;
  }

  return (
    <PageLayout isWideHeader isTightFooter>
      <Head>
        <title>Web Forestry – About</title>
        <meta name="description" content="Contact Web Forestry" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="relative bg-white">
          <h2 className="sr-only">Contact us</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Contact information */}
            <div className="relative overflow-hidden bg-emerald-600 py-10 px-6 sm:px-10 xl:p-12">
              <div
                className="pointer-events-none absolute inset-0 sm:hidden"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 h-full w-full"
                  width={343}
                  height={388}
                  viewBox="0 0 343 388"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                    fill="url(#linear1)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear1"
                      x1="254.553"
                      y1="107.554"
                      x2="961.66"
                      y2="814.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 sm:block lg:hidden"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 h-full w-full"
                  width={359}
                  height={339}
                  viewBox="0 0 359 339"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                    fill="url(#linear2)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear2"
                      x1="192.553"
                      y1="28.553"
                      x2="899.66"
                      y2="735.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 lg:block"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 h-full w-full"
                  width={160}
                  height={678}
                  viewBox="0 0 160 678"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                    fill="url(#linear3)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear3"
                      x1="192.553"
                      y1="325.553"
                      x2="899.66"
                      y2="1032.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-white">
                Contact our team
              </h3>
              <p className="mt-6 max-w-3xl text-base text-emerald-50">
                Have a question? We&apos;d love to hear from you. Send us a
                message and we&apos;ll get back to you as soon as possible.
              </p>
              <dl className="mt-8 space-y-6">
                <dt>
                  <span className="sr-only">Phone number</span>
                </dt>
                <dd className="flex text-base text-emerald-50">
                  <PhoneIcon
                    className="h-6 w-6 flex-shrink-0 text-emerald-200"
                    aria-hidden="true"
                  />
                  <ExternalLink
                    to="tel:+15133415337"
                    className="ml-3 cursor-pointer"
                  >
                    (513) 341-5337
                  </ExternalLink>
                </dd>
                <dt>
                  <span className="sr-only">Email</span>
                </dt>
                <dd className="flex text-base text-emerald-50">
                  <EnvelopeIcon
                    className="h-6 w-6 flex-shrink-0 text-emerald-200"
                    aria-hidden="true"
                  />
                  <ExternalLink
                    to="mailto:contact@webforestry.com"
                    className="ml-3 cursor-pointer"
                  >
                    contact@webforestry.com
                  </ExternalLink>
                </dd>
              </dl>
              <ul className="mt-8 flex space-x-12">
                <li>
                  <ExternalLink
                    className="text-emerald-200 hover:text-emerald-100"
                    to="https://twitter.com/mattsichterman"
                  >
                    <>
                      <span className="sr-only">Twitter</span>
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        aria-hidden="true"
                      >
                        <path
                          d="M7.548 22.501c9.056 0 14.01-7.503 14.01-14.01 0-.213 0-.425-.015-.636A10.02 10.02 0 0024 5.305a9.828 9.828 0 01-2.828.776 4.94 4.94 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.929 4.929 0 00-8.391 4.491A13.98 13.98 0 011.67 3.9a4.928 4.928 0 001.525 6.573A4.887 4.887 0 01.96 9.855v.063a4.926 4.926 0 003.95 4.827 4.917 4.917 0 01-2.223.084 4.93 4.93 0 004.6 3.42A9.88 9.88 0 010 20.289a13.941 13.941 0 007.548 2.209"
                          fill="currentColor"
                        />
                      </svg>
                    </>
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink
                    className="text-emerald-200 hover:text-emerald-100"
                    to="https://instagram.com/mattsichterman"
                  >
                    <>
                      <span className="sr-only">Instagram</span>
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        aria-hidden="true"
                      >
                        <path
                          d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
                          fill="currentColor"
                        />
                      </svg>
                    </>
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink
                    className="text-emerald-200 hover:text-emerald-100"
                    to="https://www.facebook.com/msichterman"
                  >
                    <>
                      <span className="sr-only">Facebook</span>
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                          fill="currentColor"
                        />
                      </svg>
                    </>
                  </ExternalLink>
                </li>
              </ul>
            </div>

            {/* Contact form */}
            <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
              <h3 className="text-lg font-medium text-gray-900">
                Send us a message
              </h3>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                onBlur={() => clearErrors()}
              >
                <div>
                  <label
                    htmlFor="firstName"
                    className={clsx(errors.firstName ? "error-label" : "label")}
                  >
                    First name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="firstName"
                      autoComplete="given-name"
                      {...register("firstName")}
                      className={clsx(
                        errors.firstName ? "error-input" : "input"
                      )}
                      disabled={isSubmitting}
                    />
                    {errors.firstName && (
                      <p
                        className={clsx(
                          "error-label",
                          "mt-1 text-xxs leading-4"
                        )}
                      >
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className={clsx(errors.lastName ? "error-label" : "label")}
                  >
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="lastName"
                      {...register("lastName")}
                      autoComplete="family-name"
                      className={clsx(
                        errors.lastName ? "error-input" : "input"
                      )}
                      disabled={isSubmitting}
                    />
                    {errors.lastName && (
                      <p
                        className={clsx(
                          "error-label",
                          "mt-1 text-xxs leading-4"
                        )}
                      >
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className={clsx(errors.email ? "error-label" : "label")}
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      {...register("email")}
                      className={clsx(errors.email ? "error-input" : "input")}
                      disabled={isSubmitting}
                    />
                    {errors.email && (
                      <p
                        className={clsx(
                          "error-label",
                          "mt-1 text-xxs leading-4"
                        )}
                      >
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="phone"
                      className={clsx(errors.phone ? "error-label" : "label")}
                    >
                      Phone
                    </label>
                    <span id="phone-optional" className="text-sm text-gray-500">
                      Optional
                    </span>
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="phone"
                      autoComplete="tel"
                      {...register("phone")}
                      className={clsx(errors.phone ? "error-input" : "input")}
                      disabled={isSubmitting}
                      aria-describedby="phone-optional"
                    />
                    {errors.phone && (
                      <p
                        className={clsx(
                          "error-label",
                          "mt-1 text-xxs leading-4"
                        )}
                      >
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="subject"
                    className={clsx(errors.subject ? "error-label" : "label")}
                  >
                    Subject
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="subject"
                      {...register("subject")}
                      className={clsx(errors.subject ? "error-input" : "input")}
                      disabled={isSubmitting}
                    />
                    {errors.subject && (
                      <p
                        className={clsx(
                          "error-label",
                          "mt-1 text-xxs leading-4"
                        )}
                      >
                        {errors.subject.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label
                      htmlFor="message"
                      className={clsx(errors.message ? "error-label" : "label")}
                    >
                      Message
                    </label>
                    <span id="message-max" className="text-sm text-gray-500">
                      Max. 500 characters
                    </span>
                  </div>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      rows={4}
                      {...register("message")}
                      className={clsx(errors.message ? "error-input" : "input")}
                      aria-describedby="message-max"
                      defaultValue={""}
                      disabled={isSubmitting}
                    />
                    {errors.message && (
                      <p
                        className={clsx(
                          "error-label",
                          "mt-1 text-xxs leading-4"
                        )}
                      >
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex justify-end sm:col-span-2">
                  <ResultBadge
                    isError={contact.isError}
                    errorMessage={contact.error?.message}
                    isSuccess={contact.isSuccess}
                    successMessage={
                      contact.data?.firstName &&
                      `Thanks ${contact.data.firstName}! We will get back to you soon.`
                    }
                    className="mr-2"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={clsx(
                      "mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-emerald-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 sm:w-auto lg:mt-0",
                      contact.isLoading && "animate-pulse"
                    )}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  );
};

export default Contact;
