import type { Article } from "./article-types";

/**
 * Second wave of the content engine. Kept in its own module so the library can
 * scale without a single unreadable file.
 */
export const moreArticles: Article[] = [
  {
    slug: "usda-loans-in-north-carolina",
    category: "Loan Programs",
    title: "USDA Loans in North Carolina: Who Qualifies",
    metaTitle: "USDA Loans in North Carolina | Premier Lending NC",
    description:
      "How USDA rural development financing works in North Carolina, which areas near the Triangle may qualify, and the income limits that apply.",
    published: "2026-06-18",
    updated: "2026-08-08",
    readMinutes: 6,
    intro:
      "USDA financing is the most overlooked low-down-payment option in North Carolina, largely because buyers assume 'rural' means remote. In practice, eligible areas sit closer to the Triangle than most people expect.",
    sections: [
      {
        h: "What the program is designed to do",
        p: [
          "USDA guaranteed loans exist to support home ownership in designated rural and semi-rural areas. The guarantee comes from the U.S. Department of Agriculture, and the loan itself is made by an approved lender.",
          "The headline feature is that qualified buyers may finance the purchase without a down payment, subject to program guidelines, eligibility and underwriting.",
        ],
      },
      {
        h: "Two eligibility tests, not one",
        p: [
          "Buyers frequently pass one test and fail the other. Both the property and the household must qualify.",
        ],
        list: [
          "Property location must fall inside a USDA-eligible area as defined by current maps",
          "Household income must fall at or below the limit for that county and household size",
          "The home must be your primary residence, not a rental or second home",
          "The property must meet condition standards for the program",
        ],
      },
      {
        h: "Where this fits around the Triangle",
        p: [
          "Eligibility maps change, and areas that qualified in a prior cycle may not qualify today. The practical approach is to check the specific address before you fall in love with a house, and to shortlist alternate towns while you search.",
          "For buyers weighing USDA against FHA, the comparison usually comes down to the down payment, the ongoing fee structure and whether the address qualifies at all.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I have to be a first-time buyer for a USDA loan?",
        a: "No. The program is not restricted to first-time buyers, though you generally cannot own another adequate primary residence.",
      },
      {
        q: "Is there mortgage insurance on a USDA loan?",
        a: "USDA loans carry a guarantee fee structure rather than conventional mortgage insurance. The exact amounts are set by the program.",
      },
    ],
    relatedServices: ["home-loans", "first-time-home-buyers"],
    relatedLocations: ["garner-nc", "wake-forest-nc"],
  },
  {
    slug: "jumbo-loans-in-north-carolina",
    category: "Loan Programs",
    title: "Jumbo Loans in North Carolina: What Changes Above the Limit",
    metaTitle: "Jumbo Loans in North Carolina | Premier Lending NC",
    description:
      "What happens when a North Carolina purchase exceeds conforming loan limits, and how jumbo underwriting differs on reserves, documentation and pricing.",
    published: "2026-06-19",
    updated: "2026-08-08",
    readMinutes: 6,
    intro:
      "A jumbo loan is simply a loan larger than the conforming limit for the county. The label sounds dramatic; the real difference is how carefully the file is underwritten.",
    sections: [
      {
        h: "The conforming line",
        p: [
          "Conforming limits are set annually and vary by county. Above that threshold, the loan cannot be delivered to the agencies, so it is underwritten to investor or portfolio guidelines instead.",
          "In higher-priced Triangle submarkets, buyers can cross the line without considering themselves luxury buyers at all.",
        ],
      },
      {
        h: "What underwriting focuses on",
        p: [
          "Jumbo files tend to weigh reserves, income stability and credit depth more heavily than agency files do.",
        ],
        list: [
          "Post-closing reserves, often measured in months of payments",
          "Fully documented income with consistent history",
          "Appraisal support, sometimes with a second valuation",
          "Lower tolerance for recent credit events",
        ],
      },
      {
        h: "Structuring around the limit",
        p: [
          "Some buyers prefer to stay at or under the conforming limit by adjusting the down payment. Others prefer the jumbo structure and keep cash liquid. The right answer depends on your reserves, tax picture and how long you expect to hold the home.",
        ],
      },
    ],
    faqs: [
      { q: "Do jumbo loans always need 20% down?", a: "No. Down payment requirements vary by investor and borrower profile; some programs allow less." },
      { q: "Are jumbo rates always higher?", a: "Not necessarily. Pricing depends on the investor, credit profile, reserves and loan structure." },
    ],
    relatedServices: ["conventional-loans", "home-loans"],
    relatedLocations: ["chapel-hill-nc", "cary-nc"],
  },
  {
    slug: "adjustable-rate-vs-fixed-rate-mortgages",
    category: "Mortgage Education",
    title: "Adjustable-Rate vs Fixed-Rate Mortgages",
    metaTitle: "ARM vs Fixed-Rate Mortgage | Premier Lending NC",
    description:
      "How adjustable-rate mortgages actually work, the caps that limit movement, and when a fixed rate is the more sensible choice.",
    published: "2026-06-20",
    updated: "2026-08-08",
    readMinutes: 5,
    intro:
      "An adjustable-rate mortgage is not a gamble by definition. It is a trade: a lower initial rate in exchange for accepting defined movement later.",
    sections: [
      {
        h: "How an ARM is structured",
        p: [
          "An ARM has a fixed introductory period, then adjusts on a schedule tied to an index plus a margin. Caps limit how much the rate can move at the first adjustment, at each subsequent adjustment, and over the life of the loan.",
          "Reading those caps is the whole exercise. They define your realistic worst case.",
        ],
      },
      {
        h: "When each one fits",
        p: ["The decision usually turns on your expected holding period and your tolerance for payment change."],
        list: [
          "Fixed: you plan to stay long term or need payment certainty",
          "ARM: a defined shorter horizon, with reserves to absorb an adjustment",
          "Fixed: single-income household with a tight monthly margin",
          "ARM: strong reserves and a clear exit or refinance plan",
        ],
      },
      {
        h: "The honest risk",
        p: [
          "Plans change. Jobs move, families grow, and the five-year horizon becomes ten. If an adjustment at the cap would break your budget, the lower start rate is not worth it.",
        ],
      },
    ],
    faqs: [
      { q: "Can I refinance out of an ARM later?", a: "Often yes, but refinancing depends on future rates, equity and qualification at that time. Never assume it." },
      { q: "What index do ARMs use?", a: "Modern ARMs commonly reference a published benchmark index plus a fixed margin disclosed in your loan documents." },
    ],
    relatedServices: ["conventional-loans", "refinancing"],
  },
  {
    slug: "mortgage-points-explained",
    category: "Mortgage Education",
    title: "Discount Points: When Buying Down Your Rate Makes Sense",
    metaTitle: "Mortgage Discount Points Explained | Premier Lending NC",
    description:
      "How discount points work, how to calculate the break-even period, and the situations where paying points is and is not worth it.",
    published: "2026-06-21",
    updated: "2026-08-08",
    readMinutes: 5,
    intro:
      "Paying points means spending cash at closing to lower your interest rate. Whether that is smart comes down to one number: how long you keep the loan.",
    sections: [
      {
        h: "The break-even calculation",
        p: [
          "Divide the cost of the points by the monthly payment savings. The result is the number of months you must keep the loan to break even.",
          "If you expect to sell or refinance before that point, the cash was better kept in reserves.",
        ],
      },
      {
        h: "Where points often make sense",
        p: ["Certain profiles benefit consistently."],
        list: [
          "Long expected tenure in the home",
          "Comfortable reserves after closing",
          "Seller or lender credits available to fund the cost",
          "Investment property where the payment drives cash flow",
        ],
      },
      {
        h: "Where they usually do not",
        p: [
          "Buyers stretching to close, buyers with a short horizon, and buyers who would drain reserves to fund the buydown. Liquidity after closing is itself a financial product.",
        ],
      },
    ],
    faqs: [
      { q: "Are discount points tax deductible?", a: "Treatment varies by situation. Ask a tax professional about your specific circumstances." },
      { q: "Can a seller pay for my points?", a: "Seller-paid costs are possible within program limits and depend on your negotiated contract." },
    ],
    relatedServices: ["home-loans", "conventional-loans"],
  },
  {
    slug: "escrow-accounts-explained",
    category: "Mortgage Education",
    title: "Escrow Accounts: Why Your Payment Changes",
    metaTitle: "Mortgage Escrow Accounts Explained | Premier Lending NC",
    description:
      "What an escrow account holds, why annual analysis can change your payment, and how North Carolina property taxes factor in.",
    published: "2026-06-22",
    updated: "2026-08-08",
    readMinutes: 5,
    intro:
      "Most homeowners who say their mortgage payment went up are describing an escrow change, not a rate change. Understanding the mechanism removes the surprise.",
    sections: [
      {
        h: "What sits inside escrow",
        p: [
          "Your servicer collects a portion of annual property taxes and homeowners insurance with each monthly payment, holds it, and pays those bills when due.",
          "Principal and interest are fixed on a fixed-rate loan. The escrow portion is not.",
        ],
      },
      {
        h: "Why the annual analysis moves the number",
        p: ["Two things drive the change."],
        list: [
          "County tax valuation or rate changes",
          "Insurance premium increases at renewal",
          "A shortage from the prior year being spread across the next twelve months",
          "New assessments or the end of an exemption",
        ],
      },
      {
        h: "Planning for it",
        p: [
          "Budget for escrow drift rather than assuming a flat payment for thirty years. In fast-growing Wake County submarkets, reassessment can produce a meaningful step change.",
        ],
      },
    ],
    faqs: [
      { q: "Can I waive escrow?", a: "Some programs and equity positions allow it, often with pricing implications. It shifts responsibility for large annual bills to you." },
      { q: "Do I get an escrow refund?", a: "If your account holds a surplus above the allowed cushion, servicers generally refund it after the annual analysis." },
    ],
    relatedServices: ["home-loans"],
    relatedLocations: ["raleigh-nc"],
  },
  {
    slug: "private-mortgage-insurance-explained",
    category: "Down Payments",
    title: "Private Mortgage Insurance: Cost, Removal and Trade-offs",
    metaTitle: "PMI Explained for NC Buyers | Premier Lending NC",
    description:
      "What private mortgage insurance costs, how it differs from FHA mortgage insurance, and the paths to removing it.",
    published: "2026-06-23",
    updated: "2026-08-08",
    readMinutes: 5,
    intro:
      "PMI is often treated as something to avoid at any cost. Sometimes avoiding it costs more than paying it.",
    sections: [
      {
        h: "What PMI is buying",
        p: [
          "Private mortgage insurance protects the lender against loss when the down payment is below the conventional threshold. It does not protect you, but it does make lower-down-payment ownership possible.",
          "The cost varies with credit profile, loan-to-value and program.",
        ],
      },
      {
        h: "Getting rid of it",
        p: ["Conventional PMI is not permanent."],
        list: [
          "Reaching the loan-to-value threshold through scheduled payments",
          "Requesting removal once equity supports it, subject to servicer requirements",
          "A new appraisal establishing value after improvements or appreciation",
          "Refinancing into a structure without it",
        ],
      },
      {
        h: "The trade-off nobody runs",
        p: [
          "Waiting two more years to save a larger down payment has a cost too: rent paid, appreciation missed, and a moving target on price. Run both scenarios before assuming waiting wins.",
        ],
      },
    ],
    faqs: [
      { q: "Is FHA mortgage insurance the same as PMI?", a: "No. FHA insurance is a government program with its own structure and duration rules, which differ from conventional PMI." },
      { q: "Does PMI ever come off automatically?", a: "Servicers generally terminate conventional PMI at defined thresholds under federal rules, subject to payment history." },
    ],
    relatedServices: ["conventional-loans", "first-time-home-buyers"],
  },
  {
    slug: "down-payment-assistance-in-north-carolina",
    category: "Down Payments",
    title: "Down Payment Assistance in North Carolina",
    metaTitle: "NC Down Payment Assistance Guide | Premier Lending NC",
    description:
      "How down payment assistance programs generally work for North Carolina buyers, what to verify before relying on one, and how it affects your timeline.",
    published: "2026-06-24",
    updated: "2026-08-08",
    readMinutes: 6,
    intro:
      "Assistance programs can be genuinely useful, and they can also add conditions to your file. Both things are true, and you should know which applies before you write an offer.",
    sections: [
      {
        h: "The general shapes assistance takes",
        p: [
          "Programs differ, but most fall into a few structures. Availability, funding and terms change, so always confirm current details directly with the administering agency.",
        ],
        list: [
          "Forgivable second liens that phase out over a residency period",
          "Deferred second mortgages repaid at sale or refinance",
          "Grants with occupancy conditions",
          "Employer or profession-specific programs",
        ],
      },
      {
        h: "What to verify before you rely on it",
        p: [
          "Income limits, purchase price caps, homebuyer education requirements, eligible property types and whether your first mortgage program is compatible.",
          "Also confirm processing time. Some programs add days to closing, which matters when you are negotiating a contract date.",
        ],
      },
      {
        h: "How sellers see it",
        p: [
          "In competitive situations, an offer with additional program conditions may be viewed differently than a straightforward one. A clean pre-approval and a realistic timeline help offset that.",
        ],
      },
    ],
    faqs: [
      { q: "Does assistance have to be repaid?", a: "It depends entirely on the program structure. Some forgive over time, others are repayable on sale or refinance." },
      { q: "Can I combine assistance with FHA?", a: "Many programs are designed to pair with common first-mortgage options, but compatibility must be confirmed program by program." },
    ],
    relatedServices: ["first-time-home-buyers", "fha-loans"],
    relatedLocations: ["durham-nc", "garner-nc"],
  },
  {
    slug: "gift-funds-for-a-down-payment",
    category: "Down Payments",
    title: "Using Gift Funds for a Down Payment",
    metaTitle: "Mortgage Gift Funds Rules | Premier Lending NC",
    description:
      "Who can gift down payment funds, what documentation underwriting requires, and the mistakes that delay closings.",
    published: "2026-06-25",
    updated: "2026-08-08",
    readMinutes: 4,
    intro:
      "Family help is common and entirely allowed. The problems come from how the money moves, not from the gift itself.",
    sections: [
      {
        h: "Documentation underwriting expects",
        p: ["Requirements vary by program, but the pattern is consistent."],
        list: [
          "A signed gift letter stating the funds are not a loan",
          "Evidence of the donor's ability to give, in many cases",
          "A clear transfer trail from donor account to your account",
          "Deposit timing that matches the documentation",
        ],
      },
      {
        h: "How to move the money",
        p: [
          "One traceable transfer beats several cash deposits. Avoid depositing cash, avoid splitting the gift into pieces, and avoid moving it again between your own accounts before closing.",
        ],
      },
      {
        h: "Timing",
        p: [
          "Season the funds early where possible. A gift that lands two days before closing creates a documentation scramble at the worst moment.",
        ],
      },
    ],
    faqs: [
      { q: "Can a friend gift down payment funds?", a: "Program rules define acceptable donors. Family relationships are broadly accepted; others depend on the program." },
      { q: "Can the gift cover closing costs too?", a: "In many programs yes, within the program's limits." },
    ],
    relatedServices: ["first-time-home-buyers", "conventional-loans"],
  },
  {
    slug: "how-to-improve-your-credit-before-buying",
    category: "Credit & Home Buying",
    title: "How to Improve Your Credit Before Buying a Home",
    metaTitle: "Improve Credit Before Buying a Home | Premier Lending NC",
    description:
      "Practical steps that tend to move mortgage credit scores, the ones that do not, and how long to allow before applying.",
    published: "2026-06-26",
    updated: "2026-08-08",
    readMinutes: 6,
    intro:
      "Mortgage scoring models are not the same as the score in your banking app. Understanding what those models weigh keeps you from spending months on changes that do not help.",
    sections: [
      {
        h: "What tends to move the number",
        p: ["Focus effort where the models place weight."],
        list: [
          "Payment history — protect it above everything else",
          "Revolving utilization on each card and overall",
          "Not opening new accounts in the months before applying",
          "Correcting genuine reporting errors with documentation",
        ],
      },
      {
        h: "What usually does not help",
        p: [
          "Closing old accounts shortens history and can raise utilization. Paying a collection without understanding how it reports may not change the score. Credit repair promises that sound absolute rarely are.",
        ],
      },
      {
        h: "How much time to allow",
        p: [
          "Utilization changes can report within a cycle or two. Rebuilding after a serious event takes longer. Start the conversation early so the plan matches your target purchase window.",
        ],
      },
    ],
    faqs: [
      { q: "Will checking my own credit hurt my score?", a: "Reviewing your own reports is generally treated as a soft inquiry and does not lower scores." },
      { q: "Do I need a perfect score?", a: "No. Programs have different thresholds, and pricing improves in bands rather than requiring perfection." },
    ],
    relatedServices: ["mortgage-pre-approval", "first-time-home-buyers"],
  },
  {
    slug: "buying-a-home-after-bankruptcy-or-foreclosure",
    category: "Credit & Home Buying",
    title: "Buying a Home After Bankruptcy or Foreclosure",
    metaTitle: "Buying After Bankruptcy or Foreclosure | Premier Lending NC",
    description:
      "How waiting periods generally work after a major credit event, what re-established credit looks like, and how to prepare a strong file.",
    published: "2026-06-27",
    updated: "2026-08-08",
    readMinutes: 5,
    intro:
      "A major credit event is a delay, not a permanent disqualification. What matters is the time since, and what your file looks like now.",
    sections: [
      {
        h: "Waiting periods exist, and they vary",
        p: [
          "Different programs apply different seasoning requirements after bankruptcy, foreclosure, short sale or deed in lieu. Some allow shorter periods where documented extenuating circumstances apply.",
          "Because the rules differ by program and change over time, the right move is to have your specific dates reviewed rather than relying on a general figure.",
        ],
      },
      {
        h: "Rebuilding a file underwriters trust",
        p: ["Underwriters look for a clean, boring recent history."],
        list: [
          "On-time payments on every obligation since the event",
          "Low revolving balances",
          "Stable employment and documented income",
          "Savings that demonstrate capacity beyond the minimum",
        ],
      },
      {
        h: "Start earlier than you think",
        p: [
          "Mapping the timeline in advance turns a vague 'someday' into a target date, and gives you time to fix reporting errors before they matter.",
        ],
      },
    ],
    faqs: [
      { q: "Does a short sale count the same as a foreclosure?", a: "They are treated separately by most guidelines, often with different seasoning periods." },
      { q: "Can I qualify with a recent collection?", a: "Sometimes, depending on the amount, type and program. It is reviewed case by case." },
    ],
    relatedServices: ["fha-loans", "mortgage-pre-approval"],
  },
  {
    slug: "student-loans-and-mortgage-qualification",
    category: "Credit & Home Buying",
    title: "Student Loans and Mortgage Qualification",
    metaTitle: "Student Loans and Mortgage Approval | Premier Lending NC",
    description:
      "How student loan payments are counted in debt-to-income, how deferment and income-driven plans are handled, and how to strengthen your file.",
    published: "2026-06-28",
    updated: "2026-08-08",
    readMinutes: 5,
    intro:
      "Student debt rarely blocks a mortgage on its own. How the payment is calculated is what decides your buying power.",
    sections: [
      {
        h: "It is the payment, not the balance",
        p: [
          "Qualification uses monthly obligations against income. A large balance with a modest documented payment can be easier to work with than the number suggests.",
          "Programs differ in how they treat deferred loans and income-driven repayment plans, which is why the same borrower can qualify for different amounts under different programs.",
        ],
      },
      {
        h: "What to gather before applying",
        p: ["Documentation resolves most of the ambiguity."],
        list: [
          "Current servicer statements showing the actual required payment",
          "Evidence of the repayment plan type",
          "Payoff or forgiveness documentation where applicable",
        ],
      },
      {
        h: "Levers that help",
        p: [
          "Paying down high-payment revolving debt often improves ratios faster than attacking a large student balance. Increasing documented income, adding a co-borrower or adjusting price target are the other levers.",
        ],
      },
    ],
    faqs: [
      { q: "Are deferred student loans ignored?", a: "Generally no. Most programs apply a calculation even when payments are deferred." },
      { q: "Should I pay off student loans before buying?", a: "Not automatically. Compare the ratio impact to the effect of reducing your cash reserves." },
    ],
    relatedServices: ["mortgage-pre-approval", "conventional-loans"],
  },
  {
    slug: "moving-to-raleigh-relocation-guide",
    category: "North Carolina Home Buying",
    title: "Relocating to Raleigh: A Financing Guide",
    metaTitle: "Relocating to Raleigh Financing Guide | Premier Lending NC",
    description:
      "Financing considerations for buyers relocating to Raleigh: timing a sale and purchase, employment starts and out-of-state documentation.",
    published: "2026-06-29",
    updated: "2026-08-08",
    readMinutes: 6,
    intro:
      "Relocation buyers face a sequencing problem more than a qualification problem: a job that starts later, a house that sells at an uncertain date, and a purchase that has to land between them.",
    sections: [
      {
        h: "Starting a new job in North Carolina",
        p: [
          "Offer letters and start dates can often be used, subject to program guidelines and documentation of the terms. Compensation structures that include bonus or commission usually require additional history.",
          "Bring the full offer, not a summary. Guaranteed base, start date and any relocation package all matter.",
        ],
      },
      {
        h: "Selling one home while buying another",
        p: ["The timing options are limited and worth planning early."],
        list: [
          "Sell first and rent short term",
          "Buy first, carrying both payments temporarily",
          "Make the purchase contingent on the sale, which weakens an offer",
          "Use a bridge structure where available and appropriate",
        ],
      },
      {
        h: "Understanding the local cost picture",
        p: [
          "Wake County property taxes, homeowners insurance and HOA dues will differ from your current market. Build the estimate from local numbers rather than transplanting your old payment.",
        ],
      },
    ],
    faqs: [
      { q: "Can I get pre-approved before I move?", a: "Yes. Out-of-state buyers are pre-approved routinely; documentation is handled electronically." },
      { q: "Do I need to be employed in NC first?", a: "Not always. Offer-letter provisions exist under some programs, subject to guidelines." },
    ],
    relatedServices: ["mortgage-pre-approval", "home-loans"],
    relatedLocations: ["raleigh-nc", "cary-nc"],
  },
  {
    slug: "wake-county-property-taxes-and-your-payment",
    category: "North Carolina Home Buying",
    title: "Wake County Property Taxes and Your Mortgage Payment",
    metaTitle: "Wake County Property Taxes and Mortgages | Premier Lending NC",
    description:
      "How North Carolina property taxes are assessed and how revaluation affects the escrow portion of a Wake County mortgage payment.",
    published: "2026-06-30",
    updated: "2026-08-08",
    readMinutes: 5,
    intro:
      "Two identical houses can carry different monthly payments because of taxes and municipal rates. In a county that grows as quickly as Wake, that difference deserves attention before you make an offer.",
    sections: [
      {
        h: "How the bill is built",
        p: [
          "North Carolina property tax is based on assessed value multiplied by the combined county and municipal rate. A home inside a town's limits carries that town's rate on top of the county rate.",
          "This is why an address a few minutes apart can produce a different monthly escrow figure at the same purchase price.",
        ],
      },
      {
        h: "Revaluation and payment drift",
        p: [
          "Counties revalue on a cycle. When assessed values rise, escrow analysis reflects the new bill, and your monthly payment adjusts even though your rate did not change.",
          "Verify current rates and assessments with the county and municipality for any address you are seriously considering.",
        ],
      },
      {
        h: "Building it into affordability",
        p: [
          "Use a realistic tax and insurance estimate when setting your target price. A payment calculated on principal and interest alone routinely understates the real cost by a meaningful margin.",
        ],
      },
    ],
    faqs: [
      { q: "Do taxes change when I buy?", a: "The assessment follows the property and county schedule; your escrow is set from the expected bill." },
      { q: "Are city and county taxes separate lines?", a: "They are typically combined into one bill with separate rate components." },
    ],
    relatedServices: ["home-loans", "first-time-home-buyers"],
    relatedLocations: ["raleigh-nc", "apex-nc", "holly-springs-nc"],
  },
  {
    slug: "buying-in-the-research-triangle-park-area",
    category: "North Carolina Home Buying",
    title: "Buying Near Research Triangle Park",
    metaTitle: "Buying Near Research Triangle Park | Premier Lending NC",
    description:
      "Financing considerations for buyers working in RTP: commute-driven submarkets, new construction timelines and equity-heavy compensation.",
    published: "2026-07-01",
    updated: "2026-08-08",
    readMinutes: 5,
    intro:
      "RTP employment shapes a wide band of the Triangle housing market. It also creates two recurring financing questions: how equity compensation is treated, and how to finance a home that has not been built yet.",
    sections: [
      {
        h: "Commute geography drives price",
        p: [
          "Morrisville and Cary sit closest, Apex and Holly Springs trade minutes for space, and Durham offers a different housing stock at a different price point. Each submarket carries its own tax rate and HOA norms.",
        ],
      },
      {
        h: "Equity and bonus compensation",
        p: [
          "RSUs, bonuses and commission can be usable income with sufficient documented history and evidence of continuance, subject to program guidelines. Newly granted equity with no history is treated more conservatively.",
        ],
      },
      {
        h: "New construction timing",
        p: [
          "Builder contracts run months. Rate protection options, credit re-verification near completion and builder incentive structures all deserve review before signing.",
        ],
      },
    ],
    faqs: [
      { q: "Can RSU income be used to qualify?", a: "Sometimes, with documented history and evidence of continuance under the applicable program guidelines." },
      { q: "Should I use the builder's lender?", a: "Compare. Incentives can be real, and so can the cost difference. Review both offers side by side." },
    ],
    relatedServices: ["home-loans", "conventional-loans"],
    relatedLocations: ["morrisville-nc", "cary-nc", "apex-nc"],
  },
  {
    slug: "hoa-fees-and-mortgage-qualification",
    category: "North Carolina Home Buying",
    title: "HOA Dues and How They Affect Qualification",
    metaTitle: "HOA Dues and Mortgage Qualification | Premier Lending NC",
    description:
      "Why HOA dues count against your buying power, what lenders review in HOA documents, and how special assessments factor in.",
    published: "2026-07-02",
    updated: "2026-08-08",
    readMinutes: 4,
    intro:
      "HOA dues are part of your housing payment for qualification purposes. In master-planned Triangle communities, that can shift your maximum price noticeably.",
    sections: [
      {
        h: "Dues reduce buying power directly",
        p: [
          "Every dollar of monthly dues is a dollar not available for principal and interest within the same ratio. Two homes at the same price are not the same purchase if one carries substantial dues.",
        ],
      },
      {
        h: "What lenders review beyond the amount",
        p: ["For attached properties especially, the association itself is reviewed."],
        list: [
          "Budget and reserve adequacy",
          "Owner-occupancy and investor concentration",
          "Litigation and pending special assessments",
          "Master insurance coverage",
        ],
      },
      {
        h: "Ask for the documents early",
        p: [
          "Requesting the association's financials and meeting minutes during due diligence surfaces problems while you can still act on them.",
        ],
      },
    ],
    faqs: [
      { q: "Do HOA dues go into escrow?", a: "Usually you pay the association directly, but the amount still counts in qualification." },
      { q: "Can a special assessment stop my loan?", a: "A pending assessment can affect condo project review and may need to be resolved or documented." },
    ],
    relatedServices: ["home-loans", "conventional-loans"],
    relatedLocations: ["apex-nc", "holly-springs-nc", "morrisville-nc"],
  },
  {
    slug: "buying-a-condo-vs-a-townhome-vs-a-single-family-home",
    category: "First-Time Home Buyers",
    title: "Condo, Townhome or Single-Family: The Financing Differences",
    metaTitle: "Condo vs Townhome vs House Financing | Premier Lending NC",
    description:
      "How property type changes mortgage approval, from condo project review to HOA dues and maintenance reserves.",
    published: "2026-07-03",
    updated: "2026-08-08",
    readMinutes: 5,
    intro:
      "Buyers usually compare property types on lifestyle. Lenders compare them on risk, and that difference can change what you qualify for.",
    sections: [
      {
        h: "Condominiums carry project review",
        p: [
          "With a condo, the association is underwritten alongside you. Budget, reserves, insurance and owner-occupancy ratios can affect eligibility regardless of how strong your file is.",
        ],
      },
      {
        h: "Townhomes are usually simpler",
        p: [
          "Many Triangle townhomes are fee-simple with an HOA and are financed like single-family homes, though dues still count against qualification. Confirm the legal form rather than assuming from appearance.",
        ],
      },
      {
        h: "Single-family: fewer conditions, more maintenance",
        p: [
          "Fewer external approvals, but budget for roof, HVAC and grounds that an association would otherwise handle. Reserves after closing matter more here.",
        ],
      },
    ],
    faqs: [
      { q: "Are condos harder to finance?", a: "They can be, because the project itself must meet guidelines in addition to the borrower." },
      { q: "Is a townhome always a condo legally?", a: "No. Some are condominium form and some are fee-simple. The documents determine it." },
    ],
    relatedServices: ["first-time-home-buyers", "conventional-loans"],
  },
  {
    slug: "home-inspection-and-appraisal-explained",
    category: "First-Time Home Buyers",
    title: "Inspection vs Appraisal: Two Different Jobs",
    metaTitle: "Home Inspection vs Appraisal | Premier Lending NC",
    description:
      "What a home inspection covers, what an appraisal is actually for, and what happens when the appraised value comes in low.",
    published: "2026-07-04",
    updated: "2026-08-08",
    readMinutes: 5,
    intro:
      "Buyers often think one covers the other. The inspection protects you. The appraisal protects the loan.",
    sections: [
      {
        h: "The inspection is for you",
        p: [
          "An inspector evaluates condition and systems and gives you information for negotiation or for walking away. It is optional in the sense that the lender does not require it, and essential in every practical sense.",
        ],
      },
      {
        h: "The appraisal is for the lender",
        p: [
          "An appraiser gives an independent opinion of market value supporting the loan amount. Certain programs also apply minimum property condition standards.",
        ],
      },
      {
        h: "When value comes in below contract",
        p: ["You have a limited set of options, and they are all negotiations."],
        list: [
          "Renegotiate the price with the seller",
          "Bring additional cash to cover the gap",
          "Request reconsideration of value with supporting comparable sales",
          "Exercise contract rights to terminate where available",
        ],
      },
    ],
    faqs: [
      { q: "Does the appraiser check for repairs?", a: "Appraisers note condition items relevant to value, and some programs require certain conditions be addressed. That is not an inspection." },
      { q: "Who pays for the appraisal?", a: "It is typically a buyer cost, disclosed on your loan estimate." },
    ],
    relatedServices: ["first-time-home-buyers", "home-loans"],
  },
  {
    slug: "understanding-your-loan-estimate",
    category: "Mortgage Education",
    title: "How to Read a Loan Estimate",
    metaTitle: "How to Read a Loan Estimate | Premier Lending NC",
    description:
      "A page-by-page walkthrough of the Loan Estimate and how to compare two offers accurately.",
    published: "2026-07-05",
    updated: "2026-08-08",
    readMinutes: 6,
    intro:
      "The Loan Estimate exists so offers can be compared on the same terms. Most buyers still compare only the rate, which is the least reliable single number on the page.",
    sections: [
      {
        h: "What each page tells you",
        p: [
          "Page one covers loan terms, projected payments and estimated closing costs. Page two itemises those costs. Page three shows comparisons including the annual percentage rate and total interest percentage.",
        ],
      },
      {
        h: "Comparing two offers properly",
        p: ["Line up the details before comparing the headline."],
        list: [
          "Same loan amount, term and program",
          "Same lock period",
          "Points and lender credits identified separately",
          "Third-party fees separated from lender fees",
        ],
      },
      {
        h: "Where differences usually hide",
        p: [
          "Points presented as part of the rate, escrow funding presented as a cost difference, and short lock periods that will need extending. Ask about each explicitly.",
        ],
      },
    ],
    faqs: [
      { q: "Is the Loan Estimate a commitment?", a: "It is a good-faith disclosure of expected terms and costs, not a final approval." },
      { q: "Why is APR different from my rate?", a: "APR incorporates certain financing costs alongside the interest rate to give a broader comparison figure." },
    ],
    relatedServices: ["home-loans", "mortgage-pre-approval"],
  },
  {
    slug: "what-happens-at-closing",
    category: "Mortgage Education",
    title: "What Actually Happens at Closing",
    metaTitle: "What Happens at a Mortgage Closing | Premier Lending NC",
    description:
      "The closing sequence in North Carolina, what to bring, how funds move, and what to review in the days before.",
    published: "2026-07-06",
    updated: "2026-08-08",
    readMinutes: 5,
    intro:
      "Closing is mostly signing, but the work that makes it uneventful happens in the three days before.",
    sections: [
      {
        h: "The days before",
        p: [
          "You receive a Closing Disclosure ahead of the appointment. Compare it against your Loan Estimate line by line and raise questions immediately rather than at the table.",
          "Confirm wiring instructions verbally with a known contact. Wire fraud in real estate transactions is real and targets exactly this moment.",
        ],
      },
      {
        h: "At the table",
        p: ["Bring what is required and expect the process to be procedural."],
        list: [
          "Government-issued photo identification",
          "Certified funds or a verified wire, as instructed",
          "Proof of homeowners insurance",
          "Any documents your closing attorney requested",
        ],
      },
      {
        h: "After signing",
        p: [
          "In North Carolina, closings are handled through attorneys, and recording completes the transfer. Keep your closing package; you will want it for tax records and for any future refinance.",
        ],
      },
    ],
    faqs: [
      { q: "How long does a closing appointment take?", a: "Typically about an hour for a purchase, depending on the transaction." },
      { q: "Do I get the keys at signing?", a: "Usually once funding and recording are complete, per the terms of your contract." },
    ],
    relatedServices: ["home-loans", "first-time-home-buyers"],
  },
  {
    slug: "mortgage-underwriting-explained",
    category: "Mortgage Education",
    title: "What Underwriters Actually Look For",
    metaTitle: "Mortgage Underwriting Explained | Premier Lending NC",
    description:
      "How underwriting evaluates credit, capacity, capital and collateral, and why conditions are normal rather than a warning sign.",
    published: "2026-07-07",
    updated: "2026-08-08",
    readMinutes: 5,
    intro:
      "Underwriting is not a personality test. It is a structured review of four things, and knowing them removes most of the anxiety.",
    sections: [
      {
        h: "The four pillars",
        p: ["Nearly every question you receive traces back to one of these."],
        list: [
          "Credit — how you have handled obligations",
          "Capacity — income against monthly debt",
          "Capital — down payment, closing funds and reserves",
          "Collateral — the property supporting the loan",
        ],
      },
      {
        h: "Conditions are routine",
        p: [
          "A conditional approval means the file is approved subject to items. Most conditions are documentation, not doubt. Fast, complete responses are the single biggest factor in closing on time.",
        ],
      },
      {
        h: "Where files slow down",
        p: [
          "Undocumented deposits, income structures that changed recently, self-employment without complete returns, and property or association issues discovered late.",
        ],
      },
    ],
    faqs: [
      { q: "How long does underwriting take?", a: "It varies by lender and file complexity, and turnaround changes with volume." },
      { q: "Can I be denied after pre-approval?", a: "Yes, if information changes or documentation does not support the initial review. It is uncommon on well-prepared files." },
    ],
    relatedServices: ["mortgage-pre-approval", "home-loans"],
  },
  {
    slug: "refinancing-to-remove-mortgage-insurance",
    category: "Refinancing",
    title: "Refinancing to Remove Mortgage Insurance",
    metaTitle: "Refinance to Remove Mortgage Insurance | Premier Lending NC",
    description:
      "When refinancing out of mortgage insurance saves money, how equity is established, and what to compare before deciding.",
    published: "2026-07-08",
    updated: "2026-08-08",
    readMinutes: 5,
    intro:
      "Removing mortgage insurance is a legitimate reason to refinance, but only when the full cost comparison supports it.",
    sections: [
      {
        h: "Two paths to the same outcome",
        p: [
          "On conventional loans, insurance can often be removed without refinancing once equity thresholds are met. On some FHA structures, refinancing into a conventional loan is the practical route.",
          "Check the no-cost path first. It is frequently available and always cheaper.",
        ],
      },
      {
        h: "Running the comparison honestly",
        p: ["Compare total cost, not just the insurance line."],
        list: [
          "New rate versus current rate",
          "Closing costs of the refinance",
          "Remaining term and how resetting it affects total interest",
          "Break-even months against how long you will stay",
        ],
      },
      {
        h: "Equity documentation",
        p: [
          "Value is established by appraisal or, in some cases, by an accepted valuation method. Improvements and market appreciation both count toward the equity position.",
        ],
      },
    ],
    faqs: [
      { q: "Can I remove PMI without refinancing?", a: "Frequently yes on conventional loans once loan-to-value thresholds are met, subject to servicer requirements." },
      { q: "Does a refinance restart my loan term?", a: "It can. You may also refinance into a shorter term to avoid extending total interest." },
    ],
    relatedServices: ["refinancing", "conventional-loans"],
  },
  {
    slug: "rate-and-term-vs-cash-out-refinance",
    category: "Refinancing",
    title: "Rate-and-Term vs Cash-Out Refinance",
    metaTitle: "Rate-and-Term vs Cash-Out Refinance | Premier Lending NC",
    description:
      "The difference between the two refinance types, how each is priced and underwritten, and how to choose.",
    published: "2026-07-09",
    updated: "2026-08-08",
    readMinutes: 5,
    intro:
      "Both replace your existing loan. Only one puts money in your hand, and that difference changes pricing and underwriting.",
    sections: [
      {
        h: "Rate-and-term",
        p: [
          "Replaces the existing balance, adjusting the rate, the term or both. Typically priced more favourably because the risk profile is lower.",
        ],
      },
      {
        h: "Cash-out",
        p: [
          "Increases the loan balance and returns the difference to you. Common uses are consolidating higher-rate debt, funding renovations, or deploying capital. Pricing and equity requirements are generally stricter.",
        ],
      },
      {
        h: "Choosing between them",
        p: ["Start from the objective, not the product."],
        list: [
          "Lower payment or shorter term: rate-and-term",
          "Need funds and hold substantial equity: cash-out",
          "Consolidating debt: compare blended cost against the debts being paid",
          "Short remaining tenure: often neither",
        ],
      },
    ],
    faqs: [
      { q: "Is cash-out taxable income?", a: "Loan proceeds are generally not income, but consult a tax professional about your situation." },
      { q: "How much equity do I need?", a: "Requirements vary by program and property type; cash-out typically requires more than rate-and-term." },
    ],
    relatedServices: ["refinancing", "investment-property-loans"],
  },
  {
    slug: "when-not-to-refinance",
    category: "Refinancing",
    title: "When Refinancing Is the Wrong Move",
    metaTitle: "When Not to Refinance | Premier Lending NC",
    description:
      "The situations where refinancing costs more than it saves, and the questions to ask before starting an application.",
    published: "2026-07-10",
    updated: "2026-08-08",
    readMinutes: 4,
    intro:
      "A lower rate is not automatically a better outcome. The cost of getting there, and the term you reset to, decide whether it is.",
    sections: [
      {
        h: "Common cases where it does not work",
        p: ["Each of these is a real scenario, not a hypothetical."],
        list: [
          "You will move before reaching break-even",
          "The savings depend on resetting to a much longer term",
          "You are late in an amortisation schedule and mostly paying principal",
          "Closing costs are being financed and quietly erase the benefit",
        ],
      },
      {
        h: "The one number to compute",
        p: [
          "Total cost divided by monthly savings gives break-even months. If your realistic horizon is shorter, the answer is no, regardless of how attractive the rate looks.",
        ],
      },
      {
        h: "Alternatives worth considering",
        p: [
          "Requesting mortgage insurance removal, recasting after a lump-sum payment where the servicer allows it, or simply making additional principal payments.",
        ],
      },
    ],
    faqs: [
      { q: "Is a no-cost refinance really free?", a: "Costs are typically absorbed into the rate or balance. It shifts the cost rather than removing it." },
      { q: "How often can I refinance?", a: "There is no fixed limit, though seasoning requirements and economics generally govern the timing." },
    ],
    relatedServices: ["refinancing"],
  },
  {
    slug: "dscr-loans-for-north-carolina-investors",
    category: "Loan Programs",
    title: "DSCR Loans for North Carolina Rental Investors",
    metaTitle: "DSCR Loans for NC Investors | Premier Lending NC",
    description:
      "How debt-service-coverage-ratio financing evaluates the property's income instead of the borrower's, and where it fits in an NC rental strategy.",
    published: "2026-07-11",
    updated: "2026-08-08",
    readMinutes: 6,
    intro:
      "DSCR financing asks a different question than a conventional loan. Instead of your personal ratios, it asks whether the property covers its own debt.",
    sections: [
      {
        h: "How the ratio works",
        p: [
          "Debt service coverage compares the property's rental income to the payment on the loan. A ratio above one means the rent covers the obligation; requirements and thresholds vary by lender.",
          "Because qualification centres on the asset, this structure is often used by investors whose tax returns understate their cash position.",
        ],
      },
      {
        h: "What you still need",
        p: ["Asset-based does not mean unexamined."],
        list: [
          "Meaningful down payment and reserves",
          "Credit profile within the program's range",
          "A market rent analysis or lease supporting the income",
          "An entity structure, in many cases",
        ],
      },
      {
        h: "Where it fits in the Triangle",
        p: [
          "Investors scaling beyond the number of conventionally financed properties they can hold often move to this structure. Compare the pricing against conventional investment financing before assuming it is the right tool.",
        ],
      },
    ],
    faqs: [
      { q: "Is personal income verified on a DSCR loan?", a: "Typically the property's income drives qualification, though lenders still review credit and assets." },
      { q: "Can I use short-term rental income?", a: "Some programs allow it with supporting documentation; policies vary considerably by lender." },
    ],
    relatedServices: ["investment-property-loans"],
    relatedLocations: ["durham-nc", "raleigh-nc"],
  },
  {
    slug: "financing-a-second-home-in-north-carolina",
    category: "Loan Programs",
    title: "Financing a Second Home in North Carolina",
    metaTitle: "Second Home Financing in NC | Premier Lending NC",
    description:
      "How second-home financing differs from primary residence and investment property loans, and what occupancy rules mean in practice.",
    published: "2026-07-12",
    updated: "2026-08-08",
    readMinutes: 5,
    intro:
      "Second-home financing sits between primary residence and investment property, and lenders take the distinction seriously.",
    sections: [
      {
        h: "Occupancy is a underwriting term, not a preference",
        p: [
          "Second-home status generally requires that you occupy the property for part of the year and that it is not subject to a rental arrangement that contradicts that. Misrepresenting occupancy is a serious matter.",
        ],
      },
      {
        h: "How terms differ",
        p: ["Expect requirements between the two other categories."],
        list: [
          "Higher down payment than a comparable primary residence",
          "Reserve requirements covering both properties",
          "Both housing payments counted in your ratios",
          "Distance and property-type expectations under some guidelines",
        ],
      },
      {
        h: "If you intend to rent it",
        p: [
          "Plans that include regular rental income usually belong in investment financing. It is better to structure it correctly at the outset than to explain it later.",
        ],
      },
    ],
    faqs: [
      { q: "Can I rent my second home occasionally?", a: "Policies differ. Discuss intended use with your broker before applying so the loan is structured accurately." },
      { q: "Do I need reserves for both homes?", a: "Commonly yes. Requirements vary by program and profile." },
    ],
    relatedServices: ["conventional-loans", "investment-property-loans"],
  },
  {
    slug: "house-hacking-in-north-carolina",
    category: "Loan Programs",
    title: "House Hacking: Owner-Occupied Multi-Unit Financing",
    metaTitle: "House Hacking Financing in NC | Premier Lending NC",
    description:
      "How buying a two-to-four unit property as your primary residence works, and how rental income may support qualification.",
    published: "2026-07-13",
    updated: "2026-08-08",
    readMinutes: 6,
    intro:
      "Buying a small multi-unit property and living in one unit is the most accessible entry point into real-estate investing, because it can be financed as a primary residence.",
    sections: [
      {
        h: "Why the financing is favourable",
        p: [
          "Owner-occupied two-to-four unit properties may be financed under primary-residence programs rather than investment terms. That typically means a lower down payment requirement than a pure rental purchase.",
          "In some programs, a portion of projected rental income from the other units can help support qualification, subject to documentation and guidelines.",
        ],
      },
      {
        h: "What to underwrite yourself",
        p: ["Run the property as a business even while you live in it."],
        list: [
          "Realistic vacancy and turnover assumptions",
          "Maintenance and capital reserves per unit",
          "Local rules on rentals and occupancy",
          "Your own tolerance for being a neighbour and a landlord",
        ],
      },
      {
        h: "Availability in the Triangle",
        p: [
          "Small multi-unit inventory is limited in parts of the Triangle and more common in established Durham and Raleigh neighbourhoods. Getting pre-approved early matters because these listings move.",
        ],
      },
    ],
    faqs: [
      { q: "Can I use future rent to qualify?", a: "Some programs allow a portion of documented market rent. Requirements vary and are confirmed during underwriting." },
      { q: "Do I have to live there long?", a: "Occupancy requirements apply under primary-residence financing. Confirm the terms of your specific program." },
    ],
    relatedServices: ["investment-property-loans", "first-time-home-buyers"],
    relatedLocations: ["durham-nc", "raleigh-nc"],
  },
  {
    slug: "how-mortgage-rates-are-actually-set",
    category: "Mortgage FAQs",
    title: "How Mortgage Rates Are Actually Set",
    metaTitle: "How Mortgage Rates Are Set | Premier Lending NC",
    description:
      "Why mortgage rates do not simply follow the Federal Reserve, what the bond market has to do with it, and what you control.",
    published: "2026-07-14",
    updated: "2026-08-08",
    readMinutes: 5,
    intro:
      "The Federal Reserve does not set mortgage rates. Understanding what does keeps you from timing decisions around the wrong headline.",
    sections: [
      {
        h: "The market, then your file",
        p: [
          "Long-term mortgage pricing tracks investor demand for mortgage-backed securities, which responds to inflation expectations, economic data and broader bond markets. Fed policy influences that environment without directly setting your rate.",
          "On top of the market level sits your own file: credit, loan-to-value, property type, occupancy, loan amount and term.",
        ],
      },
      {
        h: "What you can control",
        p: ["The market is not negotiable. These are."],
        list: [
          "Credit profile at application",
          "Down payment and resulting loan-to-value",
          "Loan term and structure",
          "Whether you pay points, and the lock period you choose",
        ],
      },
      {
        h: "On waiting for a better rate",
        p: [
          "Rate timing is unpredictable, and waiting has costs of its own — rent, price movement and competition. Decide on the payment you are comfortable with, then act on the market you actually have.",
        ],
      },
    ],
    faqs: [
      { q: "Does a Fed cut lower mortgage rates?", a: "Not automatically. Mortgage pricing responds to bond markets and expectations, which may already reflect the move." },
      { q: "Why do two lenders quote different rates?", a: "Pricing depends on investor relationships, margin, lock terms and how the file is structured." },
    ],
    relatedServices: ["home-loans", "mortgage-pre-approval"],
  },
  {
    slug: "how-to-choose-a-mortgage-broker",
    category: "Mortgage FAQs",
    title: "Broker, Bank or Online Lender: How to Choose",
    metaTitle: "Mortgage Broker vs Bank vs Online Lender | Premier Lending NC",
    description:
      "How mortgage brokers, retail banks and online lenders differ, and the questions worth asking before you choose.",
    published: "2026-07-15",
    updated: "2026-08-08",
    readMinutes: 5,
    intro:
      "The three channels are structurally different. That difference matters most when a file is not perfectly straightforward.",
    sections: [
      {
        h: "How the channels differ",
        p: [
          "A broker works with multiple wholesale lenders and places your file where it fits. A retail bank offers its own products. An online lender offers a streamlined process built around a defined borrower profile.",
          "Straightforward files close well through all three. Self-employment, unusual income, credit history or property complexity is where the ability to shop guidelines matters.",
        ],
      },
      {
        h: "Questions worth asking anyone",
        p: ["Ask the same questions of every option and compare the answers."],
        list: [
          "Who is my point of contact from application to closing?",
          "What is the realistic timeline for my scenario?",
          "What could cause this file to have problems?",
          "How are costs presented, and what is not in the quote?",
        ],
      },
      {
        h: "Verify licensing",
        p: [
          "Mortgage professionals are licensed and searchable through the Nationwide Multistate Licensing System. Verify before sharing documentation, whichever channel you choose.",
        ],
      },
    ],
    faqs: [
      { q: "Does using a broker cost more?", a: "Not inherently. Compensation is disclosed, and wholesale pricing can be competitive with retail." },
      { q: "Should I apply with several lenders?", a: "Comparing offers is reasonable. Mortgage credit inquiries within a short shopping window are generally treated together by scoring models." },
    ],
    relatedServices: ["home-loans", "mortgage-pre-approval"],
  },
  {
    slug: "can-i-buy-a-house-with-1099-income",
    category: "Mortgage FAQs",
    title: "Buying a Home with 1099 or Contract Income",
    metaTitle: "Mortgage with 1099 Contract Income | Premier Lending NC",
    description:
      "How lenders evaluate 1099, contract and gig income, what history is generally required, and how to present the strongest file.",
    published: "2026-07-16",
    updated: "2026-08-08",
    readMinutes: 5,
    intro:
      "Contract income qualifies for mortgages regularly. The difference from W-2 employment is how it is documented and averaged.",
    sections: [
      {
        h: "History and averaging",
        p: [
          "Lenders generally look for a documented history of the income and evidence that it is likely to continue. Income is commonly averaged over that history, and declining trends receive extra scrutiny.",
          "Business deductions reduce the income figure used to qualify, which is why a strong tax strategy and a strong mortgage application can pull in opposite directions.",
        ],
      },
      {
        h: "Documents to assemble early",
        p: ["Gather these before applying rather than during underwriting."],
        list: [
          "Complete personal and business tax returns",
          "Year-to-date profit and loss records",
          "1099s and contracts showing continuity",
          "Business bank statements",
        ],
      },
      {
        h: "Alternative structures",
        p: [
          "Where standard documentation does not reflect actual cash flow, bank-statement or asset-based programs may fit. Terms differ, so compare carefully.",
        ],
      },
    ],
    faqs: [
      { q: "How long do I need to be self-employed?", a: "Most guidelines look for a documented multi-year history, though exceptions exist based on prior related employment." },
      { q: "Do write-offs hurt my approval?", a: "They lower the qualifying income figure. Plan the tax years before your purchase with that in mind." },
    ],
    relatedServices: ["home-loans", "mortgage-pre-approval"],
  },
  {
    slug: "married-buying-a-home-with-one-income",
    category: "Mortgage FAQs",
    title: "Applying With One Spouse Instead of Two",
    metaTitle: "Buying a Home With One Spouse on the Loan | Premier Lending NC",
    description:
      "When it makes sense to leave one spouse off the mortgage application, and what that means for qualification and ownership.",
    published: "2026-07-17",
    updated: "2026-08-08",
    readMinutes: 4,
    intro:
      "Both names on the deed and both names on the loan are separate decisions. Sometimes the stronger file is the smaller one.",
    sections: [
      {
        h: "Why couples sometimes apply solo",
        p: [
          "If one spouse has significantly lower credit scores or carries substantial debt, applying alone can produce better pricing — provided the single income supports the loan.",
          "The trade-off is direct: you lose the second income in qualification.",
        ],
      },
      {
        h: "Ownership versus obligation",
        p: [
          "A non-borrowing spouse can often still be on title, subject to state law and program rules. North Carolina has specific requirements around spousal signatures at closing; your closing attorney will address them.",
        ],
      },
      {
        h: "Running both scenarios",
        p: [
          "The right answer comes from comparing the two approvals side by side rather than assuming. Ask for both before deciding.",
        ],
      },
    ],
    faqs: [
      { q: "Can my spouse be on the deed but not the loan?", a: "Often yes, subject to state law and program requirements. Your attorney will confirm for your transaction." },
      { q: "Will my spouse's debt still count?", a: "In common-law states, generally only the borrowers' debts are counted, with exceptions by program." },
    ],
    relatedServices: ["home-loans", "mortgage-pre-approval"],
  },
  {
    slug: "how-much-are-closing-costs-for-a-seller-in-nc",
    category: "North Carolina Home Buying",
    title: "Seller Closing Costs in North Carolina",
    metaTitle: "Seller Closing Costs in NC | Premier Lending NC",
    description:
      "What sellers typically pay at a North Carolina closing, including excise tax, prorations and negotiated buyer concessions.",
    published: "2026-07-18",
    updated: "2026-08-08",
    readMinutes: 4,
    intro:
      "Sellers focus on the sale price and are surprised by the net. Knowing the deductions in advance makes the move-up purchase far easier to plan.",
    sections: [
      {
        h: "Typical seller-side items",
        p: ["Amounts vary by transaction and negotiation."],
        list: [
          "North Carolina excise tax on the transfer",
          "Agreed commission arrangements",
          "Prorated property taxes through the closing date",
          "Payoff of the existing mortgage plus any interest due",
          "Attorney or closing-related fees as negotiated",
          "Any buyer concessions agreed in the contract",
        ],
      },
      {
        h: "Why net proceeds matter to your next loan",
        p: [
          "If your purchase depends on proceeds from the sale, the net figure determines your down payment and reserves. Build the estimate conservatively.",
        ],
      },
      {
        h: "Sequencing a sale and purchase",
        p: [
          "Coordinate the two closings with your broker and attorney early. The order determines whether you need bridge financing or a short-term rental.",
        ],
      },
    ],
    faqs: [
      { q: "Who pays the excise tax in NC?", a: "It is customarily a seller cost, though terms are ultimately governed by the contract." },
      { q: "Can I use sale proceeds for my next down payment?", a: "Yes, commonly, with documentation of the closing disclosure from the sale." },
    ],
    relatedServices: ["home-loans", "refinancing"],
    relatedLocations: ["raleigh-nc", "cary-nc"],
  },
  {
    slug: "first-time-home-buyer-guide-for-durham",
    category: "First-Time Home Buyers",
    title: "A First-Time Buyer's Guide to Durham",
    metaTitle: "First-Time Home Buyer Guide for Durham NC | Premier Lending NC",
    description:
      "What first-time buyers should know about financing a home in Durham: housing stock, renovation considerations and budgeting for the payment.",
    published: "2026-07-19",
    updated: "2026-08-08",
    readMinutes: 6,
    intro:
      "Durham rewards buyers who understand its housing stock. Older homes in established neighbourhoods can be excellent value and can also carry condition items that affect financing.",
    sections: [
      {
        h: "Older homes and program conditions",
        p: [
          "Some programs apply minimum property condition standards. In a market with meaningful pre-war and mid-century inventory, that can turn up items around roofs, systems and paint that must be addressed before closing.",
          "Knowing this in advance changes how you write an offer and how you plan inspection timing.",
        ],
      },
      {
        h: "Renovation-minded financing",
        p: [
          "Where a home needs work, financing that contemplates renovation may fit better than a standard purchase loan followed by out-of-pocket repairs. It adds process, so discuss the timeline before you commit to a contract date.",
        ],
      },
      {
        h: "Building the real monthly number",
        p: ["Estimate the whole payment before you set a price ceiling."],
        list: [
          "Principal and interest for the program you choose",
          "Durham County and city tax rates for the specific address",
          "Homeowners insurance quoted on the actual property",
          "Any HOA dues, plus a maintenance reserve of your own",
        ],
      },
    ],
    faqs: [
      { q: "Are older homes harder to finance?", a: "Not inherently, though condition standards under some programs may require repairs before closing." },
      { q: "Should I get pre-approved before touring?", a: "Yes. It defines your range and makes your offer credible in a competitive situation." },
    ],
    relatedServices: ["first-time-home-buyers", "fha-loans"],
    relatedLocations: ["durham-nc", "chapel-hill-nc"],
  },
  {
    slug: "how-to-win-a-multiple-offer-situation",
    category: "First-Time Home Buyers",
    title: "Competing in a Multiple-Offer Situation",
    metaTitle: "Winning Multiple Offer Situations in NC | Premier Lending NC",
    description:
      "How the financing side of your offer affects competitiveness in North Carolina, from pre-approval strength to due diligence terms.",
    published: "2026-07-20",
    updated: "2026-08-08",
    readMinutes: 5,
    intro:
      "Price gets attention. Certainty wins. Most of the certainty in an offer comes from the financing behind it.",
    sections: [
      {
        h: "What sellers are actually weighing",
        p: [
          "Beyond the number, a seller is judging the probability that the transaction closes on schedule. A thoroughly underwritten pre-approval, a realistic timeline and a responsive lender all raise that probability.",
        ],
      },
      {
        h: "North Carolina's contract structure",
        p: [
          "The due diligence period and associated fee are central to how offers compete here. Those terms carry real financial risk, so decide them with your agent deliberately rather than reflexively.",
        ],
      },
      {
        h: "Financing details that strengthen an offer",
        p: ["Small structural choices carry weight."],
        list: [
          "A pre-approval reflecting reviewed documentation, not a quick estimate",
          "A closing timeline your lender has actually confirmed",
          "Clarity about how an appraisal gap would be handled",
          "A direct contact your agent can give the listing agent",
        ],
      },
    ],
    faqs: [
      { q: "Is cash always better than financed?", a: "Cash offers certainty, but a strong, well-documented financed offer competes well, particularly on price and terms." },
      { q: "Should I waive due diligence?", a: "That is a significant risk decision. Discuss it carefully with your agent and attorney before doing so." },
    ],
    relatedServices: ["mortgage-pre-approval", "first-time-home-buyers"],
    relatedLocations: ["cary-nc", "apex-nc", "wake-forest-nc"],
  },
];
