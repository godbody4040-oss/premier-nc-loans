import type { FAQ } from "./services";

export type Article = {
  slug: string;
  category: Category;
  title: string;
  metaTitle: string;
  description: string;
  published: string;
  updated: string;
  readMinutes: number;
  intro: string;
  sections: { h: string; p: string[]; list?: string[] }[];
  faqs: FAQ[];
  relatedServices: string[];
  relatedLocations?: string[];
};

export const categories = [
  "First-Time Home Buyers",
  "Mortgage Education",
  "Credit & Home Buying",
  "Down Payments",
  "Refinancing",
  "Loan Programs",
  "North Carolina Home Buying",
  "Mortgage FAQs",
] as const;

export type Category = (typeof categories)[number];

export const categorySlug = (c: Category) =>
  c.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const AUTHOR = "Jorge Vasquez";

export const author = {
  name: AUTHOR,
  role: "Mortgage Broker & Economic Consultant, Premier Lending NC",
};

export const articles: Article[] = [
  {
    slug: "how-much-house-can-i-afford-in-north-carolina",
    category: "First-Time Home Buyers",
    title: "How Much House Can I Afford in North Carolina?",
    metaTitle: "How Much House Can I Afford in North Carolina? | Premier Lending NC",
    description:
      "A practical framework for working out an affordable home price in North Carolina, using monthly comfort, debt ratios, taxes, insurance and HOA dues.",
    published: "2026-01-14",
    updated: "2026-08-08",
    readMinutes: 7,
    intro:
      "Affordability has two answers: the number a lender will approve, and the number you will be comfortable paying every month for years. They are rarely the same, and the second one matters more.",
    sections: [
      {
        h: "Start with the monthly payment, not the price",
        p: [
          "Most buyers begin with a home price and work toward a payment. Reversing that order produces better decisions. Decide what you want your total housing payment to be, then let the price follow from it.",
          "Your total payment includes principal and interest, property taxes, homeowners insurance, mortgage insurance if applicable, and HOA dues if the property has them. In parts of Wake and Orange counties, taxes and dues together can move the monthly figure meaningfully.",
        ],
      },
      {
        h: "Understand how lenders view your ratios",
        p: [
          "Lenders look at your housing payment relative to gross monthly income, and at total monthly debt relative to that same income. Guidelines vary by program, and compensating factors such as reserves or credit depth can affect what is acceptable.",
          "Because the ratio uses gross income, an approval can look comfortable on paper and tight in real life once taxes, retirement contributions and childcare come out of the same paycheck.",
        ],
      },
      {
        h: "Account for cash to close, not just the down payment",
        p: [
          "Down payment is one component. Closing costs, prepaid property taxes and insurance, and inspection and appraisal fees sit alongside it. Planning around total cash to close prevents late-stage stress.",
        ],
        list: [
          "Down payment for the program you choose",
          "Lender and third-party closing costs",
          "Prepaid taxes and insurance funding the escrow account",
          "Inspections, appraisal and any due diligence fee",
          "Reserves left over after closing, which some programs require",
        ],
      },
      {
        h: "Test the number before you commit",
        p: [
          "A useful exercise: set aside the difference between your current rent and your projected total payment every month for three months. If that feels sustainable, the number is probably right. If it does not, adjust the target before you shop.",
        ],
      },
    ],
    faqs: [
      { q: "Should I borrow the maximum I qualify for?", a: "Usually not. A maximum approval reflects guideline limits, not your other goals such as saving, travel or childcare costs." },
      { q: "Do property taxes really change affordability much?", a: "They can. Tax rates and assessed values differ by county and municipality, and the escrow portion of your payment moves with them." },
    ],
    relatedServices: ["mortgage-pre-approval", "first-time-home-buyers"],
    relatedLocations: ["raleigh-nc", "cary-nc"],
  },
  {
    slug: "how-much-should-i-save-for-a-down-payment",
    category: "Down Payments",
    title: "How Much Should I Save for a Down Payment?",
    metaTitle: "How Much Should I Save for a Down Payment? | Premier Lending NC",
    description:
      "Down payment expectations by loan program, the trade-off between a smaller down payment and mortgage insurance, and how to think about reserves.",
    published: "2026-01-21",
    updated: "2026-08-08",
    readMinutes: 6,
    intro:
      "The idea that you need 20% down is one of the most persistent myths in home buying. Several programs allow far less. The real question is what a smaller down payment costs you each month, and whether that trade is worth it for your situation.",
    sections: [
      {
        h: "Requirements differ by program",
        p: [
          "Conventional financing can allow a low down payment for eligible buyers. FHA financing has its own minimum. VA financing may allow no down payment for eligible veterans and service members. Investment property financing generally requires substantially more.",
          "None of these are promises — each depends on your qualification, the property and the lender's guidelines.",
        ],
      },
      {
        h: "The mortgage insurance trade-off",
        p: [
          "Putting less down usually means mortgage insurance. On conventional loans, private mortgage insurance can generally be removed once you reach a set equity level. On most current FHA loans, the annual premium remains for the life of the loan.",
          "That difference is why comparing programs matters more than chasing the lowest down payment.",
        ],
      },
      {
        h: "Do not drain your reserves",
        p: [
          "Closing with nothing left is a risk, not a strategy. A first year of ownership usually brings at least one unplanned expense. Some programs also require documented reserves after closing.",
        ],
      },
      {
        h: "Where the money can come from",
        p: ["Savings, documented gift funds from eligible sources, certain retirement account provisions, and in some cases down payment assistance programs. Every source must be documented and seasoned according to guidelines."],
      },
    ],
    faqs: [
      { q: "Is a larger down payment always better?", a: "Not always. Keeping cash reserves or paying down higher-interest debt can be a better use of the same money depending on your situation." },
      { q: "Can my parents help with the down payment?", a: "Gift funds from eligible sources are permitted by many programs with a documented gift letter and a paper trail." },
    ],
    relatedServices: ["first-time-home-buyers", "conventional-loans", "fha-loans"],
  },
  {
    slug: "how-does-mortgage-pre-approval-work",
    category: "Mortgage Education",
    title: "How Does Mortgage Pre-Approval Work?",
    metaTitle: "How Does Mortgage Pre-Approval Work? | Premier Lending NC",
    description:
      "What happens during mortgage pre-approval, what documents are reviewed, how long a letter lasts and why sellers treat it differently from an online estimate.",
    published: "2026-02-04",
    updated: "2026-08-08",
    readMinutes: 6,
    intro:
      "Pre-approval turns an estimate into a documented position. It is not a commitment to lend, but it is the point where your numbers stop being hypothetical.",
    sections: [
      {
        h: "What actually gets reviewed",
        p: ["Income documentation, asset statements, credit history and your stated goals. The reviewer is checking that the numbers you plan around can be supported by paperwork."],
        list: [
          "Recent pay stubs, or tax returns for self-employed income",
          "W-2s or 1099s covering a recent period",
          "Bank and investment statements showing funds to close",
          "Authorization to review your credit report",
          "Identification and, if applicable, residency documentation",
        ],
      },
      {
        h: "Why sellers care",
        p: [
          "A listing agent comparing two offers will weigh the strength of the financing behind each. A letter based on reviewed documentation is more credible than an unreviewed online figure.",
        ],
      },
      {
        h: "How long it lasts",
        p: [
          "Letters are time-limited because pay stubs, statements and credit reports age. Refreshing a letter is usually straightforward if your situation has not changed.",
        ],
      },
      {
        h: "What can still change",
        p: [
          "Pre-approval is not final approval. The property, appraisal, title, and full underwriting still matter, and so does keeping your financial picture stable until closing.",
        ],
      },
    ],
    faqs: [
      { q: "Can I be denied after pre-approval?", a: "Yes. Pre-approval is not a commitment to lend. Changes in income, credit or the property can affect the outcome." },
      { q: "Should I stop using credit after pre-approval?", a: "Avoid new debt, large purchases and account changes until closing. New obligations change the ratios your approval was based on." },
    ],
    relatedServices: ["mortgage-pre-approval", "home-loans"],
  },
  {
    slug: "fha-vs-conventional-loans",
    category: "Loan Programs",
    title: "FHA vs Conventional Loans: How to Compare",
    metaTitle: "FHA vs Conventional Loans Compared | Premier Lending NC",
    description:
      "A side-by-side look at FHA and conventional financing: down payment, mortgage insurance, credit considerations and property standards.",
    published: "2026-02-11",
    updated: "2026-08-08",
    readMinutes: 7,
    intro:
      "Neither program is universally better. The right comparison is specific to your credit profile, your down payment and how long you expect to keep the loan.",
    sections: [
      {
        h: "The core structural difference",
        p: [
          "FHA loans are insured by a government agency, which allows lenders more flexibility on credit and ratios. Conventional loans follow Fannie Mae and Freddie Mac guidelines and price more directly off your credit and loan-to-value.",
        ],
      },
      {
        h: "Mortgage insurance is the deciding factor for many",
        p: [
          "Conventional private mortgage insurance can generally be removed once you reach an equity threshold. Most current FHA loans carry the annual premium for the life of the loan.",
          "For a borrower who plans to stay ten years, that difference can outweigh a modest rate advantage in either direction.",
        ],
      },
      {
        h: "Property condition",
        p: [
          "FHA appraisals apply minimum property standards. An older home needing repair may pass a conventional appraisal but require work under FHA.",
        ],
      },
      {
        h: "How to actually decide",
        p: ["Ask for both scenarios in writing, with total monthly payment, cash to close and estimated cost over five and ten years. The answer is usually obvious once it is on one page."],
      },
    ],
    faqs: [
      { q: "Is FHA only for first-time buyers?", a: "No. FHA financing is available to repeat buyers purchasing a primary residence, subject to guidelines." },
      { q: "Can I refinance from FHA to conventional later?", a: "Many homeowners do, often to remove mortgage insurance once they have sufficient equity. Whether it makes sense depends on the numbers at that time." },
    ],
    relatedServices: ["fha-loans", "conventional-loans"],
  },
  {
    slug: "va-home-loans-in-north-carolina",
    category: "Loan Programs",
    title: "VA Home Loans in North Carolina: What to Know",
    metaTitle: "VA Home Loans in North Carolina | Premier Lending NC",
    description:
      "How the VA home loan benefit works for North Carolina veterans and service members: entitlement, the funding fee, occupancy and reuse of the benefit.",
    published: "2026-02-18",
    updated: "2026-08-08",
    readMinutes: 6,
    intro:
      "North Carolina has one of the largest military and veteran populations in the country, and the VA loan benefit is used heavily here. It is also widely misunderstood.",
    sections: [
      {
        h: "Entitlement and the Certificate of Eligibility",
        p: [
          "Your Certificate of Eligibility establishes your benefit and how much entitlement you have available. Eligibility is determined by the Department of Veterans Affairs based on service history.",
        ],
      },
      {
        h: "No monthly mortgage insurance, but a funding fee",
        p: [
          "VA loans do not carry monthly mortgage insurance, which is a significant monthly advantage. A one-time funding fee usually applies and can often be financed. Certain veterans, including some receiving compensation for a service-connected disability, are exempt.",
        ],
      },
      {
        h: "Occupancy and PCS moves",
        p: [
          "The benefit is intended for homes you will occupy. Rules exist around timing and relocation, which matter when orders and closing dates do not line up neatly.",
        ],
      },
      {
        h: "Using the benefit more than once",
        p: ["Entitlement can often be restored after a prior VA loan is paid off, and some borrowers have remaining entitlement available for a second use."],
      },
    ],
    faqs: [
      { q: "Do VA appraisals take longer?", a: "VA appraisals follow their own process and standards. Timelines vary by area and appraiser availability." },
      { q: "Can I buy a duplex with a VA loan?", a: "Multi-unit properties may be possible under program rules when you occupy one of the units." },
    ],
    relatedServices: ["va-loans", "mortgage-pre-approval"],
  },
  {
    slug: "first-time-home-buyer-guide-for-raleigh",
    category: "North Carolina Home Buying",
    title: "First-Time Home Buyer Guide for Raleigh",
    metaTitle: "First-Time Home Buyer Guide for Raleigh, NC | Premier Lending NC",
    description:
      "A step-by-step first-time buyer guide for Raleigh, NC: budgeting for Wake County taxes, getting pre-qualified, making an offer and closing.",
    published: "2026-02-25",
    updated: "2026-08-08",
    readMinutes: 8,
    intro:
      "Buying your first home in Raleigh means competing in a market with steady in-migration. Preparation is the main advantage available to a first-time buyer.",
    sections: [
      {
        h: "Build the budget around Wake County reality",
        p: [
          "Property taxes and, in many neighborhoods, HOA dues both flow into your monthly payment. Estimating them from the specific property rather than a rule of thumb keeps your budget honest.",
        ],
      },
      {
        h: "Get financing reviewed before you tour",
        p: [
          "In a market where good listings move, having a reviewed pre-qualification ready is not an optional refinement. It is what allows you to act when the right home appears.",
        ],
      },
      {
        h: "Understand due diligence in North Carolina",
        p: [
          "North Carolina purchase contracts typically involve a due diligence period and a due diligence fee, which is generally non-refundable. Budget for it separately from your down payment and closing costs.",
        ],
      },
      {
        h: "Plan the inspection and appraisal window",
        p: ["Inspections, the appraisal, and any repair negotiation all happen on a clock. Knowing the sequence in advance reduces the pressure when it starts."],
      },
    ],
    faqs: [
      { q: "What is a due diligence fee?", a: "In North Carolina it is a negotiated amount paid to the seller for the right to investigate the property. It is typically credited at closing but generally non-refundable if you walk away." },
      { q: "How competitive is the Raleigh market?", a: "Conditions change over time and by price band. Your agent can speak to current conditions; our role is making sure your financing is ready when you need it." },
    ],
    relatedServices: ["first-time-home-buyers", "mortgage-pre-approval"],
    relatedLocations: ["raleigh-nc", "garner-nc"],
  },
  {
    slug: "how-credit-scores-affect-mortgage-rates",
    category: "Credit & Home Buying",
    title: "How Credit Scores Affect Mortgage Pricing",
    metaTitle: "How Credit Scores Affect Mortgage Pricing | Premier Lending NC",
    description:
      "Why credit score and loan-to-value both influence mortgage pricing, which scores lenders use, and practical steps before you apply.",
    published: "2026-03-04",
    updated: "2026-08-08",
    readMinutes: 6,
    intro:
      "Credit affects mortgage pricing, but not in the simple way most articles suggest. It interacts with your loan-to-value, your program and the property type.",
    sections: [
      {
        h: "Lenders do not use the score you see in your banking app",
        p: [
          "Mortgage lenders typically pull all three bureaus and use a specific set of scoring models built for mortgage lending. Consumer apps often show a different model, so the number can differ from what you expect.",
        ],
      },
      {
        h: "Score and down payment work together",
        p: [
          "Pricing adjustments are generally based on the combination of credit score and loan-to-value. A modest score improvement can matter more at a low down payment than at a high one.",
        ],
      },
      {
        h: "What actually helps before applying",
        p: ["Small, boring actions usually outperform dramatic ones."],
        list: [
          "Pay revolving balances down well before you apply",
          "Do not close old accounts, which can shorten your credit history",
          "Avoid new financing, including furniture and car loans",
          "Dispute genuine reporting errors early, as corrections take time",
          "Keep every payment on time — history carries substantial weight",
        ],
      },
      {
        h: "What if your credit is not where you want it",
        p: ["It is worth reviewing the actual report rather than the score. Sometimes one correctable item is doing most of the damage, and a review costs nothing."],
      },
    ],
    faqs: [
      { q: "Will checking my credit hurt my score?", a: "Reviewing your own report does not. A lender's inquiry can have a small temporary effect, and mortgage inquiries within a short window are generally treated as one event." },
      { q: "Is there a minimum credit score?", a: "Minimums vary by program and lender, and credit is only one of several factors reviewed." },
    ],
    relatedServices: ["conventional-loans", "mortgage-pre-approval"],
  },
  {
    slug: "how-long-does-mortgage-approval-take",
    category: "Mortgage FAQs",
    title: "How Long Does Mortgage Approval Take?",
    metaTitle: "How Long Does Mortgage Approval Take? | Premier Lending NC",
    description:
      "The realistic timeline from application to closing, which stages typically cause delays, and what a borrower can control.",
    published: "2026-03-11",
    updated: "2026-08-08",
    readMinutes: 5,
    intro:
      "Timelines vary by loan type, property and lender workload. What is consistent is which stages tend to create delay — and most of them are avoidable.",
    sections: [
      {
        h: "The main stages",
        p: ["Application and document collection, underwriting review, appraisal, title work, conditions, and finally closing preparation."],
      },
      {
        h: "Where files usually slow down",
        p: ["Rarely the underwriting itself."],
        list: [
          "Documents returned in pieces over several days rather than together",
          "Large unexplained deposits that require sourcing",
          "Appraisal scheduling in busy periods or rural areas",
          "Title issues such as liens, estates or boundary questions",
          "Employment or income changes mid-process",
        ],
      },
      {
        h: "What you can control",
        p: [
          "Respond to document requests quickly, keep your financial picture stable, and avoid opening new credit. Those three habits shorten more timelines than anything a lender does.",
        ],
      },
    ],
    faqs: [
      { q: "Can closing be delayed at the last minute?", a: "It can, most often due to appraisal, title or a last-minute change in the borrower's financial picture." },
      { q: "Is a faster lender always better?", a: "Speed matters, but accuracy matters more. A file that closes late is better than one that closes wrong." },
    ],
    relatedServices: ["mortgage-pre-approval", "home-loans"],
  },
  {
    slug: "what-documents-do-i-need-for-a-mortgage",
    category: "Mortgage FAQs",
    title: "What Documents Do I Need for a Mortgage?",
    metaTitle: "Mortgage Document Checklist | Premier Lending NC",
    description:
      "A practical mortgage document checklist covering income, assets, identification and situation-specific paperwork.",
    published: "2026-03-18",
    updated: "2026-08-08",
    readMinutes: 5,
    intro:
      "Nearly every document request maps to one of four questions: how do you earn, what do you have, what do you owe, and who are you.",
    sections: [
      {
        h: "Income",
        p: ["What is required depends on how you are paid."],
        list: [
          "Recent pay stubs covering a full pay period",
          "W-2s for the past two years for salaried income",
          "Personal and business tax returns for self-employed income",
          "Documentation of bonus, commission or overtime history",
          "Award letters for retirement, pension or disability income",
        ],
      },
      {
        h: "Assets",
        p: ["All pages of recent statements for accounts holding funds to close, plus documentation for any gift funds."],
      },
      {
        h: "Identification and property",
        p: ["Government identification, and once under contract, the purchase agreement and homeowners insurance information."],
      },
      {
        h: "Situation-specific items",
        p: ["Divorce decrees, bankruptcy discharge papers, lease agreements for rental property and residency documentation can all apply depending on your circumstances."],
      },
    ],
    faqs: [
      { q: "Why do lenders want all pages of a statement?", a: "Guidelines require the complete document, including pages that appear blank, so the record is verifiably whole." },
      { q: "Why was I asked about a specific deposit?", a: "Large deposits that are not clearly payroll must be sourced to confirm the funds are yours and not undisclosed borrowed money." },
    ],
    relatedServices: ["mortgage-pre-approval", "first-time-home-buyers"],
  },
  {
    slug: "pre-qualification-vs-pre-approval",
    category: "Mortgage Education",
    title: "Mortgage Pre-Qualification vs Pre-Approval",
    metaTitle: "Pre-Qualification vs Pre-Approval Explained | Premier Lending NC",
    description:
      "The practical difference between pre-qualification and pre-approval, and which one a seller is more likely to take seriously.",
    published: "2026-03-25",
    updated: "2026-08-08",
    readMinutes: 4,
    intro:
      "The two terms are used loosely, including by professionals. The distinction that matters is how much verification stands behind the letter.",
    sections: [
      {
        h: "Pre-qualification",
        p: ["Based largely on information you provide. It is fast and useful for orientation, but nothing has been verified."],
      },
      {
        h: "Pre-approval",
        p: ["Involves reviewing documentation — income, assets and credit. Because a person has examined the file, it carries more weight when offers are compared."],
      },
      {
        h: "Neither is a commitment to lend",
        p: ["Both are conditional. Final approval depends on full underwriting, the property, appraisal, title and continued eligibility."],
      },
    ],
    faqs: [
      { q: "Which do I need to make an offer?", a: "Ask your agent about local expectations. In competitive situations a verified pre-approval is generally the stronger position." },
      { q: "How fast can I get a letter?", a: "A pre-qualification can often be issued quickly. A pre-approval takes as long as it takes to review your documents properly." },
    ],
    relatedServices: ["mortgage-pre-approval"],
  },
  {
    slug: "understanding-your-monthly-mortgage-payment",
    category: "Mortgage Education",
    title: "What Is Actually in Your Monthly Mortgage Payment",
    metaTitle: "What's in Your Monthly Mortgage Payment | Premier Lending NC",
    description:
      "A breakdown of principal, interest, taxes, insurance, mortgage insurance and HOA dues, and how each one changes over time.",
    published: "2026-04-01",
    updated: "2026-08-08",
    readMinutes: 5,
    intro:
      "Buyers often compare quoted principal-and-interest figures and are surprised by the real monthly total. The other components are not small.",
    sections: [
      {
        h: "Principal and interest",
        p: ["The loan repayment itself. Early in the term more of it goes to interest; the balance shifts gradually toward principal."],
      },
      {
        h: "Taxes and insurance",
        p: ["Usually collected monthly into an escrow account and paid on your behalf. Both can change annually, which is why your payment can move even on a fixed-rate loan."],
      },
      {
        h: "Mortgage insurance",
        p: ["Applies to many lower-down-payment loans. Whether it can be removed later depends on the program."],
      },
      {
        h: "HOA dues",
        p: ["Paid to the association, not the lender, but counted in your qualifying ratios and very much part of your real monthly cost."],
      },
    ],
    faqs: [
      { q: "Why did my payment change on a fixed-rate loan?", a: "Usually an escrow adjustment after a change in property taxes or insurance premiums." },
      { q: "Can I pay taxes and insurance myself?", a: "Some loans allow escrow waivers under specific conditions. Availability depends on the program and your loan-to-value." },
    ],
    relatedServices: ["home-loans", "conventional-loans"],
  },
  {
    slug: "should-i-refinance-my-mortgage",
    category: "Refinancing",
    title: "Should I Refinance My Mortgage?",
    metaTitle: "Should I Refinance My Mortgage? | Premier Lending NC",
    description:
      "A break-even framework for deciding whether to refinance, including costs, term reset considerations and mortgage insurance removal.",
    published: "2026-04-08",
    updated: "2026-08-08",
    readMinutes: 6,
    intro:
      "A refinance is a math problem with a personal input: how long you plan to stay. Without that number, no rate comparison means much.",
    sections: [
      {
        h: "Calculate the break-even",
        p: [
          "Divide the total cost of the refinance by the monthly savings. The result is the number of months you must stay for the refinance to pay for itself. If you plan to move before then, the answer is usually no.",
        ],
      },
      {
        h: "Watch the term reset",
        p: [
          "Refinancing into a new thirty-year loan after eight years of payments lowers the monthly figure but extends the payoff. Comparing shorter terms alongside is worth doing.",
        ],
      },
      {
        h: "Reasons beyond rate",
        p: ["Removing mortgage insurance, moving off an adjustable structure, changing term to accelerate payoff, or consolidating higher-interest debt can each justify a refinance independently of rate."],
      },
    ],
    faqs: [
      { q: "How much equity do I need?", a: "It depends on the program and whether you are taking cash out. A preliminary review of your balance and estimated value will show what is realistic." },
      { q: "Are there no-cost refinances?", a: "Costs are generally either paid up front, financed into the balance, or reflected in the rate. It is worth asking which is happening." },
    ],
    relatedServices: ["refinancing", "conventional-loans"],
  },
  {
    slug: "cash-out-refinance-explained",
    category: "Refinancing",
    title: "Cash-Out Refinance: How It Works and What to Weigh",
    metaTitle: "Cash-Out Refinance Explained | Premier Lending NC",
    description:
      "How a cash-out refinance works, typical guideline differences, common uses and the risks of converting equity into cash.",
    published: "2026-04-15",
    updated: "2026-08-08",
    readMinutes: 5,
    intro:
      "A cash-out refinance replaces your mortgage with a larger one and returns the difference in cash. It converts equity into liquidity — and into debt secured by your home.",
    sections: [
      {
        h: "How the structure differs",
        p: ["Guidelines for cash-out are generally stricter than rate-and-term, particularly on loan-to-value limits, credit and reserves. Occupancy type also matters."],
      },
      {
        h: "Common reasons homeowners consider it",
        p: ["Consolidating higher-interest debt, funding a renovation, or freeing capital for an investment purchase. Each has a different risk profile."],
      },
      {
        h: "The risk worth naming",
        p: [
          "Consolidating unsecured debt into a mortgage moves that debt onto your home. If the underlying spending pattern does not change, the balances can rebuild while the mortgage remains larger.",
        ],
      },
    ],
    faqs: [
      { q: "Is the cash taxable?", a: "Loan proceeds are generally not income, but tax treatment of interest depends on use and your circumstances. Speak with a tax professional." },
      { q: "Can I take cash out on a rental property?", a: "It may be possible, generally with tighter loan-to-value limits and reserve requirements than a primary residence." },
    ],
    relatedServices: ["refinancing", "investment-property-loans"],
  },
  {
    slug: "buying-your-first-investment-property-in-north-carolina",
    category: "North Carolina Home Buying",
    title: "Buying Your First Investment Property in North Carolina",
    metaTitle: "First Investment Property in NC | Premier Lending NC",
    description:
      "What changes when you finance a rental instead of a home: down payment, reserves, rental income treatment and planning for the next purchase.",
    published: "2026-04-22",
    updated: "2026-08-08",
    readMinutes: 7,
    intro:
      "The first rental is where most investors learn that financing, not the property, is the constraint on growth. Structuring the first purchase with the second one in mind changes what is possible later.",
    sections: [
      {
        h: "Expect a different set of requirements",
        p: ["Investment financing generally requires a larger down payment than owner-occupied lending, along with documented reserves after closing."],
      },
      {
        h: "How rental income is treated",
        p: [
          "Some programs allow projected or documented rental income to support qualification, typically supported by a lease or an appraiser's rent schedule. Rules vary meaningfully between structures.",
        ],
      },
      {
        h: "Plan the sequence",
        p: [
          "How you document income, which entity holds title and which lender you use all affect the next acquisition. Investors who plan three purchases ahead run into fewer walls.",
        ],
      },
      {
        h: "Run the numbers conservatively",
        p: ["Model vacancy, maintenance, management and capital expenditure — not just payment versus rent. A deal that only works at full occupancy is fragile."],
      },
    ],
    faqs: [
      { q: "Can I house hack a duplex?", a: "Buying a multi-unit property and occupying one unit is a common strategy and may fall under owner-occupied guidelines, subject to program rules." },
      { q: "Do short-term rentals qualify?", a: "Some lenders finance them under specific guidelines. Local ordinances and documented income history both matter." },
    ],
    relatedServices: ["investment-property-loans", "refinancing"],
    relatedLocations: ["durham-nc", "raleigh-nc"],
  },
  {
    slug: "self-employed-mortgage-guide",
    category: "Mortgage Education",
    title: "Getting a Mortgage When You're Self-Employed",
    metaTitle: "Self-Employed Mortgage Guide | Premier Lending NC",
    description:
      "How lenders evaluate self-employed income, why write-offs matter, and which documentation approaches exist for business owners.",
    published: "2026-04-29",
    updated: "2026-08-08",
    readMinutes: 6,
    intro:
      "Self-employed borrowers are not harder to approve — they are harder to document. The tension is that the tax strategy that reduces your taxable income also reduces your qualifying income.",
    sections: [
      {
        h: "What lenders actually use",
        p: [
          "Generally net income after business deductions, averaged over a period and adjusted for certain add-backs such as depreciation. Gross revenue is not the qualifying figure.",
        ],
      },
      {
        h: "The write-off trade-off",
        p: [
          "Aggressive deductions lower your tax bill and your qualifying income simultaneously. If a purchase is planned within two years, that trade-off deserves a conversation with your accountant in advance.",
        ],
      },
      {
        h: "Alternative documentation structures",
        p: [
          "Some lenders offer structures using bank statement deposits or, for investment property, the property's own cash flow. These are legitimate programs with their own guidelines and pricing.",
        ],
      },
    ],
    faqs: [
      { q: "How long do I need to be self-employed?", a: "Many programs look for a two-year history, though exceptions can exist where prior experience in the same field is documented." },
      { q: "Can I use business funds for a down payment?", a: "Sometimes, with documentation confirming access to the funds and that withdrawal does not harm the business. Requirements vary." },
    ],
    relatedServices: ["investment-property-loans", "conventional-loans", "mortgage-pre-approval"],
  },
  {
    slug: "closing-costs-in-north-carolina",
    category: "North Carolina Home Buying",
    title: "Closing Costs in North Carolina: What to Expect",
    metaTitle: "Closing Costs in North Carolina | Premier Lending NC",
    description:
      "A breakdown of buyer closing costs in North Carolina, including attorney closing practice, due diligence fees and prepaid escrow items.",
    published: "2026-05-06",
    updated: "2026-08-08",
    readMinutes: 6,
    intro:
      "Closing costs are the part of the budget buyers underestimate most. In North Carolina there are also a few local specifics worth knowing in advance.",
    sections: [
      {
        h: "North Carolina closes through attorneys",
        p: [
          "Real estate closings in North Carolina are handled by attorneys rather than title companies alone. Attorney fees and title work appear as part of your closing costs.",
        ],
      },
      {
        h: "Due diligence and earnest money",
        p: [
          "North Carolina contracts commonly involve a due diligence fee paid directly to the seller, generally non-refundable, plus earnest money held in escrow. These are separate from your down payment even though they are typically credited at closing.",
        ],
      },
      {
        h: "Prepaids and escrow funding",
        p: ["A portion of property taxes and a full year of homeowners insurance are usually funded at closing, plus escrow reserves. This is money you would have paid anyway, but it lands at once."],
      },
      {
        h: "Lender and third-party fees",
        p: ["Origination, appraisal, credit, recording and transfer costs. Every borrower receives a Loan Estimate itemizing these, and it is worth reading line by line."],
      },
    ],
    faqs: [
      { q: "Can the seller pay my closing costs?", a: "Seller concessions are negotiable and are subject to program limits based on loan type and occupancy." },
      { q: "Is the due diligence fee refundable?", a: "Generally not if you terminate, though it is typically credited toward your purchase at closing. Review the contract terms with your agent and attorney." },
    ],
    relatedServices: ["first-time-home-buyers", "home-loans"],
    relatedLocations: ["raleigh-nc", "durham-nc"],
  },
  {
    slug: "rate-locks-explained",
    category: "Mortgage Education",
    title: "Rate Locks Explained: Timing, Length and Float-Downs",
    metaTitle: "Mortgage Rate Locks Explained | Premier Lending NC",
    description:
      "What a mortgage rate lock does, how lock length affects cost, what a float-down is, and how new construction changes the strategy.",
    published: "2026-05-13",
    updated: "2026-08-08",
    readMinutes: 5,
    intro:
      "A rate lock protects a quoted rate for a defined period. Locking is a decision about risk, and like any risk decision it has a price.",
    sections: [
      {
        h: "Length costs money",
        p: ["Longer locks generally cost more than shorter ones, because the lender is carrying market risk for longer. A thirty-day lock and a ninety-day lock are not priced the same."],
      },
      {
        h: "Float-downs",
        p: ["Some lock products allow a one-time adjustment if market rates improve materially. Terms and eligibility vary, and there is usually a cost."],
      },
      {
        h: "New construction is the hard case",
        p: [
          "When closing is months away, the choice is between an extended lock, a float, or a lock with a float-down. Which is right depends on your tolerance for payment uncertainty, not on a prediction.",
        ],
      },
    ],
    faqs: [
      { q: "What happens if my lock expires?", a: "Extensions are often available at a cost, or the loan may be repriced at current market. Timelines should be managed to avoid it." },
      { q: "Can I lock before I have a property?", a: "Some programs allow it, but most locks are tied to a specific property and contract." },
    ],
    relatedServices: ["home-loans", "conventional-loans"],
    relatedLocations: ["apex-nc", "holly-springs-nc"],
  },
  {
    slug: "debt-to-income-ratio-explained",
    category: "Credit & Home Buying",
    title: "Debt-to-Income Ratio: The Number That Decides Most Files",
    metaTitle: "Debt-to-Income Ratio Explained | Premier Lending NC",
    description:
      "How debt-to-income ratio is calculated, which debts count, and the most effective ways to improve it before applying.",
    published: "2026-05-20",
    updated: "2026-08-08",
    readMinutes: 5,
    intro:
      "More mortgage applications are shaped by debt-to-income ratio than by credit score. It is also the factor a borrower can most directly influence.",
    sections: [
      {
        h: "What counts",
        p: ["Monthly obligations reported on credit plus the proposed housing payment, measured against gross monthly income."],
        list: [
          "Auto loans and leases",
          "Student loan payments, calculated per program rules",
          "Minimum credit card payments",
          "Personal loans and installment obligations",
          "Court-ordered support payments",
        ],
      },
      {
        h: "What usually does not count",
        p: ["Utilities, groceries, insurance premiums not escrowed, phone bills and most subscriptions are not in the ratio — though they are very much in your real budget."],
      },
      {
        h: "The fastest improvements",
        p: [
          "Paying off a small installment loan with few payments left often helps more than paying down a large balance, because the entire monthly payment disappears from the ratio.",
        ],
      },
    ],
    faqs: [
      { q: "What ratio do lenders allow?", a: "Limits vary by program, and compensating factors such as reserves or credit depth can affect what is acceptable." },
      { q: "Do deferred student loans count?", a: "Usually yes, calculated according to the specific program's rules even when payments are deferred." },
    ],
    relatedServices: ["mortgage-pre-approval", "conventional-loans"],
  },
  {
    slug: "renting-vs-buying-in-the-triangle",
    category: "First-Time Home Buyers",
    title: "Renting vs Buying in the Triangle: An Honest Comparison",
    metaTitle: "Renting vs Buying in the Triangle | Premier Lending NC",
    description:
      "A balanced framework for comparing renting and buying in the Raleigh-Durham area, including holding period, total cost and flexibility.",
    published: "2026-05-27",
    updated: "2026-08-08",
    readMinutes: 6,
    intro:
      "Buying is not automatically better than renting. The honest comparison depends mostly on how long you will stay and what you would do with the difference in cash.",
    sections: [
      {
        h: "Holding period is the main variable",
        p: [
          "Transaction costs on both ends mean short holding periods favor renting. The longer the horizon, the more the equity and fixed-payment advantages of owning tend to matter.",
        ],
      },
      {
        h: "Compare total cost, not payment to rent",
        p: ["Ownership includes maintenance, insurance, taxes and the occasional large repair. Comparing a mortgage payment directly to rent understates ownership cost."],
      },
      {
        h: "Flexibility has value",
        p: ["If your job, relationship or city preference may change within a couple of years, the flexibility of renting is a genuine financial asset, not a compromise."],
      },
      {
        h: "When buying tends to win",
        p: ["A stable income, a multi-year horizon, sufficient reserves after closing, and a payment that fits comfortably inside your monthly budget."],
      },
    ],
    faqs: [
      { q: "Is it better to wait for rates to drop?", a: "Nobody reliably predicts rates. The more durable questions are whether the payment fits your budget and how long you plan to stay." },
      { q: "How much should I keep in reserve after buying?", a: "There is no single answer, but closing with nothing left is the pattern that most often creates stress in the first year." },
    ],
    relatedServices: ["first-time-home-buyers", "mortgage-pre-approval"],
    relatedLocations: ["raleigh-nc", "morrisville-nc"],
  },
  {
    slug: "new-construction-financing-guide",
    category: "Loan Programs",
    title: "Financing a New Construction Home",
    metaTitle: "New Construction Home Financing Guide | Premier Lending NC",
    description:
      "How new construction financing differs: builder contracts, extended rate locks, upgrade pricing, appraisal timing and preferred lender incentives.",
    published: "2026-06-03",
    updated: "2026-08-08",
    readMinutes: 6,
    intro:
      "New construction is common across Apex, Holly Springs and northern Wake County, and it runs on a different clock than a resale purchase.",
    sections: [
      {
        h: "The timeline changes everything",
        p: [
          "You sign a contract months before closing. Income and credit are re-verified near the end, so financial stability throughout the build matters more than in a thirty-day resale.",
        ],
      },
      {
        h: "Builder incentives deserve a written comparison",
        p: [
          "Preferred lender incentives can be real value. The useful step is comparing total cost side by side — rate, fees and credits together — rather than deciding from the incentive alone.",
        ],
      },
      {
        h: "Upgrades and appraisal",
        p: ["Selections made during the build raise the contract price. The appraisal must support the final figure, so keeping your financing updated as you add options avoids a gap."],
      },
    ],
    faqs: [
      { q: "Can I lock my rate for the whole build?", a: "Extended locks are available for longer timelines, usually at a cost, and some include a float-down option." },
      { q: "Do I need my own inspection on a new home?", a: "Many buyers still have independent inspections, including before drywall. That is a decision to discuss with your agent." },
    ],
    relatedServices: ["home-loans", "conventional-loans"],
    relatedLocations: ["apex-nc", "holly-springs-nc", "wake-forest-nc"],
  },
  {
    slug: "mortgage-mistakes-to-avoid-before-closing",
    category: "Mortgage FAQs",
    title: "Mortgage Mistakes to Avoid Before Closing",
    metaTitle: "Mistakes to Avoid Before Closing | Premier Lending NC",
    description:
      "The common borrower actions between approval and closing that create problems, and what to do instead.",
    published: "2026-06-10",
    updated: "2026-08-08",
    readMinutes: 4,
    intro:
      "Approval is not the finish line. Your file is re-verified near closing, and the period in between is where avoidable problems appear.",
    sections: [
      {
        h: "Things to avoid",
        p: ["Each of these has derailed otherwise clean files."],
        list: [
          "Financing furniture, appliances or a vehicle before closing",
          "Changing jobs or moving from salaried to contract work",
          "Making large deposits that cannot be documented",
          "Closing or opening credit accounts",
          "Missing a payment on any obligation",
          "Transferring money between accounts without a clear paper trail",
        ],
      },
      {
        h: "What to do instead",
        p: [
          "Keep everything boring until you have the keys. If something must change — a job offer, a large gift, an unexpected expense — tell your broker before it happens rather than after.",
        ],
      },
    ],
    faqs: [
      { q: "Will my credit be pulled again?", a: "Lenders commonly re-verify credit and employment shortly before closing." },
      { q: "Can I move money between my own accounts?", a: "Yes, but keep complete records. Undocumented transfers create underwriting conditions that slow closings." },
    ],
    relatedServices: ["mortgage-pre-approval", "home-loans"],
  },
];

export const articleBySlug = (slug: string) => articles.find((a) => a.slug === slug);
export const articlesByCategory = (c: Category) => articles.filter((a) => a.category === c);
