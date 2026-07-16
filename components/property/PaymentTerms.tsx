import { Property } from "@/types/property";

interface PaymentTermsProps {
  property: Property;
}

export default function PaymentTerms({
  property,
}: PaymentTermsProps) {
  return (
    <section className="rounded-3xl border border-lime-400/20 bg-white/5 p-8 backdrop-blur-xl">

      <div className="mb-8">

        <p className="uppercase tracking-[0.3em] text-lime-400">
          Payment Information
        </p>

        <h2 className="mt-3 text-3xl font-black">
          Payment Terms
        </h2>

      </div>

      <div className="space-y-6">

        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 p-5">

          <span className="text-gray-400">
            Total Contract Price
          </span>

          <span className="text-2xl font-black text-lime-400">
            ₱{property.price.toLocaleString()}
          </span>

        </div>

        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 p-5">

          <span className="text-gray-400">
            Reservation Fee
          </span>

          <span className="font-bold">
            ₱{property.reservationFee.toLocaleString()}
          </span>

        </div>

        <div className="rounded-2xl border border-white/10 bg-black/20 p-5">

          <p className="mb-3 text-gray-400">
            Available Payment Terms
          </p>

          <p className="leading-8">
            {property.paymentTerms}
          </p>

        </div>

        <div className="rounded-2xl border border-lime-400/20 bg-lime-400/5 p-6">

          <h3 className="mb-4 text-xl font-bold text-lime-400">
            Need a Complete Computation?
          </h3>

          <p className="leading-8 text-gray-300">
            Request a personalized computation based on your preferred
            down payment, monthly amortization, and payment period.
          </p>

          <button className="mt-6 w-full rounded-2xl bg-lime-400 py-4 font-bold text-black transition hover:bg-lime-300">
            Request Complete Computation
          </button>

        </div>

        <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-5">

          <p className="text-sm leading-7 text-yellow-200">
            Payment terms, prices, discounts, and promotions are subject
            to change without prior notice and may vary depending on the
            developer, property owner, or authorized broker.
          </p>

        </div>

      </div>

    </section>
  );
}