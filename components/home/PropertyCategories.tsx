import Link from "next/link";

import {
  Home,
  Building2,
  Trees,
  Waves,
  Landmark,
  ArrowRight,
} from "lucide-react";


const categories = [

  {
    title: "Residential",
    label: "House & Residential Lots",
    description:
      "Ideal properties for your future home and family investment.",
    href: "/residential-lots",
    icon: Home,
  },


  {
    title: "Commercial",
    label: "Business Properties",
    description:
      "Strategic locations for business and income opportunities.",
    href: "/commercial-lots",
    icon: Building2,
  },


  {
    title: "Farm",
    label: "Agricultural Properties",
    description:
      "Farm lots, agricultural lands, and nature investments.",
    href: "/farm-lots",
    icon: Trees,
  },


  {
    title: "Beachfront & Riverfront",
    label: "Nature Investments",
    description:
      "Beach, river, and leisure investment opportunities.",
    href: "/beachfront-riverfront",
    icon: Waves,
  },


  {
    title: "Investment",
    label: "Growth Opportunities",
    description:
      "High potential properties for long-term value.",
    href: "/investment-properties",
    icon: Landmark,
  },

];




export default function PropertyCategories() {


  return (

    <section className="mx-auto max-w-7xl px-6 py-24">


      <div className="mb-16 text-center">


        <p className="uppercase tracking-[0.35em] text-lime-400">

          Featured Property Categories

        </p>


        <h2 className="mt-5 text-4xl font-black">

          Explore Investment Opportunities

        </h2>


        <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-400">

          Browse selected properties across Zambales including
          residential, commercial, farm, beachfront, riverfront,
          and investment opportunities.

        </p>


      </div>





      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">


        {categories.map((category) => {


          const Icon = category.icon;


          return (

            <Link

              key={category.href}

              href={category.href}

              className="
              group
              rounded-[2rem]
              border
              border-lime-400/20
              bg-white/5
              p-8
              transition
              duration-300
              hover:-translate-y-2
              hover:border-lime-400
              hover:bg-white/10
              "

            >


              <div
                className="
                mb-8
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-lime-400/10
                text-lime-400
                transition
                group-hover:bg-lime-400
                group-hover:text-black
                "
              >


                <Icon size={32}/>


              </div>




              <p className="mb-3 text-sm text-lime-400">


                {category.label}


              </p>




              <h3 className="text-xl font-black">


                {category.title}


              </h3>




              <p className="mt-5 leading-8 text-gray-400">


                {category.description}


              </p>




              <div
                className="
                mt-8
                flex
                items-center
                gap-2
                font-bold
                text-lime-400
                "
              >


                View Properties


                <ArrowRight

                  size={18}

                  className="
                  transition
                  group-hover:translate-x-2
                  "

                />


              </div>


            </Link>

          );

        })}


      </div>


    </section>

  );

}