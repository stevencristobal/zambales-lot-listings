"use client";

import {
  Phone,
  MessageCircle,
  CalendarDays,
} from "lucide-react";

import { Property } from "@/types/property";

type Props = {
  property: Property;
};

export default function PropertyActions({
  property,
}: Props) {
  const scrollToInquiry = () => {
    document
      .getElementById("inquiry")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  const scrollToSchedule = () => {
    document
      .getElementById("schedule")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  const openMessenger = () => {
    window.open(
      "https://m.me/stevenscristobal",
      "_blank"
    );
  };

  return (
    <div className="rounded-[2rem] border border-lime-400/40 bg-[#080808] p-8">

      <p className="text-gray-400">
        Total Price
      </p>

      <h2 className="mt-3 text-4xl font-black text-lime-400">
        {property.priceDisplay}
      </h2>

      <div className="mt-10 space-y-5">

        <button
          onClick={scrollToInquiry}
          className="flex w-full items-center justify-center gap-3 rounded-2xl bg-lime-400 px-6 py-5 font-bold text-black transition hover:bg-lime-300"
        >
          <Phone size={20} />
          Inquire Now
        </button>

        <button
          onClick={openMessenger}
          className="flex w-full items-center justify-center gap-3 rounded-2xl border border-lime-400 px-6 py-5 font-bold text-lime-400 transition hover:bg-lime-400 hover:text-black"
        >
          <MessageCircle size={20} />
          Messenger
        </button>

        <button
          onClick={scrollToSchedule}
          className="flex w-full items-center justify-center gap-3 rounded-2xl border border-lime-400 px-6 py-5 font-bold text-lime-400 transition hover:bg-lime-400 hover:text-black"
        >
          <CalendarDays size={20} />
          Schedule Viewing
        </button>

      </div>

    </div>
  );
}