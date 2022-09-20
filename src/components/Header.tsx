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
import Image from "next/future/image";
import NavLink from "./utils/NavLink";

const Header = () => {
  const { currentUser = null } = {}; // useAuth();

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
    <Popover className="sticky top-0 bg-white z-50 shadow">
      <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
        <div>
          <Link href="/">
            <a className="flex">
              <span className="sr-only">Workflow</span>
              <Image
                className="h-8 w-auto sm:h-10 max-w-full"
                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=emerald&shade=600"
                alt=""
                width={20}
                height={20}
              />
            </a>
          </Link>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500">
            <span className="sr-only">Open menu</span>
            <Bars4Icon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
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
          <div className="flex items-center md:ml-12">
            <Link href={currentUser ? "/dashboard" : "/sign-in"}>
              <a className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700">
                {currentUser ? "Dashboard" : "Sign in"}
              </a>
            </Link>
          </div>
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
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Image
                    className="h-8 w-auto relative max-w-full"
                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=emerald&shade=600"
                    alt="Workflow"
                    width={20}
                    height={20}
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {links.map((item) => (
                    <Link key={item.title} href={item.to}>
                      <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                        <item.icon
                          className="flex-shrink-0 h-6 w-6 text-emerald-600"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.title}
                        </span>
                      </a>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div>
                <Link href="/sign-up">
                  <a className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700">
                    Sign up
                  </a>
                </Link>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{" "}
                  <Link href="/sign-in">
                    <a className="text-emerald-600 hover:text-emerald-500">
                      Sign in
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Header;
