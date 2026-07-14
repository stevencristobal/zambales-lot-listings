import Link from "next/link";

interface BreadcrumbProps {
  category: string;
  title: string;
}

function getCategoryLink(category: string) {
  switch (category) {
    case "Residential Lots":
      return "/residential-lots";

    case "Commercial Lots":
      return "/commercial-lots";

    case "Farm Lots":
      return "/farm-lots";

    case "Beachfront & Riverfront":
      return "/beachfront-riverfront";

    case "Investment Properties":
      return "/investment-properties";

    default:
      return "/";
  }
}

export default function Breadcrumb({
  category,
  title,
}: BreadcrumbProps) {
  return (
    <nav className="mb-8 flex flex-wrap items-center gap-3 text-sm">

      <Link
        href="/"
        className="text-gray-400 transition hover:text-lime-400"
      >
        Home
      </Link>

      <span className="text-gray-600">
        /
      </span>

      <Link
        href={getCategoryLink(category)}
        className="text-gray-400 transition hover:text-lime-400"
      >
        {category}
      </Link>

      <span className="text-gray-600">
        /
      </span>

      <span className="font-semibold text-lime-400">
        {title}
      </span>

    </nav>
  );
}