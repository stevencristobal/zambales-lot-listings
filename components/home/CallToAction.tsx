import Link from "next/link";
import {
  ArrowRight,
  Phone,
  CalendarDays,
  MessageCircle,
} from "lucide-react";

export default function CallToAction() {
  return (
    <section className="bg-[#111315] py-24">

      <div
        className="
          mx-auto
          max-w-7xl
          overflow-hidden
          rounded-[40px]
          border
          border-white/10
          bg-[#111315]
          p-10
          lg:p-16
        "
      >

        {/* HEADER */}

        <div className="mx-auto max-w-4xl text-center">

          <p className="uppercase tracking-[0.3em] text-lime-400">
            Start Your Property Journey
          </p>

          <h2 className="mt-5 text-3xl font-black leading-tight text-white md:text-5xl">
            Find Your Next
            <br />
            Property Investment
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            Explore premium property opportunities across Zambales,
            connect directly with Steven, and schedule a site viewing
            with confidence.
          </p>

        </div>

        {/* CTA BUTTONS */}

        <div className="mt-14 grid gap-6 md:grid-cols-3">

          <Link
            href="/residential-lots"
            className="
              flex
              items-center
              justify-center
              gap-3
              rounded-2xl
              bg-lime-400
              py-4
              text-base
              font-bold
              text-black
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-lime-300
            "
          >

            Browse Properties

            <ArrowRight size={20} />

          </Link>

          <Link
            href="https://m.me/stevenscristobal"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              justify-center
              gap-3
              rounded-2xl
              border
              border-white/10
              bg-[#242B28]
              py-4
              text-base
              font-bold
              text-lime-400
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-lime-400
              hover:bg-lime-400
              hover:text-black
            "
          >

            <MessageCircle size={20} />

            Message on Messenger

          </Link>

          <Link
            href="https://m.me/stevenscristobal"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              justify-center
              gap-3
              rounded-2xl
              border
              border-white/10
              bg-[#242B28]
              py-4
              text-base
              font-bold
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-lime-400
              hover:bg-lime-400
              hover:text-black
            "
          >

            <CalendarDays size={20} />

            Schedule Site Viewing

          </Link>

        </div>

        {/* STATS */}

        <div className="mt-16 grid gap-8 border-t border-white/10 pt-10 md:grid-cols-3">

          <div className="text-center">

            <h3 className="text-4xl font-black text-lime-400">
              100%
            </h3>

            <p className="mt-3 text-gray-400">
              Professional Assistance
            </p>

          </div>

          <div className="text-center">

            <h3 className="text-4xl font-black text-lime-400">
              Fast
            </h3>

            <p className="mt-3 text-gray-400">
              Property Inquiry Response
            </p>

          </div>

          <div className="text-center">

            <h3 className="text-4xl font-black text-lime-400">
              Free
            </h3>

            <p className="mt-3 text-gray-400">
              Property Consultation
            </p>

          </div>

        </div>

        {/* CONTACT CARD */}

        <div
          className="
            mt-14
            rounded-3xl
            border
            border-white/10
            bg-[#242B28]
            p-8
            text-center
          "
        >

          <Phone
            size={42}
            className="mx-auto mb-6 text-lime-400"
          />

          <h3 className="text-2xl font-black text-white">
            Need Immediate Assistance?
          </h3>

          <p className="mt-4 leading-8 text-gray-400">
            Whether you're buying your first property or searching
            for your next investment, I'm here to guide you every
            step of the way—from inquiry to site viewing.
          </p>

          <Link
            href="https://m.me/stevenscristobal"
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-8
              inline-flex
              items-center
              gap-3
              rounded-2xl
              bg-lime-400
              px-10
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

        </div>

      </div>

    </section>
  );
}