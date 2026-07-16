import { NextResponse } from "next/server";
import properties from "@/data/properties";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const query = searchParams
    .get("q")
    ?.trim()
    .toLowerCase();

  if (!query) {
    return NextResponse.json([]);
  }

  const results = properties.filter((property) => {
    if (property.visibility !== "Public") {
      return false;
    }

    const searchableText = `
      ${property.code}
      ${property.title}
      ${property.category}
      ${property.propertyType}
      ${property.province}
      ${property.municipality}
      ${property.barangay}
      ${property.address}
      ${property.description}
      ${property.priceDisplay}
    `
      .toLowerCase()
      .replace(/\s+/g, " ");

    return searchableText.includes(query);
  });

  return NextResponse.json(results);
}