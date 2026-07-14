"use client";

import { useState } from "react";
import SearchBar from "./SearchBar";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Residential", href: "/residential-lots" },
  { name: "Commercial", href: "/commercial-lots" },
  { name: "Farm", href: "/farm-lots" },
  { name: "Beachfront & Riverfront", href: "/beachfront-riverfront" },
  { name: "Investment", href: "/investment-properties" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-lime-400/10 bg-black/80 backdrop-blur-xl">

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* LOGO */}

        <Link href="/" onClick={() => setMenuOpen(false)}>

          <Image
            src="/images/logo.png"
            alt="Zambales Lot Listings Logo"
            width={55}
            height={55}
            priority
            style={{
              width: "auto",
              height: "55px",
            }}
          />

        </Link>


        {/* DESKTOP NAV */}

        <nav className="hidden items-center gap-8 lg:flex">

          {navigation.map((item) => (

            <Link
              key={item.href}
              href={item.href}
              className={
                pathname === item.href
                  ? "text-lime-400"
                  : "text-gray-300 hover:text-lime-400 transition"
              }
            >

              {item.name}

            </Link>

          ))}

        </nav>


        {/* SEARCH */}

        <div className="hidden lg:flex">

          <SearchBar />

        </div>


        {/* MOBILE BUTTON */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white"
        >

          {menuOpen ? <X size={28}/> : <Menu size={28}/>}

        </button>

      </div>


      {/* MOBILE MENU */}

      {menuOpen && (

        <div className="border-t border-lime-400/10 bg-black lg:hidden">

          <div className="space-y-2 p-5">

            {navigation.map((item) => (

              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`block rounded-xl px-4 py-3 transition ${
                  pathname === item.href
                    ? "bg-lime-400 text-black"
                    : "text-gray-300 hover:bg-white/5 hover:text-lime-400"
                }`}
              >

                {item.name}

              </Link>

            ))}

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 block rounded-xl bg-lime-400 px-4 py-3 text-center font-bold text-black"
            >

              Inquire Now

            </Link>

          </div>

        </div>

      )}

    </header>

  );

}