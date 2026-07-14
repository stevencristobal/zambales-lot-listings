"use client";


import { useState } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

import { searchProperties } from "@/data/searchProperties";


export default function SearchBar() {


  const router = useRouter();


  const [query, setQuery] =
    useState("");


  const [open, setOpen] =
    useState(false);



  const results =
    searchProperties.filter((property) => {


      const searchableText = `

        ${property.title}

        ${property.address}

        ${property.category}


      `.toLowerCase();


      return searchableText.includes(
        query.toLowerCase()
      );


    });



  function handleSearch() {


    if (!query.trim()) {

      setOpen(true);
      return;

    }


    if (results.length > 0) {


      router.push(

        `/property/${results[0].slug}`

      );


      setOpen(false);


    } else {


      alert(
        "No property found."
      );


    }


  }




  return (


    <div className="relative">


      <button

        onClick={() =>
          setOpen(!open)
        }

        className="rounded-xl border border-lime-400/40 p-4 text-lime-400 transition hover:bg-lime-400 hover:text-black"

      >

        <Search size={20}/>

      </button>



      {open && (

        <div className="absolute right-0 top-16 z-50 w-80 rounded-2xl border border-lime-400/30 bg-black p-4 shadow-xl">


          <input

            autoFocus

            value={query}

            onChange={(e) =>
              setQuery(e.target.value)
            }

            onKeyDown={(e) => {

              if (e.key === "Enter") {

                handleSearch();

              }

            }}


            placeholder="Search property..."

            className="w-full rounded-xl bg-[#111] p-4 text-white outline-none"


          />



          {query && (

            <div className="mt-4 space-y-3">


              {results.map((property) => (


                <button

                  key={property.id}

                  onClick={() => {

                    router.push(

                      `/property/${property.slug}`

                    );


                    setOpen(false);

                  }}

                  className="block w-full rounded-xl p-3 text-left text-sm hover:bg-lime-400 hover:text-black"


                >


                  {property.title}


                </button>


              ))}


            </div>


          )}



        </div>


      )}


    </div>


  );


}