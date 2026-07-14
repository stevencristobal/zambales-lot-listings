import { loadPropertiesCSV } from "@/lib/csv";
import { Property } from "@/types/property";


// =====================================================
// LOAD CSV DATABASE
// =====================================================

export const properties =
  loadPropertiesCSV() as Property[];


// =====================================================
// FEATURED PROPERTIES
// =====================================================

export const featuredProperties =
  properties.filter(
    (property) =>
      property.featured === true &&
      property.visibility === "Public"
  );


// =====================================================
// CATEGORY FILTERS
// =====================================================


export const residentialLots =
  properties.filter(
    (property) =>
      property.category === "Residential" &&
      property.visibility === "Public"
  );


export const commercialLots =
  properties.filter(
    (property) =>
      property.category === "Commercial" &&
      property.visibility === "Public"
  );


export const farmLots =
  properties.filter(
    (property) =>
      property.category === "Farm" &&
      property.visibility === "Public"
  );


export const beachfrontRiverfront =
  properties.filter(
    (property) =>
      property.category === "Beachfront & Riverfront" &&
      property.visibility === "Public"
  );


export const investmentProperties =
  properties.filter(
    (property) =>
      property.category === "Investment" &&
      property.visibility === "Public"
  );



// =====================================================
// STATUS FILTERS
// =====================================================


export const availableProperties =
  properties.filter(
    (property) =>
      property.status === "Available"
  );


export const soldOutProperties =
  properties.filter(
    (property) =>
      property.status === "Sold Out"
  );



// =====================================================
// SINGLE PROPERTY FINDER
// =====================================================


export function getPropertyBySlug(
  slug: string
) {

  return properties.find(
    (property) =>
      property.slug === slug
  );

}


// =====================================================
// DEFAULT EXPORT
// =====================================================

export default properties;