import Image from "next/image";
import {
  ArrowRight,
  Search,
  MapPin,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-[#111315]">

      <div className="mx-auto grid max-w-7xl items-stretch gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-20 lg:py-28">

        {/* LEFT */}

        <div className="flex flex-col">

          <div className="mb-6 flex justify-center lg:justify-start">

            <div
              className="
              inline-flex
              items-center
              rounded-full
              border
              border-white/10
              bg-[#111315]
              px-6
              py-3
              text-sm
              font-medium
              uppercase
              tracking-[0.25em]
              text-lime-400
              "
            >

              <MapPin size={16} className="mr-2" />

              Zambales Lot Listings & Investment Properties

            </div>

          </div>

          <h1 className="text-center text-5xl font-black leading-tight text-white lg:text-left lg:text-7xl">

            Discover Prime

            <br />

            Lots &

            <br />

            <span className="text-lime-400">

              Investment Properties

            </span>

          </h1>

          <p
            className="
            mx-auto
            mt-8
            max-w-xl
            text-center
            text-lg
            leading-8
            text-gray-400
            lg:mx-0
            lg:text-left
            "
          >

            Find residential lots, beachfront properties,
            riverfront investments, farm lots, and commercial
            opportunities across Zambales.

          </p>

          {/* BUTTONS */}

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <a
              href="#properties"
              className="
              inline-flex
              items-center
              justify-center
              gap-3
              rounded-2xl
              bg-lime-400
              px-8
              py-4
              font-bold
              text-black
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-lime-300
              "
            >

              Browse Properties

              <ArrowRight size={18} />

            </a>

            <a
              href="#payment-terms"
              className="
              inline-flex
              items-center
              justify-center
              rounded-2xl
              border
              border-white/10
              bg-[#111315]
              px-8
              py-4
              font-bold
              text-lime-400
              transition-all
              duration-300
              hover:border-lime-400
              hover:bg-lime-400
              hover:text-black
              "
            >

              Payment Terms

            </a>

          </div>

          {/* SEARCH */}

          <div
            className="
            mt-12
            max-w-xl
            rounded-3xl
            border
            border-white/10
            bg-[#111315]
            p-5
            "
          >

            <div className="flex items-center gap-3">

              <Search
                className="text-lime-400"
                size={20}
              />

              <input
                suppressHydrationWarning
                type="text"
                placeholder="Search location or property..."
                className="
                w-full
                bg-transparent
                text-white
                outline-none
                placeholder:text-gray-500
                "
              />

            </div>

          </div>

          {/* STATS */}

          <div className="mt-auto pt-12">

            <div className="grid grid-cols-3 gap-8">

              <div>

                <h3 className="text-4xl font-black text-lime-400">

                  100+

                </h3>

                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-gray-400">

                  Listings

                </p>

              </div>

              <div>

                <h3 className="text-4xl font-black text-lime-400">

                  5+

                </h3>

                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-gray-400">

                  Categories

                </p>

              </div>

              <div>

                <h3 className="text-4xl font-black text-lime-400">

                  PH

                </h3>

                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-gray-400">

                  Coverage

                </p>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="flex">

          <div
            className="
            flex
            w-full
            rounded-[36px]
            border
            border-white/10
            bg-[#111315]
            p-4
            "
          >

            <Image
              src="/images/steven-profile.png"
              alt="Steven Cristobal"
              width={600}
              height={700}
              priority
              className="h-full w-full rounded-[28px] object-cover"
            />

          </div>

        </div>

      </div>

    </section>
  );
}