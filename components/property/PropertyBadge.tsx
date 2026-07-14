interface PropertyBadgeProps {
  category: string;
  status?: string;
}

export default function PropertyBadge({
  category,
  status = "Available",
}: PropertyBadgeProps) {
  const statusClass =
    status === "Available"
      ? "bg-lime-400/20 text-lime-400 border-lime-400/30"
      : status === "Reserved"
      ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      : "bg-red-500/20 text-red-400 border-red-500/30";

  return (
    <div className="flex flex-wrap items-center gap-3">

      <span className="rounded-full bg-lime-400 px-4 py-2 text-sm font-bold text-black">

        {category}

      </span>

      <span
        className={`rounded-full border px-4 py-2 text-sm font-semibold ${statusClass}`}
      >

        {status}

      </span>

    </div>
  );
}