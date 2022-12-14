import { PRICING_TIERS } from "@/lib/pricing";
import { CheckIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function PricingTable() {
  return (
    <div className="bg-gray-900">
      <div className="relative overflow-hidden pt-32 pb-96 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <h1 className="text-lg font-semibold leading-8 text-emerald-400">
              Pricing
            </h1>
            <h2 className="mt-2 text-4xl font-bold tracking-tight text-white">
              Choose the right plan for your business and watch it flourish.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/60">
              Fast turnaround. No unnecessary contracts.
            </p>
          </div>
        </div>
      </div>
      <div className="flow-root bg-white pb-32 lg:pb-40">
        <div className="relative -mt-80">
          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="mx-auto grid grid-cols-1 gap-8 px-4 lg:grid-cols-3 lg:gap-8">
              {PRICING_TIERS.map((tier) => (
                <div
                  key={tier.name}
                  className="flex flex-col rounded-3xl bg-white shadow-xl ring-1 ring-black/10"
                >
                  <div className="p-8 sm:p-10">
                    {tier.badge ? (
                      <div className="h-8">
                        <div className="box-border w-min animate-pulse whitespace-nowrap rounded-md border border-emerald-600 bg-emerald-100 px-2.5 py-0.5 text-xxs font-semibold text-emerald-600">
                          {tier.badge}
                        </div>
                      </div>
                    ) : (
                      <div className="h-8" />
                    )}
                    <h3
                      className="text-lg font-semibold leading-8 tracking-tight text-emerald-600"
                      id={tier.id.toString()}
                    >
                      {tier.name}
                    </h3>
                    <div className="mt-4 flex items-baseline text-5xl font-bold tracking-tight text-gray-900">
                      <>
                        ${tier.prices[2]?.value}
                        <span className="ml-2 text-lg font-semibold leading-8 tracking-normal text-gray-500">
                          &amp; up
                        </span>
                      </>
                    </div>
                    <p className="mt-6 text-base leading-7 text-gray-600">
                      {tier.description}
                    </p>
                  </div>
                  <div className="flex flex-1 flex-col p-2">
                    <div className="flex flex-1 flex-col justify-between rounded-3xl bg-gray-50 p-6 sm:p-8">
                      <ul className="space-y-6">
                        {tier.features.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                              <CheckIcon
                                className="h-6 w-6 text-emerald-600"
                                aria-hidden="true"
                              />
                            </div>
                            <p className="ml-3 text-sm leading-6 text-gray-600">
                              {feature}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <Link
                          href={tier.href}
                          className="inline-block w-full rounded-lg bg-emerald-600 px-4 py-2.5 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-emerald-700"
                          aria-describedby={tier.id.toString()}
                        >
                          Get a quote
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative mx-auto mt-8 max-w-7xl">
          <div className="mx-auto">
            <div className="mx-4 flex flex-col gap-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10 lg:flex-row lg:items-center lg:gap-8">
              <div className="lg:min-w-0 lg:flex-1">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-emerald-600">
                  Enterprise
                </h3>
                <div className="mt-2 text-base leading-7 text-gray-600">
                  For teams with more complex requirements and projects,
                  let&apos;s book a call.
                </div>
              </div>
              <div>
                <Link
                  href="/contact"
                  className="inline-block rounded-lg bg-emerald-50 px-4 py-2.5 text-center text-sm font-semibold leading-5 text-emerald-700 hover:bg-emerald-100"
                >
                  Book a call <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
