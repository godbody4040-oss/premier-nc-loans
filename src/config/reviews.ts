/**
 * Verified client reviews.
 *
 * This list is intentionally empty. Nothing is published here unless it was
 * actually provided by a client and confirmed by Premier Lending NC.
 *
 * To publish a verified review, add an entry below — the Client Stories section
 * switches automatically from its empty state to the review layout.
 */

export type Review = {
  /** Client first name or approved display name */
  name: string;
  /** e.g. "Single Family Purchase" */
  propertyType: string;
  /** Display date, e.g. "March 2026" */
  date: string;
  /** The client's own words */
  quote: string;
  /** Optional approved photo (imported asset URL) */
  photo?: string;
  /** Where the review came from, e.g. "Google Business Profile" */
  source: string;
  /** Only true when the review has been confirmed as authentic */
  verified: boolean;
};

export const reviews: Review[] = [];
