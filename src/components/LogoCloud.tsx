import Image from "next/future/image";
import DinklageLogo from "../../public/img/dinklage-white.png";
import BeefJurgyLogo from "../../public/img/beef-jurgy-white.png";
import GrowLocalLogo from "../../public/img/grow-local-white.png";
import AquaTreeLogo from "../../public/img/aquatree-white.png";

function LogoCloud() {
  return (
    <section className="bg-emerald-700 py-12 px-4 sm:px-6 lg:py-32 lg:px-8">
      <div className="relative mx-auto grid h-full w-full max-w-lg grid-cols-2 grid-rows-2 gap-8 md:max-w-7xl md:grid-cols-4 md:grid-rows-1">
        <div className="relative col-span-1 flex h-16 justify-center md:h-24">
          <Image
            src={DinklageLogo}
            alt="Dinklage Feed Yards"
            className="object-contain brightness-200"
            sizes="100vw"
            fill
          />
        </div>
        <div className="relative col-span-1 flex justify-center">
          <Image
            src={BeefJurgyLogo}
            alt="Beef Jurgy"
            className="object-contain brightness-200"
            sizes="100vw"
            fill
          />
        </div>
        <div className="relative col-span-1 flex justify-center">
          <Image
            src={GrowLocalLogo}
            alt="Grow Local"
            className="object-contain brightness-200"
            sizes="100vw"
            fill
          />
        </div>
        <div className="relative flex justify-center">
          <Image
            src={AquaTreeLogo}
            alt="AquaTree"
            className="object-contain px-6  brightness-200 md:px-8 lg:px-12 xl:px-16"
            sizes="100vw"
            fill
          />
        </div>
      </div>
    </section>
  );
}

export default LogoCloud;
