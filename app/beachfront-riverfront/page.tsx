import CategoryHero from "@/components/property/CategoryHero";
import PropertyGrid from "@/components/property/PropertyGrid";

import { beachfrontRiverfront } from "@/data/properties";


export const metadata = {
  title: "Beachfront & Riverfront Lots | Zambales Lot Listings",

  description:
    "Explore beachfront lots, riverfront properties, vacation lots, and investment opportunities in Zambales.",
};


export default function BeachfrontRiverfrontPage() {
  return (
    <main>

      <CategoryHero
        title="Beachfront & Riverfront Lots"
        subtitle="Premium Nature & Investment Properties"
        description="Discover beachfront and riverfront properties ideal for vacation homes, resorts, retirement plans, and long-term investments."
      />


      <section className="bg-[#111315] py-20">
 <div className="mx-auto max-w-7xl px-6">
        <PropertyGrid
          title="Available Beachfront & Riverfront Lots"
          properties={beachfrontRiverfront}
        />
</div>
      </section>


    </main>
  );
}