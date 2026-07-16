"use client";

import { useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

interface SearchResult {
  code: string;
  slug: string;
  title: string;
  category: string;
  province: string;
  municipality: string;
  barangay: string;
  address: string;
}

export default function SearchBar() {
  const router = useRouter();

  const wrapperRef = useRef<HTMLDivElement>(null);

  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [results, setResults] = useState<SearchResult[]>([]);

  // --------------------------------------------------
  // CLOSE ON OUTSIDE CLICK
  // --------------------------------------------------

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );

      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  // --------------------------------------------------
  // SEARCH API
  // --------------------------------------------------

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const controller = new AbortController();

    async function search() {
      setLoading(true);

      try {
        const response = await fetch(
          `/api/search?q=${encodeURIComponent(query)}`,
          {
            signal: controller.signal,
          }
        );

        const data = await response.json();

        setResults(data);
      } catch {}

      setLoading(false);
    }

    const timer = setTimeout(search, 250);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [query]);

  // --------------------------------------------------
  // ENTER
  // --------------------------------------------------

  function handleEnter() {
    if (results.length === 0) return;

    router.push(`/property/${results[0].slug}`);

    setOpen(false);

    setQuery("");
  }

  return (
    <div
      className="relative"
      ref={wrapperRef}
    >
      {/* BUTTON */}

      <button
        onClick={() => setOpen(!open)}
        className="
          rounded-xl
          border
          border-white/10
          bg-[#242B28]
          p-3
          text-lime-400
          transition-all
          duration-300
          hover:border-lime-400
          hover:bg-lime-400
          hover:text-black
        "
      >
        <Search size={20} />
      </button>

      {/* PANEL */}

      {open && (
        <div
          className="
            absolute
            right-0
            top-16
            z-50
            w-[420px]
            rounded-3xl
            border
            border-white/10
            bg-[#242B28]
            p-5
            shadow-2xl
          "
        >
          {/* INPUT */}

          <div className="relative">

            <Search
              size={18}
              className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-gray-500
              "
            />

            <input
              autoFocus
              value={query}
              onChange={(e) =>
                setQuery(e.target.value)
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleEnter();
                }
              }}
              placeholder="Search municipality, title, category..."
              className="
                w-full
                rounded-2xl
                border
                border-white/10
                bg-[#111315]
                py-4
                pl-12
                pr-4
                text-white
                placeholder:text-gray-500
                outline-none
                transition
                focus:border-lime-400
              "
            />

          </div>

          {/* RESULTS */}

          <div
            className="
              mt-5
              max-h-96
              overflow-y-auto
              space-y-2
            "
          >
            {loading && (
              <div className="p-6 text-center text-gray-400">
                Searching...
              </div>
            )}

            {!loading &&
              results.map((property) => (
                <button
                  key={property.code}
                  onClick={() => {
                    router.push(
                      `/property/${property.slug}`
                    );

                    setOpen(false);

                    setQuery("");
                  }}
                  className="
                    block
                    w-full
                    rounded-2xl
                    border
                    border-transparent
                    bg-[#111315]
                    p-4
                    text-left
                    transition-all
                    duration-300
                    hover:border-lime-400
                    hover:bg-lime-400
                    hover:text-black
                  "
                >
                  <p className="font-semibold">
                    {property.title}
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    {property.barangay},{" "}
                    {property.municipality},{" "}
                    {property.province}
                  </p>

                  <p className="mt-2 text-xs font-medium">
                    {property.category}
                  </p>
                </button>
              ))}

            {!loading &&
              query &&
              results.length === 0 && (
                <div
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-[#111315]
                    p-6
                    text-center
                  "
                >
                  <p className="font-semibold text-white">
                    No properties found
                  </p>

                  <p className="mt-2 text-sm text-gray-400">
                    Try searching by municipality,
                    barangay, category, property
                    code or title.
                  </p>
                </div>
              )}
          </div>
        </div>
      )}
    </div>
  );
}