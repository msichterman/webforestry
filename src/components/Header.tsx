import { Popover, Transition } from "@headlessui/react";
import {
  CreditCardIcon,
  HomeIcon,
  InboxIcon,
  InformationCircleIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import { Fragment, SVGProps } from "react";
import NavLink from "./utils/NavLink";
import WebForestry from "@/components/svgs/WebForestry";
import clsx from "clsx";

function SunIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z" />
      <path
        d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
        fill="none"
      />
    </svg>
  );
}

function MoonIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ModeToggle() {
  function disableTransitionsTemporarily() {
    document.documentElement.classList.add("[&_*]:!transition-none");
    window.setTimeout(() => {
      document.documentElement.classList.remove("[&_*]:!transition-none");
    }, 0);
  }

  function toggleMode() {
    disableTransitionsTemporarily();

    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    const isSystemDarkMode = darkModeMediaQuery.matches;
    const isDarkMode = document.documentElement.classList.toggle("dark");

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode;
    } else {
      window.localStorage.isDarkMode = isDarkMode;
    }
  }

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      className="group rounded-full p-2"
      onClick={toggleMode}
    >
      <SunIcon className="h-5 w-5 fill-caramel-100 stroke-caramel-500 transition group-hover:fill-caramel-300 group-hover:stroke-caramel-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-cyan-50 [@media(prefers-color-scheme:dark)]:stroke-cyan-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-cyan-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-cyan-600" />
      <MoonIcon className="hidden h-5 w-5  fill-caramel-400 stroke-caramel-200 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-caramel-400 [@media_not_(prefers-color-scheme:dark)]:fill-cyan-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-cyan-500" />
    </button>
  );
}

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
    <Popover
      className="sticky top-0 z-50 bg-zinc-50/90 shadow backdrop-blur dark:bg-zinc-900/90"
      as="nav"
      aria-label="Main"
    >
      <div
        role="menubar"
        className={clsx(
          "mx-auto flex items-center justify-between py-6 md:space-x-10 lg:grid lg:grid-cols-2 lg:gap-24",
          isWide
            ? "px-6 sm:px-10"
            : "max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8"
        )}
      >
        <div>
          <Link href="/" role="menuitem">
            <span className="sr-only">Web Forestry</span>
            <WebForestry className="h-8 w-auto max-w-full sm:h-10" />
          </Link>
        </div>
        <div className="flex items-center space-x-1 md:hidden">
          <div className="pointer-events-auto">
            <ModeToggle />
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button
              className="inline-flex items-center justify-center rounded-md bg-zinc-50 p-2 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-600 dark:bg-zinc-900/80 dark:text-caramel-200"
              role="menuitem"
            >
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
        </div>
        <div className="hidden px-4 md:flex md:items-center md:justify-end">
          <Popover.Group
            as="nav"
            className="flex items-center space-x-10"
            role="menu"
          >
            <NavLink
              href="/about"
              className="flex items-center text-base font-medium text-zinc-500 hover:text-zinc-900 dark:text-caramel-200 dark:hover:text-caramel-400"
              activeClassName="dark:text-caramel-400 text-zinc-800"
              role="menuitem"
            >
              About
            </NavLink>
            <NavLink
              href="/pricing"
              className="flex items-center text-base font-medium text-zinc-500 hover:text-zinc-900 dark:text-caramel-200 dark:hover:text-caramel-400"
              activeClassName="dark:text-caramel-400 text-zinc-800"
              role="menuitem"
            >
              Pricing
            </NavLink>
            <NavLink
              href="/contact"
              className="flex items-center text-base font-medium text-zinc-500 hover:text-zinc-900 dark:text-caramel-200 dark:hover:text-caramel-400"
              activeClassName="dark:text-caramel-400 text-zinc-800"
              role="menuitem"
            >
              Contact
            </NavLink>
            <div className="pointer-events-auto">
              <ModeToggle />
            </div>
          </Popover.Group>
          {/* <div className="flex items-center md:ml-12">
            <Link href={currentUser ? "app/dashboard" : "app/sign-in"}>
              <span className="ml-8 inline-flex items-center justify-center rounded-md border border-transparent bg-emerald-600 px-4 py-2 text-base font-medium text-zinc-50 shadow-sm hover:bg-emerald-700">
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
          aria-orientation="vertical"
          role="menu"
        >
          <div className="divide-y-2 divide-zinc-50 rounded-lg bg-zinc-50 shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-zinc-900">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <WebForestry className="relative h-8 w-auto max-w-full" />
                </div>
                <div className="-mr-2">
                  <Popover.Button
                    className="inline-flex items-center justify-center rounded-md bg-zinc-50 p-2 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-600 dark:bg-zinc-900/80 dark:text-caramel-200"
                    role="menuitem"
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8" aria-label="Main mobile">
                  {links.map((item) => (
                    <Link key={item.title} href={item.to} role="menuitem">
                      <span className="-m-3 flex items-center rounded-md p-3 hover:bg-zinc-50 dark:bg-zinc-900/80">
                        <item.icon
                          className="h-6 w-6 flex-shrink-0 text-emerald-600"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-base font-medium text-zinc-900  dark:text-caramel-100">
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
                  <span className="flex w-full items-center justify-center rounded-md border border-transparent bg-emerald-600 px-4 py-2 text-base font-medium text-zinc-50 shadow-sm hover:bg-emerald-700">
                    Sign up
                  </span>
                </Link>
                <p className="mt-6 text-center text-base font-medium text-zinc-500">
                  Existing customer?{" "}
                  <Link href="/sign-in">
                    <span className="text-emerald-600 hover:text-emerald-600">
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
