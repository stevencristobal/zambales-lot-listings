import { Property } from "@/types/property";

interface PropertyDetailsProps {
  property: Property;
}

export default function PropertyDetails({
  property,
}: PropertyDetailsProps) {
  return (
    <section className="rounded-3xl border border-lime-400/20 bg-white/5 p-8 backdrop-blur-xl">

      <div className="mb-8">

        <p className="uppercase tracking-[0.3em] text-lime-400">
          Property Information
        </p>

        <h2 className="mt-3 text-3xl font-black">
          Property Details
        </h2>

      </div>

      <div className="grid gap-5">

        <Detail
          label="Property Code"
          value={property.code}
        />

        <Detail
          label="Category"
          value={property.category}
        />

        <Detail
          label="Lot Area"
          value={
                  property.lotAreaMin === property.lotAreaMax
              ? `${property.lotAreaMin.toLocaleString()} sqm`
              : `${property.lotAreaMin.toLocaleString()} - ${property.lotAreaMax.toLocaleString()} sqm`
          }
        />

        <Detail
          label="Price"
          value={`₱${property.price.toLocaleString()}`}
          highlight
        />

        <Detail
          label="Price per sqm"
          value={`₱${property.pricePerSqm.toLocaleString()}`}
        />

        <Detail
          label="Reservation Fee"
          value={`₱${property.reservationFee.toLocaleString()}`}
        />

        <Detail
          label="Payment Terms"
          value={property.paymentTerms}
        />

        <Detail
          label="Location"
          value={property.address}
        />

      </div>

    </section>
  );
}

interface DetailProps {
  label: string;
  value: string;
  highlight?: boolean;
}

function Detail({
  label,
  value,
  highlight = false,
}: DetailProps) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 p-5">

      <span className="text-gray-400">
        {label}
      </span>

      <span
        className={`font-semibold ${
          highlight ? "text-2xl text-lime-400 font-black" : ""
        }`}
      >
        {value}
      </span>

    </div>
  );
}