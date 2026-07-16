import InquiryForm from "@/components/property/InquiryForm";
import ScheduleViewing from "@/components/property/ScheduleViewing";
import PropertyActions from "@/components/property/PropertyActions";
import PriceCalculator from "@/components/property/PriceCalculator";
import PropertyGallery from "@/components/property/PropertyGallery";

import Image from "next/image";
import Link from "next/link";

import {
  MapPin,
  Ruler,
  Home,
  ArrowLeft,
} from "lucide-react";

import {
  getPropertyBySlug,
} from "@/data/properties";


interface PropertyPageProps {
  params: Promise<{
    slug: string;
  }>;
}


export default async function PropertyPage({
  params,
}: PropertyPageProps) {


  const { slug } =
    await params;


  const property =
    getPropertyBySlug(slug);


  if (!property) {

    return (

      <main className="flex min-h-screen items-center justify-center bg-black text-white">

        <div className="text-center">

          <h1 className="text-4xl font-bold">
            Property Not Found
          </h1>


          <Link
            href="/"
            className="mt-6 inline-block text-lime-400"
          >
            Back Home
          </Link>

        </div>

      </main>

    );

  }


  return (

    <main className="min-h-screen bg-black text-white">


      {/* HERO */}

      <section className="relative h-[600px]">

        <Image
          src={property.mainImage}
          alt={property.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />


        <div className="absolute inset-0 bg-black/60" />


        <div className="absolute bottom-16 left-10">


          <Link
            href="/"
            className="mb-8 flex items-center gap-2 text-lime-400"
          >

            <ArrowLeft size={18}/>
            Back

          </Link>


          <p className="text-lime-400">
            {property.category}
          </p>


          <h1 className="mt-3 text-6xl font-black">

            {property.title}

          </h1>


          <div className="mt-5 flex items-center gap-2 text-gray-300">

            <MapPin size={18}/>
            {property.address}

          </div>


        </div>


      </section>



      {/* BODY */}

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-3">


        {/* LEFT CONTENT */}

        <div className="lg:col-span-2">


          <PropertyGallery
            images={property.images}
            title={property.title}
          />



          <h2 className="mt-12 text-4xl font-bold">

            Property Details

          </h2>


          <p className="mt-6 leading-8 text-gray-300">

            {property.description}

          </p>



          <div className="mt-12 grid gap-6 md:grid-cols-3">


            <div className="rounded-3xl bg-white/5 p-6">

              <Home className="text-lime-400"/>

              <p className="mt-3 text-gray-400">
                Type
              </p>

              <h3 className="font-bold">
                {property.propertyType}
              </h3>

            </div>



            <div className="rounded-3xl bg-white/5 p-6">

              <Ruler className="text-lime-400"/>

              <p className="mt-3 text-gray-400">
                Lot Area
              </p>

              <h3 className="font-bold">

                {
                property.lotAreaMin === property.lotAreaMax

                ? `${property.lotAreaMin} sqm`

                : `${property.lotAreaMin} - ${property.lotAreaMax} sqm`
                }

              </h3>

            </div>



            <div className="rounded-3xl bg-white/5 p-6">

              <p className="text-gray-400">
                Status
              </p>

              <h3 className="font-bold text-lime-400">

                {property.status}

              </h3>

            </div>


          </div>



          {/* PAYMENT */}

          <div className="mt-12">

            <h2 className="text-3xl font-bold">

              Payment Terms

            </h2>


            <p className="mt-5 text-gray-300">

              {property.paymentTerms}

            </p>


          </div>



          {/* CALCULATOR */}

          <div
            id="calculator"
            className="mt-12"
          >

            <PriceCalculator
              property={property}
            />

          </div>



          {/* INQUIRY */}

          <div
            id="inquiry"
            className="mt-12"
          >

            <InquiryForm
              property={property}
            />

          </div>



          {/* SCHEDULE VIEWING */}

          <div
            id="schedule"
            className="mt-12"
          >

            <ScheduleViewing
              property={property}
            />

          </div>


        </div>



        {/* RIGHT SIDEBAR */}

        <aside className="space-y-8">


          <div className="sticky top-28">

            <PropertyActions
              property={property}
            />

          </div>


        </aside>


      </section>


    </main>

  );

}