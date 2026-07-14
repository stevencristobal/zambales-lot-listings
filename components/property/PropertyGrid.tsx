import { Property } from "@/types/property";
import PropertyCard from "./PropertyCard";

interface PropertyGridProps {
  title?: string;
  properties: Property[];
}

export default function PropertyGrid({
  title,
  properties,
}: PropertyGridProps) {
  return (
    <section>

      {title && (
        <div className="mb-10">

          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-lime-400">
            Property Listings
          </p>

          <h2 className="text-4xl font-black">
            {title}
          </h2>

        </div>
      )}


      {properties.length === 0 ? (

        <div className="rounded-3xl border border-lime-400/20 bg-white/5 p-10 text-center">

          <h3 className="text-xl font-bold">
            No Properties Available
          </h3>

          <p className="mt-3 text-gray-400">
            New listings will be posted soon.
          </p>

        </div>

      ) : (

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {properties.map((property) => (

            <PropertyCard
              key={property.slug}
              property={property}
            />

          ))}

        </div>

      )}

    </section>
  );
}