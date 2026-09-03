/**
 * Specialty mortgage & investment solutions.
 *
 * COMPLIANCE: every line below is derived from client-supplied copy. Conditional
 * language ("may", "eligible borrowers", "subject to program terms and approval")
 * is intentional and must not be turned into a guarantee.
 */

export type SpecialtySolution = {
  slug: string;
  /** Path of the detail page this card links to. */
  path: string;
  /** Whether this entry has its own generated detail route in this file's template. */
  ownPage: boolean;
  category: string;
  nav: string;
  headline: string;
  summary: string;
  /** Full narrative paragraphs, in supplied order. */
  body: string[];
  points: { t: string; b: string }[];
  cta: string;
  title: string;
  description: string;
  imageAlt: string;
  related: { label: string; to: string }[];
};

export const specialtySolutions: SpecialtySolution[] = [
  {
    slug: "itin-home-loans",
    path: "/itin-home-loans",
    ownPage: true,
    category: "ITIN Financing",
    nav: "ITIN Home Loans",
    headline: "Buy Your First Home with an ITIN",
    summary:
      "At Premier Lending NC, we open the door to homeownership for individuals who have an ITIN.",
    body: [
      "At Premier Lending NC, we open the door to homeownership for individuals who have an ITIN.",
      "Whether you are looking to purchase your first primary residence, refinance a property you already own, or invest in real estate, we are here to guide you every step of the way.",
      "We offer financing options with down payments starting as low as 15%, competitive fixed interest rates, and no prepayment penalties.",
      "Tax returns are not required.",
      "Our goal is to provide a clear, efficient process and the confidence that comes with a fixed-rate loan. With Premier Lending NC, your ITIN can be a key to building your future.",
    ],
    points: [
      {
        t: "Down payments starting as low as 15%",
        b: "Financing options are available with down payments starting as low as 15%, with competitive fixed interest rates and no prepayment penalties.",
      },
      {
        t: "Tax returns are not required",
        b: "Tax returns are not required for this financing. We review what applies to your situation and explain the documentation involved.",
      },
      {
        t: "Purchase, refinance or invest",
        b: "Whether you are purchasing your first primary residence, refinancing a property you already own, or investing in real estate, we guide you every step of the way.",
      },
    ],
    cta: "See If You Qualify",
    title: "ITIN Home Loans in North Carolina | Premier Lending NC",
    description:
      "ITIN home loans in North Carolina: purchase, refinance or invest with down payments starting as low as 15%, fixed rates and no tax returns required.",
    imageAlt: "Family standing in front of their North Carolina home at sunset",
    related: [
      { label: "Bank Statement Home Loans", to: "/bank-statement-home-loans" },
      { label: "Non-Permanent Resident Solutions", to: "/non-permanent-resident-mortgages" },
      { label: "First-Time Home Buyers", to: "/first-time-home-buyers" },
    ],
  },
  {
    slug: "bank-statement-home-loans",
    path: "/bank-statement-home-loans",
    ownPage: true,
    category: "Alternative Documentation",
    nav: "Bank Statement Loans",
    headline: "Buy Your First Home Using Only Bank Statements — No Tax Returns",
    summary:
      "At Premier Lending NC, we believe in second chances and alternative paths to homeownership.",
    body: [
      "At Premier Lending NC, we believe in second chances and alternative paths to homeownership.",
      "Whether you are a U.S. citizen, permanent resident, have a current or expired work permit, or use a Tax ID (ITIN), we are here to help you explore your options.",
      "Not everyone documents income through traditional tax returns, which is why certain programs may allow you to qualify by demonstrating income through bank statements.",
      "This approach may help eligible borrowers qualify for financing amounts that traditional lending methods may not accommodate.",
      "We are committed to providing flexible, transparent solutions tailored to your individual situation.",
    ],
    points: [
      {
        t: "Income shown through bank statements",
        b: "Certain programs may allow you to qualify by demonstrating income through bank statements rather than traditional tax returns.",
      },
      {
        t: "Open to a range of borrower profiles",
        b: "U.S. citizens, permanent residents, borrowers with a current or expired work permit, and those using a Tax ID (ITIN) are welcome to explore their options.",
      },
      {
        t: "Flexible, transparent review",
        b: "This approach may help eligible borrowers qualify for financing amounts that traditional lending methods may not accommodate.",
      },
    ],
    cta: "Explore Your Options",
    title: "Bank Statement Home Loans, No Tax Returns | Premier Lending NC",
    description:
      "Bank statement home loans in North Carolina. Certain programs may let eligible borrowers qualify using bank statements instead of tax returns.",
    imageAlt: "Homeowner reviewing bank statements at a kitchen table",
    related: [
      { label: "ITIN Home Loans", to: "/itin-home-loans" },
      { label: "Cash-Out Refinance", to: "/cash-out-refinance" },
      { label: "Non-Permanent Resident Solutions", to: "/non-permanent-resident-mortgages" },
    ],
  },
  {
    slug: "rental-property-financing",
    path: "/rental-property-financing",
    ownPage: true,
    category: "Investment Financing",
    nav: "Rental Property Financing",
    headline: "Investors for Rental Properties",
    summary:
      "At Premier Lending NC, we open the door for individuals who want to begin investing in real estate.",
    body: [
      "At Premier Lending NC, we open the door for individuals who want to begin investing in real estate.",
      "We guide you step by step, from exploring financing options and acquiring the property to preparing it for a successful rental strategy.",
      "Whether your goal is long-term rental income through annual leases or short-term rentals such as Airbnb, our team is here to support you.",
      "We can also help connect you with practical resources, including lease agreement tools, while guiding you in your preferred language.",
      "Our goal is to help you build a successful and sustainable real estate portfolio with knowledgeable support from beginning to end.",
    ],
    points: [
      {
        t: "Guidance step by step",
        b: "From exploring financing options and acquiring the property to preparing it for a successful rental strategy.",
      },
      {
        t: "Long-term or short-term strategy",
        b: "Whether your goal is long-term rental income through annual leases or short-term rentals such as Airbnb, our team is here to support you.",
      },
      {
        t: "Practical resources in your language",
        b: "We can help connect you with practical resources, including lease agreement tools, while guiding you in your preferred language.",
      },
    ],
    cta: "Talk to a Loan Specialist",
    title: "Rental Property Investment Financing in NC | Premier Lending NC",
    description:
      "Rental property investment financing in North Carolina. Guidance from financing and acquisition through long-term leases or short-term rental strategy.",
    imageAlt: "Well-kept rental duplex with landscaped front yard",
    related: [
      { label: "Fix-and-Flip Financing", to: "/fix-and-flip-financing" },
      { label: "Investment Property Loans", to: "/investment-property-loans" },
      { label: "Investors", to: "/investors" },
    ],
  },
  {
    slug: "fix-and-flip-financing",
    path: "/fix-and-flip-financing",
    ownPage: true,
    category: "Investment Financing",
    nav: "Fix-and-Flip Financing",
    headline: "Investors for Fix-and-Flip Properties",
    summary:
      "At Premier Lending NC, we provide opportunities for investors who may not qualify for traditional fix-and-flip financing.",
    body: [
      "At Premier Lending NC, we provide opportunities for investors who may not qualify for traditional fix-and-flip financing.",
      "For this type of program, we do not review personal credit, bank statements, Social Security information, or tax returns.",
      "Our primary focus is the property itself and whether the investment presents strong potential.",
      "If you send us the property information and it meets the program's investment criteria, the closing process may be completed in approximately three days.",
      "The process is designed to be fast and straightforward, with financing available for up to 80% of the property's value, subject to program terms and approval.",
      "Contact us for additional details.",
      "We will guide you through each step of your fix-and-flip investment, and we can also help you explore resources for identifying off-market properties.",
    ],
    points: [
      {
        t: "The property is the focus",
        b: "For this type of program, we do not review personal credit, bank statements, Social Security information, or tax returns. Our primary focus is the property itself and whether the investment presents strong potential.",
      },
      {
        t: "Closing may take approximately three days",
        b: "If you send us the property information and it meets the program's investment criteria, the closing process may be completed in approximately three days.",
      },
      {
        t: "Up to 80% of property value",
        b: "Financing is available for up to 80% of the property's value, subject to program terms and approval. Contact us for additional details.",
      },
    ],
    cta: "Get Started",
    title: "Fix-and-Flip Investment Financing in NC | Premier Lending NC",
    description:
      "Fix-and-flip financing in North Carolina focused on the property. Closing may be completed in approximately three days, subject to program terms and approval.",
    imageAlt: "Renovation in progress inside a home being prepared for resale",
    related: [
      { label: "Rental Property Financing", to: "/rental-property-financing" },
      { label: "Investment Property Loans", to: "/investment-property-loans" },
      { label: "Investors", to: "/investors" },
    ],
  },
  {
    slug: "refinancing-cash-out",
    path: "/cash-out-refinance",
    ownPage: false,
    category: "Refinancing",
    nav: "Refinancing & Cash-Out",
    headline: "Refinancing to Lower Your Interest Rate or Cash Out",
    summary:
      "At Premier Lending NC, we believe homeownership can create additional financial opportunities.",
    body: [
      "At Premier Lending NC, we believe homeownership can create additional financial opportunities.",
      "If you already own a home, refinancing may provide an opportunity to reduce your current interest rate or lower your monthly payment, depending on market conditions and qualification.",
      "Your property can also be more than a place to live — the equity you have built may allow you to cash out for a business, equipment, unexpected medical expenses, a long-awaited trip, or future investment opportunities.",
      "For eligible borrowers, we can explore refinancing options using bank statements without requiring tax returns.",
      "Contact us so we can evaluate the equity available in your property and determine which refinancing options may fit your goals.",
      "We are here to guide you every step of the way.",
    ],
    points: [
      {
        t: "Rate or payment review",
        b: "Refinancing may provide an opportunity to reduce your current interest rate or lower your monthly payment, depending on market conditions and qualification.",
      },
      {
        t: "Put your equity to work",
        b: "The equity you have built may allow you to cash out for a business, equipment, unexpected medical expenses, a long-awaited trip, or future investment opportunities.",
      },
      {
        t: "Bank statement options",
        b: "For eligible borrowers, we can explore refinancing options using bank statements without requiring tax returns.",
      },
    ],
    cta: "Explore Your Options",
    title: "Refinancing & Cash-Out Refinance in NC | Premier Lending NC",
    description:
      "Refinancing and cash-out refinancing in North Carolina. Review your rate, payment and available equity with a North Carolina mortgage broker.",
    imageAlt: "North Carolina home exterior at dusk with warm interior lighting",
    related: [
      { label: "Refinancing", to: "/refinancing" },
      { label: "Bank Statement Home Loans", to: "/bank-statement-home-loans" },
      { label: "Mortgage Calculator", to: "/calculator" },
    ],
  },
  {
    slug: "non-permanent-resident-mortgages",
    path: "/non-permanent-resident-mortgages",
    ownPage: true,
    category: "Residency Solutions",
    nav: "Non-Permanent Residents",
    headline: "Mortgage Solutions for Non-Permanent Residents or Borrowers with Expired Work Permits",
    summary:
      "At Premier Lending NC, we understand that every borrower has a different immigration and financial profile.",
    body: [
      "At Premier Lending NC, we understand that every borrower has a different immigration and financial profile.",
      "That is why we work to identify mortgage solutions for eligible non-permanent residents, including borrowers whose work permits may have expired.",
      "Our team reviews each situation individually and helps you understand the documentation and financing options that may be available based on the applicable loan program.",
      "Whether your goal is to purchase a primary residence, refinance an existing property, or explore another qualifying mortgage solution, we will guide you through the process clearly and professionally.",
      "Contact Premier Lending NC so our team can review your specific circumstances and help determine the options available to you.",
    ],
    points: [
      {
        t: "Reviewed individually",
        b: "Our team reviews each situation individually and helps you understand the documentation and financing options that may be available based on the applicable loan program.",
      },
      {
        t: "Including expired work permits",
        b: "We work to identify mortgage solutions for eligible non-permanent residents, including borrowers whose work permits may have expired.",
      },
      {
        t: "Purchase or refinance",
        b: "Whether your goal is to purchase a primary residence, refinance an existing property, or explore another qualifying mortgage solution, we guide you through the process clearly and professionally.",
      },
    ],
    cta: "Talk to a Loan Specialist",
    title: "Mortgages for Non-Permanent Residents in NC | Premier Lending NC",
    description:
      "Mortgage solutions for eligible non-permanent residents in North Carolina, including borrowers whose work permits may have expired. Reviewed case by case.",
    imageAlt: "Couple reviewing mortgage documents with a loan specialist",
    related: [
      { label: "ITIN Home Loans", to: "/itin-home-loans" },
      { label: "Bank Statement Home Loans", to: "/bank-statement-home-loans" },
      { label: "Contact Premier Lending NC", to: "/contact" },
    ],
  },
];

export const specialtyBySlug = (slug: string) =>
  specialtySolutions.find((s) => s.slug === slug);
