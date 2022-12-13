export type PricingTier = {
  id: number;
  name: "Sprout" | "Grow" | "Thrive";
  description: string | null;
  active: boolean;
  href: string;
  badge: string | null;
  features: string[];
  prices: {
    term: string;
    value: number;
    active: boolean;
  }[];
};

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 0,
    name: "Sprout",
    description:
      "Perfect for small businesses just starting out, or for those looking to refresh their existing marketing website. ",
    href: "/contact",
    active: true,
    badge: null,
    features: [
      "1 - 10 Pages",
      "Hosting Included",
      "Enterprise-Grade Security",
      "Unlimited Updates & Support",
      "Contact & Email List Forms",
      "1 Admin Account",
    ],
    prices: [
      {
        term: "Monthly",
        value: 199,
        active: false,
      },
      {
        term: "Yearly",
        value: 1990,
        active: false,
      },
      {
        term: "One-time",
        value: 6965,
        active: true,
      },
    ],
  },
  {
    id: 1,
    name: "Grow",
    description:
      "As your business begins to grow, we offer enhanced features such as a custom-designed blog and SEO.",
    href: "/contact",
    active: true,
    badge: "Most popular",
    features: [
      "10 - 20 Pages",
      "Enhanced SEO",
      "3rd Party Add-on Support",
      "Unlimited Forms",
      "Professional Blog/Portfolio",
      "3 Admin/Employee Accounts",
    ],
    prices: [
      {
        term: "Monthly",
        value: 349,
        active: false,
      },
      {
        term: "Yearly",
        value: 3490,
        active: false,
      },
      {
        term: "One-time",
        value: 11990,
        active: false,
      },
    ],
  },
  {
    id: 2,
    name: "Thrive",
    description:
      "For businesses ready to thrive, includes advanced features such as e-commerce capabilities and user accounts.",
    href: "/contact",
    active: true,
    badge: null,
    features: [
      "20+ Pages",
      "3rd Party Integrations",
      "Custom APIs",
      "Unlimited Advanced Forms",
      "Animations",
      "10 Admin/Employee Accounts",
    ],
    prices: [
      {
        term: "Monthly",
        value: 499,
        active: false,
      },
      {
        term: "Yearly",
        value: 4990,
        active: false,
      },
      {
        term: "One-time",
        value: 16990,
        active: true,
      },
    ],
  },
];
