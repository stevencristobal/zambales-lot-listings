// =====================================================
// Zambales Lot Listings & Investment Properties
// Property Interface V1.1
// =====================================================


export type PropertyCategory =
  | "Residential"
  | "Commercial"
  | "Farm"
  | "Beachfront & Riverfront"
  | "Investment";


export type PropertyStatus =
  | "Available"
  | "Reserved"
  | "Sold Out"
  | "Few Lots Left"
  | "Coming Soon";


export type DocumentType =
  | "TCT"
  | "CLOA"
  | "Tax Declaration"
  | "Mother Title"
  | "Others";


export interface Property {

  code: string;

  slug: string;

  title: string;


  // CATEGORY

  category: PropertyCategory;

  propertyType: string;


  // LOCATION

  province: string;

  municipality: string;

  barangay: string;

  address: string;


  // SOURCE

  listingSource: string;

  developer: string;

  owner: string;

  broker: string;

  agent: string;


  listingType: string;


  // LOT DETAILS

  lotAreaMin: number;

  lotAreaMax: number;


  // PRICE

  price: number;

  pricePerSqm: number;

  priceDisplay: string;

  reservationFee: number;

  paymentTerms: string;


  // DOCUMENTS

  zoning: string;

  documentType: DocumentType;

  titleStatus: string;


  // WEBSITE CONTROL

  status: PropertyStatus;

  featured: boolean;

  visibility: string;


  // MEDIA

  mainImage: string;

  images: string[];


  // CONTENT

  description: string;

}