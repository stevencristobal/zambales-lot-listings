import { Property } from "@/types/property";

interface PropertyDescriptionProps {
  property: Property;
}

export default function PropertyDescription({
  property,
}: PropertyDescriptionProps) {
  return (
    <section className="rounded-3xl border border-lime-400/20 bg-white/5 p-8 backdrop-blur-xl">

      <div className="mb-8">

        <p className="uppercase tracking-[0.3em] text-lime-400">
          Overview
        </p>

        <h2 className="mt-3 text-3xl font-black">
          Property Description
        </h2>

      </div>

      <div className="prose prose-invert max-w-none">

        <p className="leading-9 text-gray-300 whitespace-pre-line">

          {property.description}

        </p>

      </div>

      <div className="mt-10 rounded-2xl border border-lime-400/20 bg-lime-400/5 p-6">

        <h3 className="mb-4 text-xl font-bold text-lime-400">
          Why Consider This Property?
        </h3>

        <ul className="space-y-3 text-gray-300">

          <li>✔ Excellent investment opportunity</li>

          <li>✔ Suitable for future development</li>

          <li>✔ Flexible payment options may be available</li>

          <li>✔ Ideal for residential or commercial use (depending on zoning)</li>

          <li>✔ Site viewing can be arranged upon request</li>

        </ul>

      </div>

      <div className="mt-8 rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-5">

        <p className="text-sm leading-7 text-yellow-200">

          The information provided is intended for marketing purposes only.
          Availability, pricing, lot area, and payment terms are subject to
          verification and may change without prior notice.

        </p>

      </div>

    </section>
  );
}