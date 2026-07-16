import Link from "next/link";

import { featuredProperties } from "@/data/properties";
import PropertyCard from "@/components/property/PropertyCard";

export default function FeaturedProperties() {
  return (
    <section className="bg-[#111315] py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">

          <div>

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-lime-400">
              Featured Listings
            </p>

            <h2 className="text-4xl font-black text-white">
              Featured Properties
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-gray-400">
              Explore carefully selected property opportunities across
              Zambales, from residential and commercial lots to premium
              beachfront, riverfront, and investment properties.
            </p>

          </div>

          <Link
            href="/residential-lots"
            className="
              hidden
              rounded-2xl
              border
              border-white/10
              bg-[#111315]
              px-7
              py-4
              font-semibold
              text-lime-400
              transition-all
              duration-300
              hover:border-lime-400
              hover:bg-lime-400
              hover:text-black
              md:inline-flex
            "
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

      </div>

    </section>
  );
}