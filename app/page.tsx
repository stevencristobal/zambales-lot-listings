"use client";

import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  
 const submitInquiry = async () => {
  try {

    // Validation

    const fullName = (document.getElementById("fullName") as HTMLInputElement)?.value;
    const contactNumber = (document.getElementById("contactNumber") as HTMLInputElement)?.value;
    const emailAddress = (document.getElementById("emailAddress") as HTMLInputElement)?.value;
    const propertyCategory = (document.getElementById("propertyCategory") as HTMLSelectElement)?.value;
    const preferredLocation = (document.getElementById("preferredLocation") as HTMLSelectElement)?.value;
    const otherLocation = (document.getElementById("otherLocation") as HTMLInputElement)?.value;
    const budgetRange = (document.getElementById("budgetRange") as HTMLSelectElement)?.value;
    const requirements = (document.getElementById("requirements") as HTMLTextAreaElement)?.value;

        if (
          !fullName ||
          !contactNumber ||
          propertyCategory === "Select Property Category" ||
          preferredLocation === "Select Preferred Location"
        ) {
          alert("Please complete all required fields.");
          return;
        }

    setLoading(true);

    const response = await fetch("/api/inquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName,
        contactNumber,
        emailAddress,
        propertyCategory,
        preferredLocation,
        otherLocation,
        budgetRange,
        requirements,
      }),
    });
    const result = await response.json();

    if (result.success) {

      (document.getElementById("fullName") as HTMLInputElement).value = "";
      (document.getElementById("contactNumber") as HTMLInputElement).value = "";
      (document.getElementById("emailAddress") as HTMLInputElement).value = "";
      (document.getElementById("otherLocation") as HTMLInputElement).value = "";
      (document.getElementById("requirements") as HTMLTextAreaElement).value = "";
      (document.getElementById("propertyCategory") as HTMLSelectElement).selectedIndex = 0;
      (document.getElementById("preferredLocation") as HTMLSelectElement).selectedIndex = 0;
      (document.getElementById("budgetRange") as HTMLSelectElement).selectedIndex = 0;

      alert("Inquiry Submitted Successfully!\n\nI'll contact you soon.");

    } else {

      alert("Unable to submit inquiry.");

    }

    } catch (error) {

      console.error(error);
      alert("Submission failed.");

    } finally {

      setLoading(false);

    }
    
    };

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 bg-black" />

      {/* Grid */}
      <div className="fixed inset-0 opacity-20 bg-[linear-gradient(rgba(132,204,22,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(132,204,22,0.12)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Green Glow */}
      <div className="fixed left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/20 blur-3xl" />

      <section className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}
      <div>
          <div className="mb-6 inline-flex rounded-full border border-lime-400/20 bg-lime-400/10 px-5 py-2 text-base md:text-2xl text-lime-200 backdrop-blur-xl">
            Zambales Lot Listings & Investment Properties
          </div>

            <h1 className="mb-8 text-5xl font-black leading-tight md:text-7xl">
              Discover Prime Lots &
              <span className="block text-lime-400">
                Investment Properties
              </span>
            </h1>

            <p className="mb-10 max-w-2xl text-lg leading-relaxed text-neutral-300">
              Helping homebuyers, investors, and families find the
              right property through trusted developer partnerships,
              personalized assistance, and practical investment
              opportunities.
            </p>

            <div className="flex flex-wrap gap-4">
             <a
                href="#properties"
                className="rounded-2xl bg-lime-400 px-8 py-4 font-semibold text-black transition hover:bg-lime-500"
            >
                View Properties
              </a>

             <a
                href="#contact"
                className="rounded-2xl border border-white/20 px-8 py-4 font-semibold transition hover:bg-white/10"
            >
                Book Site Visit
              </a>
            </div>
            
            </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute h-[550px] w-[550px] rounded-full bg-lime-400/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-lime-400/20 bg-white/5 backdrop-blur-xl shadow-[0_0_80px_rgba(132,204,22,0.15)]">

              <img
                src="/images/steven-profile.png"
                alt="Steven Cristobal"
                className="h-[680px] w-[450px] object-cover object-center"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6">
                <h2 className="text-2xl font-bold">
                  Steven Cristobal
                </h2>

                <p className="text-lime-400">
                  Real Estate Professional
                </p>
              </div>
            </div>
          </div>
        </div>
     </section>

      {/* WHO AM I */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2">

          <div>
            <div className="mb-4 text-sm uppercase tracking-[0.2em] text-lime-400">
              Who Am I
            </div>

            <h2 className="text-4xl font-bold">
              Real Estate Professional • Investment Property Consultant • Entrepreneur
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-neutral-300">
            <p>
              Steven Cristobal is a real estate professional and entrepreneur
              dedicated to helping clients discover residential lots,
              beachfront properties, farm lots, installment properties,
              and investment opportunities across key locations in Luzon.
            </p>

            <p>
              Through partnerships with multiple developers and property
              networks, he helps buyers and investors find practical
              opportunities that align with their goals, budget, and
              long-term plans.
            </p>

            <p>
              His mission is to make property ownership and investment
              more accessible through responsive service, transparent
              communication, and modern digital solutions.
            </p>
          </div>

        </div>
      </section>

      {/* FEATURED PROPERTY CATEGORIES */}
      <section 
        id="properties"
        className="relative z-10 mx-auto max-w-7xl px-6 py-24"
      >
        <div className="mb-16 text-center">
          <div className="mb-4 text-sm uppercase tracking-[0.2em] text-lime-400">
            Featured Property Categories
          </div>

          <h2 className="text-4xl font-bold">
            Explore Investment Opportunities
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          <div className="rounded-3xl border border-lime-400/20 bg-white/5 p-8 backdrop-blur-xl">
            <h3 className="mb-4 text-2xl font-semibold text-lime-400">
              Residential Lots
            </h3>

            <p className="mb-4 text-neutral-300">
              Ideal for future homes, retirement properties, and long-term family investments.
            </p>

            <p className="text-sm text-neutral-400">
              San Felipe, Cabangan, Botolan, Iba, Amungan, Palauig, Masinloc,
              Candelaria, Sta. Cruz
            </p>
          </div>

        <div className="rounded-3xl border border-lime-400/20 bg-white/5 p-8 backdrop-blur-xl">
          <h3 className="mb-4 text-2xl font-semibold text-lime-400">
            Commercial Lots
          </h3>

          <p className="mb-4 text-neutral-300">
            Ideal for retail businesses, office spaces, commercial developments, and long-term investment growth.
          </p>

          <p className="text-sm text-neutral-400">
            Highway Frontage • Commercial Corridors • Town Centers • Business Districts
          </p>
        </div>

          <div className="rounded-3xl border border-lime-400/20 bg-white/5 p-8 backdrop-blur-xl">
            <h3 className="mb-4 text-2xl font-semibold text-lime-400">
              Beachfront & Riverfront
            </h3>

            <p className="mb-4 text-neutral-300">
              Prime waterfront investment opportunities for resorts,
              vacation homes, and tourism ventures.
            </p>

            <p className="text-sm text-neutral-400">
              San Antonio, Botolan, Iba, Masinloc, Candelaria,
              Sta. Cruz & Pangasinan
            </p>
          </div>

          <div className="rounded-3xl border border-lime-400/20 bg-white/5 p-8 backdrop-blur-xl">
            <h3 className="mb-4 text-2xl font-semibold text-lime-400">
              Farm Lots
            </h3>

            <p className="mb-4 text-neutral-300">
              Agricultural properties suitable for farming,
              eco-living, retirement, and land banking.
            </p>

            <p className="text-sm text-neutral-400">
              Iba, Palauig, Masinloc, Candelaria, Sta. Cruz
            </p>
          </div>

          <div className="rounded-3xl border border-lime-400/20 bg-white/5 p-8 backdrop-blur-xl">
            <h3 className="mb-4 text-2xl font-semibold text-lime-400">
              Investment Properties
            </h3>

            <p className="mb-4 text-neutral-300">
              Ideal for land banking, portfolio diversification, passive income opportunities, and long-term capital appreciation.
            </p>

            <p className="text-sm text-neutral-400">
              Growth Corridors • Emerging Markets • Strategic Locations
            </p>
            </div>

        </div>
      </section>
{/* WHY WORK WITH ME */}
<section className="relative z-10 mx-auto max-w-7xl px-6 py-24">
  <div className="mb-16 text-center">
    <div className="mb-4 text-sm uppercase tracking-[0.2em] text-lime-400">
      Why Work With Me
    </div>

    <h2 className="text-4xl font-bold">
      Your Trusted Property Investment Partner
    </h2>
  </div>

  <div className="grid gap-8 md:grid-cols-3">

    <div className="rounded-3xl border border-lime-400/20 bg-white/5 p-8 backdrop-blur-xl">
      <h3 className="mb-4 text-xl font-semibold text-lime-400">
        Wide Property Selection
      </h3>

      <p className="text-neutral-300">
        Access residential lots, commercial lots, beachfront properties,
        farm lots, installment projects, and city developments
        from multiple developers and property owners.
      </p>
    </div>

    <div className="rounded-3xl border border-lime-400/20 bg-white/5 p-8 backdrop-blur-xl">
      <h3 className="mb-4 text-xl font-semibold text-lime-400">
        Personalized Assistance
      </h3>

      <p className="text-neutral-300">
        Get guidance from property inquiry to site visit,
        documentation, and investment evaluation.
      </p>
    </div>

    <div className="rounded-3xl border border-lime-400/20 bg-white/5 p-8 backdrop-blur-xl">
      <h3 className="mb-4 text-xl font-semibold text-lime-400">
        Practical Investment Focus
      </h3>

      <p className="text-neutral-300">
        Helping buyers identify opportunities that align
        with their budget, goals, and long-term plans.
      </p>
    </div>

  </div>
</section>

{/* INQUIRY SECTION */}
<section
  id="contact"
  className="relative z-10 mx-auto max-w-5xl px-6 py-24"
>
  <div className="rounded-[2rem] border border-lime-400/20 bg-white/5 p-10 backdrop-blur-xl">

    <div className="mb-12 text-center">
      <div className="mb-4 text-sm uppercase tracking-[0.2em] text-lime-400">
        Property Inquiry
      </div>

      <h2 className="mb-4 text-4xl font-bold">
        Let's Discuss Your Property Goals
      </h2>

      <p className="text-neutral-300">
        Looking for residential lot, commercial lots, beachfront property,
        farm lot, installment property, or investment opportunity?
        Send your inquiry and I'll get back to you.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-2">

      <input
          id="fullName"
          type="text"
          placeholder="Full Name"
          className="rounded-2xl border border-lime-400/20 bg-black/40 px-5 py-4 text-white outline-none"
      />

      <input
          id="contactNumber"
          type="text"
          placeholder="Contact Number"
          className="rounded-2xl border border-lime-400/20 bg-black/40 px-5 py-4 text-white outline-none"
      />

      <input
          id="emailAddress"
          type="email"
          placeholder="Email Address"
          className="rounded-2xl border border-lime-400/20 bg-black/40 px-5 py-4 text-white outline-none md:col-span-2"
      />

      <select
          id="propertyCategory"
          className="rounded-2xl border border-lime-400/20 bg-black/40 px-5 py-4 text-white outline-none md:col-span-2"
      >
        <option>Select Property Category</option>

        <option>Residential Lots</option>
        <option>Commercial Lots</option>
        <option>Beachfront Lots</option>
        <option>Riverfront Lots</option>
        <option>Farm Lots</option>
        <option>Mixed-Use Properties</option>
        <option>Investment Properties</option>
        <option>Installment Properties</option>
        <option>Others</option>
      </select>

      <select
  id="preferredLocation"
  className="rounded-2xl border border-lime-400/20 bg-black/40 px-5 py-4 text-white outline-none md:col-span-2"
>
        <option>Select Preferred Location</option>

        <option>Subic</option>
        <option>San Antonio</option>
        <option>San Felipe</option>
        <option>Iba</option>
        <option>Cabangan</option>
        <option>Botolan</option>
        <option>Palauig</option>
        <option>Masinloc</option>
        <option>Candelaria</option>
        <option>Sta. Cruz</option>
        <option>Pangasinan</option>
        <option>Nueva Ecija</option>
        <option>Other Location</option>
      </select>

    <input
        id="otherLocation"
        type="text"
        placeholder="If Other Location, please specify"
        className="rounded-2xl border border-lime-400/20 bg-black/40 px-5 py-4 text-white outline-none md:col-span-2"
     />

      <select
      id="budgetRange"
      className="rounded-2xl border border-lime-400/20 bg-black/40 px-5 py-4 text-white outline-none md:col-span-2"
     >
        <option>Select Budget Range</option>

        <option>Below ₱500,000</option>
        <option>₱500,000 – ₱1 Million</option>
        <option>₱1 Million – ₱3 Million</option>
        <option>₱3 Million – ₱5 Million</option>
        <option>₱5 Million – ₱10 Million</option>
        <option>Above ₱10 Million</option>
      </select>

      <textarea
        id="requirements"
        rows={5}
        placeholder="Tell me about your property requirements..."
        className="rounded-2xl border border-lime-400/20 bg-black/40 px-5 py-4 text-white outline-none md:col-span-2"
      />

    </div>

   <div className="mt-8 flex justify-center">
  <button
    type="button"
    onClick={submitInquiry}
    disabled={loading}
    className="rounded-2xl bg-lime-400 px-10 py-4 font-semibold text-black transition hover:bg-lime-500"
  >
    {loading ? "Submitting..." : "Request Property Information"}
  </button>
</div>

</div>

</section>

{/* FOOTER */}
<footer className="relative z-10 border-t border-lime-400/10 bg-black/40 backdrop-blur-xl">
  <div className="mx-auto max-w-7xl px-6 py-12">

    <div className="text-center">

      <h3 className="mb-2 text-2xl font-bold text-white">
        Steven Cristobal
      </h3>

      <p className="mb-6 text-lime-400">
        Real Estate Professional • Investment Property Consultant
      </p>

      <div className="space-y-0 text-neutral-300">
        <a href="tel:+639176301387" className="block transition hover:text-lime-400">
    📱 0917-630-1387
  </a>
  <a href="mailto:va.stevencristobal@gmail.com" className="block transition hover:text-lime-400">
    📧 va.stevencristobal@gmail.com
  </a>
      </div>

      <div className="mx-auto my-8 h-px w-32 bg-lime-400/20" />

      <p className="text-sm text-neutral-500">
        © 2026 Zambales Lot Listings & Investment Properties
      </p>

      <p className="mt-2 text-xs text-neutral-600">
       Helping buyers and investors discover prime properties across Zambales and key locations in Luzon.
      </p>
     </div>
   </div>
 </footer>
 </main>
 );
 }