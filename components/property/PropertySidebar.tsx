import { Property } from "@/types/property";

interface PropertySidebarProps {
  property: Property;
}

export default function PropertySidebar({
  property,
}: PropertySidebarProps) {
  return (
    <aside className="sticky top-24 rounded-3xl border border-lime-400/20 bg-white/5 p-8 backdrop-blur-xl">
      {/* STATUS */}
      <div className="mb-8">
        <span
          className={`inline-flex rounded-full px-4 py-2 text-sm font-semibold ${
            property.status === "Available"
              ? "bg-lime-400/20 text-lime-400"
              : property.status === "Reserved"
              ? "bg-yellow-500/20 text-yellow-400"
              : property.status === "Few Lots Left"
              ? "bg-orange-500/20 text-orange-400"
              : property.status === "Coming Soon"
              ? "bg-blue-500/20 text-blue-400"
              : "bg-red-500/20 text-red-400"
          }`}
        >
          {property.status}
        </span>
      </div>

      <div className="space-y-6">
        {/* PROPERTY CODE */}
        <div>
          <p className="text-sm text-gray-500">
            Property Code
          </p>

          <p className="mt-1 font-semibold">
            {property.code}
          </p>
        </div>

        {/* PRICE */}
        <div>
          <p className="text-sm text-gray-500">
            Price
          </p>

          <h2 className="mt-2 text-4xl font-black text-lime-400">
            {property.priceDisplay}
          </h2>
        </div>

        {/* LOT INFO */}
        <div className="grid grid-cols-2 gap-5">
          <div>
            <p className="text-sm text-gray-500">
              Lot Area
            </p>

            <p className="mt-1 font-semibold">
              {property.lotAreaMin === property.lotAreaMax
                ? `${property.lotAreaMin.toLocaleString()} sqm`
                : `${property.lotAreaMin.toLocaleString()} - ${property.lotAreaMax.toLocaleString()} sqm`}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Price / sqm
            </p>

            <p className="mt-1 font-semibold">
              ₱{property.pricePerSqm.toLocaleString()}
            </p>
          </div>
        </div>

        {/* RESERVATION */}
        <div>
          <p className="text-sm text-gray-500">
            Reservation Fee
          </p>

          <p className="mt-1 font-semibold">
            ₱{property.reservationFee.toLocaleString()}
          </p>
        </div>

        {/* PAYMENT */}
        <div>
          <p className="text-sm text-gray-500">
            Payment Terms
          </p>

          <p className="mt-2 leading-7">
            {property.paymentTerms}
          </p>
        </div>

        {/* DEVELOPER */}
        <div>
          <p className="text-sm text-gray-500">
            Developer / Source
          </p>

          <p className="mt-1 font-semibold">
            {property.developer || property.listingSource}
          </p>
        </div>

        {/* DOCUMENT */}
        <div>
          <p className="text-sm text-gray-500">
            Document
          </p>

          <p className="mt-1 font-semibold">
            {property.documentType}
          </p>
        </div>

        {/* TITLE STATUS */}
        <div>
          <p className="text-sm text-gray-500">
            Title Status
          </p>

          <p className="mt-1 font-semibold">
            {property.titleStatus}
          </p>
        </div>

        {/* ZONING */}
        <div>
          <p className="text-sm text-gray-500">
            Zoning
          </p>

          <p className="mt-1 font-semibold">
            {property.zoning}
          </p>
        </div>

        {/* BUTTONS */}
        <button className="w-full rounded-2xl bg-lime-400 py-4 text-lg font-bold text-black transition hover:bg-lime-300">
          Inquire Now
        </button>

        <button className="w-full rounded-2xl border border-lime-400 py-4 font-semibold text-lime-400 transition hover:bg-lime-400 hover:text-black">
          Request Full Computation
        </button>

        {/* TRANSPARENCY */}
        <div className="rounded-2xl border border-lime-400/20 bg-lime-400/5 p-5">
          <h3 className="mb-3 font-bold text-lime-400">
            Transparency
          </h3>

          <p className="text-sm leading-7 text-gray-300">
            Property information is presented in coordination with the
            respective property owner, developer, or authorized real
            estate broker whenever applicable. Availability, prices,
            payment terms, and documents may change without prior notice.
          </p>
        </div>
      </div>
    </aside>
  );
}