import Header from "../components/Header";
import Footer from "../components/Footer";

type PageLayoutProps = {
  children?: React.ReactNode;
};

const Page = ({ children }: PageLayoutProps) => {
  return (
    <div className="flex flex-col justify-between h-full min-h-screen w-full min-w-full bg-gray-50">
      <Header />
      <div className="mx-auto w-full">{children}</div>
      <Footer />
    </div>
  );
};

export default Page;
