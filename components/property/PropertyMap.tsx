import { Property } from "@/types/property";


interface PropertyMapProps {
  property: Property;
}


export default function PropertyMap({
  property,
}: PropertyMapProps) {
  return (
    <section className="rounded-3xl border border-lime-400/20 bg-white/5 p-8">

      <h2 className="mb-6 text-3xl font-black">
        Location
      </h2>


      <div className="rounded-2xl bg-black/40 p-6">

        <p className="text-gray-300">
          {property.address}
        </p>

        <p className="mt-2 text-gray-500">

          {property.barangay},{" "}
          {property.municipality},{" "}
          {property.province}

        </p>

      </div>


    </section>
  );
}