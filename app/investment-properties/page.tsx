import CategoryHero from "@/components/property/CategoryHero";
import PropertyGrid from "@/components/property/PropertyGrid";

import { investmentProperties } from "@/data/properties";


export const metadata = {
  title: "Investment Properties | Zambales Lot Listings",

  description:
    "Discover investment properties, land banking opportunities, and future growth locations in Zambales.",
};


export default function InvestmentPropertiesPage() {
  return (
    <main>

      <CategoryHero
        title="Investment Properties"
        subtitle="Build Wealth Through Real Estate"
        description="Explore carefully selected properties suitable for investors looking for appreciation, development potential, and long-term opportunities."
      />


      <section className="mx-auto max-w-7xl px-6 py-20">

        <PropertyGrid
          title="Available Investment Properties"
          properties={investmentProperties}
        />

      </section>


    </main>
  );
}