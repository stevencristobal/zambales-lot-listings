"use client";

import { Search } from "lucide-react";

interface PropertyToolbarProps {
  total: number;
}

export default function PropertyToolbar({
  total,
}: PropertyToolbarProps) {
  return (
    <section className="sticky top-0 z-40 border-y border-lime-400/10 bg-black/85 backdrop-blur-xl">

      <div className="mx-auto max-w-7xl px-6 py-6">

        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          {/* SEARCH */}

          <div className="relative flex-1">

            <Search
              size={20}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <input
              placeholder="Search property..."
              className="w-full rounded-2xl border border-white/10 bg-[#111111] py-4 pl-14 pr-5 outline-none transition focus:border-lime-400"
            />

          </div>

          {/* FILTERS */}

          <div className="flex flex-wrap gap-3">

            <select className="rounded-2xl border border-white/10 bg-[#111111] px-5 py-4">

              <option>Municipality</option>

            </select>

            <select className="rounded-2xl border border-white/10 bg-[#111111] px-5 py-4">

              <option>Price</option>

            </select>

            <select className="rounded-2xl border border-white/10 bg-[#111111] px-5 py-4">

              <option>Sort</option>

            </select>

          </div>

                    {/* RIGHT SIDE */}

          <div className="flex flex-wrap items-center gap-4">

            <div className="rounded-full border border-lime-400/20 bg-lime-400/10 px-5 py-2 text-sm font-semibold text-lime-400">

              {total} Properties

            </div>

            <button
              className="rounded-xl border border-white/10 px-4 py-3 transition hover:border-lime-400 hover:text-lime-400"
              title="Grid View"
            >

              ⬜

            </button>

            <button
              className="rounded-xl border border-white/10 px-4 py-3 transition hover:border-lime-400 hover:text-lime-400"
              title="List View"
            >

              ☰

            </button>

          </div>

        </div>

      </div>

    </section>

  );

}