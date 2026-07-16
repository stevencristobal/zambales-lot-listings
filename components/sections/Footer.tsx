import Image from "next/image";
import Link from "next/link";


export default function Footer() {

  return (

    <footer className="border-t border-lime-400/10 bg-black text-sm text-gray-400">


      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-4">


        {/* BRAND */}

        <div className="flex flex-col items-center text-center">

          <Image
            src="/images/logo.png"
            alt="Zambales Lot Listings"
            width={120}
            height={120}
            className="mb-3 object-contain"
          />


          <p className="leading-4">

            Zambales Lot Listings & Investment Properties provides
            transparent property information and professional assistance
            to buyers and investors.

          </p>

        </div>




        {/* CATEGORIES */}

        <div>

          <h3 className="mb-4 font-bold text-white">

            Property Categories

          </h3>


          <div className="space-y-2 leading-3">

            <Link href="/residential-lots" className="block hover:text-lime-400">
              Residential Lots
            </Link>


            <Link href="/commercial-lots" className="block hover:text-lime-400">
              Commercial Lots
            </Link>


            <Link href="/farm-lots" className="block hover:text-lime-400">
              Farm Lots
            </Link>


            <Link href="/beachfront-riverfront" className="block hover:text-lime-400">
              Beachfront & Riverfront
            </Link>


            <Link href="/investment-properties" className="block hover:text-lime-400">
              Investment Properties
            </Link>

          </div>

        </div>




        {/* CONTACT */}

        <div>

          <h3 className="mb-4 font-bold text-white">

            Contact

          </h3>


          <div className="space-y-2 leading-3">

            <p>
              Steven Cristobal
            </p>

            <p>
              Property Consultant
            </p>

            <p>
              Zambales, Philippines
            </p>


            <a
              href="mailto:inquiry@yourdomain.com"
              className="block hover:text-lime-400"
            >

              inquiry@yourdomain.com

            </a>

          </div>

        </div>




        {/* TRANSPARENCY */}

        <div>

          <h3 className="mb-4 font-bold text-white">

            Professional Transparency

          </h3>


          <p className="leading-6">

            Properties featured are presented with coordination
            from property owners, developers, or authorized real
            estate professionals whenever applicable.

          </p>


          <p className="mt-3 leading-6">

            We aim to provide accurate information and professional
            guidance for informed property decisions.

          </p>

        </div>


      </div>




      {/* COPYRIGHT */}

      <div className="border-t border-lime-400/10 py-4">


        <p className="text-center text-xs text-gray-500">

          © {new Date().getFullYear()} Zambales Lot Listings &
          Investment Properties. All Rights Reserved.

        </p>


      </div>


    </footer>

  );

}