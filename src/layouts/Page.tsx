import Header from "../components/Header";
import Footer from "../components/Footer";

type PageLayoutProps = {
  children?: React.ReactNode;
  isTightFooter?: boolean;
  isAppFooter?: boolean;
};

const Page = ({
  children,
  isTightFooter = false,
  isAppFooter = false,
}: PageLayoutProps) => {
  return (
    <div className="flex flex-col justify-between h-full min-h-screen w-full min-w-full bg-gray-50">
      <Header />
      <div className="mx-auto w-full">{children}</div>
      <Footer isTight={isTightFooter} isApp={isAppFooter} />
    </div>
  );
};

export default Page;
