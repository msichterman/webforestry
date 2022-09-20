import clsx from "clsx";
import Script from "next/script";

const PricingTable = ({ isTight = false }: { isTight?: boolean }) => {
  return (
    <>
      <Script
        src="https://js.stripe.com/v3/pricing-table.js"
        strategy="lazyOnload"
      />
      <div
        className={clsx(
          "relative py-16 bg-emerald-600",
          !isTight && "mt-24 sm:mt-32"
        )}
      >
        <stripe-pricing-table
          pricing-table-id="prctbl_1LVRNXCJKJJ8TAYyDbU7U7oq"
          publishable-key="pk_test_51JBhZACJKJJ8TAYyLLHMxKvYAWhwNbg3ioZP0MF1EQkrk9xeuoKetegfycx7TiHopvrte4H9jmseBIwJbdw4I7Dq00qNnX0U8W"
        ></stripe-pricing-table>
      </div>
    </>
  );
};

export default PricingTable;
