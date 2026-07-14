import {
  ShieldCheck,
  FileCheck,
  Handshake,
  Scale,
} from "lucide-react";

export default function Transparency() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">

      <div className="rounded-[40px] border border-lime-400/20 bg-gradient-to-br from-lime-400/10 to-black p-10 lg:p-16">

        <div className="mx-auto max-w-4xl text-center">

          <p className="uppercase tracking-[0.3em] text-lime-400">
            Transparency & Professional Commitment
          </p>

          <h2 className="mt-5 text-2xl font-black">
            Buy With Confidence
          </h2>

          <p className="mt-8 text-lg leading-7 text-gray-300">

            My commitment is to provide accurate property information,
            transparent communication, and professional assistance
            throughout your property buying journey.

          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          <div className="rounded-3xl border border-lime-400/20 bg-white/5 p-8">

            <ShieldCheck
              size={40}
              className="mb-6 text-lime-400"
            />

            <h3 className="text-2xl font-bold">
              Verified Information
            </h3>

            <p className="mt-4 leading-8 text-gray-400">

              Property details are obtained from the property owner,
              developer, or authorized real estate broker whenever
              applicable.

            </p>

          </div>

          <div className="rounded-3xl border border-lime-400/20 bg-white/5 p-8">

            <Handshake
              size={40}
              className="mb-6 text-lime-400"
            />

            <h3 className="text-2xl font-bold">
              Professional Guidance
            </h3>

            <p className="mt-4 leading-8 text-gray-400">

              Assistance is provided from your initial inquiry
              through site viewing and coordination with the
              appropriate parties.

            </p>

          </div>

          <div className="rounded-3xl border border-lime-400/20 bg-white/5 p-8">

            <FileCheck
              size={40}
              className="mb-6 text-lime-400"
            />

            <h3 className="text-2xl font-bold">
              Complete Disclosure
            </h3>

            <p className="mt-4 leading-8 text-gray-400">

              Property availability, prices, payment terms,
              and promotions are subject to confirmation
              before reservation.

            </p>

          </div>

          <div className="rounded-3xl border border-lime-400/20 bg-white/5 p-8">

            <Scale
              size={40}
              className="mb-6 text-lime-400"
            />

            <h3 className="text-2xl font-bold">
              Professional Practice
            </h3>

            <p className="mt-4 leading-8 text-gray-400">

              This website is intended to provide property
              information and facilitate inquiries. Transactions
              are conducted in coordination with the appropriate
              property owner, developer, or licensed real estate
              broker whenever required.

            </p>

          </div>

        </div>

        <div className="mx-auto mt-16 max-w-3xl rounded-3xl border border-lime-400/20 bg-lime-400/10 p-8 text-center">

          <h3 className="text-2xl font-bold text-lime-400">

            Our Commitment

          </h3>

          <ul className="mt-6 space-y-4 text-gray-300">

            <li>✓ Accurate and transparent property information</li>

            <li>✓ Responsive communication and client support</li>

            <li>✓ Assistance in scheduling site viewings</li>

            <li>✓ Respect for Philippine real estate regulations</li>

            <li>✓ Long-term relationships built on trust</li>

          </ul>

        </div>

      </div>

    </section>
  );
}