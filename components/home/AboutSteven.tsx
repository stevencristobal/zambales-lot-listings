import Image from "next/image";
import Link from "next/link";
import {
  Award,
  BadgeCheck,
  MapPinned,
  Users,
  ArrowRight,
} from "lucide-react";

export default function AboutSteven() {
  return (
    <section className="bg-[#111315] py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <p className="uppercase tracking-[0.35em] font-semibold text-lime-400">
              Meet Steven Cristobal
            </p>

            <h2 className="mt-5 text-4xl font-black text-white">
              Your Trusted Property Consultant
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              I help buyers and investors find the right property through
              transparent guidance, verified information, and personalized
              assistance—from the first inquiry to the site viewing.
            </p>

            <p className="mt-5 leading-8 text-gray-400">
              Whether you're searching for a residential lot, commercial
              property, farm lot, or beachfront investment, my goal is to
              help you make informed property decisions with confidence.
            </p>

            <div className="mt-10 grid gap-5">

              <div className="flex items-center gap-4">
                <Award className="text-lime-400" />
                <span className="text-gray-300">
                  Dedicated Property Consultant
                </span>
              </div>

              <div className="flex items-center gap-4">
                <BadgeCheck className="text-lime-400" />
                <span className="text-gray-300">
                  Transparent & Honest Property Information
                </span>
              </div>

              <div className="flex items-center gap-4">
                <MapPinned className="text-lime-400" />
                <span className="text-gray-300">
                  Focused on Zambales Properties
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Users className="text-lime-400" />
                <span className="text-gray-300">
                  Site Viewing Assistance Available
                </span>
              </div>

            </div>

            <div className="mt-12 flex flex-wrap gap-4">

              <Link
                href="https://m.me/stevenscristobal"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
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
                Message Steven
                <ArrowRight size={20} />
              </Link>

              <Link
                href="/residential-lots"
                className="
                  inline-flex
                  items-center
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
                Browse Properties
              </Link>

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <div
              className="
                rounded-[40px]
                border
                border-white/10
                bg-[#111315]
                p-10
              "
            >

              <div
                className="
                  flex
                  aspect-square
                  items-center
                  justify-center
                  rounded-[30px]
                  border
                  border-white/10
                  bg-[#111315]
                "
              >

                <div className="text-center">

                  <Image
                    src="/images/steven-about.png"
                    alt="Steven Cristobal Property Consultant"
                    width={400}
                    height={400}
                    className="mx-auto rounded-full object-cover"
                  />

                  <h3 className="font-signature mt-8 text-5xl text-white">
                    Steven Cristobal
                  </h3>

                  <p className="mt-3 uppercase tracking-[0.25em] text-gray-400">
                    Property Consultant
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}