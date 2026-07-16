import Link from "next/link";
import PropertyCard from "./PropertyCard";
import properties from "@/data/properties";
import { Property } from "@/types/property";

interface RelatedPropertiesProps {
  property: Property;
}

export default function RelatedProperties({
  property,
}: RelatedPropertiesProps) {
  const relatedProperties = properties
    .filter(
      (item) =>
        item.slug !== property.slug &&
        item.category === property.category
    )
    .slice(0, 3);

  if (relatedProperties.length === 0) return null;

  return (
    <section className="mt-24">

      <div className="mb-10 flex items-center justify-between">

        <div>

          <p className="uppercase tracking-[0.3em] text-lime-400">
            More Listings
          </p>

          <h2 className="mt-3 text-4xl font-black">
            Related Properties
          </h2>

        </div>

        <Link
          href={`/${property.category
            .toLowerCase()
            .replace(/\s+/g, "-")}`}
          className="rounded-xl border border-lime-400 px-6 py-3 text-lime-400 transition hover:bg-lime-400 hover:text-black"
        >
          View All
        </Link>

      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {relatedProperties.map((item) => (

          <PropertyCard
            key={item.slug}
            property={item}
          />

        ))}

      </div>

    </section>
  );
}