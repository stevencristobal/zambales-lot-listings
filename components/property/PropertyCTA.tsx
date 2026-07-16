import Link from "next/link";
import { Phone, Calculator, CalendarDays } from "lucide-react";

interface PropertyCTAProps {
  propertyTitle: string;
  propertyCode: string;
}

export default function PropertyCTA({
  propertyTitle,
  propertyCode,
}: PropertyCTAProps) {
  const message = encodeURIComponent(
    `Hello Steven! I'm interested in:\n\n${propertyTitle}\nProperty Code: ${propertyCode}\n\nPlease send me more details.`
  );

  return (
    <section className="rounded-3xl border border-lime-400/20 bg-gradient-to-br from-lime-400/10 to-black p-8">

      <p className="uppercase tracking-[0.3em] text-lime-400">
        Interested?
      </p>

      <h2 className="mt-3 text-3xl font-black">
        Let's Talk About This Property
      </h2>

      <p className="mt-5 leading-8 text-gray-300">
        Schedule a site viewing, request a complete computation,
        or ask any questions about this property.
      </p>

      <div className="mt-8 grid gap-4">

        <a
          href={`https://m.me/?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl bg-lime-400 py-4 text-center font-bold text-black transition hover:bg-lime-300"
        >
          Message on Messenger
        </a>

        <a
          href={`https://wa.me/639000000000?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 rounded-2xl border border-lime-400 py-4 font-semibold text-lime-400 transition hover:bg-lime-400 hover:text-black"
        >
          <Phone size={20} />
          WhatsApp
        </a>

        <Link
          href="/price-calculator"
          className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 py-4 transition hover:border-lime-400"
        >
          <Calculator size={20} />
          Price Calculator
        </Link>

        <Link
          href="/contact"
          className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 py-4 transition hover:border-lime-400"
        >
          <CalendarDays size={20} />
          Schedule Site Viewing
        </Link>

      </div>

      <div className="mt-8 rounded-2xl border border-lime-400/20 bg-lime-400/5 p-5">

        <p className="text-sm leading-7 text-gray-300">
          Property availability, pricing, payment terms, and promotions
          are subject to verification and may change without prior notice.
          Site viewing is available by appointment.
        </p>

      </div>

    </section>
  );
}