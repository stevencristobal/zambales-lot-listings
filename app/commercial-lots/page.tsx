import CategoryHero from "@/components/property/CategoryHero";
import PropertyGrid from "@/components/property/PropertyGrid";

import { commercialLots } from "@/data/properties";

export const metadata = {
  title: "Commercial Lots | Zambales Lot Listings",
  description:
    "Available commercial properties and business investment lots in Zambales.",
};

export default function CommercialLotsPage() {
  return (
    <main>

      <CategoryHero
        title="Commercial Lots"
        subtitle="Grow Your Business in Strategic Locations"
        description="Explore commercial lots suitable for business establishments, rentals, developments, and long-term investments."
      />

      <section className="bg-[#242B28] py-20">

        <div className="mx-auto max-w-7xl px-6">

          <PropertyGrid
            title="Available Commercial Lots"
            properties={commercialLots}
          />

        </div>

      </section>

    </main>
  );
}