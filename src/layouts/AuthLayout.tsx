import Footer from "@/components/Footer";

type AuthLayoutProps = {
  children?: React.ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="flex h-screen max-h-full w-full min-w-full flex-col justify-between bg-white">
      <div className="mx-auto flex h-full max-h-full w-full justify-center md:px-12 lg:px-0">
        <div className="z-10 flex flex-col bg-white py-10 px-4 sm:justify-center md:flex-none md:px-28 lg:shadow-2xl">
          <div className="mx-auto w-full sm:px-4 md:px-0">{children}</div>
        </div>
        <div className="hidden h-full w-full bg-radial-at-br from-emerald-400 via-zinc-300 to-emerald-600 lg:block" />
      </div>
      <Footer isTight />
    </div>
  );
};

export default AuthLayout;
