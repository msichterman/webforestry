import AppLayout from "@/layouts/AppLayout";
import { fallbackAvatar } from "@/utils/objectUtils";
import { useSession } from "next-auth/react";

export default function Profile() {
  const { data: session } = useSession();
  const user = session?.user;

  if (!user) {
    return null;
  }

  return (
    <AppLayout>
      <div className="py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-zinc-900  dark:text-caramel-100">
            Profile
          </h1>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="py-4">
            <div className="w-full max-w-sm rounded-lg border border-zinc-200 bg-zinc-50 shadow-md dark:border-zinc-700 dark:bg-zinc-900/80 dark:bg-zinc-800">
              <div className="flex justify-end px-4 pt-8">
                {/* <button
                  id="dropdownButton"
                  data-dropdown-toggle="dropdown"
                  className="inline-block rounded-lg p-1.5 text-sm text-zinc-500 hover:bg-zinc-100 focus:outline-none focus:ring-4 focus:ring-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:focus:ring-zinc-700"
                  type="button"
                >
                  <span className="sr-only">Open dropdown</span>
                  <svg
                    className="h-6 w-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                  </svg>
                </button> */}
              </div>
              <div className="flex flex-col items-center pb-10">
                <img
                  className="mb-3 h-24 w-24 rounded-full shadow-lg"
                  src={user.image || fallbackAvatar(user.name)}
                  alt="The user's profile avatar"
                />
                <h5 className="mb-1 text-xl font-medium text-zinc-900  dark:text-caramel-100">
                  {user.name}
                </h5>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                  {user.email}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
