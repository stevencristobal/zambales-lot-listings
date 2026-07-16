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

        <div className="mb-12">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-lime-400">
            Property Listings
          </p>

          <h2 className="text-4xl font-black text-white">
            {title}
          </h2>

        </div>

      )}

      {properties.length === 0 ? (

        <div
          className="
            rounded-3xl
            border
            border-white/10
            bg-[#242B28]
            p-12
            text-center
          "
        >

          <h3 className="text-2xl font-bold text-white">
            No Properties Available
          </h3>

          <p className="mt-4 text-gray-400">
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