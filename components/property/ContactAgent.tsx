import Link from "next/link";

interface ContactAgentProps {
  agentName?: string;
  mobile?: string;
  email?: string;
}

export default function ContactAgent({
  agentName = "Steven Cristobal",
  mobile = "+63 917 123 4567",
  email = "hello@zambaleslotlistings.com",
}: ContactAgentProps) {
  const whatsapp = mobile.replace(/\D/g, "");

  return (
    <section className="rounded-3xl border border-lime-400/20 bg-white/5 p-8 backdrop-blur-xl">

      <div className="flex items-center gap-5">

        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-lime-400 text-3xl font-black text-black">
          SC
        </div>

        <div>

          <p className="text-sm uppercase tracking-[0.25em] text-lime-400">
            Property Consultant
          </p>

          <h2 className="mt-2 text-2xl font-black">
            {agentName}
          </h2>

        </div>

      </div>

      <p className="mt-8 leading-8 text-gray-300">
        Need more information or want to schedule a site viewing?
        I'm here to help you find the right property and guide you
        throughout the buying process.
      </p>

      <div className="mt-8 space-y-4">

        <a
          href={`tel:${mobile}`}
          className="block rounded-2xl border border-white/10 p-4 transition hover:border-lime-400"
        >
          📞 {mobile}
        </a>

        <a
          href={`mailto:${email}`}
          className="block rounded-2xl border border-white/10 p-4 transition hover:border-lime-400"
        >
          ✉️ {email}
        </a>

      </div>

      <div className="mt-8 grid gap-4">

        <Link
          href="/contact"
          className="rounded-2xl bg-lime-400 py-4 text-center font-bold text-black transition hover:bg-lime-300"
        >
          Send Inquiry
        </Link>

        <a
          href={`https://wa.me/${whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border border-lime-400 py-4 text-center font-semibold text-lime-400 transition hover:bg-lime-400 hover:text-black"
        >
          Chat via WhatsApp
        </a>

      </div>

      <div className="mt-8 rounded-2xl border border-lime-400/20 bg-lime-400/5 p-5">

        <p className="text-sm leading-7 text-gray-300">
          Property availability, pricing, and payment terms are subject
          to change without prior notice. Information is provided in
          coordination with the property owner, developer, or authorized
          real estate broker whenever applicable.
        </p>

      </div>

    </section>
  );
}