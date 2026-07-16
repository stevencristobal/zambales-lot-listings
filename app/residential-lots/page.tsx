import CategoryHero from "@/components/property/CategoryHero";
import PropertyGrid from "@/components/property/PropertyGrid";

import { residentialLots } from "@/data/properties";

export const metadata = {
  title: "Residential Lots for Sale in Zambales",
  description:
    "Browse available residential lots in Zambales. Find your ideal property investment with trusted assistance.",
};

export default function ResidentialLotsPage() {
  return (
    <main>

      <CategoryHero
        title="Residential Lots"
        subtitle="Build Your Future Home in Zambales"
        description="
          Explore residential properties suitable for
          family homes, vacation houses, retirement plans,
          and long-term investments.
        "
      />

      <section className="bg-[#111315] py-20">

        <div className="mx-auto max-w-7xl px-6">

          <PropertyGrid
          
            title="Available Residential Lots"
              
            properties={residentialLots}
          />
<h2 className="text-4xl font-black text-white"></h2>
        </div>

      </section>

    </main>
  );
}