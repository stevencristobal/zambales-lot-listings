import Image from "next/image";
import Link from "next/link";

import {
  MapPin,
  Ruler,
} from "lucide-react";

import { Property } from "@/types/property";

type Props = {
  property: Property;
};

export default function PropertyCard({
  property,
}: Props) {
  return (
    <div
      className="
      group
      relative
      overflow-hidden
      rounded-[30px]
      border
      border-white/10
      bg-[#111315]
      shadow-lg
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-lime-400
      hover:shadow-[0_0_35px_rgba(163,230,53,0.12)]
      "
    >

      {/* STATUS */}

      {property.status !== "Available" && (

        <div
          className="
          absolute
          right-4
          top-4
          z-10
          rounded-full
          bg-lime-400
          px-4
          py-2
          text-sm
          font-bold
          text-black
          "
        >

          {property.status}

        </div>

      )}

      {/* IMAGE */}

      <div className="relative h-64 overflow-hidden">

        <Image
          src={property.mainImage || "/images/no-image.jpg"}
          alt={property.title}
          fill
          sizes="400px"
          className="
          object-cover
          transition-transform
          duration-500
          group-hover:scale-105
          "
        />

      </div>

      {/* DETAILS */}

      <div className="p-6">

        <p
          className="
          text-sm
          font-semibold
          uppercase
          tracking-[0.2em]
          text-lime-400
          "
        >

          {property.category}

        </p>

        <h3
          className="
          mt-3
          text-2xl
          font-black
          leading-tight
          text-white
          "
        >

          {property.title}

        </h3>

        {/* LOCATION */}

        <div
          className="
          mt-5
          flex
          items-center
          gap-2
          text-gray-400
          "
        >

          <MapPin size={16} />

          {property.municipality}, {property.province}

        </div>

        {/* LOT SIZE */}

        <div
          className="
          mt-3
          flex
          items-center
          gap-2
          text-gray-400
          "
        >

          <Ruler size={16} />

          {property.lotAreaMin === property.lotAreaMax
            ? `${property.lotAreaMin} sqm`
            : `${property.lotAreaMin} - ${property.lotAreaMax} sqm`}

        </div>

        {/* PRICE */}

        <h4
          className="
          mt-6
          text-3xl
          font-black
          text-lime-400
          "
        >

          {property.priceDisplay}

        </h4>

        {/* BUTTON */}

        <div className="mt-6">

          <Link
            href={`/property/${property.slug}`}
            className="
            block
            rounded-2xl
            bg-lime-400
            py-4
            text-center
            font-bold
            text-black
            transition-all
            duration-300
            hover:bg-lime-300
            hover:-translate-y-1
            "
          >

            View Property Details

          </Link>

        </div>

      </div>

    </div>
  );
}