import clsx from "clsx";
import Script from "next/script";
import { env } from "@/env/client.mjs";
import { useSession } from "next-auth/react";

const PricingTable = ({ isTight = false }: { isTight?: boolean }) => {
  const { data: session } = useSession();
  return (
    <>
      <Script
        src="https://js.stripe.com/v3/pricing-table.js"
        strategy="lazyOnload"
      />
      <div
        className={clsx(
          "relative bg-emerald-600 py-16",
          !isTight && "mt-24 sm:mt-32"
        )}
      >
        {session?.user ? (
          <stripe-pricing-table
            pricing-table-id="prctbl_1LVRNXCJKJJ8TAYyDbU7U7oq"
            publishable-key={env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}
            customer-email={session?.user.email}
            client-reference-id={session?.user.id}
          ></stripe-pricing-table>
        ) : (
          <stripe-pricing-table
            pricing-table-id="prctbl_1LVRNXCJKJJ8TAYyDbU7U7oq"
            publishable-key={env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}
          ></stripe-pricing-table>
        )}
      </div>
    </>
  );
};

export default PricingTable;
