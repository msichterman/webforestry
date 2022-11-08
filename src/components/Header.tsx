import { Popover, Transition } from "@headlessui/react";
import {
  CreditCardIcon,
  HomeIcon,
  InboxIcon,
  InformationCircleIcon,
  Bars4Icon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import { Fragment } from "react";
import NavLink from "./utils/NavLink";
import WebForestry from "@/components/svgs/WebForestry";
import clsx from "clsx";

const Header = ({ isWide = false }) => {
  const links = [
    {
      title: "Home",
      to: "/",
      icon: HomeIcon,
    },
    {
      title: "About",
      to: "/about",
      icon: InformationCircleIcon,
    },
    {
      title: "Pricing",
      to: "/pricing",
      icon: CreditCardIcon,
    },
    {
      title: "Contact",
      to: "/contact",
      icon: InboxIcon,
    },
  ];

  return (
    <Popover className="sticky top-0 z-50 bg-white shadow">
      <div
        className={clsx(
          "mx-auto flex items-center justify-between py-6 md:justify-start md:space-x-10 lg:grid lg:grid-cols-2 lg:gap-24",
          isWide
            ? "px-6 sm:px-10"
            : "max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8"
        )}
      >
        <div>
          <Link href="/">
            <span className="sr-only">Web Forestry</span>
            <WebForestry className="h-8 w-auto max-w-full sm:h-10" />
          </Link>
        </div>
        <div className="-my-2 -mr-2 md:hidden">
          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500">
            <span className="sr-only">Open menu</span>
            <Bars4Icon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <div className="hidden px-4 md:flex md:items-center md:justify-end">
          <Popover.Group as="nav" className="flex space-x-10">
            <NavLink
              href="/about"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
              activeClassName="text-gray-800"
            >
              About
            </NavLink>
            <NavLink
              href="/pricing"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
              activeClassName="text-gray-800"
            >
              Pricing
            </NavLink>
            <NavLink
              href="/contact"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
              activeClassName="text-gray-800"
            >
              Contact
            </NavLink>
          </Popover.Group>
          {/* <div className="flex items-center md:ml-12">
            <Link href={currentUser ? "app/dashboard" : "app/sign-in"}>
              <span className="ml-8 inline-flex items-center justify-center rounded-md border border-transparent bg-emerald-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-emerald-700">
                {currentUser ? "Dashboard" : "Sign in"}
              </span>
            </Link>
          </div> */}
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <WebForestry className="relative h-8 w-auto max-w-full" />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {links.map((item) => (
                    <Link key={item.title} href={item.to}>
                      <span className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
                        <item.icon
                          className="h-6 w-6 flex-shrink-0 text-emerald-600"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.title}
                        </span>
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            {/* <div className="space-y-6 py-6 px-5">
              <div>
                <Link href="/sign-up">
                  <span className="flex w-full items-center justify-center rounded-md border border-transparent bg-emerald-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-emerald-700">
                    Sign up
                  </span>
                </Link>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{" "}
                  <Link href="/sign-in">
                    <span className="text-emerald-600 hover:text-emerald-500">
                      Sign in
                    </span>
                  </Link>
                </p>
              </div>
            </div> */}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Header;
