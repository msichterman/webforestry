import Header from "../components/Header";
import Footer from "../components/Footer";

type PageLayoutProps = {
  children?: React.ReactNode;
  isTightFooter?: boolean;
  isAppFooter?: boolean;
};

const PageLayout = ({
  children,
  isTightFooter = false,
  isAppFooter = false,
}: PageLayoutProps) => {
  return (
    <div className="flex h-full min-h-screen w-full min-w-full flex-col justify-between bg-gray-50">
      <Header />
      <div className="mx-auto w-full">{children}</div>
      <Footer isTight={isTightFooter} isApp={isAppFooter} />
    </div>
  );
};

export default PageLayout;
