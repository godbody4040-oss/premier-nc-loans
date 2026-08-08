/**
 * Service-area landing page content.
 * Each city entry carries genuinely distinct local context — no name substitution.
 * Nothing here claims an office, address or physical presence in the city.
 */

import type { FAQ } from "./services";

export type Location = {
  slug: string;
  city: string;
  state: "NC";
  county: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  /** Distinct local context paragraphs. */
  context: { t: string; b: string }[];
  neighborhoods: string[];
  buyerProfile: string;
  faqs: FAQ[];
  services: string[];
};

export const locations: Location[] = [
  {
    slug: "raleigh-nc",
    city: "Raleigh",
    state: "NC",
    county: "Wake County",
    title: "Mortgage Broker in Raleigh, NC | Premier Lending NC",
    description:
      "Independent mortgage broker serving Raleigh, NC. Compare home loan programs, review pre-qualification and plan financing for purchases across Wake County.",
    h1: "Mortgage broker serving Raleigh, North Carolina",
    intro:
      "Raleigh combines state government employment, a large university and health system presence, and a steady stream of relocating technology workers. That mix shows up in mortgage files as varied income documentation — state pay schedules, academic contracts, RSUs and relocation packages all qualify differently, and the structure that fits a state employee rarely fits a relocating engineer.",
    context: [
      {
        t: "Income documentation varies widely",
        b: "Raleigh buyers commonly bring state government income, university and hospital employment, or technology compensation that includes bonus and equity. Each is documented differently, and getting that right early prevents underwriting friction later.",
      },
      {
        t: "Inside-the-beltline versus new construction",
        b: "Older homes near downtown and Five Points can raise appraisal and condition questions that new construction in North Raleigh does not. Builder timelines also affect rate-lock strategy, which is worth planning before you sign a contract.",
      },
      {
        t: "Wake County property taxes shape the payment",
        b: "Tax rates and recent revaluations directly change the escrow portion of a Raleigh payment. Estimating them accurately matters more here than in counties with slower assessment cycles.",
      },
    ],
    neighborhoods: ["Downtown & Five Points", "North Hills", "North Raleigh", "Southwest Raleigh", "Brier Creek"],
    buyerProfile:
      "First-time buyers, relocating professionals, and investors buying near the universities and downtown employment core.",
    faqs: [
      { q: "Do you work with buyers relocating to Raleigh?", a: "Yes. Relocation files often involve a job offer letter, a start date and out-of-state assets, all of which can be reviewed before you arrive." },
      { q: "How do Wake County taxes affect my monthly payment?", a: "Property taxes are collected through escrow on most loans, so the county rate and the home's assessed value both change your monthly figure. We estimate them for the specific property rather than a county average." },
    ],
    services: ["first-time-home-buyers", "mortgage-pre-approval", "conventional-loans"],
  },
  {
    slug: "durham-nc",
    city: "Durham",
    state: "NC",
    county: "Durham County",
    title: "Mortgage Broker in Durham, NC | Premier Lending NC",
    description:
      "Mortgage broker serving Durham, NC. Financing review for historic homes, new construction and rental property purchases across Durham County.",
    h1: "Mortgage broker serving Durham, North Carolina",
    intro:
      "Durham's housing stock ranges from century-old mill and bungalow neighborhoods to recent infill construction, and that range drives the financing conversation. Older properties can raise appraisal condition items; renovation-minded buyers sometimes need a structure that accounts for work after closing.",
    context: [
      {
        t: "Historic housing and appraisal condition",
        b: "Bungalows and mill houses in older Durham neighborhoods are attractive but can trigger condition items on appraisal, particularly under programs with minimum property standards. Knowing that before you write an offer changes which program you choose.",
      },
      {
        t: "Research Triangle Park employment",
        b: "Many Durham buyers work in research, biotech or healthcare, where income can include contract terms, bonuses or grant-funded appointments. Those require specific documentation approaches.",
      },
      {
        t: "An active rental market",
        b: "Durham sees consistent investor interest around the university and downtown. Investment financing carries different down payment and reserve expectations than the owner-occupied loan next door.",
      },
    ],
    neighborhoods: ["Downtown Durham", "Old West Durham", "Trinity Park", "South Durham", "Hope Valley"],
    buyerProfile:
      "Researchers and healthcare professionals, renovation-minded buyers of older homes, and small-portfolio rental investors.",
    faqs: [
      { q: "Can I finance a home that needs work?", a: "Sometimes. Certain programs accommodate renovation, and others require repairs before closing. The property's condition and the program you choose have to be considered together." },
      { q: "Do you finance rental property in Durham?", a: "Yes, subject to program guidelines. Investment financing typically requires a larger down payment and documented reserves." },
    ],
    services: ["investment-property-loans", "conventional-loans", "fha-loans"],
  },
  {
    slug: "cary-nc",
    city: "Cary",
    state: "NC",
    county: "Wake County",
    title: "Mortgage Broker in Cary, NC | Premier Lending NC",
    description:
      "Mortgage broker serving Cary, NC. Home loan comparison for move-up buyers, relocating professionals and higher-balance purchases in Wake County.",
    h1: "Mortgage broker serving Cary, North Carolina",
    intro:
      "Cary attracts move-up buyers and relocating professionals, which means two financing themes recur: coordinating a sale with a purchase, and purchase prices that can approach or exceed conforming loan limits. Both need to be planned rather than improvised.",
    context: [
      {
        t: "Buying and selling at the same time",
        b: "Move-up buyers frequently need the equity from a current home to close on the next one. Timing, bridge strategies and contingency structure all belong in the financing conversation early.",
      },
      {
        t: "Higher balances and conforming limits",
        b: "When a purchase price pushes past the conforming limit for Wake County, guidelines, documentation and reserve requirements change. Knowing which side of the line you are on affects your offer strategy.",
      },
      {
        t: "HOA costs in planned communities",
        b: "Much of Cary's housing sits in planned communities with HOA dues. Those dues count in qualifying ratios, so they belong in the budget from the first calculation, not the last.",
      },
    ],
    neighborhoods: ["Downtown Cary", "Preston", "Amberly", "Weston", "West Cary"],
    buyerProfile:
      "Move-up buyers, relocating technology and pharmaceutical professionals, and families prioritizing school proximity.",
    faqs: [
      { q: "How do HOA dues affect what I qualify for?", a: "HOA dues are included in your housing expense for qualifying purposes, so a higher dues figure reduces the loan amount that fits the same ratio." },
      { q: "What if my purchase exceeds the conforming limit?", a: "The loan moves into jumbo or high-balance territory with different guidelines. That is worth confirming before you set a price range." },
    ],
    services: ["conventional-loans", "mortgage-pre-approval", "refinancing"],
  },
  {
    slug: "apex-nc",
    city: "Apex",
    state: "NC",
    county: "Wake County",
    title: "Mortgage Broker in Apex, NC | Premier Lending NC",
    description:
      "Mortgage broker serving Apex, NC. New construction financing guidance, pre-qualification and loan program comparison for Wake County buyers.",
    h1: "Mortgage broker serving Apex, North Carolina",
    intro:
      "Apex has grown largely through new construction, and new construction financing has its own rhythm. Contracts are signed months before closing, builders often present a preferred lender, and rate strategy over a long build window is a real decision rather than a footnote.",
    context: [
      {
        t: "Long timelines between contract and closing",
        b: "A build can take months. Extended rate-lock options, float-down features and re-verification of income near closing all become relevant, and comparing them is worth doing before you sign.",
      },
      {
        t: "Builder incentives deserve a real comparison",
        b: "Builder-affiliated lenders sometimes offer closing cost incentives. Those can be genuinely valuable — the useful step is comparing total cost, not just the incentive, side by side.",
      },
      {
        t: "Options and upgrades change the numbers",
        b: "Upgrades selected during the build can raise the purchase price and the appraisal expectation. Keeping your financing updated as selections are made avoids a gap at closing.",
      },
    ],
    neighborhoods: ["Historic Downtown Apex", "Bella Casa", "Scotts Mill", "Haddon Hall", "Sweetwater"],
    buyerProfile: "New-construction buyers, growing families, and commuters working across the Triangle.",
    faqs: [
      { q: "Should I use the builder's lender?", a: "It can make sense, especially with incentives. The right approach is to compare the total cost of both options in writing rather than assuming either is better." },
      { q: "How does a rate lock work on a build?", a: "Longer locks are available for extended timelines, often at a cost, and some include a float-down. Which is appropriate depends on your closing window." },
    ],
    services: ["home-loans", "conventional-loans", "mortgage-pre-approval"],
  },
  {
    slug: "garner-nc",
    city: "Garner",
    state: "NC",
    county: "Wake County",
    title: "Mortgage Broker in Garner, NC | Premier Lending NC",
    description:
      "Mortgage broker serving Garner, NC. First-time buyer financing, FHA and conventional comparison, and pre-qualification for southern Wake County.",
    h1: "Mortgage broker serving Garner, North Carolina",
    intro:
      "Garner is one of the more attainable entry points into Wake County, which makes it a common landing spot for first-time buyers. Those files tend to hinge on down payment strategy and credit review rather than on complex income structures.",
    context: [
      {
        t: "Entry-point pricing, first-time buyer questions",
        b: "Because Garner often sits below the county median, the practical questions are about minimum down payment, closing cost assistance and how mortgage insurance changes the monthly figure.",
      },
      {
        t: "FHA and conventional deserve a direct comparison",
        b: "At smaller down payments the FHA-versus-conventional decision has a real monthly and long-term cost difference. Running both is more useful than defaulting to one.",
      },
      {
        t: "Established homes and inspection findings",
        b: "Much of Garner's inventory is established rather than new. Inspection and appraisal findings can affect programs with minimum property standards, so program choice and property choice interact.",
      },
    ],
    neighborhoods: ["Downtown Garner", "Vandora Springs", "Heather Hills", "Timber Creek", "Adams Point"],
    buyerProfile: "First-time buyers, buyers commuting into Raleigh, and buyers prioritizing monthly affordability.",
    faqs: [
      { q: "Is there down payment assistance available?", a: "North Carolina buyers sometimes qualify for state or local assistance depending on income, property and current program availability. Eligibility has to be checked at the time you apply." },
      { q: "How much do I need saved to buy in Garner?", a: "It depends on the price, the program and closing costs. The useful figure is total cash to close, which we estimate for your specific scenario." },
    ],
    services: ["first-time-home-buyers", "fha-loans", "mortgage-pre-approval"],
  },
  {
    slug: "wake-forest-nc",
    city: "Wake Forest",
    state: "NC",
    county: "Wake County",
    title: "Mortgage Broker in Wake Forest, NC | Premier Lending NC",
    description:
      "Mortgage broker serving Wake Forest, NC. Financing for new construction, larger lots and move-up purchases in northern Wake County.",
    h1: "Mortgage broker serving Wake Forest, North Carolina",
    intro:
      "Wake Forest blends a walkable historic core with substantial new subdivision growth to the north. Buyers here often compare an older in-town home against new construction a few miles away, and the two carry different financing considerations.",
    context: [
      {
        t: "Historic downtown versus new subdivisions",
        b: "In-town homes can raise age and condition questions on appraisal, while new subdivisions bring builder timelines, HOA dues and upgrade pricing into the calculation.",
      },
      {
        t: "Larger lots and rural boundaries",
        b: "Toward the county edge, larger acreage or well and septic systems can appear. Those affect appraisal comparables and, in some programs, specific inspection requirements.",
      },
      {
        t: "Commuter budgeting",
        b: "Many Wake Forest buyers commute into Raleigh or RTP. Housing cost is only part of the picture, so we build the payment target around your whole monthly budget.",
      },
    ],
    neighborhoods: ["Historic Downtown", "Heritage", "Traditions", "Wakefield", "Holding Village"],
    buyerProfile: "Move-up buyers, new-construction purchasers, and families seeking larger lots within commuting distance.",
    faqs: [
      { q: "Does a well or septic system affect financing?", a: "Some programs have specific requirements for water and septic systems. It is manageable, but it should be identified early rather than during underwriting." },
      { q: "Can I finance a larger acreage property?", a: "Often yes, though appraisal comparables and program guidelines around acreage and outbuildings need to be reviewed for the specific property." },
    ],
    services: ["home-loans", "conventional-loans", "refinancing"],
  },
  {
    slug: "chapel-hill-nc",
    city: "Chapel Hill",
    state: "NC",
    county: "Orange County",
    title: "Mortgage Broker in Chapel Hill, NC | Premier Lending NC",
    description:
      "Mortgage broker serving Chapel Hill, NC. Financing guidance for university and healthcare professionals, condos and higher-balance purchases in Orange County.",
    h1: "Mortgage broker serving Chapel Hill, North Carolina",
    intro:
      "Chapel Hill's market is shaped by the university and the medical center. Academic and physician income structures are common, and so are condominium purchases — both of which have documentation and guideline specifics that a general conversation tends to miss.",
    context: [
      {
        t: "Academic and physician income",
        b: "Contract start dates, fellowship stipends, and physician employment agreements are documented differently from standard W-2 income. Some lenders offer structures designed around them.",
      },
      {
        t: "Condominium project review",
        b: "Condo financing depends not only on you but on the project — its budget, reserves, owner-occupancy ratio and litigation status. Project review is a real step and can affect which lenders are available.",
      },
      {
        t: "Orange County cost base",
        b: "Chapel Hill's price and tax profile differs from neighboring Wake County. Escrow estimates should be built on the actual jurisdiction rather than a regional average.",
      },
    ],
    neighborhoods: ["Downtown & Franklin Street", "Meadowmont", "Southern Village", "Chapel Hill North", "Briar Chapel area"],
    buyerProfile: "University and medical center professionals, physicians early in practice, and condominium buyers.",
    faqs: [
      { q: "Can I buy before my new job starts?", a: "Some programs allow qualification with an employment contract and a defined start date, subject to guidelines. This is common for academic and medical appointments." },
      { q: "Why is condo financing more complicated?", a: "The lender reviews the condominium project alongside your file. Reserves, owner-occupancy and insurance at the association level can all affect eligibility." },
    ],
    services: ["conventional-loans", "mortgage-pre-approval", "home-loans"],
  },
  {
    slug: "morrisville-nc",
    city: "Morrisville",
    state: "NC",
    county: "Wake County",
    title: "Mortgage Broker in Morrisville, NC | Premier Lending NC",
    description:
      "Mortgage broker serving Morrisville, NC. Townhome and condo financing, relocation guidance and pre-qualification near Research Triangle Park.",
    h1: "Mortgage broker serving Morrisville, North Carolina",
    intro:
      "Morrisville sits between RTP and the airport, and its housing leans heavily toward townhomes and attached product. That changes the financing conversation: HOA structure and, for condos, project review become part of the file.",
    context: [
      {
        t: "Townhome and condo-heavy inventory",
        b: "Whether a property is legally a townhome or a condominium changes the lender's review. The distinction is not always obvious from the listing, and it is worth confirming before you go under contract.",
      },
      {
        t: "Relocation and international income history",
        b: "Morrisville draws buyers relocating for RTP employment, sometimes with limited US credit history or recent arrival. Alternative documentation approaches exist and should be discussed early.",
      },
      {
        t: "Proximity pricing",
        b: "Short commutes to RTP and RDU support steady demand, which affects both appraisal comparables and how quickly you need financing ready when you write an offer.",
      },
    ],
    neighborhoods: ["Park West Village area", "Breckenridge", "Preston Village", "Kitts Creek", "Carpenter Village area"],
    buyerProfile: "Technology and pharmaceutical professionals, relocating buyers, and first-time buyers purchasing attached homes.",
    faqs: [
      { q: "Is a townhome financed like a single-family home?", a: "Often yes, if it is fee-simple. If the property is legally a condominium, the lender also reviews the association, which adds a step." },
      { q: "I recently moved to the US — can I qualify?", a: "It depends on residency status, credit history and income documentation. Some programs accommodate limited US credit history with alternative documentation." },
    ],
    services: ["first-time-home-buyers", "conventional-loans", "mortgage-pre-approval"],
  },
  {
    slug: "holly-springs-nc",
    city: "Holly Springs",
    state: "NC",
    county: "Wake County",
    title: "Mortgage Broker in Holly Springs, NC | Premier Lending NC",
    description:
      "Mortgage broker serving Holly Springs, NC. New construction financing, first-time buyer programs and pre-qualification in southwestern Wake County.",
    h1: "Mortgage broker serving Holly Springs, North Carolina",
    intro:
      "Holly Springs has grown quickly, and much of its inventory is relatively new. Buyers here are often comparing a resale in an established subdivision against a new build a mile away, with meaningfully different financing timelines attached to each.",
    context: [
      {
        t: "Recent-construction resales",
        b: "Homes built in the last two decades tend to appraise cleanly and rarely trigger condition items, which keeps program choice more open than in older markets.",
      },
      {
        t: "Active build pipelines",
        b: "Ongoing construction means extended closing timelines for some buyers. Rate-lock length and income re-verification near closing both matter on those files.",
      },
      {
        t: "Life-sciences employment growth",
        b: "Manufacturing and life-sciences investment in the area brings buyers with shift differentials, overtime and bonus income — all of which are qualifying income only when documented over a sufficient history.",
      },
    ],
    neighborhoods: ["Downtown Holly Springs", "Sunset Ridge", "12 Oaks", "Braxton Village", "Holly Glen"],
    buyerProfile: "First-time and second-time buyers, new-construction purchasers, and families relocating within Wake County.",
    faqs: [
      { q: "Does overtime or bonus income count?", a: "It can, typically when there is a documented history and a reasonable expectation of continuance. The required history length varies by program." },
      { q: "How far ahead should I get pre-qualified for a new build?", a: "Before you sign the builder contract. Terms, deposits and timelines are easier to evaluate when your financing position is already documented." },
    ],
    services: ["first-time-home-buyers", "home-loans", "conventional-loans"],
  },
];

export const locationBySlug = (slug: string) => locations.find((l) => l.slug === slug);
