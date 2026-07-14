import Image from "next/image";
import {
  ArrowRight,
  Search,
  MapPin,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-lime-400/20 via-black to-black" />

      <div className="relative mx-auto grid max-w-7xl items-stretch gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-20 lg:py-24">

        {/* LEFT */}

        <div className="flex flex-col">

          <div className="mb-6 flex justify-center lg:justify-start">

            <div className="inline-flex items-center rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-2 text-xs font-medium uppercase tracking-wider text-lime-400 sm:px-6 sm:py-3 sm:text-sm">

              <MapPin size={16} className="mr-2 flex-shrink-0" />

              Zambales Lot Listings & Investment Properties

            </div>

          </div>

          <h1 className="text-center text-4xl font-black leading-tight sm:text-5xl lg:text-left lg:text-6xl">

            Discover Prime

            <br />

            Lots &

            <br />

            <span className="text-lime-400">

              Investment Properties

            </span>

          </h1>

          <p className="mx-auto mt-6 max-w-xl text-center text-base leading-7 text-gray-300 sm:text-lg sm:leading-8 lg:mx-0 lg:text-left">

            Find residential lots, beachfront properties,
            riverfront investments, farm lots, and commercial
            opportunities across Zambales.

          </p>

          {/* ACTION BUTTONS */}

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">

            <a
              href="#properties"
              className="flex items-center justify-center gap-3 rounded-2xl bg-lime-400 px-7 py-3 font-semibold text-black transition hover:bg-lime-300"
            >
              Browse Properties
              <ArrowRight size={18} />
            </a>

            <a
              href="#payment-terms"
              className="flex items-center justify-center rounded-2xl border border-lime-400 px-7 py-3 font-semibold text-lime-400 transition hover:bg-lime-400 hover:text-black"
            >
              Payment Terms
            </a>

          </div>

          {/* SEARCH */}

          <div className="mt-10 max-w-xl rounded-3xl border border-lime-400/20 bg-white/5 p-4 backdrop-blur-xl">

            <div className="flex items-center gap-3">

              <Search className="text-lime-400" size={20} />

              <input
                suppressHydrationWarning
                type="text"
                placeholder="Search location or property..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-500 sm:text-base"
              />

            </div>

          </div>

          {/* STATS */}

          <div className="mt-auto pt-10">

            <div className="mx-auto grid max-w-md grid-cols-3 gap-6 text-center lg:mx-0 lg:max-w-none lg:text-left">

              <div>

                <h3 className="text-2xl font-black text-lime-400 lg:text-3xl">
                  100+
                </h3>

                <p className="mt-1 text-xs uppercase tracking-wide text-gray-400 sm:text-sm">
                  Listings
                </p>

              </div>

              <div>

                <h3 className="text-2xl font-black text-lime-400 lg:text-3xl">
                  5+
                </h3>

                <p className="mt-1 text-xs uppercase tracking-wide text-gray-400 sm:text-sm">
                  Categories
                </p>

              </div>

              <div>

                <h3 className="text-2xl font-black text-lime-400 lg:text-3xl">
                  PHI
                </h3>

                <p className="mt-1 text-xs uppercase tracking-wide text-gray-400 sm:text-sm">
                  Coverage
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT IMAGE */}

        <div className="flex">

          <div className="flex w-full rounded-[32px] border border-lime-400/20 bg-white/5 p-3 backdrop-blur-xl lg:p-4">

            <Image
              src="/images/steven-profile.png"
              alt="Steven Cristobal"
              width={600}
              height={700}
              priority
              className="h-full w-full rounded-[24px] object-cover"
            />

          </div>

        </div>

      </div>

    </section>
  );
}