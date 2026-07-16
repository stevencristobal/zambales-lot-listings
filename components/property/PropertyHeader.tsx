import Link from "next/link";
import { Property } from "@/types/property";

interface PropertyHeaderProps {
  property: Property;
}

export default function PropertyHeader({
  property,
}: PropertyHeaderProps) {
  return (
    <section className="mb-10">

      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 rounded-xl border border-lime-400/20 px-5 py-3 text-sm font-semibold text-lime-400 transition hover:bg-lime-400 hover:text-black"
      >
        ← Back to Home
      </Link>

      <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

        <div>

          <span className="inline-flex rounded-full bg-lime-400/20 px-4 py-2 text-sm font-semibold text-lime-400">

            {property.category}

          </span>

          <h1 className="mt-6 text-5xl font-black leading-tight">

            {property.title}

          </h1>

          <p className="mt-4 text-xl text-gray-400">

            {property.address}

          </p>

        </div>

        <div className="rounded-3xl border border-lime-400/20 bg-lime-400/10 px-8 py-6 text-right">

          <p className="text-sm uppercase tracking-[0.25em] text-gray-400">

            Starting Price

          </p>

          <h2 className="mt-3 text-4xl font-black text-lime-400">

            ₱{property.price.toLocaleString()}

          </h2>

        </div>

      </div>

      <div className="mt-8 flex flex-wrap gap-4">

        <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-3">

          <span className="text-gray-400">Lot Area</span>

          <p className="mt-1 font-bold">

            {property.lotAreaMin === property.lotAreaMax
        ? `${property.lotAreaMin.toLocaleString()} sqm`
        : `${property.lotAreaMin.toLocaleString()} - ${property.lotAreaMax.toLocaleString()} sqm`}

          </p>

        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-3">

          <span className="text-gray-400">Property Code</span>

          <p className="mt-1 font-bold">

            {property.code}

          </p>

        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-3">

          <span className="text-gray-400">Reservation Fee</span>

          <p className="mt-1 font-bold">

            ₱{property.reservationFee.toLocaleString()}

          </p>

        </div>

      </div>

    </section>
  );
}