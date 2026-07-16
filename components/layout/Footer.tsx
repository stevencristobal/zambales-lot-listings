import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080808]">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">

          {/* LOGO */}

          <Link href="/" className="transition-opacity hover:opacity-90">
            <Image
              src="/images/logo.png"
              alt="Zambales Lot Listings"
              width={95}
              height={95}
              priority
              className="object-contain"
            />
          </Link>

          {/* NAVIGATION */}

          <nav className="flex flex-wrap justify-center gap-8 text-sm font-medium">

            <Link
              href="/residential-lots"
              className="text-gray-400 transition hover:text-lime-400"
            >
              Residential
            </Link>

            <Link
              href="/commercial-lots"
              className="text-gray-400 transition hover:text-lime-400"
            >
              Commercial
            </Link>

            <Link
              href="/farm-lots"
              className="text-gray-400 transition hover:text-lime-400"
            >
              Farm
            </Link>

            <Link
              href="/beachfront-riverfront"
              className="text-gray-400 transition hover:text-lime-400"
            >
              Beachfront
            </Link>

            <Link
              href="/investment-properties"
              className="text-gray-400 transition hover:text-lime-400"
            >
              Investment
            </Link>

          </nav>

        </div>

        {/* Divider */}

        <div className="my-8 h-px bg-white/10" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-gray-500 lg:flex-row">

          <p>
            © 2026 Zambales Lot Listings. All Rights Reserved.
          </p>

          <p>
            Property information is subject to verification and availability.
          </p>

        </div>

      </div>
    </footer>
  );
}