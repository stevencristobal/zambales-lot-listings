import {
  ShieldCheck,
  FileCheck,
  Handshake,
  Scale,
} from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Verified Information",
    description:
      "Property details are obtained from the property owner, developer, or authorized real estate broker whenever applicable.",
  },
  {
    icon: Handshake,
    title: "Professional Guidance",
    description:
      "Assistance is provided from your initial inquiry through site viewing and coordination with the appropriate parties.",
  },
  {
    icon: FileCheck,
    title: "Transparent Property Information",
    description:
      "Property availability, prices, payment terms, and promotions are always subject to confirmation before reservation.",
  },
  {
    icon: Scale,
    title: "Professional Practice",
    description:
      "This website is intended to provide property information and facilitate inquiries. Transactions are conducted in coordination with the appropriate property owner, developer, or licensed real estate broker whenever required.",
  },
];

export default function Transparency() {
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

        {/* Header */}

        <div className="mx-auto max-w-4xl text-center">

          <p className="uppercase tracking-[0.3em] text-lime-400">
            Transparency & Professional Commitment
          </p>

          <h2 className="mt-5 text-3xl font-black text-white md:text-5xl">
            Buy With Confidence
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-400">
            My commitment is to provide accurate property information,
            transparent communication, and professional assistance
            throughout your property buying journey.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {items.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="
                  group
                  rounded-3xl
                  border
                  border-white/10
                  bg-[#242B28]
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-lime-400
                  hover:shadow-[0_0_35px_rgba(163,230,53,0.12)]
                "
              >

                <div
                  className="
                    mb-6
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-lime-400/10
                    text-lime-400
                    transition-all
                    duration-300
                    group-hover:bg-lime-400
                    group-hover:text-black
                  "
                >

                  <Icon size={30} />

                </div>

                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-400">
                  {item.description}
                </p>

              </div>

            );

          })}

        </div>

        {/* Commitment */}

        <div
          className="
            mx-auto
            mt-16
            max-w-3xl
            rounded-3xl
            border
            border-white/10
            bg-[#242B28]
            p-8
            text-center
          "
        >

          <h3 className="text-2xl font-bold text-lime-400">
            Our Commitment
          </h3>

          <ul className="mt-6 space-y-4 text-gray-400">

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