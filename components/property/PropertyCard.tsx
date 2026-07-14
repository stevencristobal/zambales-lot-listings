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
      overflow-hidden
      rounded-[30px]
      border
      border-lime-400/20
      bg-white/5
      relative
      "
    >


      {/* STATUS BADGE */}

      {property.status !== "Available" && (

        <div
          className="
          absolute
          z-10
          right-4
          top-4
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

      <div className="relative h-64">


        <Image

          src={
            property.mainImage ||
            "/images/no-image.jpg"
          }

          alt={property.title}

          fill

          sizes="400px"

          className="
          object-cover
          "

        />


      </div>




      {/* DETAILS */}

      <div className="p-6">


        <p
          className="
          text-sm
          text-lime-400
          "
        >

          {property.category}

        </p>



        <h3
          className="
          mt-2
          text-2xl
          font-black
          "
        >

          {property.title}

        </h3>




        {/* LOCATION */}


        <div
          className="
          mt-4
          flex
          items-center
          gap-2
          text-gray-400
          "
        >

          <MapPin size={16}/>

          {property.municipality},
          {" "}
          {property.province}

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

          <Ruler size={16}/>


          {property.lotAreaMin === property.lotAreaMax

            ? `${property.lotAreaMin} sqm`

            : `${property.lotAreaMin} - ${property.lotAreaMax} sqm`

          }


        </div>





        {/* PRICE */}


        <h4
          className="
          mt-5
          text-2xl
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
            rounded-xl
            bg-lime-400
            py-4
            text-center
            font-bold
            text-black
            transition
            hover:bg-lime-300
            "

          >


            View Property Details


          </Link>


        </div>


      </div>


    </div>

  );

}