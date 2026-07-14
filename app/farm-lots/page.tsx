import CategoryHero from "@/components/property/CategoryHero";
import PropertyGrid from "@/components/property/PropertyGrid";

import { farmLots } from "@/data/properties";

export const metadata = {
  title: "Farm Lots | Zambales Lot Listings",
  description:
    "Available agricultural lots, farm lands, and investment properties in Zambales.",
};

export default function FarmLotsPage() {
  return (
    <main>

      <CategoryHero
        title="Farm Lots"
        subtitle="Own Agricultural & Farm Properties"
        description="Discover farm lots ideal for agriculture, rest houses, retirement plans, and long-term land investments in Zambales."
      />


      <section className="mx-auto max-w-7xl px-6 py-20">

        <PropertyGrid
          title="Available Farm Lots"
          properties={farmLots}
        />

      </section>

    </main>
  );
}