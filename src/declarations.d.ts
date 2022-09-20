declare namespace JSX {
  interface IntrinsicElements {
    "stripe-pricing-table": StripePricingTableProps;
  }

  interface StripePricingTableProps {
    ["pricing-table-id"]: string;
    ["publishable-key"]: string;
  }
}
