import { Property } from "@/types/property";
import {
  Ruler,
  PhilippinePeso,
  MapPin,
  Tag,
} from "lucide-react";

interface PropertyStatsProps {
  property: Property;
}

export default function PropertyStats({
  property,
}: PropertyStatsProps) {
  return (
    <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

      <StatCard
  icon={<Ruler size={28} />}
  label="Lot Area"
  value={
    property.lotAreaMin === property.lotAreaMax
      ? `${property.lotAreaMin.toLocaleString()} sqm`
      : `${property.lotAreaMin.toLocaleString()} - ${property.lotAreaMax.toLocaleString()} sqm`
  }
/>

      <StatCard
        icon={<PhilippinePeso size={28} />}
        label="Price"
        value={`₱${property.price.toLocaleString()}`}
      />

      <StatCard
        icon={<Tag size={28} />}
        label="Property Code"
        value={property.code}
      />

      <StatCard
        icon={<MapPin size={28} />}
        label="Location"
        value={property.address}
      />

    </section>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function StatCard({
  icon,
  label,
  value,
}: StatCardProps) {
  return (
    <div className="rounded-3xl border border-lime-400/20 bg-white/5 p-6 backdrop-blur-xl transition hover:border-lime-400">

      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-400/10 text-lime-400">

        {icon}

      </div>

      <p className="text-sm uppercase tracking-wider text-gray-500">

        {label}

      </p>

      <h3 className="mt-2 break-words text-xl font-black">

        {value}

      </h3>

    </div>
  );
}