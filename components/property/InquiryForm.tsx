"use client";


import { useState } from "react";

import { Property } from "@/types/property";


type Props = {

  property: Property;

};



export default function InquiryForm({
  property,
}: Props) {


  const [loading, setLoading] =
    useState(false);


  const [sent, setSent] =
    useState(false);




  async function submitInquiry(
    e: React.FormEvent<HTMLFormElement>
  ) {


    e.preventDefault();


    setLoading(true);



    const form =
      new FormData(e.currentTarget);



    const response =
      await fetch(
        "/api/inquiry",
        {

          method: "POST",

          headers: {

            "Content-Type":
              "application/json",

          },


          body:
            JSON.stringify({

              name:
                form.get("name"),

              email:
                form.get("email"),

              phone:
                form.get("phone"),

              message:
                form.get("message"),

              property:
                property.title,

            }),

        }

      );




    setLoading(false);



    if (response.ok) {


      setSent(true);


    }


  }





  if (sent) {


    return (


      <div className="rounded-[30px] border border-lime-400/30 bg-white/5 p-8">


        <h2 className="text-3xl font-black text-lime-400">

          Inquiry Sent!

        </h2>



        <p className="mt-4 text-gray-400">


          Thank you. We received your inquiry about:


        </p>



        <p className="mt-3 font-bold">

          {property.title}

        </p>



      </div>


    );


  }







  return (


    <form

      onSubmit={submitInquiry}

      className="rounded-[30px] border border-lime-400/30 bg-white/5 p-8"

    >



      <h2 className="text-3xl font-black">


        Send Inquiry


      </h2>



      <p className="mt-3 text-gray-400">


        Interested in {property.title}?


      </p>





      <div className="mt-8 space-y-4">



        <input

          name="name"

          required

          placeholder="Your Name"

          className="w-full rounded-xl bg-black p-4"

        />





        <input

          name="phone"

          required

          placeholder="Mobile Number"

          className="w-full rounded-xl bg-black p-4"

        />





        <input

          name="email"

          type="email"

          placeholder="Email Address"

          className="w-full rounded-xl bg-black p-4"

        />





        <textarea

          name="message"

          required

          rows={5}

          defaultValue={
            `Hi, I am interested in ${property.title}. Please send more details.`
          }

          className="w-full rounded-xl bg-black p-4"

        />





        <button

          disabled={loading}

          className="w-full rounded-xl bg-lime-400 py-4 font-bold text-black"

        >


          {
            loading
              ? "Sending..."
              : "Submit Inquiry"
          }


        </button>




      </div>



    </form>


  );


}