/**
 * Service (loan program) content. One entry per landing page.
 * Copy is educational and compliance-safe: no rates, approval odds or guarantees.
 */

export type FAQ = { q: string; a: string };

export type Service = {
  slug: string;
  nav: string;
  h1: string;
  title: string;
  description: string;
  eyebrow: string;
  intro: string;
  forWho: string[];
  highlights: { t: string; b: string }[];
  process: { t: string; b: string }[];
  faqs: FAQ[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: "home-loans",
    nav: "Home Loans",
    eyebrow: "Home Loans",
    h1: "Home loans in North Carolina",
    title: "Home Loans in North Carolina | Premier Lending NC",
    description:
      "Explore home loan options across North Carolina with an independent mortgage broker. Compare programs, understand costs and see which structure may fit your purchase.",
    intro:
      "A home loan is not one product — it is a set of programs with different down payment expectations, mortgage insurance rules, property requirements and documentation standards. As an independent brokerage, Premier Lending NC works with multiple lenders so the conversation starts with your situation rather than a single lender's shelf.",
    forWho: [
      "Buyers purchasing a primary residence anywhere in North Carolina",
      "Move-up buyers coordinating a sale and a purchase at the same time",
      "Relocating professionals who need financing reviewed before they house hunt",
      "Buyers who have been told \"no\" once and want a second, structured look",
    ],
    highlights: [
      {
        t: "Program comparison, not a sales pitch",
        b: "Conventional, FHA, VA and portfolio structures are reviewed side by side so you can see how each one changes your down payment, monthly payment and cash to close.",
      },
      {
        t: "Financing reviewed before you shop",
        b: "Knowing your working budget in advance makes offers cleaner and keeps you from falling in love with a price range that does not fit your monthly comfort.",
      },
      {
        t: "One point of contact",
        b: "You work with the same person from the first conversation through closing, rather than being handed between call-center queues.",
      },
    ],
    process: [
      { t: "Conversation", b: "We talk through your goals, timeline, income structure and what you want your monthly payment to feel like." },
      { t: "Document review", b: "Income, assets and credit are reviewed so the numbers you plan around are based on real documentation." },
      { t: "Program options", b: "You receive a written comparison of the structures that fit, including estimated cash to close." },
      { t: "Pre-qualification", b: "A pre-qualification letter supports your offer once you are ready to write one." },
      { t: "Processing & closing", b: "Appraisal, title and underwriting conditions are coordinated through to the closing table." },
    ],
    faqs: [
      { q: "Do I need 20% down to buy a home in North Carolina?", a: "No. Several programs allow considerably less than 20% down, though a lower down payment usually means mortgage insurance and a higher monthly payment. The right amount depends on your cash reserves and monthly comfort, not a universal rule." },
      { q: "What is the difference between a broker and a bank?", a: "A bank offers its own products. An independent broker submits your file to multiple wholesale lenders, which allows program and pricing comparison across several sources." },
      { q: "How early should I start?", a: "Most buyers benefit from starting 30 to 90 days before they plan to write an offer. That leaves time to address documentation or credit items without pressure." },
    ],
    related: ["mortgage-pre-approval", "first-time-home-buyers", "conventional-loans"],
  },
  {
    slug: "first-time-home-buyers",
    nav: "First-Time Buyers",
    eyebrow: "First-Time Buyers",
    h1: "First-time home buyer loans in North Carolina",
    title: "First-Time Home Buyer Loans in NC | Premier Lending NC",
    description:
      "A first-time home buyer guide and loan review for North Carolina: down payment expectations, credit, documentation and what the mortgage process actually looks like.",
    intro:
      "First-time buyers rarely need more enthusiasm — they need a clear picture of the numbers. This page explains what lenders look at, what the down payment conversation really involves and how the North Carolina buying process unfolds from the financing side.",
    forWho: [
      "Renters buying their first home in North Carolina",
      "Buyers who have not owned a primary residence in the past three years, which many programs still treat as first-time",
      "Couples combining incomes and credit profiles for the first time",
      "Buyers receiving gift funds from family toward a down payment",
    ],
    highlights: [
      {
        t: "The four things underwriters review",
        b: "Income stability, assets available to close and reserve, credit history, and the property itself. Everything else in the process supports one of those four.",
      },
      {
        t: "Down payment is not the whole cost",
        b: "Closing costs, prepaid taxes and insurance, and inspection fees sit alongside the down payment. Planning for total cash to close prevents late surprises.",
      },
      {
        t: "Assistance programs may apply",
        b: "North Carolina buyers sometimes qualify for state or local down payment assistance. Eligibility depends on income, location, property and program availability at the time you apply.",
      },
    ],
    process: [
      { t: "Understand your budget", b: "We work backward from a monthly payment you are comfortable with rather than forward from a maximum." },
      { t: "Review credit early", b: "Small, correctable items found early are far easier to address than the same items found during underwriting." },
      { t: "Gather documentation", b: "Pay stubs, W-2s or returns, and asset statements form the backbone of your file." },
      { t: "Get pre-qualified", b: "A reviewed pre-qualification carries more weight with sellers than an unreviewed online estimate." },
      { t: "Offer, appraisal, close", b: "Once under contract, the appraisal, title work and final underwriting run in parallel." },
    ],
    faqs: [
      { q: "What credit score do first-time buyers need?", a: "Minimums vary by program and lender, and credit is only one factor alongside income, debts and assets. A review of your actual report is more useful than a score threshold." },
      { q: "Can I use gift funds for a down payment?", a: "Many programs allow gift funds from eligible sources, with documentation showing where the money came from and that repayment is not expected." },
      { q: "Should I get pre-qualified before touring homes?", a: "It is generally the better order. Sellers in competitive North Carolina markets often expect a pre-qualification letter with an offer." },
    ],
    related: ["mortgage-pre-approval", "fha-loans", "home-loans"],
  },
  {
    slug: "fha-loans",
    nav: "FHA Loans",
    eyebrow: "FHA Financing",
    h1: "FHA loans in North Carolina",
    title: "FHA Loans in North Carolina | Premier Lending NC",
    description:
      "How FHA loans work for North Carolina buyers: down payment structure, mortgage insurance, property standards and who the program tends to fit.",
    intro:
      "FHA loans are insured by the Federal Housing Administration and are often considered by buyers with a smaller down payment or a credit history that is still being rebuilt. The trade-off is mortgage insurance, and understanding that trade-off is the point of an honest comparison.",
    forWho: [
      "Buyers with limited funds available for a down payment",
      "Buyers whose credit history includes past events that are now resolved",
      "Buyers with higher debt-to-income ratios that conventional guidelines may treat differently",
      "Buyers purchasing a primary residence, including some 2-4 unit properties they will live in",
    ],
    highlights: [
      {
        t: "Lower down payment, added insurance",
        b: "FHA financing generally allows a lower down payment than conventional financing, but carries both an upfront and an annual mortgage insurance premium.",
      },
      {
        t: "Property condition matters",
        b: "FHA appraisals include minimum property standards. Homes needing significant repair may require work before closing or a different program.",
      },
      {
        t: "Loan limits are county-specific",
        b: "FHA limits vary by North Carolina county and are updated periodically, which can matter in higher-priced areas of the Triangle.",
      },
    ],
    process: [
      { t: "Eligibility review", b: "We review income, credit and assets against current FHA guidelines and the lender overlays that sit on top of them." },
      { t: "Side-by-side comparison", b: "FHA is compared against conventional so you can see the real monthly and long-term difference." },
      { t: "Pre-qualification", b: "Documentation is reviewed before a letter is issued." },
      { t: "Appraisal & underwriting", b: "The FHA appraisal and underwriting conditions are coordinated on your behalf." },
      { t: "Closing", b: "Final figures are reviewed with you before the closing table." },
    ],
    faqs: [
      { q: "Does FHA mortgage insurance ever go away?", a: "It depends on when the loan was originated and the original loan-to-value. On many current FHA loans the annual premium remains for the life of the loan, which is why comparing against conventional matters." },
      { q: "Can I use an FHA loan for an investment property?", a: "FHA financing is for primary residences. Some buyers use it for a 2-4 unit property where they occupy one unit." },
      { q: "Is FHA always cheaper than conventional?", a: "No. For some borrowers conventional financing is less expensive over time even with a slightly higher rate, because of how mortgage insurance is structured." },
    ],
    related: ["conventional-loans", "first-time-home-buyers", "mortgage-pre-approval"],
  },
  {
    slug: "va-loans",
    nav: "VA Loans",
    eyebrow: "VA Financing",
    h1: "VA home loans in North Carolina",
    title: "VA Home Loans in North Carolina | Premier Lending NC",
    description:
      "VA home loan basics for North Carolina veterans and service members: entitlement, the funding fee, occupancy rules and how the benefit is typically used.",
    intro:
      "The VA home loan benefit is one of the strongest financing tools available, and North Carolina — with Fort Bragg, Camp Lejeune, Seymour Johnson and a large veteran population — sees it used often. Eligibility is determined by the Department of Veterans Affairs; a broker's role is to structure the financing around it.",
    forWho: [
      "Eligible veterans, active-duty service members and certain surviving spouses",
      "Buyers who want to purchase with no down payment where entitlement allows",
      "Service members relocating to or within North Carolina on orders",
      "Homeowners with an existing VA loan considering a refinance",
    ],
    highlights: [
      {
        t: "No monthly mortgage insurance",
        b: "VA loans do not carry monthly mortgage insurance. A one-time funding fee usually applies and may be financed, with exemptions for certain disability ratings.",
      },
      {
        t: "Entitlement and the Certificate of Eligibility",
        b: "Your COE establishes your benefit. Entitlement can sometimes be restored or used more than once, which is worth reviewing before you assume it is unavailable.",
      },
      {
        t: "Occupancy requirements",
        b: "VA financing is for homes you intend to occupy. Rules around relocation and timing exist and should be discussed with your specific orders in hand.",
      },
    ],
    process: [
      { t: "Confirm eligibility", b: "We help you understand the COE process and what entitlement you have available." },
      { t: "Structure the purchase", b: "Funding fee, seller concessions and cash to close are mapped out before you write an offer." },
      { t: "Pre-qualification", b: "Income and credit documentation is reviewed and a letter issued." },
      { t: "VA appraisal", b: "The VA appraisal has its own standards and timeline, which we coordinate." },
      { t: "Closing", b: "Final numbers are reviewed with you in advance." },
    ],
    faqs: [
      { q: "Can I use my VA benefit more than once?", a: "In many cases yes. Entitlement can be restored after a prior VA loan is paid off, and some borrowers have remaining entitlement available for a second use." },
      { q: "Is the funding fee always required?", a: "Certain veterans, including some receiving compensation for a service-connected disability, are exempt. Your COE reflects exemption status." },
      { q: "Can a VA loan be used for an investment property?", a: "The benefit is intended for owner-occupied homes. Multi-unit properties where you occupy a unit may be possible under program rules." },
    ],
    related: ["home-loans", "mortgage-pre-approval", "refinancing"],
  },
  {
    slug: "conventional-loans",
    nav: "Conventional Loans",
    eyebrow: "Conventional Financing",
    h1: "Conventional home loans in North Carolina",
    title: "Conventional Home Loans in NC | Premier Lending NC",
    description:
      "Conventional mortgage financing explained for North Carolina buyers: down payment options, private mortgage insurance, loan limits and how it compares to FHA.",
    intro:
      "Conventional financing follows guidelines set by Fannie Mae and Freddie Mac rather than a government insurance program. For borrowers with reasonably strong credit it is often the most flexible structure, particularly because private mortgage insurance can be removed as equity builds.",
    forWho: [
      "Buyers with established credit histories",
      "Buyers planning to put down anywhere from a modest amount up to 20% or more",
      "Buyers of second homes and investment properties, which FHA and VA do not cover",
      "Homeowners refinancing to remove mortgage insurance",
    ],
    highlights: [
      {
        t: "PMI is not permanent",
        b: "Private mortgage insurance on a conventional loan can generally be removed once sufficient equity is reached, unlike most current FHA structures.",
      },
      {
        t: "Credit profile drives pricing",
        b: "Conventional pricing is sensitive to credit score and loan-to-value, so improving one or both before locking can change your monthly payment.",
      },
      {
        t: "Conforming limits",
        b: "Loans above the conforming limit for your North Carolina county move into jumbo territory with different guidelines and documentation.",
      },
    ],
    process: [
      { t: "Profile review", b: "Credit, income and assets are reviewed against current conventional guidelines." },
      { t: "PMI analysis", b: "We model borrower-paid, lender-paid and single-premium mortgage insurance so you can see the real difference." },
      { t: "Pre-qualification", b: "A documented letter supports your offer." },
      { t: "Underwriting", b: "Conditions, appraisal and title are coordinated." },
      { t: "Closing", b: "Final disclosures are walked through before signing." },
    ],
    faqs: [
      { q: "How much do I need down for a conventional loan?", a: "Some conventional programs allow as little as 3% down for eligible buyers, though the down payment affects mortgage insurance and monthly cost." },
      { q: "When can PMI be removed?", a: "Removal rules depend on your loan-to-value, payment history and lender or servicer requirements. It is generally tied to reaching a set equity threshold." },
      { q: "Is conventional better than FHA?", a: "Neither is universally better. The comparison depends on your credit profile, down payment and how long you expect to hold the loan." },
    ],
    related: ["fha-loans", "refinancing", "mortgage-pre-approval"],
  },
  {
    slug: "refinancing",
    nav: "Refinancing",
    eyebrow: "Refinancing",
    h1: "Mortgage refinancing in North Carolina",
    title: "Mortgage Refinancing in North Carolina | Premier Lending NC",
    description:
      "Refinance options for North Carolina homeowners: rate-and-term, cash-out and mortgage insurance removal, with a break-even analysis before you commit.",
    intro:
      "A refinance is only worth doing when the math works for your actual holding period. Before any application, the useful exercise is a break-even analysis: what the refinance costs, what it changes monthly, and how long you need to stay for it to be worth it.",
    forWho: [
      "Homeowners whose credit or equity position has improved since their original loan",
      "Homeowners carrying mortgage insurance they may now be able to remove",
      "Homeowners consolidating higher-interest debt against home equity",
      "Homeowners changing loan term to pay off a mortgage sooner",
    ],
    highlights: [
      {
        t: "Rate-and-term",
        b: "Changes the rate, the term or both without taking additional cash out. Often used to shorten a loan or remove mortgage insurance.",
      },
      {
        t: "Cash-out",
        b: "Converts part of your equity to cash. Guidelines on loan-to-value, reserves and occupancy are stricter than rate-and-term.",
      },
      {
        t: "Break-even honesty",
        b: "If closing costs take longer to recover than you plan to keep the home, the right advice is to wait. That analysis comes before any application.",
      },
    ],
    process: [
      { t: "Goal and holding period", b: "We start with why you are refinancing and how long you expect to keep the property." },
      { t: "Equity estimate", b: "A preliminary value estimate frames which programs are realistically available." },
      { t: "Break-even analysis", b: "Total costs are compared against monthly change so the decision is numeric, not emotional." },
      { t: "Application & appraisal", b: "If it makes sense, documentation and appraisal are coordinated." },
      { t: "Closing", b: "Refinances on a primary residence typically include a rescission period after signing." },
    ],
    faqs: [
      { q: "How much equity do I need to refinance?", a: "Requirements differ by program and by whether you are taking cash out. A preliminary review of your estimated value and balance will show what is realistic." },
      { q: "Does refinancing restart my loan?", a: "A new loan replaces the old one, so the term resets unless you deliberately choose a shorter term. Shortening the term is a common goal." },
      { q: "Will a refinance affect my credit?", a: "An application involves a credit inquiry and a new account, which can cause a temporary change. The long-term effect depends on your overall profile and payment history." },
    ],
    related: ["conventional-loans", "va-loans", "investment-property-loans"],
  },
  {
    slug: "investment-property-loans",
    nav: "Investment Loans",
    eyebrow: "Investment Financing",
    h1: "Investment property loans in North Carolina",
    title: "Investment Property Loans in NC | Premier Lending NC",
    description:
      "Financing for North Carolina rental and investment property: down payment and reserve expectations, DSCR-style structures, and how portfolio growth is planned.",
    intro:
      "Investment financing is a different discipline from owner-occupied lending. Guidelines are stricter, reserves matter more, and the structure you choose on property two often determines whether property four is possible. Planning the sequence is as important as closing the current deal.",
    forWho: [
      "Buyers acquiring their first rental property in North Carolina",
      "Investors scaling a small portfolio across the Triangle and beyond",
      "Owners refinancing rentals to release equity for the next acquisition",
      "Self-employed investors whose tax returns understate cash flow",
    ],
    highlights: [
      {
        t: "Down payment and reserves",
        b: "Investment financing generally requires a larger down payment than owner-occupied and often documented reserves after closing.",
      },
      {
        t: "Property-cash-flow structures",
        b: "Some lenders offer structures that qualify a loan on the property's rental income rather than personal income documentation, subject to their guidelines.",
      },
      {
        t: "Sequencing matters",
        b: "How you title, document and finance each property affects your ability to finance the next one. That conversation belongs at the start.",
      },
    ],
    process: [
      { t: "Portfolio conversation", b: "We map where you are and where you want the portfolio to be in three to five years." },
      { t: "Structure selection", b: "Conventional investor financing and alternative documentation structures are compared." },
      { t: "Deal analysis", b: "Payment, reserves and cash to close are modeled against your projected rents." },
      { t: "Underwriting", b: "Leases, appraisals with rent schedules and reserves are coordinated." },
      { t: "Next acquisition", b: "We plan the following purchase before this one closes." },
    ],
    faqs: [
      { q: "How many financed properties can I have?", a: "Limits depend on the program and lender. Conventional guidelines have property-count considerations, while some portfolio lenders do not apply the same limits." },
      { q: "Can projected rent help me qualify?", a: "In some structures, rental income supported by a lease or an appraiser's rent schedule can be considered. Rules vary by program." },
      { q: "Do short-term rentals qualify?", a: "Some lenders finance short-term rental properties under specific guidelines. Local ordinances and documented income history both matter." },
    ],
    related: ["refinancing", "conventional-loans", "home-loans"],
  },
  {
    slug: "mortgage-pre-approval",
    nav: "Pre-Approval",
    eyebrow: "Pre-Approval",
    h1: "Mortgage pre-approval in North Carolina",
    title: "Mortgage Pre-Approval in North Carolina | Premier Lending NC",
    description:
      "What mortgage pre-approval involves in North Carolina, how it differs from pre-qualification, what documents are needed and how long it typically stays valid.",
    intro:
      "Pre-approval is where a real conversation becomes a documented position. It is not a commitment to lend, but a reviewed file gives sellers confidence and gives you a budget you can act on without guessing.",
    forWho: [
      "Buyers preparing to make an offer in a competitive North Carolina market",
      "Buyers who want their documentation reviewed before they fall in love with a house",
      "Buyers comparing what they can borrow with what they want to spend monthly",
      "Buyers whose income is self-employed, commissioned or bonus-based",
    ],
    highlights: [
      {
        t: "Pre-qualification vs. pre-approval",
        b: "Pre-qualification is based on information you provide. Pre-approval involves reviewing documentation, which is why it carries more weight with listing agents.",
      },
      {
        t: "What you will need",
        b: "Typically recent pay stubs, two years of W-2s or tax returns, recent asset statements and authorization to review credit.",
      },
      {
        t: "Validity window",
        b: "Letters are time-limited because income, credit and asset documentation age. Updating is usually straightforward.",
      },
    ],
    process: [
      { t: "Intake", b: "A short structured conversation about goals, timeline and property type." },
      { t: "Documentation", b: "You upload income, asset and identification documents securely." },
      { t: "Credit review", b: "Your report is reviewed with you, including anything worth addressing." },
      { t: "Letter issued", b: "You receive a pre-qualification or pre-approval letter appropriate to your file." },
      { t: "Offer support", b: "Letters can be reissued at the offer amount when your agent needs it." },
    ],
    faqs: [
      { q: "How long does pre-approval take?", a: "Once your documents are received, an initial review is often quick. Complex income structures take longer because they deserve more care." },
      { q: "Does pre-approval guarantee a loan?", a: "No. It is not a commitment to lend. Final approval depends on full underwriting, the property, appraisal, title and continued eligibility." },
      { q: "Will shopping lenders hurt my credit?", a: "Mortgage inquiries made within a short window are generally treated as a single event by common scoring models, though specifics vary." },
    ],
    related: ["first-time-home-buyers", "home-loans", "fha-loans"],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
