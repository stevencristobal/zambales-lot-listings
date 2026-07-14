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
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="uppercase tracking-[0.3em] text-lime-400">
            Meet Your Property Consultant
          </p>

          <h2 className="mt-4 text-4xl font-black">
            Steven Cristobal
          </h2>

          <p className="mt-4 leading-7 text-gray-300">
            Helping buyers and investors discover quality properties
            across Zambales through transparent information,
            professional assistance, and personalized service.
          </p>

          <p className="mt-4 leading-7 text-gray-400">
            Whether you're looking for a residential lot, commercial
            property, farm lot, or beachfront investment, my goal is
            to help you make informed property decisions with confidence.
          </p>

          <div className="mt-10 grid gap-5">
            <div className="flex items-center gap-4">
              <Award className="text-lime-400" />
              <span>Professional Property Consultant</span>
            </div>

            <div className="flex items-center gap-4">
              <BadgeCheck className="text-lime-400" />
              <span>Transparent & Honest Property Information</span>
            </div>

            <div className="flex items-center gap-4">
              <MapPinned className="text-lime-400" />
              <span>Focused on Zambales Properties</span>
            </div>

            <div className="flex items-center gap-4">
              <Users className="text-lime-400" />
              <span>Site Viewing Assistance Available</span>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="https://m.me/stevenscristobal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl bg-lime-400 px-8 py-4 font-bold text-black transition hover:bg-lime-300"
            >
              Message Steven
              <ArrowRight size={20} />
            </Link>

            <Link
              href="/residential-lots"
              className="rounded-2xl border border-lime-400 px-8 py-4 font-bold text-lime-400 transition hover:bg-lime-400 hover:text-black"
            >
              Browse Properties
            </Link>
          </div>
        </div>

        <div>
          <div className="rounded-[40px] border border-lime-200/20 bg-white/5 p-10">
            <div className="flex aspect-square items-center justify-center rounded-[30px] border border-dashed border-lime-200/30 bg-black/30">
              <div className="text-center">
                <Image
                  src="/images/steven-about.png"
                  alt="Steven Cristobal Property Consultant"
                  width={400}
                  height={400}
                  className="mx-auto rounded-full object-cover"
                />

                <h3 className="mt-8 text-3xl font-black">
                  Steven Cristobal
                </h3>

                <p className="mt-3 text-gray-400">
                  Property Consultant
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}