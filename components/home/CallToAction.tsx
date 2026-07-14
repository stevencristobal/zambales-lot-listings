import Link from "next/link";
import {
  ArrowRight,
  Phone,
  CalendarDays,
  MessageCircle,
} from "lucide-react";

export default function CallToAction() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="overflow-hidden rounded-[40px] border border-lime-400/20 bg-gradient-to-br from-lime-400/15 via-black to-black p-10 lg:p-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="uppercase tracking-[0.3em] text-lime-400">
            Ready to Invest?
          </p>

          <h2 className="mt-5 text-xl font-black leading-tight">
            Find Your Ideal Property
            <br />
            in Zambales Today
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-7 text-gray-300">
            Browse available listings, compare investment opportunities,
            contact me directly through Messenger, and schedule a
            site viewing.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <Link
            href="/residential-lots"
            className="flex items-center justify-center gap-3 rounded-2xl bg-lime-400 py-3 text-base font-bold text-black transition hover:bg-lime-300"
          >
            Browse Properties
            <ArrowRight size={20} />
          </Link>

          <Link
            href="https://m.me/stevenscristobal"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 rounded-2xl border border-lime-400 py-3 text-base font-bold text-lime-400 transition hover:bg-lime-400 hover:text-black"
          >
            <MessageCircle size={20} />
            Message on Messenger
          </Link>

          <Link
            href="https://m.me/stevenscristobal"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 rounded-2xl border border-white/20 py-3 text-base font-bold transition hover:border-lime-400"
          >
            <CalendarDays size={20} />
            Schedule Site Viewing
          </Link>
        </div>

        <div className="mt-16 grid gap-8 border-t border-lime-400/20 pt-10 md:grid-cols-3">
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

        <div className="mt-14 rounded-3xl border border-lime-400/20 bg-white/5 p-8 text-center">
          <Phone
            size={42}
            className="mx-auto mb-6 text-lime-400"
          />

          <h3 className="text-xl font-black">
            Need Immediate Assistance?
          </h3>

          <p className="mt-4 leading-8 text-gray-400">
            Whether you're buying your first property or looking for
            your next investment, I'm here to help you every step
            of the way.
          </p>

          <Link
            href="https://m.me/stevenscristobal"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-lime-400 px-10 py-4 font-bold text-black transition hover:bg-lime-300"
          >
            Message Steven
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}