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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#111315]/90 backdrop-blur-xl">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* LOGO */}

        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="transition-opacity duration-300 hover:opacity-90"
        >
          <Image
            src="/images/logo.png"
            alt="Zambales Lot Listings Logo"
            width={60}
            height={60}
            priority
            style={{
              width: "auto",
              height: "60px",
            }}
          />
        </Link>

        {/* DESKTOP NAV */}

        <nav className="hidden items-center gap-10 lg:flex">

          {navigation.map((item) => {

            const active = pathname === item.href;

            return (

              <Link
                key={item.href}
                href={item.href}
                className="
                  group
                  relative
                  py-2
                  font-medium
                "
              >

                <span
                  className={`
                    transition-colors
                    duration-300
                    ${
                      active
                        ? "text-white"
                        : "text-gray-400 group-hover:text-white"
                    }
                  `}
                >
                  {item.name}
                </span>

                <span
                  className={`
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-full
                    origin-left
                    rounded-full
                    bg-lime-400
                    transition-transform
                    duration-300
                    ease-out
                    ${
                      active
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }
                  `}
                />

              </Link>

            );

          })}

        </nav>

        {/* SEARCH */}

        <div className="hidden lg:flex">

          <SearchBar />

        </div>

        {/* MOBILE BUTTON */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-300 transition duration-300 hover:text-lime-400 lg:hidden"
          aria-label="Toggle navigation menu"
        >

          {menuOpen ? <X size={28} /> : <Menu size={28} />}

        </button>

      </div>

      {/* MOBILE MENU */}

      {menuOpen && (

        <div className="border-t border-white/10 bg-[#111315] lg:hidden">

          <div className="space-y-2 p-5">

            {navigation.map((item) => (

              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`block rounded-xl px-4 py-3 transition-all duration-300 ${
                  pathname === item.href
                    ? "bg-lime-400 font-semibold text-black"
                    : "text-gray-300 hover:bg-[#242B28] hover:text-white"
                }`}
              >

                {item.name}

              </Link>

            ))}

            <Link
              href="https://m.me/stevenscristobal"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="
                mt-4
                block
                rounded-xl
                bg-lime-400
                px-4
                py-3
                text-center
                font-bold
                text-black
                transition-all
                duration-300
                hover:bg-lime-300
              "
            >

              Inquire Now

            </Link>

          </div>

        </div>

      )}

    </header>
  );
}