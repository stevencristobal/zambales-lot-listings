import { Property } from "@/types/property";

interface PropertyFeaturesProps {
  property: Property;
}

export default function PropertyFeatures({
  property,
}: PropertyFeaturesProps) {
  return (
    <section className="rounded-3xl border border-lime-400/20 bg-white/5 p-8 backdrop-blur-xl">

      <h2 className="mb-8 text-3xl font-black">
        Property Features
      </h2>

      <div className="grid gap-5 md:grid-cols-2">

        <div className="grid gap-5 md:grid-cols-2">

  <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
    ✓ Clean Title
  </div>

  <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
    ✓ Flexible Payment Terms
  </div>

  <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
    ✓ Ideal for Investment
  </div>

  <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
    ✓ Site Viewing Available
  </div>

  <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
    ✓ Accessible Location
  </div>

  <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
    ✓ Professional Assistance
  </div>

</div>

      </div>

      <div className="mt-10 rounded-2xl border border-lime-400/20 bg-lime-400/5 p-6">

        <h3 className="mb-3 text-xl font-bold text-lime-400">
          Investment Highlights
        </h3>

        <ul className="space-y-3 text-gray-300">

          <li>• Clean and organized property information.</li>

          <li>• Ideal for residential or long-term investment.</li>

          <li>• Flexible payment terms (where applicable).</li>

          <li>• Site viewing assistance available upon request.</li>

          <li>• Professional guidance throughout the buying process.</li>

        </ul>

      </div>

    </section>
  );
}