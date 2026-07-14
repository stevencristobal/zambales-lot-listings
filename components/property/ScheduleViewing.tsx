"use client";


import { useState } from "react";
import { Calendar } from "lucide-react";
import { Property } from "@/types/property";


type Props = {

  property: Property;

};



export default function ScheduleViewing({
  property,
}: Props) {


  const [sent, setSent] = useState(false);



  async function submitSchedule(
    e: React.FormEvent<HTMLFormElement>
  ) {

    e.preventDefault();


    const form =
      new FormData(e.currentTarget);



    await fetch("/api/inquiry", {

      method: "POST",

      body: JSON.stringify({

        type: "SITE VIEWING REQUEST",

        property:
          property.title,


        name:
          form.get("name"),


        phone:
          form.get("phone"),


        date:
          form.get("date"),


        time:
          form.get("time"),


        message:
          form.get("message"),


      }),

    });



    setSent(true);


  }




  if (sent) {


    return (

      <div className="rounded-[30px] border border-lime-400/30 bg-white/5 p-8">


        <h2 className="text-2xl font-bold text-lime-400">

          Schedule Sent

        </h2>


        <p className="mt-4 text-gray-400">

          Thank you. We will confirm your site viewing schedule soon.

        </p>


      </div>


    );


  }





  return (


    <form

      onSubmit={submitSchedule}

      className="rounded-[30px] border border-lime-400/30 bg-white/5 p-8"

    >



      <h2 className="flex items-center gap-3 text-3xl font-bold">


        <Calendar className="text-lime-400"/>


        Schedule Viewing


      </h2>




      <p className="mt-3 text-gray-400">

        Schedule a visit for {property.title}

      </p>





      <div className="mt-8 space-y-5">


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

          name="date"

          required

          type="date"

          className="w-full rounded-xl bg-black p-4"

        />




        <input

          name="time"

          required

          type="time"

          className="w-full rounded-xl bg-black p-4"

        />




        <textarea

          name="message"

          rows={4}

          placeholder="Additional message"

          className="w-full rounded-xl bg-black p-4"

        />





        <button

          className="w-full rounded-xl bg-lime-400 py-4 font-bold text-black"

        >


          Submit Viewing Schedule


        </button>




      </div>


    </form>



  );

}