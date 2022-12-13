import AppLayout from "@/layouts/AppLayout";
import { useState } from "react";
import { RadioGroup, Switch } from "@headlessui/react";
import { QuestionMarkCircleIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

const plans = [
  {
    name: "Startup",
    priceMonthly: 29,
    priceYearly: 290,
    limit: "Up to 5 active job postings",
  },
  {
    name: "Business",
    priceMonthly: 99,
    priceYearly: 990,
    limit: "Up to 25 active job postings",
  },
  {
    name: "Enterprise",
    priceMonthly: 249,
    priceYearly: 2490,
    limit: "Unlimited active job postings",
  },
];
const payments = [
  {
    id: 1,
    date: "1/1/2020",
    datetime: "2020-01-01",
    description: "Business Plan - Annual Billing",
    amount: "$109.00",
    href: "#",
  },
  // More payments...
];

export default function Payments() {
  const [selectedPlan, setSelectedPlan] = useState(plans[1]);
  const [annualBillingEnabled, setAnnualBillingEnabled] = useState(true);

  return (
    <AppLayout>
      <div className="py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Payments</h1>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="py-4">
            {/* Payment details */}
            <div className="space-y-6 sm:px-6 lg:col-span-9 lg:px-0">
              {/* Plan */}
              <section aria-labelledby="plan-heading">
                <form action="#" method="POST">
                  <div className="shadow sm:overflow-hidden sm:rounded-md">
                    <div className="space-y-6 bg-white py-6 px-4 sm:p-6">
                      <div>
                        <h2
                          id="plan-heading"
                          className="text-lg font-medium leading-6 text-gray-900"
                        >
                          Plan
                        </h2>
                      </div>

                      <RadioGroup
                        value={selectedPlan}
                        onChange={setSelectedPlan}
                      >
                        <RadioGroup.Label className="sr-only">
                          {" "}
                          Pricing plans{" "}
                        </RadioGroup.Label>
                        <div className="relative -space-y-px rounded-md bg-white">
                          {plans.map((plan, planIdx) => (
                            <RadioGroup.Option
                              key={plan.name}
                              value={plan}
                              className={({ checked }) =>
                                clsx(
                                  planIdx === 0
                                    ? "rounded-tl-md rounded-tr-md"
                                    : "",
                                  planIdx === plans.length - 1
                                    ? "rounded-bl-md rounded-br-md"
                                    : "",
                                  checked
                                    ? "z-10 border-emerald-200 bg-emerald-50"
                                    : "border-gray-200",
                                  "relative flex cursor-pointer flex-col border p-4 focus:outline-none md:grid md:grid-cols-3 md:pl-4 md:pr-6"
                                )
                              }
                            >
                              {({ active, checked }) => (
                                <>
                                  <span className="flex items-center text-sm">
                                    <span
                                      className={clsx(
                                        checked
                                          ? "border-transparent bg-emerald-500"
                                          : "border-gray-300 bg-white",
                                        active
                                          ? "ring-2 ring-gray-900 ring-offset-2"
                                          : "",
                                        "flex h-4 w-4 items-center justify-center rounded-full border"
                                      )}
                                      aria-hidden="true"
                                    >
                                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                                    </span>
                                    <RadioGroup.Label
                                      as="span"
                                      className="ml-3 font-medium text-gray-900"
                                    >
                                      {plan.name}
                                    </RadioGroup.Label>
                                  </span>
                                  <RadioGroup.Description
                                    as="span"
                                    className="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center"
                                  >
                                    <span
                                      className={clsx(
                                        checked
                                          ? "text-emerald-900"
                                          : "text-gray-900",
                                        "font-medium"
                                      )}
                                    >
                                      ${plan.priceMonthly} / mo
                                    </span>{" "}
                                    <span
                                      className={
                                        checked
                                          ? "text-emerald-700"
                                          : "text-gray-500"
                                      }
                                    >
                                      (${plan.priceYearly} / yr)
                                    </span>
                                  </RadioGroup.Description>
                                  <RadioGroup.Description
                                    as="span"
                                    className={clsx(
                                      checked
                                        ? "text-emerald-700"
                                        : "text-gray-500",
                                      "ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right"
                                    )}
                                  >
                                    {plan.limit}
                                  </RadioGroup.Description>
                                </>
                              )}
                            </RadioGroup.Option>
                          ))}
                        </div>
                      </RadioGroup>

                      <Switch.Group as="div" className="flex items-center">
                        <Switch
                          checked={annualBillingEnabled}
                          onChange={setAnnualBillingEnabled}
                          className={clsx(
                            annualBillingEnabled
                              ? "bg-emerald-500"
                              : "bg-gray-200",
                            "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                          )}
                        >
                          <span
                            aria-hidden="true"
                            className={clsx(
                              annualBillingEnabled
                                ? "translate-x-5"
                                : "translate-x-0",
                              "inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                            )}
                          />
                        </Switch>
                        <Switch.Label as="span" className="ml-3">
                          <span className="text-sm font-medium text-gray-900">
                            Annual billing
                          </span>
                          <span className="text-sm text-gray-500">
                            (Save 10%)
                          </span>
                        </Switch.Label>
                      </Switch.Group>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-gray-800 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </section>

              {/* Billing history */}
              <section aria-labelledby="billing-history-heading">
                <div className="bg-white pt-6 shadow sm:overflow-hidden sm:rounded-md">
                  <div className="px-4 sm:px-6">
                    <h2
                      id="billing-history-heading"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Billing history
                    </h2>
                  </div>
                  <div className="mt-6 flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div className="overflow-hidden border-t border-gray-200">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                              <tr>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-sm font-semibold text-gray-900"
                                >
                                  Date
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-sm font-semibold text-gray-900"
                                >
                                  Description
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-sm font-semibold text-gray-900"
                                >
                                  Amount
                                </th>
                                {/*
                                  `relative` is added here due to a weird bug in Safari that causes `sr-only` headings to introduce overflow on the body on mobile.
                                */}
                                <th
                                  scope="col"
                                  className="relative px-6 py-3 text-left text-sm font-medium text-gray-500"
                                >
                                  <span className="sr-only">View receipt</span>
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                              {payments.map((payment) => (
                                <tr key={payment.id}>
                                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                                    <time dateTime={payment.datetime}>
                                      {payment.date}
                                    </time>
                                  </td>
                                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                                    {payment.description}
                                  </td>
                                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                                    {payment.amount}
                                  </td>
                                  <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                                    <a
                                      href={payment.href}
                                      className="text-emerald-600 hover:text-emerald-900"
                                    >
                                      View receipt
                                    </a>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
