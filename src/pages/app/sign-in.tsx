import AuthLayout from "@/layouts/AuthLayout";
import { signIn, useSession } from "next-auth/react";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import WebForestryIcon from "@/components/svgs/WebForestryIcon";
import FullPageSpinner from "@/components/FullPageSpinner";

export default function SignIn() {
  const { data: session, status } = useSession();

  const FormSchema = z.object({
    email: z.string().email(),
  });

  type FormSchemaType = z.infer<typeof FormSchema>;

  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    clearErrors();
    // signInWithEmail(data.email)
  };

  if (status === "loading") {
    return <FullPageSpinner />;
  }

  return (
    <AuthLayout>
      <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="w-full">
            <div>
              <WebForestryIcon className="relative h-12 w-auto max-w-full text-emerald-600" />
            </div>
            {session ? (
              <h2>hi {session.user?.name}</h2>
            ) : (
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
                Sign in to your account
              </h2>
            )}
            <p className="mt-2 text-sm text-gray-600">
              Or{" "}
              <a
                href="#"
                className="font-medium text-emerald-600 hover:text-emerald-500"
              >
                sign up to start working with us today!
              </a>
            </p>
          </div>

          <div className="mt-8">
            <div>
              <div>
                <p className="text-sm font-medium text-gray-700">
                  Sign in with
                </p>

                <div className="mt-1 grid grid-cols-3 gap-3">
                  <div>
                    <button
                      onClick={() => signIn("google")}
                      className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                    >
                      <span className="sr-only">Sign in with Google</span>
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M19.456 8.15401C19.579 8.81301 19.646 9.50201 19.646 10.221C19.646 15.845 15.882 19.844 10.197 19.844C8.90415 19.8444 7.6239 19.59 6.42939 19.0955C5.23489 18.6009 4.14954 17.8758 3.23536 16.9616C2.32118 16.0475 1.59609 14.9621 1.10152 13.7676C0.606957 12.5731 0.352603 11.2929 0.352997 10C0.352603 8.70716 0.606957 7.42691 1.10152 6.2324C1.59609 5.0379 2.32118 3.95255 3.23536 3.03837C4.14954 2.12419 5.23489 1.3991 6.42939 0.904533C7.6239 0.409966 8.90415 0.155612 10.197 0.156006C12.855 0.156006 15.076 1.13401 16.78 2.72201L14.005 5.49701V5.49001C12.972 4.50601 11.661 4.00101 10.197 4.00101C6.949 4.00101 4.309 6.74501 4.309 9.99401C4.309 13.242 6.949 15.992 10.197 15.992C13.144 15.992 15.15 14.307 15.562 11.993H10.197V8.15401H19.457H19.456Z" />
                      </svg>
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => signIn("twitter")}
                      className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                    >
                      <span className="sr-only">Sign in with Twitter</span>
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => signIn("linkedin")}
                      className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                    >
                      <span className="sr-only">Sign in with Linkedin</span>
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.429 6.969H11.143V8.819C11.678 7.755 13.05 6.799 15.111 6.799C19.062 6.799 20 8.917 20 12.803V20H16V13.688C16 11.475 15.465 10.227 14.103 10.227C12.214 10.227 11.429 11.572 11.429 13.687V20H7.429V6.969V6.969ZM0.57 19.83H4.57V6.799H0.57V19.83V19.83ZM5.143 2.55C5.14315 2.88528 5.07666 3.21724 4.94739 3.52659C4.81812 3.83594 4.62865 4.11651 4.39 4.352C3.9064 4.83262 3.25181 5.10165 2.57 5.1C1.88939 5.09954 1.23631 4.8312 0.752 4.353C0.514211 4.11671 0.325386 3.83582 0.196344 3.52643C0.0673015 3.21704 0.000579132 2.88522 0 2.55C0 1.873 0.27 1.225 0.753 0.747C1.23689 0.268158 1.89024 -0.000299211 2.571 2.50265e-07C3.253 2.50265e-07 3.907 0.269 4.39 0.747C4.872 1.225 5.143 1.873 5.143 2.55Z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="relative mt-6">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <form
                onSubmit={handleSubmit(onSubmit)}
                onBlur={() => clearErrors()}
                className="space-y-4"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-emerald-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md border border-transparent bg-emerald-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                  >
                    Send magic link
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
