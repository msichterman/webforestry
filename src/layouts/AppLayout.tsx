import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  HomeIcon,
  Bars3Icon,
  XMarkIcon,
  CreditCardIcon,
  CogIcon,
  PencilSquareIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import Footer from "@/components/Footer";
import NavLink from "@/components/utils/NavLink";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { fallbackAvatar } from "@/lib/utils/objectUtils";
import FullPageSpinner from "@/components/FullPageSpinner";
import WebForestry from "@/components/svgs/WebForestry";
import { trpc } from "@/lib/utils/trpc";

const navigation = [
  { name: "Dashboard", to: "/app/dashboard", icon: HomeIcon },
  { name: "Content Management", to: "/app/content", icon: PencilSquareIcon },
  { name: "Assets", to: "/app/assets", icon: PhotoIcon },
  { name: "Payments", to: "/app/payments", icon: CreditCardIcon },
  { name: "Settings", to: "/app/settings", icon: CogIcon, separator: true },
];

type AppLayoutProps = {
  children?: React.ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [newOrgId, setNewOrgId] = useState<number | null>(null);

  const { data: session, status } = useSession();
  const router = useRouter();
  const { id } = router.query;
  const reloadSession = () => {
    const event = new Event("visibilitychange");
    document.dispatchEvent(event);
  };

  const { mutateAsync, isLoading } = trpc.subscription.initialize.useMutation({
    async onSuccess(data) {
      reloadSession();
      setNewOrgId(data.id);
    },
  });

  const stripeCheckoutSessionId = id as string;
  const userHasOrg = session?.user?.orgIds?.length || newOrgId;

  useEffect(() => {
    if (session?.user) {
      // User just completed a subscription
      if (stripeCheckoutSessionId && !userHasOrg) {
        const handleInitializeSubscription = async () =>
          await mutateAsync({
            id: stripeCheckoutSessionId,
          });
        handleInitializeSubscription();
      }
    }
  }, [
    id,
    mutateAsync,
    newOrgId,
    session?.user,
    stripeCheckoutSessionId,
    userHasOrg,
  ]);

  // Session Status
  switch (status) {
    case "loading":
      return <FullPageSpinner />;
    case "unauthenticated":
      router.push("/app/sign-in");
      return null;
    default:
      if (isLoading) {
        return <FullPageSpinner />;
      }

      return userHasOrg ? (
        <div className="h-screen">
          <div className="h-full">
            <Transition.Root show={sidebarOpen} as={Fragment}>
              <Dialog
                as="div"
                className="relative z-40 md:hidden"
                onClose={setSidebarOpen}
              >
                <Transition.Child
                  as={Fragment}
                  enter="transition-opacity ease-linear duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity ease-linear duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                </Transition.Child>

                <div className="fixed inset-0 z-40 flex">
                  <Transition.Child
                    as={Fragment}
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                  >
                    <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-emerald-700">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <div className="absolute top-0 right-0 -mr-12 pt-2">
                          <button
                            type="button"
                            className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            onClick={() => setSidebarOpen(false)}
                          >
                            <span className="sr-only">Close sidebar</span>
                            <XMarkIcon
                              className="h-6 w-6 text-white"
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                      </Transition.Child>
                      <div className="flex h-0 flex-1 flex-col justify-between overflow-y-auto pt-5 pb-4">
                        <div>
                          <div className="flex flex-shrink-0 items-center px-4">
                            <WebForestry
                              isLight
                              className="relative h-8 w-auto max-w-full"
                            />
                          </div>
                          <nav className="mt-5 space-y-1 px-2">
                            {navigation.map((item) => (
                              <Fragment key={item.name}>
                                {item?.separator && (
                                  <div className="py-2">
                                    <div className="border-t-2 border-emerald-800" />
                                  </div>
                                )}
                                <NavLink
                                  href={item.to}
                                  className={clsx(
                                    "group flex items-center rounded-md px-2 py-2 text-sm font-medium",
                                    "text-white hover:bg-emerald-600 hover:bg-opacity-75"
                                  )}
                                  activeClassName={clsx(
                                    "group flex items-center px-2 py-2 text-sm font-medium rounded-md",
                                    "bg-emerald-800 text-white"
                                  )}
                                >
                                  <item.icon
                                    className="mr-4 h-6 w-6 flex-shrink-0 text-emerald-300"
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </NavLink>
                              </Fragment>
                            ))}
                          </nav>
                        </div>
                        <div className="px-2">
                          <button
                            onClick={() => signOut()}
                            className="block w-full rounded-md border border-transparent bg-emerald-800 px-2 py-2 text-xs font-medium uppercase text-emerald-50 shadow hover:bg-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-100 focus:ring-offset-2 focus:ring-offset-emerald-500 sm:px-10"
                          >
                            Sign out
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-shrink-0 border-t border-emerald-800">
                        <NavLink
                          href={`/app/profile/${session.user?.id}`}
                          className="group block w-full flex-shrink-0 p-4"
                          activeClassName="bg-emerald-800"
                        >
                          <div className="flex items-center">
                            <div>
                              <img
                                className="inline-block h-10 w-10 rounded-full"
                                src={
                                  session.user?.image ||
                                  fallbackAvatar(session.user?.name)
                                }
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-base font-medium text-white">
                                {session.user?.name}
                              </p>
                              <p className="text-sm font-medium text-emerald-200 group-hover:text-white">
                                View profile
                              </p>
                            </div>
                          </div>
                        </NavLink>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                  <div className="w-14 flex-shrink-0" aria-hidden="true">
                    {/* Force sidebar to shrink to fit close icon */}
                  </div>
                </div>
              </Dialog>
            </Transition.Root>

            {/* Static sidebar for desktop */}
            <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex min-h-0 flex-1 flex-col bg-emerald-700">
                <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
                  <div className="flex flex-shrink-0 items-center px-4">
                    <WebForestry
                      isLight
                      className="relative h-8 w-auto max-w-full"
                    />
                  </div>
                  <nav className="mt-5 flex-1 space-y-1 px-2">
                    {navigation.map((item) => (
                      <Fragment key={item.name}>
                        {item?.separator && (
                          <div key={`${item.name}-separator`} className="py-2">
                            <div className="border-t-2 border-emerald-800" />
                          </div>
                        )}
                        <NavLink
                          key={item.name}
                          href={item.to}
                          className={clsx(
                            "group flex items-center rounded-md px-2 py-2 text-sm font-medium",
                            "text-white hover:bg-emerald-600 hover:bg-opacity-75"
                          )}
                          activeClassName={clsx(
                            "group flex items-center px-2 py-2 text-sm font-medium rounded-md",
                            "bg-emerald-800 text-white"
                          )}
                        >
                          <item.icon
                            className="f lex-shrink-0
                      mr-3 h-6 w-6 text-emerald-300"
                            aria-hidden="true"
                          />
                          {item.name}
                        </NavLink>
                      </Fragment>
                    ))}
                  </nav>
                  <div className="px-2">
                    <button
                      onClick={() => signOut()}
                      className="block w-full rounded-md border border-transparent bg-emerald-800 px-2 py-2 text-xs font-medium uppercase text-emerald-50 shadow hover:bg-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-100 focus:ring-offset-2 focus:ring-offset-emerald-500 sm:px-10"
                    >
                      Sign out
                    </button>
                  </div>
                </div>
                <div className="flex flex-shrink-0 border-t border-emerald-800">
                  <NavLink
                    href={`/app/profile/${session.user?.id}`}
                    className="group block w-full flex-shrink-0 p-4"
                    activeClassName="bg-emerald-800"
                  >
                    <div className="flex items-center">
                      <div>
                        <img
                          className="inline-block h-9 w-9 rounded-full"
                          src={
                            session.user?.image ||
                            fallbackAvatar(session.user?.name)
                          }
                          alt="Profile avatar"
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-white">
                          {session.user?.name}
                        </p>
                        <p className="text-xs font-medium text-emerald-200 group-hover:text-white">
                          View profile
                        </p>
                      </div>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="flex h-full flex-col md:pl-64">
              <div className="sticky top-0 z-10 bg-gray-100 pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">
                <button
                  type="button"
                  className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
                  onClick={() => setSidebarOpen(true)}
                >
                  <span className="sr-only">Open sidebar</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <main className="h-full pt-8">{children}</main>
              <Footer isTight isApp />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex h-screen max-h-full w-full min-w-full flex-col justify-between">
          <div className="mx-auto flex h-full max-h-full w-full justify-center md:px-12 lg:px-0">
            <div className="z-10 flex flex-col py-10 px-4 sm:justify-center md:flex-none md:px-28">
              <div className="mx-auto w-full sm:px-4 md:px-0">
                <div className="text-center">
                  <CreditCardIcon className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900">
                    No organization
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Get started by purchasing a subscription.
                  </p>
                  <div className="mt-6">
                    <button
                      type="button"
                      className="inline-flex items-center rounded-md border border-transparent bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                      onClick={() => router.push("/pricing")}
                    >
                      <PlusIcon
                        className="-ml-1 mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                      Start working with us today!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer isTight />
        </div>
      );
  }
};

export default AppLayout;
