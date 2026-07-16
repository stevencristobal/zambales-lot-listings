import {
  ShieldCheck,
  MapPinned,
  Handshake,
  Calculator,
  SearchCheck,
  PhoneCall,
} from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Transparent Process",
    description:
      "Property information is presented with honesty and professional guidance from inquiry to site viewing.",
  },
  {
    icon: SearchCheck,
    title: "Carefully Selected Listings",
    description:
      "Properties are organized to help you quickly find residential, commercial, farm, beachfront, and investment opportunities.",
  },
  {
    icon: Calculator,
    title: "Fast Property Computation",
    description:
      "Get payment estimates and reservation information to help you evaluate your options.",
  },
  {
    icon: MapPinned,
    title: "Local Knowledge",
    description:
      "Focused on Zambales properties with valuable local insights about each area and investment potential.",
  },
  {
    icon: Handshake,
    title: "Professional Assistance",
    description:
      "Receive guidance throughout your property search, inquiries, and site viewing schedule.",
  },
  {
    icon: PhoneCall,
    title: "Responsive Support",
    description:
      "Questions, property requests, and viewing schedules are handled as quickly as possible.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#111315] py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <p className="uppercase tracking-[0.35em] text-lime-400 font-semibold">
            Why Choose Us
          </p>

          <h2 className="mt-5 text-4xl font-black text-white">
            More Than Property Listings
          </h2>

          <p className="mt-6 leading-8 text-gray-400">
            Our goal is to help buyers make informed property decisions
            through organized listings, transparent information,
            and professional assistance.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

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
                bg-[#111315]
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

      </div>

    </section>
  );
}