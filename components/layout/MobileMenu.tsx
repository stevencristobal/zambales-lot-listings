"use client";

import Link from "next/link";
import { X } from "lucide-react";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const links = [
  { title: "Home", href: "/" },
  { title: "Residential Lots", href: "/residential-lots" },
  { title: "Commercial Lots", href: "/commercial-lots" },
  { title: "Farm Lots", href: "/farm-lots" },
  { title: "Beachfront & Riverfront", href: "/beachfront-riverfront" },
  { title: "Investment Properties", href: "/investment-properties" },
];

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-lg">

      <div className="flex items-center justify-between border-b border-lime-400/20 px-6 py-5">

        <h2 className="text-2xl font-black text-lime-400">
          Menu
        </h2>

        <button
          onClick={onClose}
          className="rounded-xl border border-lime-400/20 p-3 hover:border-lime-400"
        >
          <X size={22} />
        </button>

      </div>

      <div className="space-y-3 p-6">

        {links.map((link) => (

          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="block rounded-2xl border border-white/10 p-5 text-lg transition hover:border-lime-400 hover:bg-lime-400/10"
          >
            {link.title}
          </Link>

        ))}

        <Link
          href="/contact"
          onClick={onClose}
          className="mt-8 block rounded-2xl bg-lime-400 py-4 text-center text-lg font-bold text-black hover:bg-lime-300"
        >
          Contact Me
        </Link>

      </div>

    </div>
  );
}