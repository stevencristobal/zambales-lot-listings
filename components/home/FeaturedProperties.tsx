import Link from "next/link";

import { featuredProperties } from "@/data/properties";

import PropertyCard from "@/components/property/PropertyCard";


export default function FeaturedProperties() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">

      <div className="mb-12 flex items-end justify-between gap-6">

        <div>

          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-lime-400">
            Featured Listings
          </p>

          <h2 className="text-2xl font-black">
            Featured Properties
          </h2>

          <p className="mt-4 max-w-2xl text-gray-400">
            Explore selected property opportunities in Zambales.
          </p>

        </div>


        <Link
          href="/residential-lots"
          className="hidden rounded-xl border border-lime-400 px-6 py-3 text-lime-400 transition hover:bg-lime-400 hover:text-black md:block"
        >
          View All Properties
        </Link>


      </div>


      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {featuredProperties.map((property) => (

          <PropertyCard
            key={property.slug}
            property={property}
          />

        ))}

      </div>

    </section>
  );
}