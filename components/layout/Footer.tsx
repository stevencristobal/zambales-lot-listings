import Link from "next/link";
import Image from "next/image";


export default function Footer() {

  return (

    <footer className="border-t border-lime-400/20 bg-black text-white">


      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row">


        {/* LOGO */}

        <Link href="/">

          <Image
            src="/images/logo.png"
            alt="Zambales Lot Listings"
            width={90}
            height={90}
            className="object-contain"
          />

        </Link>



        {/* LINKS */}

        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">


          <Link href="/residential-lots">
            Residential
          </Link>


          <Link href="/commercial-lots">
            Commercial
          </Link>


          <Link href="/farm-lots">
            Farm
          </Link>


          <Link href="/beachfront-riverfront">
            Beachfront
          </Link>


        </div>




        {/* COPYRIGHT */}

        <p className="text-center text-sm text-gray-500">

          © 2026 Zambales Lot Listings

        </p>


      </div>


    </footer>

  );

}